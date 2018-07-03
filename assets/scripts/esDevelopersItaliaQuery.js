'use strict';

function esDevelopersItaliaQuery(config, params) {
  var defaultConfig = {
    'fields': [],
    'language': 'it',
    // css selector
    'inputSelector': '',
    'totalSelector': '.results-number',
    'pagerSelector': '#paginator',
    'totalText': {
      'it': 'risultati',
      'en': 'results'
    },
    'must': [],
    'must_not': [],
    'should': [],
    'filter': [],
    'index': 'publiccode',
    'type': [],
    'page': 0,
    'size': 12,
    'elasticsearch_connection': {
      'host': 'http://elasticsearch.developers.loc'
    },
    // css selector
    'pageContent': '.list-item-sorting > div',
     
    // filterKeys
    'filterKeys': {
      'tags': 'list-tags',
      'developmentStatus': 'list-status'
    }
  };
  this.config = $.extend(defaultConfig, config);

  this.throbber;

  this.languages = {
    'it': 'ita',
    'en': 'eng'
  };

  this.readMore = {
    'it': 'Leggi di più',
    'en': 'read more'
  };

  this.pageFilterKeys = {};

  this.params = params;

  this.templates = Handlebars.templates;

  this.client = new elasticsearch.Client(this.config['elasticsearch_connection']);
};

esDevelopersItaliaQuery.prototype.popupateFiltersFromUrl = function() {
  for(var p in this.config['filterKeys']) {
    var value = this.params[p];
    var id = this.config['filterKeys'][p];

    if(value.length == 0){
      continue;
    }

    for (var i = 0; i < value.length; i++) {
      $('#' + id + ' input[value="'+value[i]+'"]').prop('checked', true);
    }
  }
};

esDevelopersItaliaQuery.prototype.registerFiltersListeners = function() {
  var object = this;
  for(var p in this.config['filterKeys']) {
    $('#' + this.config['filterKeys'][p] + ' input[type="checkbox"]').on('change', null, {'p': p}, function(event){
      object.clickOnFilterCallback.call(object, event);
    });
  }
};

esDevelopersItaliaQuery.prototype.removeFiltersListeners = function() {
  for(var p in this.config['filterKeys']) {
    $('#' + this.config['filterKeys'][p] + ' input[type="checkbox"]').off('change');
  }
};

esDevelopersItaliaQuery.prototype.clickOnFilterCallback = function(event) {
  
  if (event.target.checked) {
    // There is only one type of query at time.
    this.params[event.data['p']].push(event.target.value);
  }
  else {
    this.params[event.data['p']] = this.params[event.data['p']].filter(function(e, i){
      return e != event.target.value;
    });
  }
  
  // reset url page in params.
  this.params['page'].pop();

  // execute Query.
  this.executeESQuery();
};

esDevelopersItaliaQuery.prototype.getFilterInQuery = function() {
  var filter = [];
  for(var p in this.config['filterKeys']) {
    var value = this.params[p];

    if(value.length == 0){
      continue;
    }

    for (var i = 0; i < value.length; i++) {
      var term = { 'term': {} };
      term['term'][p] = value[i];
      filter.push(term);
    }
  }
  
  return filter;
};

esDevelopersItaliaQuery.prototype.getIndexQuery = function(response){
  return this.config['index'];
};

esDevelopersItaliaQuery.prototype.getDocumentTypeQuery = function(response){
  return Array.isArray(this.config['type']) ? this.config['type'].slice(0) : this.config['type'];
};

esDevelopersItaliaQuery.prototype.getFromQuery = function(response){
  var page = (typeof this.params != 'undefined' && typeof this.params['page'] == 'undefined') ? this.params['page'].slice(0).pop() : 0;
  return (typeof page == 'undefined') ? 0 : page * this.config['size'];
};

esDevelopersItaliaQuery.prototype.getSizeQuery = function(response){
  return this.config['size'];
};

