'use strict';

function esDevelopersItaliaManager(queryType, config, objectConfig, params) {
  var defaultConfig = {
    'inputSelector': '',
    'totalSelector': '.results-number',
    'pagerSelector': '#paginator',
    'sortSelector': '.sortingBy form select',
    'sortMobileSelector': '#sortBy .modal-body a',
    'sortMobileModal': '#sortBy',
    'sortMobileTitle': {
      'it': {
        'az': 'A/Z',
        'za': 'Z/A',
        'popularity': 'Popolarità',
        'emerging': 'Emergenti',
      },
      'en': {
        'az': 'A/Z',
        'za': 'Z/A',
        'popularity': 'Popularity',
        'emerging': 'Emerging',
      }
    },
    // css selector
    'pageContent': '.list-item-sorting > div',
     
    // filterKeys
    'filterKeys': {
      'tags': 'list-tags',
      'developmentStatus': 'list-status'
    },
    'filterKeysMobileSelectors': {
      'tags': 'pills-arguments',
      'developmentStatus': 'pills-development_status'
    },
  };
  this.config = $.extend(defaultConfig, config);

  this.objectConfig = $.extend({}, objectConfig);

  this.queryObjects = {};

  this.queryType = [queryType];

  this.params = params;

  this.language = 'it';

  this.setCurrentLanguage();
  this.popupateFiltersFromUrl();
  this.registerFiltersListeners();
  this.executeCurrentQuery();
}

esDevelopersItaliaManager.prototype.executeCurrentQuery = function(){
  var object = this;
  this.updateSearchUrl();
  
  this.currentQueryObject().executeESQuery().then(
    function successSearchCallback(response){
      object.currentQueryObject().esSearchSuccessCallback.call(object.currentQueryObject(), response);
      $(object.config['pagerSelector'] + ' ul li a').on('click', function(event) {
        object.pagerCallback.call(object, event);
      });
    },
    function errorSearchCallback(error){
      object.currentQueryObject().esSearchErrorCallback.call(object.currentQueryObject(), error);
    }
  );
};

esDevelopersItaliaManager.prototype.pagerCallback = function(event) {
  event.preventDefault();
  
  var page = event.delegateTarget.getAttribute('page');

  // Set correct page value.
  this.params['page'].pop();
  this.params['page'].push(page);

  // Execute Current query.
  this.executeCurrentQuery();
}

esDevelopersItaliaManager.prototype.setCurrentLanguage = function() {
  // to guess language, get first element in path.
  var language = location.pathname.substr(1).split('/')[0];
  var languages = ['it', 'en'];
  // if page does not have a language, take italian as default.
  if (languages.indexOf(language) == -1) {
    language = 'it';
  }

  this.language = language;
};

esDevelopersItaliaManager.prototype.popupateFiltersFromUrl = function() {
  var object = this;
  
  // Populate query type filter.
  var o = {'type': 'list-type'};
  for(var p in o) {
    var value = this.params[p];
    var id = o[p];

    if(value.length == 0){
      continue;
    }

    for (var i = 0; i < value.length; i++) {
      $('#' + id + ' input[value="'+value[i]+'"]').prop('checked', true);
      // type query filter for mobile.
      $('#pills-types input[value="'+value[i]+'"]').prop('checked', true);
    }
  }
  
  // Query filters.
  for(var p in this.config['filterKeys']) {
    var value = this.params[p];
    var id = this.config['filterKeys'][p];
    var idm = this.config['filterKeysMobileSelectors'][p];

    if(value.length == 0){
      continue;
    }

    for (var i = 0; i < value.length; i++) {
      $('#' + id + ' input[value="'+value[i]+'"]').prop('checked', true);
      $('#' + idm + ' input[value="'+value[i]+'"]').prop('checked', true);
    }
  }

  // Query Sort.
  var sort = this.params['sort'].slice().pop();
  if (typeof sort == 'undefined') {
    sort = 'az';
  }
  $(this.config['sortSelector']).val(sort);
  $(this.config['sortMobileSelector']).each(function(i, e){
    if ($(e).attr('sort') == sort) {
      $(e).addClass('active');
      $(e).html(object.config['sortMobileTitle'][object.language][$(e).attr('sort')] + ' <i class="it-check"></i>');
    }
    else {
      $(e).removeClass('active');
      $(e).html(object.config['sortMobileTitle'][object.language][$(e).attr('sort')]);
    }
  });
};

