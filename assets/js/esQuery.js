import $ from 'jquery';

import {
  esDevelopersItaliaAutocompleteAllQuery,
  esDevelopersItaliaAutocompletePlatformsQuery,
  esDevelopersItaliaAutocompleteSoftwareOpenSourceQuery,
  esDevelopersItaliaAutocompleteSoftwareRiusoQuery,
  esDevelopersItaliaAutocompleteAPIQuery,
  esDevelopersItaliaAutocompletePAQuery,
  esDevelopersItaliaManager,
} from './esDevelopersItaliaQuery';

import { autocompleteQueryconfig, paramKeys, pagesQueryconfig } from './esQuery.config';

$(document).ready(function () {
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
  $('#search-form').on('click', function(e){
    e.preventDefault();
    var $inputText = $('#searchModal .autocomplete input');
    // time for the input to show itself before triggering the autofocus      
    setTimeout(() => {
      $inputText.trigger('focus');      
    }, 500);

    $inputText.on('input', executeAutoCompleteESQuery);
    $('#searchModal form a.btn-filter').on('click', function(event){
      event.preventDefault();
      $inputText.val(''); $('#suggestions').text('');
      if($(event.target).hasClass('active')) {
        return;
      }

      $('#searchModal form a.btn-filter.active').removeClass('active');
      $(event.target).addClass('active');

    });

  });

  // When close modal window search, clean input text.
  $('#searchModal .modal-header button').on('click', function(event){
    $('#suggestions').text('').addClass('d-none');
    $('#search-buttons').removeClass('d-none');
  });

  // listener on search form submit.
  $('#searchModal form').on('submit', function(event){
    // prevent form submit.
    event.preventDefault();

    // redirect to search page.
    var path = '/' + language + '/search';
    var queryType = "type=" + $('#searchModal form a.btn-filter.active').attr('data');
    var queryString = "keyword=" + $('#searchModal .autocomplete input').val().trim().split(' ').join('+');
    window.location = path + '?' + queryString + '&' + queryType;
  });

  if(typeof pageId != 'undefined') {
    // ############# SEARCH ####################
    var params = getParams();
    var queryType = pageId;
    if (pageId == 'search') {
      queryType = (params['type'].length == 0) ? 'all' : params['type'].slice(0).pop();
    }

    var queryManager = new esDevelopersItaliaManager(queryType, {}, pagesQueryconfig, params);
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

  function executeAutoCompleteESQuery(event) {
    var queryType = $('#searchModal form a.btn-filter.active').attr('data');
    var esAutocompleteQuery;
    if (event.target.value.length > 0) {
      $('#suggestions').removeClass('d-none');
      $('#search-buttons').addClass('d-none');
    }
    else {
      $('#search-buttons').removeClass('d-none');
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

export { decodeHtmlEntity };