esDevelopersItaliaQuery.prototype.esSearchSuccessCallback = function(response){
  var html = '';

  if ((typeof response.hits != 'undefined') && (typeof response.hits.hits != 'undefined') && Array.isArray(response.hits.hits)) {
    typeof this.throbber != 'undefined' ? this.throbber.stop() : '';
    $(this.config['pageContent']).text('');
    this.renderResultCount(response.hits.total);
    for (var i = 0; i < response.hits.hits.length; i++) {
      switch (response.hits.hits[i]._type) {
        case 'software':
          html = this.renderSoftware(response.hits.hits[i]._source);
          break;
        case 'post':
          html = this.renderPost(response.hits.hits[i]._source);
          break;
      }
      $(this.config['pageContent']).append(html);
    }
    this.renderPager(response.hits.total);
  }
};

esDevelopersItaliaQuery.prototype.esSearchErrorCallback = function(error){
  console.log(error);
};

esDevelopersItaliaQuery.prototype.getQuery = function() {
  var value = this.params['keyword'].pop();
  var filter = this.getFilterInQuery();

  var query = {
    'query': {
      'bool': {
        'must': [
          {
            'bool': {
              'should': [
                {
                  'bool': {
                    'must': [
                      {'term': { '_type': 'post' }},
                      {'term': { 'lang': this.config['language'] }}
                    ]
                  }
                },
                {'term': { '_type': 'software' }}
              ]
            }
          }
        ]
      }
    }
  };

  if (typeof value != 'undefined'){
    value = value.split('+').join(' ');
    query['query']['bool']['must'].push(
      {
        'multi_match': {
          'query': typeof value == 'undefined' ? '' : value,
          'fields': [
            'name',
            'description.' + this.config['language'] + '.localizedName',
            'description.' + this.config['language'] + '.longDescription',
            'title',
            'subtitle',
          ]
        }
      }
    );
  }

  if (filter.length > 0) {
    query['query']['bool']['filter'] = filter;
  }

  return query;
};

esDevelopersItaliaQuery.prototype.executeESQuery = function() {
  $(this.config['pageContent']).text('');
  this.throbber = Throbber({
    color: 'black',
    padding: 30,
    size: 100,
    fade: 200,
    clockwise: false
  }).appendTo( $('.list-item-sorting > div')[0]).start();

  var index = this.getIndexQuery();
  var type = this.getDocumentTypeQuery();
  var query = this.getQuery();
  var object = this;

  var params = {
    'index': index,
    'body': query,
    'from': this.getFromQuery(),
    'size': this.getSizeQuery()
  };

  if(type.length > 0) {
    params['type'] = type;
  }

  this.client.search(params).then(
    function successSearchCallback(response){
      object.esSearchSuccessCallback.call(object, response);
    },
    function successSearchCallback(error){
      object.esSearchErrorCallback.call(object, error);
    }
  );
};

esDevelopersItaliaQuery.prototype.getFiltersUrl = function() {
  var filters = [];
  for(var p in this.config['filterKeys']) {
    var value = this.params[p];

    for (var i = 0; i < value.length; i++) {
      filters.push(p +'['+i+']='+value[i]);
    }
  }

  return filters.join('&');
};

esDevelopersItaliaQuery.prototype.renderResultCount = function(tot) {
  var language = this.config['language'];
  $(this.config['totalSelector']).html(this.templates.tot({
    'tot': tot,
    'text': this.config['totalText'][language]
  }));
};

esDevelopersItaliaQuery.prototype.renderPager = function(tot){
  if (tot < this.config['size']){
    return;
  }

  $(this.config['pagerSelector']).text('');
  var start = 0;
  var url = window.location.pathname;
  var queryString = this.getFiltersUrl();
  var size = this.config['size'];
  var page = this.params['page'].pop();
  var totPages = Math.ceil(tot/size);
  var pages = [];
  if ( typeof page == 'undefined') {
    page = 0;
  }

  page = parseInt(page);
  if (page > 4) {
    start = page - 4;
  }

  for (var i = start; (i < start+9); i++) {
    
    if (i >= totPages) {
      break;
    }
    
    pages.push({
      'title': i+1,
      'classes': (i == page) ? ' active ' : '',
      'current': page == i,
      'url': ((queryString.length == 0) ? '?' : '?'+queryString+'&') + 'page=' + (i),
      'page': i,
    });
  }

  var prev = {
    'title': '<',
    'classes': (page == start) ? ' disabled ' : '',
    'url': ((queryString.length == 0) ? '?' : '?'+queryString+'&') + 'page=' + (page-1),
    'page': (page-1)
  };

  var next = {
    'title': '>',
    'classes': (page == totPages) ? ' disabled ' : '',
    'url': ((queryString.length == 0) ? '?' : '?'+queryString+'&') + 'page=' + (page+1),
    'page': (page+1)
  };

  $(this.config['pagerSelector']).append(this.templates.pager({
    'pages': pages, 
    'prev': prev,
    'next': next
  }));
};

