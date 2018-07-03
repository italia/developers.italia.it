$( document ).ready(function() {
  'use strict';

  // get first element in path.
  var language = location.pathname.substr(1).split('/')[0];
  var getParams = parseSearchParameters(paramKeys);
  // var pageId = 'open-source';
  var pageId = $('#searchPageId').attr('data');

  // listener for modal window search.
  $('#search-form').on('click', function(){
    var $inputText = $('#searchModal .autocomplete input');
    
    $inputText.on('input', executeAutoCompleteESQuery);
    $('#searchModal form a.btn-outline-primary').on('click', function(event){
      event.preventDefault();
      $('#searchModal .autocomplete input').val(''); $('#suggestions').text('');
      if($(event.target).hasClass('active')) {
        return;
      }

      $('#searchModal form a.btn-outline-primary.active').removeClass('active')
      $(event.target).addClass('active');
    });

  });

  if(typeof pageId != 'undefined') {
    // ############# SEARCH ####################
    var params = getParams();
    var searchObject = {};
    var searchObjectId = pageId;
    if (pageId == 'search') {
      searchObjectId = (params['type'].length == 0) ? 'all' : params['type'].pop();
    }

    // populate filters in page.
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

  function generatePageSearchQueryString(filterKeys, getParams, direction) {
    var filters = [];
    for (var p in filterKeys) {
      var values = getParams(p);
      for (var i = 0; i < values.length; i++) {
        filters.push(p +'['+i+']='+values[i]);
      }

      if(p == 'page') {
        if(direction == 'next') {
          filter.push('page='+(page.pop()+1));
        }

        if(direction == 'prev') {
          filter.push('page='+(page.pop()-1));
        }
      }
    }

    return filters.join('&');;
  }

  function getSearchObject(searchObjectId, pagesQueryconfig, params) {
    var searchObject;
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
        searchObject = new esDevelopersItaliaAutocompleteAPIQuery(pagesQueryconfig[searchObjectId], params);
        break;

      case 'category':
        searchObject = new esDevelopersItaliaCategoryQuery(pagesQueryconfig[searchObjectId], params);
        break;

      case 'pa':
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
    // var autocompleteQueryconfig = event.data['autocompleteQueryconfig']

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