esDevelopersItaliaManager.prototype.updateSearchUrl = function() {
  var queryString = [];

  // first adds search filters.
  for(var p in this.config['filterKeys']) {
    var value = this.params[p];

    for (var i = 0; i < value.length; i++) {
      queryString.push(p +'['+i+']='+value[i]);
    }
  }

  // adds it-riuso-codiceIPA filter if present.
  var codiceIPA = this.params['it-riuso-codiceIPA'].slice(0).pop();
  if (typeof codiceIPA != 'undefined') {
    queryString.push('it-riuso-codiceIPA=' + codiceIPA);
  }

  // query type filter.
  var queryType = this.params['type'].slice(0).pop();
  if (typeof queryType == 'string' && queryType != 'all') {
    queryString.push('type=' + queryType);
  }

  // full text query keyword.
  var keyword = this.params['keyword'].slice(0).pop();
  if (typeof keyword != 'undefined') {
    queryString.push('keyword=' + keyword.split(' ').join('+'));
  }

  // then adds page.
  var page = this.params['page'].slice(0).pop();
  if (typeof page == 'undefined') {
    page = 0;
  }
  queryString.push('page='+page);

  // last adds sort.
  queryString.push('sort='+$(this.config['sortSelector']).val());

  // update browser history.
  history.pushState({}, '', window.location.pathname + '?' + queryString.join('&'));
};

