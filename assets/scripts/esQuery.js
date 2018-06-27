$( document ).ready(function() {
  'use strict';

  // get first element in path.
  var language = location.pathname.substr(1).split('/')[0];
  var keys = {
    'tags': 'list-tags',
    'status': 'list-status'
  };

  var getParams = parseSearchParameters(Object.keys(keys));

  $.each(keys, function(k,id) {
    var value = getParams(k);

    if(value.length == 0){
      return;
    }

    for (var i = 0; i < value.length; i++) {
      $('#' + id + ' input[value="'+value[i]+'"]').prop('checked', true);
    }
  });

  // var throb = Throbber({
  //   color: 'black',
  //   padding: 30,
  //   size: 100,
  //   fade: 200,
  //   clockwise: false
  // }).appendTo( $('.page-softwares-list .list-item-sorting')[0]).start();

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