esDevelopersItaliaQuery.prototype.renderSoftware = function(software) {
  var screenshot = 'http://via.placeholder.com/350x150';
  var localisedName = software.name;
  var language = this.config['language'];

  // if (typeof software.description[this.languages[language]].screenshots != 'undefined' && software.description[this.languages[language]].screenshots.length > 0) {
  //   screenshot = software.description[this.languages[language]].screenshots.pop();
  // }

  if (typeof software.description[this.languages[language]].localisedName != 'undefined') {
    localisedName = software.description[this.languages[language]].localisedName;
  }

  var data = {
    'name': software.name.split(' ').join('-'),
    'localisedName': localisedName,
    'language': this.config['language'],
    'screenshot': screenshot,
    'readMore': this.readMore[language]
  };

  return this.templates.software(data);
}

esDevelopersItaliaQuery.prototype.renderPost = function(post) {
  var screenshot = 'http://via.placeholder.com/350x150';
  var localisedName = post.title;
  var language = this.config['language'];

  var data = {
    'name': post.title.split(' ').join('-'),
    'localisedName': localisedName,
    'language': language,
    'screenshot': screenshot,
    'readMore': this.readMore[language]
  };

  return this.templates.software(data);
}

/**
 * Platforms query
 */
function esDevelopersItaliaPlatformsQuery(config, params) {
  esDevelopersItaliaQuery.call(this, config, params);
}

esDevelopersItaliaPlatformsQuery.prototype = Object.create(esDevelopersItaliaQuery.prototype);
esDevelopersItaliaPlatformsQuery.prototype.getQuery = function() {
  var value = this.params['keyword'].pop();
  var filter = this.getFilterInQuery();

  var query = {
    'query': {
      'bool': {
        'must': [],
        'filter': [
          {'term': {'type': 'projects'}},
          {'term': { 'lang': this.config['language'] }}
        ]
      }
    }
  };

  if (typeof value != 'undefined'){
    value = value.split('+').join(' ');
    query['query']['bool']['must'].push(
      {
        'multi_match': {
          'query': value,
          'fields': [
            'title',
            'subtitle',
          ]
        }
      }
    );
  }

  if (filter.length > 0) {
    query['query']['bool']['filter'] = filter;
  }

  return query;
};

/**
 * Open Source query
 */
function esDevelopersItaliaOpenSourceQuery(config, params) {
  esDevelopersItaliaQuery.call(this, config, params);
}

esDevelopersItaliaOpenSourceQuery.prototype = Object.create(esDevelopersItaliaQuery.prototype);
esDevelopersItaliaOpenSourceQuery.prototype.getQuery = function() {
  var value = this.params['keyword'].pop();
  var filter = this.getFilterInQuery();

  var query = {
    'query': {
      'bool': {
        'must': [],
        'must_not': {'exists': { 'field': 'it-riuso-codiceIPA' }}
      }
    }
  };

  if (typeof value != 'undefined'){
    value = value.split('+').join(' ');
    query['query']['bool']['must'].push(
      {
        'multi_match': {
          'query': value,
          'fields': [
            'name',
            'description.' + this.config['language'] + '.localizedName',
            'description.' + this.config['language'] + '.longDescription',
          ]
        }
      }
    );
  }

  if (filter.length > 0) {
    query['query']['bool']['filter'] = filter;
  }

  return query;
};

/**
 * Reuse query
 */
function esDevelopersItaliaReuseQuery(config, params) {
  esDevelopersItaliaQuery.call(this, config, params);
}