esDevelopersItaliaManager.prototype.registerFiltersListeners = function() {
  var object = this;
  
  $('#list-type input[type="checkbox"]').on('change', function(event){
    if (event.target.checked) {
      $('#list-type input[type="checkbox"]:checked').each(function(i, e){
        if (event.target.value != e.value) {
          $(e).prop('checked', false);
        }
      });

      // update mobile selection
      var $mobile = $('#pills-types input[type="checkbox"]');
      for (var i = 0; i < $mobile.length; i++) {
        if (event.target.value != $mobile[i].value) {
          $($mobile[i]).prop('checked', false);
        }
        else {
          $($mobile[i]).prop('checked', true);          
        }
      }

      object.queryType = [event.target.value];
    }
    else {
      // update mobile selection
      var $mobile = $('#pills-types input[type="checkbox"]');
      for (var i = 0; i < $mobile.length; i++) {
        $($mobile[i]).prop('checked', false);
      }
      object.queryType = ['all'];
    }

    // params contains actual filters value for build the elasticsearch query.
    if (object.params['type'].length == 0) {
      object.params['type'].push(object.queryType.slice(0).pop());
    }
    else {
      object.params['type'].pop();
      object.params['type'].push(object.queryType.slice(0).pop());
    }

    // Execute Current query.
    object.executeCurrentQuery();
  });
  
  // TypeQuery Mobile only one selected.
  $('#pills-types input[type="checkbox"]').on('change', function(event){
    if (event.target.checked) {
      $('#pills-types input[type="checkbox"]:checked').each(function(i, e){
        if (event.target.value != e.value) {
          $(e).prop('checked', false);
        }
      });
    }
  });

  for(var p in this.config['filterKeys']) {
    $('#' + this.config['filterKeys'][p] + ' input[type="checkbox"]').on('change', null, {'p': p}, function(event){
      object.clickOnFilterCallback.call(object, event);
    });
  }

  // when change sort order, execute query.
  $(this.config['sortSelector']).on('change', function(event){

    // update mobile sort selection.
    var $sortMobileActive = $(object.config['sortMobileSelector'] + '.active');
    $sortMobileActive.html(
      object.config['sortMobileTitle'][object.language][$sortMobileActive.attr('sort')]
    );
    $sortMobileActive.removeClass('active');
    $(object.config['sortMobileSelector']).each(function(i, e){
      if ($(e).attr('sort') == event.target.value) {
        $(e).addClass('active');
        $(e).html(object.config['sortMobileTitle'][object.language][$(e).attr('sort')] + ' <i class="it-check"></i>');
      }
    });

    // Execute Current query.
    object.executeCurrentQuery();
  });

  

  $('#filters .modal-dialog .modal-header a.save').on('click', function(event){

    for(var p in object.config['filterKeys']) {
      var id = object.config['filterKeys'][p];
      var idm = object.config['filterKeysMobileSelectors'][p];

      var $inputMobile = $('#' + idm + ' input[type="checkbox"]');
      for (var i = 0; i < $inputMobile.length; i++) {
        // if new selected.
        if ($inputMobile[i].checked && (object.params[p].indexOf($inputMobile[i].value) == -1)) {
          object.params[p].push($inputMobile[i].value);
          // update desktop filter.
          $('#' + object.config['filterKeys'][p] + ' input[value="'+$inputMobile[i].value+'"]').prop('checked', true);
        }

        // if removed.
        var index = object.params[p].indexOf($inputMobile[i].value);
        if (!$inputMobile[i].checked && (index != -1)) {
          object.params[p].splice(index, 1);
          // update desktop filter.
          $('#' + object.config['filterKeys'][p] + ' input[value="'+$inputMobile[i].value+'"]').prop('checked', false);
        }
      }
    }

    // reset queryType filter in desktop.
    $('#list-type input[type="checkbox"]').prop('checked', false);
    var $mobileQueryTypes = $('#pills-types input[type="checkbox"]:checked');
    var queryType = 'all';
    if ($mobileQueryTypes.length > 0) {
      queryType = $mobileQueryTypes.val();
      // sync desktop filter.
      $('#list-type input[value="'+queryType+'"]').prop('checked', true);
    }

    if (object.params['type'].length > 0) {
      object.params['type'].pop();
    }

    object.params['type'].push(queryType);
    object.queryType = [queryType];

    // Execute Current query.
    object.executeCurrentQuery();
  });

  $(this.config['sortMobileSelector']).on('click', function(event){
    event.preventDefault();
    
    // debugger;

    if (!$(event.target).hasClass('active')) {
      var $sortMobileActive = $(object.config['sortMobileSelector'] + '.active');
      $sortMobileActive.html(
        object.config['sortMobileTitle'][object.language][$sortMobileActive.attr('sort')]
      );
      $sortMobileActive.removeClass('active');
      
      $(event.target).html(object.config['sortMobileTitle'][object.language][$(event.target).attr('sort')] + ' <i class="it-check"></i>');
      $(event.target).addClass('active');
    }
    var sort = $(object.config['sortMobileSelector'] + '.active').attr('sort');
    $(object.config['sortSelector']).val(sort);
    // Execute Current query.
    object.executeCurrentQuery();
    $(object.config['sortMobileModal']).modal('hide');
  });
};

esDevelopersItaliaManager.prototype.removeFiltersListeners = function() {
  for(var p in this.config['filterKeys']) {
    $('#' + this.config['filterKeys'][p] + ' input[type="checkbox"]').off('change');
  }

  $(this.config['sortSelector']).off('change');
};

esDevelopersItaliaManager.prototype.clickOnFilterCallback = function(event) {
  
  /**
   * NOTE: query type filter in handled on esQuery.js file (row 65).
   */

  if (event.target.checked) {
    this.params[event.data['p']].push(event.target.value);
    $('#' + this.config['filterKeysMobileSelectors'][event.data['p']] + ' input[value="'+event.target.value+'"]').prop('checked', true);
  }
  else {
    this.params[event.data['p']] = this.params[event.data['p']].filter(function(e, i){
      return e != event.target.value;
    });
    $('#' + this.config['filterKeysMobileSelectors'][event.data['p']] + ' input[value="'+event.target.value+'"]').prop('checked', false);
  }
  
  // reset url page in params.
  this.params['page'].pop();

  // Execute Current query.
  this.executeCurrentQuery();
};

