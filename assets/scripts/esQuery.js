$( document ).ready(function() {
  'use strict';

  // to guess language, get first element in path.
  var language = location.pathname.substr(1).split('/')[0];
  var languages = ['it', 'en'];
  // if page does not have a language, take italian as default.
  if (languages.indexOf(language) == -1) {
    language = 'it';
  }
  var getParams = parseSearchParameters(paramKeys);
  var pageId = $('#searchPageId').attr('data');

  // listener for modal window search.
  $('#search-form').on('click', function(){
    var $inputText = $('#searchModal .autocomplete input');
    
    $inputText.on('input', executeAutoCompleteESQuery);
    $('#searchModal form a.btn-outline-primary').on('click', function(event){
      event.preventDefault();
      $inputText.val(''); $('#suggestions').text('');
      if($(event.target).hasClass('active')) {
        return;
      }

      $('#searchModal form a.btn-outline-primary.active').removeClass('active')
      $(event.target).addClass('active');
    });

  });

  // listener on search form submit.
  $('#searchModal form').on('submit', function(event){
    // prevent form submit.
    event.preventDefault();

    // redirect to search page.
    var path = '/' + language + '/search';
    var queryString = "keyword=" + $('#searchModal .autocomplete input').val().trim().split(' ').join('+');
    window.location = path + '?' + queryString;
  });

  if(typeof pageId != 'undefined') {
    // ############# SEARCH ####################
    var params = getParams();
    var searchObject = {};
    var searchObjectId = pageId;
    if (pageId == 'search') {
      searchObjectId = (params['type'].length == 0) ? 'all' : params['type'].slice(0).pop();
    }

    // populate query type filter.
    $.each({'type': 'list-type'}, function(k,id) {
      var value = getParams(k);

      if(value.length == 0){
        return;
      }

      for (var i = 0; i < value.length; i++) {
        $('#' + id + ' input[value="'+value[i]+'"]').prop('checked', true);
      }
    });

    // on change query type.
    $('#list-type input[type="checkbox"]').on('change', function(event){
      // select query type.
      if (event.target.checked) {
        $('#list-type input[type="checkbox"]:checked').each(function(i, e){
          if (event.target.value != e.value) {
            $(e).prop('checked', false);
          }
        });
        searchObjectId = event.target.value;
      }
      else {
        searchObjectId = 'all';
      }

      if (params['type'].length == 0) {
        params['type'].push(searchObjectId);
      }
      else {
        params['type'].pop();
        params['type'].push(searchObjectId);
      }

      // reset pager.
      params['page'].pop();

      // create query object if needed.
      if (typeof searchObject[searchObjectId] == 'undefined') {
        searchObject[searchObjectId] = getSearchObject(searchObjectId, pagesQueryconfig, params);
      }

      searchObject[searchObjectId].removeFiltersListeners();
      searchObject[searchObjectId].registerFiltersListeners();
      searchObject[searchObjectId].executeESQuery();
    });

    if (typeof searchObject[searchObjectId] == 'undefined') {
      searchObject[searchObjectId] = getSearchObject(searchObjectId, pagesQueryconfig, params);
    }

    searchObject[searchObjectId].popupateFiltersFromUrl();
    searchObject[searchObjectId].registerFiltersListeners();
    searchObject[searchObjectId].executeESQuery();
  }

  /**
   * Parse location search to find parameters in keys array and returns a function closure.
   * 
   * @param array keys
   */
  function parseSearchParameters(keys) {
    var parameters = {}, params;
    params = location.search.substr(1).split('&').sort();

    $.each(keys, function(i,k){
      var values = [];
      for (var i = 0; i < params.length; i++) {
        if (k == params[i].substr(0, k.length)) {
          values.push(params[i].split('=').pop());
        }
      }
      parameters[k] = values;
    });

    /**
     * Get value for k location search parameter.
     * 
     * @param k 
     */
    function getParams(k) {

      // returns all parameters.
      if (typeof k == 'undefined') {
        return JSON.parse(JSON.stringify(parameters));
      }

      return typeof parameters[k] != 'undefined' ? parameters[k].slice(0) : [];
    }

    return getParams;
  }

  function getSearchObject(searchObjectId, pagesQueryconfig, params) {
    var searchObject;
    pagesQueryconfig[searchObjectId]['language'] = language;
    switch (searchObjectId) {
      case 'all':
        searchObject = new esDevelopersItaliaQuery(pagesQueryconfig[searchObjectId], params);
        break;
  
      case 'platforms':
        searchObject = new esDevelopersItaliaPlatformsQuery(pagesQueryconfig[searchObjectId], params);
        break;

      case 'software_open':
        searchObject = new esDevelopersItaliaOpenSourceQuery(pagesQueryconfig[searchObjectId], params);                
        break;

      case 'reuse_software':
        searchObject = new esDevelopersItaliaReuseQuery(pagesQueryconfig[searchObjectId], params);        
        break;

      case 'api':
        searchObject = new esDevelopersItaliaApiQuery(pagesQueryconfig[searchObjectId], params);
        break;

      case 'category':
        searchObject = new esDevelopersItaliaCategoryQuery(pagesQueryconfig[searchObjectId], params);
        break;

      case 'administrations':
        searchObject = new esDevelopersItaliaPaQuery(pagesQueryconfig[searchObjectId], params);
        break;

      default:
        break;
    }

    return searchObject;
  }

  function executeAutoCompleteESQuery(event) {
    var queryType = $('#searchModal form a.btn-outline-primary.active').attr('data');
    var esAutocompleteQuery;
    if (event.target.value.length > 0) {
      $('#suggestions').removeClass('d-none');
    }
    else {
      $('#suggestions').addClass('d-none');
    }

    switch(queryType) {
      case 'all':
        autocompleteQueryconfig['all']['language'] = language;
        esAutocompleteQuery = new esDevelopersItaliaAutocompleteAllQuery(JSON.parse(JSON.stringify(autocompleteQueryconfig['all'])));
        break;
      case 'platforms':
        autocompleteQueryconfig['platforms']['language'] = language;
        esAutocompleteQuery = new esDevelopersItaliaAutocompletePlatformsQuery(JSON.parse(JSON.stringify(autocompleteQueryconfig['platforms'])));
        break;
      case 'software_open':
        autocompleteQueryconfig['software_open']['language'] = language;
        esAutocompleteQuery = new esDevelopersItaliaAutocompleteSoftwareOpenSourceQuery(JSON.parse(JSON.stringify(autocompleteQueryconfig['software_open'])));
        break;
      case 'reuse_software':
        autocompleteQueryconfig['reuse_software']['language'] = language;
        esAutocompleteQuery = new esDevelopersItaliaAutocompleteSoftwareRiusoQuery(JSON.parse(JSON.stringify(autocompleteQueryconfig['reuse_software'])));
        break;
      case 'api':
        autocompleteQueryconfig['api']['language'] = language;
        esAutocompleteQuery = new esDevelopersItaliaAutocompleteAPIQuery(JSON.parse(JSON.stringify(autocompleteQueryconfig['api'])));
        break;
      case 'administrations':
        autocompleteQueryconfig['administrations']['language'] = language;
        esAutocompleteQuery = new esDevelopersItaliaAutocompletePAQuery(JSON.parse(JSON.stringify(autocompleteQueryconfig['administrations'])));
        break;
    }

    esAutocompleteQuery.executeESQuery();
  }

});

// encode(decode) html text into html entity
var decodeHtmlEntity = function(str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
};