esDevelopersItaliaReuseQuery.prototype = Object.create(esDevelopersItaliaQuery.prototype);
esDevelopersItaliaReuseQuery.prototype.getQuery = function() {
  var value = this.params['keyword'].pop();
  var filter = this.getFilterInQuery();

  var query = {
    'query': {
      'bool': {
        'must': [
          {'exists': { 'field': 'it-riuso-codiceIPA' }},
          {'term': { '_type': 'software' }}
        ]
      }
    }
  };

  if (typeof value != 'undefined'){
    value = value.split('+').join(' ');
    query['query']['bool']['must'].push(
      {
        'multi_match': {
          'query': value,
          'fields': [
            'name',
            'description.' + this.config['language'] + '.localizedName',
            'description.' + this.config['language'] + '.longDescription',
          ]
        }
      }
    );
  }

  if (filter.length > 0) {
    query['query']['bool']['filter'] = filter;
  }

  return query;
};
/**
 * PA query
 */
function esDevelopersItaliaPaQuery(config, params) {
  esDevelopersItaliaQuery.call(this, config, params);
}

esDevelopersItaliaPaQuery.prototype = Object.create(esDevelopersItaliaQuery.prototype);
esDevelopersItaliaPaQuery.prototype.getQuery = function() {
  var value = this.params['keyword'].pop();
  var filter = this.getFilterInQuery();

  var query = {
    'query': {
      'bool': {
        'must': [
          { 'term': { 'legal-mainCopyrightOwner': decodeURIComponent(this.params['mainCopyrightOwner'].pop()) }}
        ]
      }
    }
  };

  if (typeof value != 'undefined'){
    value = value.split('+').join(' ');
    query['query']['bool']['must'].push(
      {
        'multi_match': {
          'query': value,
          'fields': [
            'name',
            'description.' + this.config['language'] + '.localizedName',
            'description.' + this.config['language'] + '.longDescription',
          ]
        }
      }
    );
  }

  if (filter.length > 0) {
    query['query']['bool']['filter'] = filter;
  }

  return query;
};

/**
 * Category query.
 */
function esDevelopersItaliaCategoryQuery(config, getParams) {
  esDevelopersItaliaQuery.call(this, config, getParams);
}

esDevelopersItaliaCategoryQuery.prototype = Object.create(esDevelopersItaliaQuery.prototype);

/**
 * AUTOCOMPLETE
 */
function esDevelopersItaliaAutocompleteAllQuery(config, getParams) {
  esDevelopersItaliaQuery.call(this, config, getParams);
  this.searchObjectId;
}

esDevelopersItaliaAutocompleteAllQuery.prototype = Object.create(esDevelopersItaliaQuery.prototype);
esDevelopersItaliaAutocompleteAllQuery.prototype.getQuery = function() {
  var value = $(this.config['inputSelector']).val();
  var query = {
    'query': {
      'bool': {
        'must': [
          {
            'multi_match': {
              'query': value,
              'fields': [
                'name.ngram',
                'description.' + this.config['language'] + '.localizedName.ngram',
                'description.' + this.config['language'] + '.longDescription.ngram',
                'title.ngram',
                'subtitle.ngram',
              ]
            }
          },
          {
            'bool': {
              'should': [
                {
                  'bool': {
                    'must': [
                      {'term': { '_type': 'post' }},
                      {'term': { 'lang': this.config['language'] }}
                    ]
                  }
                },
                {'term': { '_type': 'software' }}
              ]
            }
          }
        ]
      }
    }
  };

  return query;
};

esDevelopersItaliaAutocompleteAllQuery.prototype.executeESQuery = function() {
  var index = this.getIndexQuery();
  var type = this.getDocumentTypeQuery();
  var query = this.getQuery();
  var object = this;

  var params = {
    'index': index,
    'body': query,
    'from': this.getFromQuery(),
    'size': this.getSizeQuery()
  };

  if(type.length > 0) {
    params['type'] = type;
  }

  this.client.search(params).then(
    function successSearchCallback(response){
      object.esSearchSuccessCallback.call(object, response);
    },
    function successSearchCallback(error){
      object.esSearchErrorCallback.call(object, error);
    }
  );
};

esDevelopersItaliaAutocompleteAllQuery.prototype.getSuggestionDataSoftware = function(software) {
  var value = $(this.config['inputSelector']).val();
  var name = software.name;
  var language_alpha_3 = this.languages[this.config['language']];
  if ( typeof software.description[language_alpha_3] != 'undefined' && software.description[language_alpha_3].localisedName != 'undefined') {
    name = software.description[language_alpha_3].localisedName;
  }

  var queryString = [
    'keyword=' + name.split(' ').join('+') 
  ];

  if (typeof this.searchObjectId != 'undefined') {
    queryString.push(
      'type=' + this.searchObjectId
    );
  }

  value = value.split(' ');
  for (let i = 0; i < value.length; i++) {
    name = name.replace(new RegExp(value[i], 'ig'), '<b>$&</b>');
  }

  return {
    'name': name,
    'language': this.config['language'],
    'path': '/search?' + queryString.join('&')
  };
};