esDevelopersItaliaManager.prototype.currentQueryObject = function() {
  var queryType = this.queryType.slice(0).pop();
  if (typeof this.queryObjects[queryType] == 'undefined') {
    this.queryObjects[queryType] = this.createQueryObject(queryType);
  }

  return this.queryObjects[this.queryType];
};

esDevelopersItaliaManager.prototype.createQueryObject = function(queryType) {
  var queryObject;
  var queryconfig = $.extend({}, this.objectConfig[queryType]);
  
  // adds current language.
  queryconfig['language'] = this.language;

    switch (queryType) {
      case 'all':
        queryObject = new esDevelopersItaliaQuery(queryconfig, this.params);
        break;
  
      case 'platforms':
        queryObject = new esDevelopersItaliaPlatformsQuery(queryconfig, this.params);
        break;

      case 'software_open':
        queryObject = new esDevelopersItaliaOpenSourceQuery(queryconfig, this.params);                
        break;

      case 'reuse_software':
        queryObject = new esDevelopersItaliaReuseQuery(queryconfig, this.params);        
        break;

      case 'api':
        queryObject = new esDevelopersItaliaApiQuery(queryconfig, this.params);
        break;

      case 'category':
        queryObject = new esDevelopersItaliaCategoryQuery(queryconfig, this.params);
        break;

      case 'administrations':
        queryObject = new esDevelopersItaliaPaQuery(queryconfig, this.params);
        break;

      default:
        break;
    }

    return queryObject;
};

/**
 * QUERY OBJECTS
 */
