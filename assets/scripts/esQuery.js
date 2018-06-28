$( document ).ready(function() {
  'use strict';

  console.log("ES SEARCH PAGE");

  // get first element in path.
  var language = location.pathname.substr(1).split('/')[0];
  var paramKeys = [
    'tags',
    'developmentStatus',
    'keyword',
    'page'
  ];

  // term => id of dom element that contain input html tags.
  var filterKeys = {
    'tags': 'list-tags',
    'developmentStatus': 'list-status'
  };
  var filter = [];

  var getParams = parseSearchParameters(paramKeys);

  $.each(filterKeys, function(k,id) {
    var value = getParams(k);

    // event listeners
    $('#' + id + ' input[type="checkbox"]').on('change', null, {'term': k}, function(event){
      event.preventDefault();
      var filters = [];
      if(event.target.checked) {
        for (var p in filterKeys) {
          var values = getParams(p);
          for (var i = 0; i < values.length; i++) {
            filters.push(p +'['+i+']='+values[i]);
          }

          if(p == k) {
            filters.push(p +'['+(i++)+']='+event.target.getAttribute('value'));
          }
        }
      }
      else {
        for (var p in filterKeys) {
          var values = getParams(p);
          for (var i = 0; i < values.length; i++) {
            if(p == k && values[i] == event.target.getAttribute('value')) {
              continue;
            }

            filters.push(p +'['+i+']='+values[i]);
          }
        }
      }

      // adds page.
      var page = getParams('page');
      if(page.length > 0) {
        filters.push('page='+page.pop());
      }
      
      window.location.search = filters.join('&');
    });

    if(value.length == 0){
      return;
    }

    for (var i = 0; i < value.length; i++) {
      $('#' + id + ' input[value="'+value[i]+'"]').prop('checked', true);
    }
  });

  for (var p in filterKeys) {
    var value = getParams(p);
    for (var i = 0; i < value.length; i++) {
      var term = { 'term': {} };
      term['term'][p] = value[i];
      filter.push(term);
    }
  }

  var throb = Throbber({
    color: 'black',
    padding: 30,
    size: 100,
    fade: 200,
    clockwise: false
  }).appendTo( $('.page-softwares-list .list-item-sorting')[0]).start();

  var openSourceQuery = new esDevelopersItaliaQuery({
    'fields': [],
    'filter': {
      'bool': {
        'must': filter
      }
    },
    'must': [
      {'exists': { 'field': 'it-riuso-codiceIPA' }}
    ],
    'page': getParams('page').pop(),
    'language': 'it',
    'fullTextSearch': ''
  });

  openSourceQuery.setThrobber(throb);
  openSourceQuery.executeESQuery();

  // add event handler on filters

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
      return typeof parameters[k] != 'undefined' ? parameters[k].slice(0) : [];
    }

    return getParams;
  }

});