esDevelopersItaliaAutocompleteAllQuery.prototype.getSuggestionDataPost = function(post) {
  var value = $(this.config['inputSelector']).val();
  var name = post.title;

  var queryString = [
    'keyword=' + post.title.split(' ').join('+') 
  ];

  if (typeof this.searchObjectId != 'undefined') {
    queryString.push(
      'type=' + this.searchObjectId
    );
  }

  value = value.split(' ');
  for (let i = 0; i < value.length; i++) {
    name = name.replace(new RegExp(value[i], 'ig'), '<b>$&</b>');
  }

  return {
    'name': name,
    'language': this.config['language'],
    'path': '/search?' + queryString.join('&')
  };
};

esDevelopersItaliaAutocompleteAllQuery.prototype.esSearchSuccessCallback = function(response) {
  var $suggestions = $('#suggestions');
  $suggestions.text('');

  var value = $(this.config['inputSelector']).val();
  if (value.length == 0){
    return;
  }

  if ((typeof response.hits != 'undefined') && (typeof response.hits.hits != 'undefined') && Array.isArray(response.hits.hits)) {
    for (var i = 0; i < response.hits.hits.length; i++) {
      var data;
      if(response.hits.hits[i]['_type'] == 'software') {
        data = this.getSuggestionDataSoftware(response.hits.hits[i]['_source']);
      }

      if(response.hits.hits[i]['_type'] == 'post') {
        data = this.getSuggestionDataPost(response.hits.hits[i]['_source']);
      }

      $suggestions.append(this.templates.suggestion(data));
    }

    var queryString = [
      'keyword=' + value.split(' ').join('+')
    ];

    $suggestions.append(this.templates.suggestion({
      'name': this.config['language'] == 'it' ? 'Tutti' : 'All',
      'language': this.config['language'],
      'path': '/search?' + queryString.join('&')
    }));
  }
}

function esDevelopersItaliaAutocompletePlatformsQuery(config, getParams) {
  esDevelopersItaliaQuery.call(this, config, getParams);
  this.searchObjectId = 'platforms';
}

esDevelopersItaliaAutocompletePlatformsQuery.prototype = Object.create(esDevelopersItaliaAutocompleteAllQuery.prototype);
esDevelopersItaliaAutocompletePlatformsQuery.prototype.getQuery = function() {
  var value = $(this.config['inputSelector']).val();
  var query = {
    'query': {
      'bool': {
        'must': [
          {
            'multi_match': {
              'query': value,
              'fields': [
                'title.ngram',
                'subtitle.ngram',
              ]
            }
          }
        ],
        'filter': [
          {'term': {'type': 'projects'}},
          {'term': { 'lang': this.config['language'] }}
        ]
      }
    }
  };

  return query;
};

function esDevelopersItaliaAutocompleteSoftwareOpenSourceQuery(config, getParams) {
  esDevelopersItaliaQuery.call(this, config, getParams);
  this.searchObjectId = 'software_open';
}

esDevelopersItaliaAutocompleteSoftwareOpenSourceQuery.prototype = Object.create(esDevelopersItaliaAutocompleteAllQuery.prototype);
esDevelopersItaliaAutocompleteSoftwareOpenSourceQuery.prototype.getQuery = function() {
  var value = $(this.config['inputSelector']).val();
  var query = {
    'query': {
      'bool': {
        'must': [
          {
            'multi_match': {
              'query': value,
              'fields': [
                'name.ngram',
                'description.' + this.config['language'] + '.localizedName.ngram',
                'description.' + this.config['language'] + '.longDescription.ngram',
              ]
            }
          },
          {'term': { '_type': 'software' }}
        ],
        'must_not': {'exists': { 'field': 'it-riuso-codiceIPA' }}
      }
    }
  };

  return query;
};