function esDevelopersItaliaQuery(config, params) {
  var defaultConfig = {
    'fields': [],
    'language': 'it',
    // css selector
    'inputSelector': '',
    'totalSelector': '.results-number',
    'pagerSelector': '#paginator',
    'sortSelector': '.sortingBy form select',
    'totalText': {
      'it': 'risultati',
      'en': 'results'
    },
    'index': 'publiccode',
    'type': [],
    'page': 0,
    'size': 12,
    'elasticsearch_connection': {
      'host': 'http://elasticsearch.developers.loc'
    },
    'queryErrorMessage': {
      'it': "C'è stato un problema nel recuperare i rsultati della ricerca, riprova più tardi",
      'en': 'There was a problem finding the search results, please try again later',
    },
    'intro': {
      'it': 'Hai cercato',
      'en': 'You have searched for'
    },
    'autocomplete_all_text': {
      'it': 'Cerca in tutto il sito',
      'en': 'Search all over the site'
    },
    // css selector
    'pageContent': '.list-item-sorting > div',
     
    // filterKeys
    'filterKeys': {
      'tags': 'list-tags',
      'developmentStatus': 'list-status'
    },
    'category': {
      'it': {
        'missing': 'Tipologia Software',
        'software_open': 'Software Open Source',
        'reuse_software': 'Software a Riuso',
        'projects': 'Piattaforme',
        'api': 'API',
        'faqs': 'Faqs',
        'pages': 'Tipologia Software',
        'posts': 'News',
        'projects': 'Piattaforma',
      },
      'en': {
        'missing': 'Software Type',
        'software_open': 'Software Open Source',
        'reuse_software': 'Re-use Software',
        'projects': 'Platforms',
        'api': 'API',
        'faqs': 'Faqs',
        'pages': 'Software Type',
        'posts': 'News',
        'projects': 'Platforms',
      }
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

  this.params = params;

  this.templates = Handlebars.templates;

  this.client = new elasticsearch.Client(this.config['elasticsearch_connection']);
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
  
  // it-riuso-codiceIPA
  var codiceIPA = this.params['it-riuso-codiceIPA'].slice(0).pop();
  if (typeof codiceIPA != 'undefined') {
    filter.push({
      'term': {
        'it-riuso-codiceIPA': codiceIPA
      }
    });
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
  var page = (typeof this.params != 'undefined' && typeof this.params['page'] != 'undefined') ? this.params['page'].slice(0).pop() : 0;
  return (typeof page == 'undefined') ? 0 : page * this.config['size'];
};

esDevelopersItaliaQuery.prototype.getSizeQuery = function(response){
  return this.config['size'];
};

esDevelopersItaliaQuery.prototype.getSortQuery = function() {
  var sort = [];
  var value = $(this.config['sortSelector']).val();

  switch (value) {
    case 'az':
      sort.push({
        'name.sort': {'order': 'asc'}
      });
      break;

    case 'za':
      sort.push({
        'name.sort': {'order': 'desc'}
      });
      break;

    case 'popularity':
      sort.push({
        'vitality-score': {'order': 'desc'}
      });
      break;

    case 'emerging':
      sort.push({
        'releaseDate': {'order': 'desc'}
      });
      break;

    default:
      break;
  }

  return sort;
};

esDevelopersItaliaQuery.prototype.esSearchSuccessCallback = function(response){
  var html = '';

  if ((typeof response.hits != 'undefined') && (typeof response.hits.hits != 'undefined') && Array.isArray(response.hits.hits)) {
    typeof this.throbber != 'undefined' ? this.throbber.stop() : '';
    $(this.config['pageContent']).text('');
    this.renderResultCount(response.hits.total);
    this.renderIntro();
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

    // if the query is riggered by pager, must be scoll on page top.
  }
};

esDevelopersItaliaQuery.prototype.esSearchErrorCallback = function(error){
  typeof this.throbber != 'undefined' ? this.throbber.stop() : '';
  this.renderErrorMessage();
};

esDevelopersItaliaQuery.prototype.getQuery = function() {
  var value = this.params['keyword'].slice(0).pop();
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
                      {'terms': { 'type': ['pages', 'posts', 'projects'] }},
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
            'name?6',
            'description.' + this.config['language'] + '.localizedName^6',
            'description.' + this.config['language'] + '.shortDescription^5',
            'description.' + this.config['language'] + '.longDescription^4',
            'title^6',
            'subtitle^5',
            'it-riuso-codiceIPA-label^6',
            'name.ngram^3',
            'description.' + this.config['language'] + '.localizedName.ngram^3',
            'description.' + this.config['language'] + '.shortDescription.ngram^2',
            'description.' + this.config['language'] + '.longDescription.ngram',
            'title.ngram^3',
            'subtitle.ngram^2',
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
  // remove old results and start throbber.
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

  query.sort = this.getSortQuery();

  var params = {
    'index': index,
    'body': query,
    'from': this.getFromQuery(),
    'size': this.getSizeQuery()
  };

  if(type.length > 0) {
    params['type'] = type;
  }

  return this.client.search(params);
};

esDevelopersItaliaQuery.prototype.renderErrorMessage = function() {
  var language = this.config['language'];
  var html = this.templates.message({
    'class': '',
    'message': this.config['queryErrorMessage'][language]
  });
  $(this.config['pageContent']).html(html);
};

esDevelopersItaliaQuery.prototype.renderIntro  = function(tot) {
  var keyword = this.params['keyword'].slice(0).pop();
  var language = this.config['language'];
  var $intro = $('.intro > h1');

  if (typeof keyword != 'undefined') {
    $intro.text('');
    $intro.html(this.config['intro'][language] + ' "' + keyword.split('+').join(' ') + '"');
  }
}

esDevelopersItaliaQuery.prototype.renderResultCount = function(tot) {
  var language = this.config['language'];
  $(this.config['totalSelector']).html(this.templates.tot({
    'tot': tot,
    'text': this.config['totalText'][language]
  }));
};

esDevelopersItaliaQuery.prototype.renderPager = function(tot){
  // unregister all page listeners.
  $(this.config['pagerSelector'] + ' ul li a').off('click');
  $(this.config['pagerSelector']).text('');
  if (tot < this.config['size']){
    return;
  }

  var start = 0;
  var size = this.config['size'];
  var page = this.params['page'].slice(0).pop();
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
      'page': i,
    });
  }

  var prev = {
    'title': '<',
    'classes': (page == start) ? ' disabled ' : '',
    'current': false,
    'page': (page-1)
  };

  var next = {
    'title': '>',
    'classes': (page == (totPages-1)) ? ' disabled ' : '',
    'current': false,
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
    'name': name,
    'localisedName': decodeHtmlEntity(localisedName),
    'language': this.config['language'],
    'screenshot': screenshot,
    'readMore': this.readMore[language],
    'category': this.getSoftwareType(software),
    'path': '/' + language + '/software/' + software.name.toLowerCase().split(' ').join('-')
  };

  return this.templates.software(data);
}

esDevelopersItaliaQuery.prototype.renderPost = function(post) {
  var screenshot = 'http://via.placeholder.com/350x150';
  var localisedName = post.title;
  var language = this.config['language'];

  var data = {
    'name': post.title,
    'localisedName': decodeHtmlEntity(localisedName),
    'language': language,
    'screenshot': screenshot,
    'readMore': this.readMore[language],
    'category': this.getPostType(post),
    'path': post.url
  };

  return this.templates.software(data);
}

esDevelopersItaliaQuery.prototype.getSoftwareType = function(software) {
  var language = this.config['language'];
  var category = this.config['category'][language]['missing'];

  if (software['it-riuso-codiceIPA'] == null){
    category = this.config['category'][language]['software_open'];
  }
  else {
    category = this.config['category'][language]['reuse_software'];
  }

  return category.toUpperCase();
}

esDevelopersItaliaQuery.prototype.getPostType = function(post) {
  var language = this.config['language'];
  var category = this.config['category'][language]['missing'];

  if (typeof post.type != 'undefined'){
    category = this.config['category'][language][post.type];
  }

  return category.toUpperCase();
}

/**
 * Platforms query
 */
function esDevelopersItaliaPlatformsQuery(config, params) {
  esDevelopersItaliaQuery.call(this, config, params);
}