function esDevelopersItaliaAutocompleteSoftwareRiusoQuery(config, getParams) {
  esDevelopersItaliaQuery.call(this, config, getParams);
  this.searchObjectId = 'reuse_software';
}

esDevelopersItaliaAutocompleteSoftwareRiusoQuery.prototype = Object.create(esDevelopersItaliaAutocompleteAllQuery.prototype);
esDevelopersItaliaAutocompleteSoftwareRiusoQuery.prototype.getQuery = function() {
  var value = $(this.config['inputSelector']).val();
  var query = {
    'query': {
      'bool': {
        'must': [
          {
            'multi_match': {
              'query': value,
              'fields': [
                'name.ngram',
                'description.' + this.config['language'] + '.localizedName.ngram',
                'description.' + this.config['language'] + '.longDescription.ngram',
              ]
            }
          },
          {'term': { '_type': 'software' }}
        ],
        'must_not': {'exists': { 'field': 'it-riuso-codiceIPA' }}
      }
    }
  };

  return query;
};

function esDevelopersItaliaAutocompleteAPIQuery(config, getParams) {
  esDevelopersItaliaQuery.call(this, config, getParams);
  this.searchObjectId = 'api';
}

esDevelopersItaliaAutocompleteAPIQuery.prototype = Object.create(esDevelopersItaliaAutocompleteAllQuery.prototype);
esDevelopersItaliaAutocompleteAPIQuery.prototype.getQuery = function() {
  var value = $(this.config['inputSelector']).val();
  var query = {
    'query': {
      'bool': {
        'must': [
          {
            'multi_match': {
              'query': value,
              'fields': [
                'title.ngram',
                'subtitle.ngram',
              ]
            }
          }
        ],
        'filter': [
          {'term': {'type': 'api'}},
          {'term': { 'lang': this.config['language'] }}
        ]
      }
    }
  };

  return query;
};

function esDevelopersItaliaAutocompletePAQuery(config, getParams) {
  esDevelopersItaliaQuery.call(this, config, getParams);
  this.searchObjectId = 'pa';
}

esDevelopersItaliaAutocompletePAQuery.prototype = Object.create(esDevelopersItaliaAutocompleteAllQuery.prototype);
esDevelopersItaliaAutocompletePAQuery.prototype.getQuery = function() {
  var value = $(this.config['inputSelector']).val();
  var query = {
    'suggest': {
      'search_string': {
        'prefix': value,
        'completion': {
          'field' :  this.config['language'] + '.' + 'suggest-agencies',
          'size': 10
        }
      }
    }
  };

  return query;
};

esDevelopersItaliaAutocompletePAQuery.prototype.esSearchSuccessCallback = function(response) {
  var $suggestions = $('#suggestions');
  $suggestions.text('');

  var value = $(this.config['inputSelector']).val();
  if (value.length == 0){
    return;
  }

  if ((typeof response.suggest != 'undefined') && (typeof response.suggest.search_string != 'undefined') && Array.isArray(response.suggest.search_string)) {
    var options, search_string = response.suggest.search_string.slice(0);
    options = search_string.pop(); options = options.options;
    for (var i = 0; i < options.length; i++) {

      var data;
      if(options[i]['_type'] == 'software') {
        data = this.getSuggestionDataSoftware(options[i]['_source']);
      }

      if(options[i]['_type'] == 'post') {
        data = this.getSuggestionDataPost(options[i]['_source']);
      }

      if(options[i]['_type'] == 'suggestion') {
        data = this.getSuggestionSuggestionPost(options[i]['_source']);
      }

      $suggestions.append(this.templates.suggestion(data));
    }
    $suggestions.append(this.templates.suggestion({
      'name': this.config['language'] == 'it' ? 'Tutti' : 'All',
      'language': this.config['language'],
      'path': '/'
    }));
  }
};

esDevelopersItaliaAutocompletePAQuery.prototype.getSuggestionSuggestionPost = function(suggestion) {
  var value = $(this.config['inputSelector']).val();
  var name = suggestion.agency.title;
  
  value = value.split(' ');
  for (let i = 0; i < value.length; i++) {
    name = name.replace(new RegExp(value[i], 'ig'), '<b>$&</b>');
  }

  return {
    'name': name,
    'language': this.config['language'],
    'path': '/search'
  };
}