esDevelopersItaliaPlatformsQuery.prototype = Object.create(esDevelopersItaliaQuery.prototype);
esDevelopersItaliaPlatformsQuery.prototype.getQuery = function() {
  var value = this.params['keyword'].slice(0).pop();
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
            'title^6',
            'subtitle^5',
            'title.ngram^3',
            'subtitle.ngram^2',
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
  var value = this.params['keyword'].slice(0).pop();
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
            'name?6',
            'description.' + this.config['language'] + '.localizedName^6',
            'description.' + this.config['language'] + '.shortDescription^5',
            'description.' + this.config['language'] + '.longDescription^4',
            'name.ngram^3',
            'description.' + this.config['language'] + '.localizedName.ngram^3',
            'description.' + this.config['language'] + '.shortDescription.ngram^2',
            'description.' + this.config['language'] + '.longDescription.ngram',
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
  var value = this.params['keyword'].slice(0).pop();
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
            'name?6',
            'description.' + this.config['language'] + '.localizedName^6',
            'description.' + this.config['language'] + '.shortDescription^5',
            'description.' + this.config['language'] + '.longDescription^4',
            'it-riuso-codiceIPA-label^6',
            'name.ngram^3',
            'description.' + this.config['language'] + '.localizedName.ngram^3',
            'description.' + this.config['language'] + '.shortDescription.ngram^2',
            'description.' + this.config['language'] + '.longDescription.ngram',
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
 * API query.
 */

function esDevelopersItaliaApiQuery(config, params) {
  esDevelopersItaliaQuery.call(this, config, params);
}

esDevelopersItaliaApiQuery.prototype = Object.create(esDevelopersItaliaQuery.prototype);
esDevelopersItaliaApiQuery.prototype.getQuery = function() {
  var value = this.params['keyword'].slice(0).pop();
  var filter = this.getFilterInQuery();

  var query = {
    'query': {
      'bool': {
        'must': [],
        'filter': [
          {'term': {'type': 'api'}},
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
            'title^6',
            'subtitle^5',
            'title.ngram^3',
            'subtitle.ngram^2',
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
 * PA query.
 */
function esDevelopersItaliaPaQuery(config, params) {
  esDevelopersItaliaQuery.call(this, config, params);
}

esDevelopersItaliaPaQuery.prototype = Object.create(esDevelopersItaliaQuery.prototype);
esDevelopersItaliaPaQuery.prototype.getQuery = function() {
  var value = this.params['keyword'].slice(0).pop();
  var filter = this.getFilterInQuery();

  var query = {
    'query': {
      'bool': {
        'must': []
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
            'name?6',
            'description.' + this.config['language'] + '.localizedName^6',
            'description.' + this.config['language'] + '.shortDescription^5',
            'description.' + this.config['language'] + '.longDescription^4',
            'name.ngram^3',
            'description.' + this.config['language'] + '.localizedName.ngram^3',
            'description.' + this.config['language'] + '.shortDescription.ngram^2',
            'description.' + this.config['language'] + '.longDescription.ngram',
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
                'name.ngram^3',
                'description.' + this.config['language'] + '.localizedName.ngram^3',
                'description.' + this.config['language'] + '.shortDescription.ngram^2',
                'description.' + this.config['language'] + '.longDescription.ngram',
                'title.ngram^3',
                'subtitle.ngram^2',
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
                      {'terms': { 'type': ['pages', 'posts', 'projects'] }},
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
  var language = this.config['language'];
  var name = software.name;
  var language_alpha_3 = this.languages[language];
  if ( typeof software.description[language_alpha_3] != 'undefined' && software.description[language_alpha_3].localisedName != 'undefined') {
    name = software.description[language_alpha_3].localisedName;
  }

  value = value.trim().split(' ');
  for (let i = 0; i < value.length; i++) {
    name = name.replace(new RegExp(value[i], 'ig'), '<b>$&</b>');
  }

  return {
    'name': name,
    'language': language,
    'category': this.getSoftwareType(software),
    'path': '/' + language + '/software/' + software.name.toLowerCase().split(' ').join('-')
  };
};

esDevelopersItaliaAutocompleteAllQuery.prototype.getSuggestionDataPost = function(post) {
  var value = $(this.config['inputSelector']).val();
  var name = post.title;

  value = value.trim().split(' ');
  for (let i = 0; i < value.length; i++) {
    name = name.replace(new RegExp(value[i], 'ig'), '<b>$&</b>');
  }

  return {
    'name': name,
    'language': this.config['language'],
    'category': this.getPostType(post),
    'path': post.url,
  };
};

esDevelopersItaliaAutocompleteAllQuery.prototype.esSearchSuccessCallback = function(response) {
  var language = this.config['language'];
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
      'keyword=' + value.trim().split(' ').join('+')
    ];

    $suggestions.append(this.templates.suggestion({
      'name': this.config['autocomplete_all_text'][language],
      'language': this.config['language'],
      'path': '/' + language + '/search?' + queryString.join('&')
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
                'title.ngram^3',
                'subtitle.ngram^2',
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
                'name.ngram^3',
                'description.' + this.config['language'] + '.localizedName.ngram^3',
                'description.' + this.config['language'] + '.shortDescription.ngram^2',
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
                'name.ngram^3',
                'description.' + this.config['language'] + '.localizedName.ngram^3',
                'description.' + this.config['language'] + '.shortDescription.ngram^2',
                'description.' + this.config['language'] + '.longDescription.ngram',
              ]
            }
          },
          {'term': { '_type': 'software' }},
          {'exists': { 'field': 'it-riuso-codiceIPA' }}
        ]
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
                'title.ngram^3',
                'subtitle.ngram^2',
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
    'query': {
      'bool': {
        'must': [
          {
            'multi_match': {
              'query': value,
              'fields': [
                'it-riuso-codiceIPA-label.ngram',
              ]
            }
          },
          {'term': { '_type': 'software' }}
        ]
      }
    }
  };

  return query;
};
