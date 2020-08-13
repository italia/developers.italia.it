'use strict';

// DISE: Developers Italia Search Engine
var DISE = {};

// Categories of this search engine
DISE.categories = {
  'unknown': {
    'it': 'Misc',
    'en': 'Misc'
  },
  'news': {
    'it': 'News',
    'en': 'News'
  },
  'administration': {
    'it': 'Amministrazione',
    'en': 'Public Body'
  },
  'generic-sw': {
    'it': 'Software Open Source',
    'en': 'Open Source Software'
  },
  'public-sw': {
    'it': 'Software a Riuso',
    'en': 'Public Software'
  },
  'platform': {
    'it': 'Piattaforma',
    'en': 'Platform'
  },
  'api': {
    'it': 'API',
    'en': 'API'
  }
};

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
        'relevance': 'Rilevanza',
        'az': 'Alfabetico',
        'za': 'Z/A',
        'vitality': 'Più attivi',
        'releasedate': 'Più recenti'
      },
      'en': {
        'relevance': 'Relevance',
        'az': 'Alphabetical',
        'za': 'Z/A',
        'vitality': 'Most active',
        'releasedate': 'Most recent'
      }
    },
    // css selector
    'pageContent': '.list-item-sorting > div',

    // IDs of DOM elements containing input checkboxes to use
    'filterKeys': {
      'publiccode.intendedAudience.scope': 'list-tags',
      'publiccode.categories': 'list-tags',
      'publiccode.developmentStatus': 'list-status'
    },
    'filterKeysMobileSelectors': {
      'publiccode.intendedAudience.scope': 'pills-arguments',
      'publiccode.categories': 'pills-arguments',
      'publiccode.developmentStatus': 'pills-development_status'
    }
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

esDevelopersItaliaManager.prototype.executeCurrentQuery = function () {
  var object = this;
  this.updateSearchUrl();

  this.currentQueryObject().executeESQuery().then(
    function successSearchCallback(response) {
      object.currentQueryObject().esSearchSuccessCallback.call(object.currentQueryObject(), response);
      $(object.config['pagerSelector'] + ' ul li a').on('click', function (event) {
        object.pagerCallback.call(object, event);
      });
    },
    function errorSearchCallback(error) {
      object.currentQueryObject().esSearchErrorCallback.call(object.currentQueryObject(), error);
    }
  );
};

esDevelopersItaliaManager.prototype.pagerCallback = function (event) {
  event.preventDefault();

  var page = event.delegateTarget.getAttribute('page');

  // Set correct page value.
  this.params['page'].pop();
  this.params['page'].push(page);

  // Execute Current query.
  this.executeCurrentQuery();
};

esDevelopersItaliaManager.prototype.setCurrentLanguage = function () {
  // to guess language, get first element in path.
  var language = location.pathname.substr(1).split('/')[0];
  var languages = ['it', 'en'];
  // if page does not have a language, take italian as default.
  if (languages.indexOf(language) === -1) {
    language = 'it';
  }

  this.language = language;
};

esDevelopersItaliaManager.prototype.popupateFiltersFromUrl = function () {
  var object = this;

  // Populate query type filter.
  var o = { 'type': 'list-type' };
  for (var p in o) {
    var value = this.params[p];
    var id = o[p];

    if (value.length === 0) {
      continue;
    }

    for (var i = 0; i < value.length; i++) {
      $('#' + id + ' input[value="' + value[i] + '"]').prop('checked', true);
      // type query filter for mobile.
      $('#pills-types input[value="' + value[i] + '"]').prop('checked', true);
      // filtering sort criteria for selected type
      filterSortBy(object, true, value[i]);
    }
  }

  // Query filters.
  for (var p in this.config['filterKeys']) {
    var value = this.params[p];
    var id = this.config['filterKeys'][p];
    var idm = this.config['filterKeysMobileSelectors'][p];

    if (value.length === 0) {
      continue;
    }

    for (var i = 0; i < value.length; i++) {
      $('#' + id + ' input[value="' + value[i] + '"]').prop('checked', true);
      $('#' + idm + ' input[value="' + value[i] + '"]').prop('checked', true);
    }
  }

  // Query Sort.
  var sort = this.params['sort'].slice().pop();
  if (typeof sort === 'undefined') {
    sort = 'relevance';
  }

  $(this.config['sortSelector']).val(sort);
  $(this.config['sortMobileSelector']).each(function (i, e) {
    if ($(e).attr('sort') === sort) {
      $(e).addClass('active');
      $(e).html(object.config['sortMobileTitle'][object.language][$(e).attr('sort')] + ' <i class="it-check"></i>');
    }
    else {
      $(e).removeClass('active');
      $(e).html(object.config['sortMobileTitle'][object.language][$(e).attr('sort')]);
    }
  });
};

esDevelopersItaliaManager.prototype.updateSearchUrl = function () {
  var queryString = [];

  // first adds search filters.
  for (var p in this.config['filterKeys']) {
    var value = this.params[p];

    for (var i = 0; i < value.length; i++) {
      queryString.push(p + '[' + i + ']=' + value[i]);
    }
  }

  // adds publiccode.it.riuso.codiceIPA filter if present.
  var codiceIPA = this.params['publiccode.it.riuso.codiceIPA'].slice(0).pop();
  if (typeof codiceIPA !== 'undefined') {
    queryString.push('publiccode.it.riuso.codiceIPA=' + codiceIPA);
  }

  // adds publiccode.it.riuso.codiceIPA filter if present.
  var codiceIPALabel = this.params['it-riuso-codiceIPA-label'].slice(0).pop();
  if (typeof codiceIPALabel !== 'undefined') {
    queryString.push('it-riuso-codiceIPA-label=' + codiceIPALabel);
  }

  // query type filter.
  var queryType = this.params['type'].slice(0).pop();
  if (typeof queryType === 'string' && queryType !== 'all') {
    queryString.push('type=' + queryType);
  }

  // full text query keyword.
  var keyword = this.params['keyword'].slice(0).pop();
  if (typeof keyword !== 'undefined') {
    queryString.push('keyword=' + keyword.split(' ').join('+'));
  }

  // then adds page.
  var page = this.params['page'].slice(0).pop();
  if (typeof page === 'undefined') {
    page = 0;
  }
  queryString.push('page=' + page);

  // last adds sort.
  queryString.push('sort=' + $(this.config['sortSelector']).val());

  // update browser history.
  history.pushState({}, '', window.location.pathname + '?' + queryString.join('&'));
};

// Filtering sortBy select based on selected content typology 
function filterSortBy(object, checked, element) {
  if (element == "platforms" && checked) {
    // when changing type resetting sortBy to common one
    $(object.config['sortSelector']).val('relevance');
    // desktop hiding elements
    $(object.config['sortSelector']).children('option[value="vitality"],[value="releasedate"]').hide();
    // mobile higing elements
    $(object.config['sortMobileSelector'] + '[sort="vitality"],[sort="releasedate"]').hide();
  } else {
    $(object.config['sortSelector']).children('option[value="vitality"],[value="releasedate"]').show();
    $(object.config['sortMobileSelector'] + '[sort="vitality"],[sort="releasedate"]').show();
  }
  // reset url page in params.
  object.params['page'].pop();
}

esDevelopersItaliaManager.prototype.registerFiltersListeners = function () {
  var object = this;

  $('#list-type input[type="checkbox"]').on('change', function (event) {
    filterSortBy(object, event.target.checked, event.target.value);
    if (event.target.checked) {
      $('#list-type input[type="checkbox"]:checked').each(function (i, e) {
        if (event.target.value !== e.value) {
          $(e).prop('checked', false);
        }
      });

      // update mobile selection
      var mobile = $('#pills-types input[type="checkbox"]');
      for (var i = 0; i < mobile.length; i++) {
        if (event.target.value !== mobile[i].value) {
          $(mobile[i]).prop('checked', false);
        }
        else {
          $(mobile[i]).prop('checked', true);
        }
      }

      object.queryType = [event.target.value];
    }
    else {
      // update mobile selection
      var mobile = $('#pills-types input[type="checkbox"]');
      for (var i = 0; i < mobile.length; i++) {
        $(mobile[i]).prop('checked', false);
      }
      object.queryType = ['all'];
    }

    // params contains actual filters value for build the elasticsearch query.
    if (object.params['type'].length === 0) {
      object.params['type'].push(object.queryType.slice(0).pop());
    }
    else {
      object.params['type'].pop();
      object.params['type'].push(object.queryType.slice(0).pop());
    }

    // // when changing type resetting sortBy to common one
    // $(object.config['sortSelector']).val('relevance');

    // Execute Current query.
    object.executeCurrentQuery();
  });

  // TypeQuery Mobile only one selected.
  $('#pills-types input[type="checkbox"]').on('change', function (event) {
    filterSortBy(object, event.target.checked, event.target.value);
    if (event.target.checked) {
      $('#pills-types input[type="checkbox"]:checked').each(function (i, e) {
        if (event.target.value !== e.value) {
          $(e).prop('checked', false);
        }
      });
    }
  });

  for (var p in this.config['filterKeys']) {
    $('#' + this.config['filterKeys'][p] + ' input[type="checkbox"]').on('change', null, { 'p': p }, function (event) {
      object.clickOnFilterCallback.call(object, event);
    });
  }

  // when change sort order, execute query.
  $(this.config['sortSelector']).on('change', function (event) {

    // update mobile sort selection.
    var $sortMobileActive = $(object.config['sortMobileSelector'] + '.active');
    $sortMobileActive.html(
      object.config['sortMobileTitle'][object.language][$sortMobileActive.attr('sort')]
    );
    $sortMobileActive.removeClass('active');
    $(object.config['sortMobileSelector']).each(function (i, e) {
      if ($(e).attr('sort') === event.target.value) {
        $(e).addClass('active');
        $(e).html(object.config['sortMobileTitle'][object.language][$(e).attr('sort')] + ' <i class="it-check"></i>');
      }
    });

    // Execute Current query.
    object.executeCurrentQuery();
  });

  $('#filters .modal-dialog .modal-header a.save').on('click', function (event) {

    for (var p in object.config['filterKeys']) {
      var id = object.config['filterKeys'][p];
      var idm = object.config['filterKeysMobileSelectors'][p];

      var $inputMobile = $('#' + idm + ' input[type="checkbox"]');
      for (var i = 0; i < $inputMobile.length; i++) {
        // if new selected.
        if ($inputMobile[i].checked && (object.params[p].indexOf($inputMobile[i].value) === -1)) {
          object.params[p].push($inputMobile[i].value);
          // update desktop filter.
          $('#' + object.config['filterKeys'][p] + ' input[value="' + $inputMobile[i].value + '"]').prop('checked', true);
        }

        // if removed.
        var index = object.params[p].indexOf($inputMobile[i].value);
        if (!$inputMobile[i].checked && (index !== -1)) {
          object.params[p].splice(index, 1);
          // update desktop filter.
          $('#' + object.config['filterKeys'][p] + ' input[value="' + $inputMobile[i].value + '"]').prop('checked', false);
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
      $('#list-type input[value="' + queryType + '"]').prop('checked', true);
    }

    if (object.params['type'].length > 0) {
      object.params['type'].pop();
    }

    object.params['type'].push(queryType);
    object.queryType = [queryType];

    // Execute Current query.
    object.executeCurrentQuery();
  });

  $(this.config['sortMobileSelector']).on('click', function (event) {
    event.preventDefault();

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

esDevelopersItaliaManager.prototype.removeFiltersListeners = function () {
  for (var p in this.config['filterKeys']) {
    $('#' + this.config['filterKeys'][p] + ' input[type="checkbox"]').off('change');
  }

  $(this.config['sortSelector']).off('change');
};

esDevelopersItaliaManager.prototype.clickOnFilterCallback = function (event) {

  /**
   * NOTE: query type filter in handled on esQuery.js file (row 65).
   */

  if (event.target.checked) {
    this.params[event.data['p']].push(event.target.value);
    $('#' + this.config['filterKeysMobileSelectors'][event.data['p']] + ' input[value="' + event.target.value + '"]').prop('checked', true);
  }
  else {
    this.params[event.data['p']] = this.params[event.data['p']].filter(function (e, i) {
      return e !== event.target.value;
    });
    $('#' + this.config['filterKeysMobileSelectors'][event.data['p']] + ' input[value="' + event.target.value + '"]').prop('checked', false);
  }

  // reset url page in params.
  this.params['page'].pop();

  // Execute Current query.
  this.executeCurrentQuery();
};

esDevelopersItaliaManager.prototype.currentQueryObject = function () {
  var queryType = this.queryType.slice(0).pop();
  if (typeof this.queryObjects[queryType] === 'undefined') {
    this.queryObjects[queryType] = this.createQueryObject(queryType);
  }

  return this.queryObjects[this.queryType];
};

esDevelopersItaliaManager.prototype.createQueryObject = function (queryType) {
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
    'index': 'jekyll',
    'type': [],
    'page': 0,
    'size': 12,
    'elasticsearch_connection': {
      'host': 'http://elasticsearch.developers.loc'
    },
    'queryErrorMessage': {
      'it': "La ricerca è temporaneamente non disponibile: riprova più tardi.",
      'en': 'Could not retrieve the search results: please try again later.'
    },
    'intro': {
      'it': 'Hai cercato',
      'en': 'You have searched for'
    },
    'intro_empty': {
      'it': 'Catalogo',
      'en': 'Catalogue'
    },
    'autocomplete_all_text': {
      'it': 'Cerca in tutto il sito',
      'en': 'Search all over the site'
    },
    'emptySerp': {
      'it': {
        'title': 'Nessun risultato trovato',
        'message': 'La ricerca non ha prodotto nessun risultato. Prova un\'altra chiave di ricerca.',
        'cta': 'Prova una nuova ricerca'
      },
      'en': {
        'title': 'No results found',
        'message': 'The search did not match any results. Try searching other terms.',
        'cta': 'Try a new search'
      }
    },
    // css selector
    'pageContent': '.list-item-sorting > div',

    // filterKeys
    'filterKeys': {
      'publiccode.intendedAudience.scope': 'list-tags',
      'publiccode.categories': 'list-tags',
      'publiccode.developmentStatus': 'list-status'
    },
    'category': DISE.categories
  };
  this.config = $.extend(defaultConfig, config);

  this.readMore = {
    'it': 'Leggi di più',
    'en': 'read more'
  };

  this.params = params;

  this.templates = Handlebars.templates;

  this.client = new elasticsearch.Client(this.config['elasticsearch_connection']);
}

function hideSortingResultsDiv(hide) {
  // hide/show sort by and results hits
  // and manage display mode for mobile views
  if (hide) {
    $('.intro > .abstract-sorting').removeClass("d-md-flex");
    $('.intro > .abstract-sorting').removeClass("d-none");
    $('.intro > .abstract-sorting').hide();
  } else {
    $('.intro > .abstract-sorting').addClass("d-md-flex");
    $('.intro > .abstract-sorting').addClass("d-none");
    $('.intro > .abstract-sorting').show();
  }
}

esDevelopersItaliaQuery.prototype.getFilterInQuery = function () {
  var filter = [];
  for (var p in this.config['filterKeys']) {
    var value = this.params[p];

    if (value.length === 0) {
      continue;
    }

    for (var i = 0; i < value.length; i++) {
      var term = { 'term': {} };
      term['term'][p] = value[i];
      filter.push(term);
    }
  }

  // publiccode.it.riuso.codiceIPA
  var codiceIPA = this.params['publiccode.it.riuso.codiceIPA'].slice(0).pop();
  if (typeof codiceIPA !== 'undefined') {
    filter.push({
      'term': {
        'publiccode.it.riuso.codiceIPA': codiceIPA
      }
    });
  }

  return filter;
};

esDevelopersItaliaQuery.prototype.getIndexQuery = function (response) {
  return this.config['index'];
};

esDevelopersItaliaQuery.prototype.getDocumentTypeQuery = function (response) {
  return Array.isArray(this.config['type']) ? this.config['type'].slice(0) : this.config['type'];
};

esDevelopersItaliaQuery.prototype.getFromQuery = function (response) {
  var page = (typeof this.params !== 'undefined' && typeof this.params['page'] !== 'undefined') ? this.params['page'].slice(0).pop() : 0;
  return (typeof page === 'undefined') ? 0 : page * this.config['size'];
};

esDevelopersItaliaQuery.prototype.getSizeQuery = function (response) {
  return this.config['size'];
};

esDevelopersItaliaQuery.prototype.getSortQuery = function () {
  var sort = [];
  var value = $(this.config['sortSelector']).val();

  switch (value) {
    case 'az':
      sort.push({
        'name.raw': { 'order': 'asc' }
      });
      break;

    case 'za':
      sort.push({
        'name.raw': { 'order': 'desc' }
      });
      break;

    case 'vitality':
      sort.push({
        'vitalityScore': { 'order': 'desc' }
      });
      break;

    case 'releasedate':
      sort.push({
        'publiccode.releaseDate': { 'order': 'desc' }
      });
      break;

    default:
      // Sort order by relevance.
      break;
  }

  return sort;
};

esDevelopersItaliaQuery.prototype.esSearchSuccessCallback = function (response) {
  if (typeof response.hits === 'undefined' || typeof response.hits.hits === 'undefined' || !Array.isArray(response.hits.hits)) {
    return;
  }
  typeof this.throbber !== 'undefined' ? this.throbber.stop() : '';
  $(this.config['pageContent']).text('');

  // enable-disable sort selectbox
  // $('.intro').html('');

  var keyword = decodeURI(this.params['keyword'].slice(0).pop());
  if (response.hits.total === 0) {
    var language = this.config['language'];
    
    // hide intro
    var $intro = $('.intro > h1');
    $intro.html('');

    // hide sort by and results hits
    hideSortingResultsDiv(true);

    // recreate empty template
    $('.intro > .intro-empty').html(this.templates.empty({
      'title': this.config['emptySerp'][language].title,
      'message': this.config['emptySerp'][language].message.replace("{keyword}", keyword),
      'cta': this.config['emptySerp'][language].cta
    }));
    // render 0 pages
    this.renderPager(0);
    // render 0 results
    this.renderResultCount(0);
    return;
  } else if (keyword !== 'undefined') {
    var language = this.config['language'];
    var $intro = $('.intro > h1');
    var sanitized = $(keyword.split('+').join(' ')).text();
    $intro.html(
      this.config['intro'][language] + ' "' + sanitized + '"' 
      );
  }

  hideSortingResultsDiv(false);
  this.renderResultCount(response.hits.total);
  var html = '';
  for (var i = 0; i < response.hits.hits.length; i++) {
    switch (response.hits.hits[i]._type) {
      case 'software':
        html = this.renderSoftware(response.hits.hits[i]._source);
        break;
      case 'post':
        html = this.renderPost(response.hits.hits[i]._source);
        break;
      case 'administration':
        html = this.renderAdministration(response.hits.hits[i]._source);
        break;
    }
    $(this.config['pageContent']).append(html);
  }
  this.renderPager(response.hits.total);

  // if the query is triggered by pager, must be scoll on page top.
};

esDevelopersItaliaQuery.prototype.esSearchErrorCallback = function (error) {
  typeof this.throbber !== 'undefined' ? this.throbber.stop() : '';
  this.renderErrorMessage();
};

esDevelopersItaliaQuery.prototype.getQuery = function () {
  var value = this.params['keyword'].slice(0).pop();
  var filter = this.getFilterInQuery();
  var language = this.config['language'];
  var language_alpha_2 = language;

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
                      { 'term': { '_type': 'post' } },
                      { 'terms': { 'type': ['platform'] } },
                      { 'term': { 'lang': language } }
                    ]
                  }
                },
                { 'term': { '_type': 'software' } },
                { 'term': { '_type': 'administration' } }
              ]
            }
          }
        ]
      }
    }
  };

  if (typeof value !== 'undefined') {
    value = value.split('+').join(' ');
    query['query']['bool']['must'].push(
      {
        'multi_match': {
          'query': typeof value === 'undefined' ? '' : value,
          'fields': [
            'publiccode.name?6',
            'publiccode.description.' + language_alpha_2 + '.localizedName^6',
            'publiccode.description.' + language_alpha_2 + '.shortDescription^5',
            'publiccode.description.' + language_alpha_2 + '.longDescription^4',
            'title^6',
            'subtitle^5',
            'html^4',
            'it-riuso-codiceIPA-label^6',
            'name^3',
            'publiccode.description.' + language_alpha_2 + '.localizedName^3',
            'publiccode.description.' + language_alpha_2 + '.shortDescription^2',
            'publiccode.description.' + language_alpha_2 + '.longDescription',
            'title^3',
            'subtitle^2',
            'html'
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

esDevelopersItaliaQuery.prototype.executeESQuery = function () {
  this.renderIntro();

  // remove old results and start throbber.
  $(this.config['pageContent']).text('');
  this.throbber = Throbber({
    color: 'black',
    padding: 30,
    size: 100,
    fade: 200,
    clockwise: false
  }).appendTo($('.list-item-sorting > div')[0]).start();

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

  if (type.length > 0) {
    params['type'] = type;
  }

  return this.client.search(params);
};

esDevelopersItaliaQuery.prototype.renderErrorMessage = function () {
  var language = this.config['language'];
  var html = this.templates.message({
    'class': '',
    'message': this.config['queryErrorMessage'][language]
  });
  $(this.config['pageContent']).html(html);
};

esDevelopersItaliaQuery.prototype.renderIntro = function (tot) {
  var keyword = decodeURI(this.params['keyword'].slice(0).pop());
  var language = this.config['language'];
  var $intro = $('.intro > h1');
  $intro.html('');

  // removing empty div element from dom
  var $introEmpty = $('.intro > .intro-empty');
  $introEmpty.html('');

  if (keyword !== 'undefined') {
    $intro.text('');
    var sanitized = $(keyword.split('+').join(' ')).text();
    $intro.html(this.config['intro'][language] + ' "' + sanitized + '"');
  } else {
    $intro.text('');
    $intro.html(this.config['intro_empty'][language]);
  }
};

esDevelopersItaliaQuery.prototype.renderResultCount = function (tot) {
  var language = this.config['language'];
  $(this.config['totalSelector']).html(this.templates.tot({
    'tot': tot,
    'text': this.config['totalText'][language]
  }));
};

esDevelopersItaliaQuery.prototype.renderPager = function (tot) {
  // unregister all page listeners.
  $(this.config['pagerSelector'] + ' ul li a').off('click');
  $(this.config['pagerSelector']).text('');
  if (tot < this.config['size']) {
    return;
  }

  var start = 0;
  var size = this.config['size'];
  var page = this.params['page'].slice(0).pop();
  var totPages = Math.ceil(tot / size);
  var pages = [];
  if (typeof page === 'undefined') {
    page = 0;
  }

  page = parseInt(page);
  if (page > 4) {
    start = page - 4;
  }

  for (var i = start; (i < start + 9); i++) {

    if (i >= totPages) {
      break;
    }

    pages.push({
      'title': i + 1,
      'classes': (i === page) ? ' active ' : '',
      'current': page === i,
      'page': i
    });
  }

  var prev = {
    'title': '<',
    'classes': (page === start) ? ' disabled ' : '',
    'current': false,
    'page': (page - 1)
  };

  var next = {
    'title': '>',
    'classes': (page === (totPages - 1)) ? ' disabled ' : '',
    'current': false,
    'page': (page + 1)
  };

  $(this.config['pagerSelector']).append(this.templates.pager({
    'pages': pages,
    'prev': prev,
    'next': next
  }));
};

esDevelopersItaliaQuery.prototype.languageFallback = function (element) {
  var lang = this.config['language'];

  if (element.hasOwnProperty(lang)) {
    return element[lang]
  } else {
    return element['en']
  }
}

esDevelopersItaliaQuery.prototype.renderSoftware = function (software) {
  var category_id = this.getSoftwareType(software);  // generic-sw vs public-sw
  var description = this.languageFallback(software.publiccode.description);

  var screenshot;
  if (description && Array.isArray(description.screenshots) && description.screenshots.length > 0) {
    screenshot = description.screenshots[0];
  } else if (software.publiccode.logo) {
    screenshot = software.publiccode.logo;
  } else if (category_id == 'public-sw') {
    screenshot = '/assets/images/cover_softwareriuso.png';
  } else {
    screenshot = '/assets/images/cover_software_opensource.png';
  }

  // workaround for SVG logo/screens in Github #461
  if ((/github/.test(screenshot)) && (/\.svg$/.test(screenshot)))
    screenshot += '?sanitize=true';


  var localisedName = software.publiccode.name;
  if (description && description.localisedName) {
    localisedName = description.localisedName;
  }

  var language = this.config['language'];
  var data = {
    'name': localisedName,
    'localisedName': decodeHtmlEntity(localisedName),
    'language': this.config['language'],
    'screenshot': screenshot,
    'readMore': this.readMore[language],
    'category': DISE.categories[category_id][language].toUpperCase(),
    'categoryClass': ['icon', 'icon-type-' + category_id].join(' '),
    'path': '/' + language + '/software/' + software.slug.toLowerCase()
  };

  return this.templates.search(data);
};

esDevelopersItaliaQuery.prototype.renderPost = function (post) {
  var screenshot = this.getPostScreenshot(post);
  var localisedName = post.title;
  var language = this.config['language'];
  var category = DISE.categories[post.type || 'unknown'];

  if (typeof post.logo !== 'undefined' || post.logo !== null) {
    screenshot = post.logo;
  }

  var data = {
    'name': post.title,
    'localisedName': decodeHtmlEntity(localisedName),
    'language': language,
    'screenshot': screenshot,
    'readMore': this.readMore[language],
    'category': category[language].toUpperCase(),
    'categoryClass': ['icon', 'icon-type-' + post.type].join(' '),
    'path': post.url
  };

  return this.templates.search(data);
};

esDevelopersItaliaQuery.prototype.renderAdministration = function (administration) {
  var screenshot = '/assets/images/cover_amministrazioni.png';
  var language = this.config['language'];

  var data = {
    'name': administration["it-riuso-codiceIPA-label"],
    'localisedName': administration["it-riuso-codiceIPA-label"],
    'language': language,
    'screenshot': screenshot,
    'readMore': this.readMore[language],
    'category': 'administration',
    'categoryClass': ['icon', 'icon-type-administration'].join(' '),
    'path': '/' + language + '/pa/' + administration["it-riuso-codiceIPA"]
  };

  return this.templates.search(data);
};

esDevelopersItaliaQuery.prototype.getSoftwareType = function (software) {
  return software.publiccode.it.riuso.codiceIPA == null
    ? 'generic-sw'
    : 'public-sw';
};

esDevelopersItaliaQuery.prototype.getPostScreenshot = function (post) {
  var screenshot = 'http://via.placeholder.com/350x150';

  switch (post.type) {
    case 'platforms':
      screenshot = '/assets/images/cover_piattaforme.png';
      break;
  }

  return screenshot;
};

/**
 * Platforms query
 */
function esDevelopersItaliaPlatformsQuery(config, params) {
  esDevelopersItaliaQuery.call(this, config, params);
}

esDevelopersItaliaPlatformsQuery.prototype = Object.create(esDevelopersItaliaQuery.prototype);
esDevelopersItaliaPlatformsQuery.prototype.getQuery = function () {
  var value = this.params['keyword'].slice(0).pop();
  var filter = this.getFilterInQuery();

  var query = {
    'query': {
      'bool': {
        'filter': [
          { 'term': { 'type': 'platform' } },
          { 'term': { 'lang': this.config['language'] } }
        ]
      }
    }
  };

  if (typeof value !== 'undefined') {
    value = value.split('+').join(' ');
    query['query']['bool']['must'] = [
      {
        'multi_match': {
          'query': value,
          'fields': [
            'title^6',
            'subtitle^5',
            'title^3',
            'subtitle^2',
            'html'
          ]
        }
      }
    ];
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
esDevelopersItaliaOpenSourceQuery.prototype.getQuery = function () {
  var value = this.params['keyword'].slice(0).pop();
  var filter = this.getFilterInQuery();
  var language = this.config['language'];
  var language_alpha_2 = language;

  var query = {
    'query': {
      'bool': {
        'must': [],
        'must_not': [
          { 'exists': { 'field': 'publiccode.it.riuso.codiceIPA' } },
          { 'match': { 'publiccode.indendedAudience.unsupportedCountries': 'it' } }
        ]
      }
    }
  };

  if (typeof value !== 'undefined') {
    value = value.split('+').join(' ');
    query['query']['bool']['must'].push(
      {
        'multi_match': {
          'query': value,
          'fields': [
            'publiccode.name?6',
            'publiccode..' + language_alpha_2 + '.localizedName^6',
            'publiccode.description.' + language_alpha_2 + '.shortDescription^5',
            'publiccode.description.' + language_alpha_2 + '.longDescription^4',
            'publiccode.name^3',
            'publiccode.description.' + language_alpha_2 + '.localizedName^3',
            'publiccode.description.' + language_alpha_2 + '.shortDescription^2',
            'publiccode.description.' + language_alpha_2 + '.longDescription'
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
esDevelopersItaliaReuseQuery.prototype.getQuery = function () {
  var value = this.params['keyword'].slice(0).pop();
  var filter = this.getFilterInQuery();
  var language = this.config['language'];
  var language_alpha_2 = language;

  var query = {
    'query': {
      'bool': {
        'must': [
          { 'exists': { 'field': 'publiccode.it.riuso.codiceIPA' } },
          { 'term': { '_type': 'software' } }
        ]
      }
    }
  };

  if (typeof value !== 'undefined') {
    value = value.split('+').join(' ');
    query['query']['bool']['must'].push(
      {
        'multi_match': {
          'query': value,
          'fields': [
            'publiccode.name?6',
            'publiccode.description.' + language_alpha_2 + '.localizedName^6',
            'publiccode.description.' + language_alpha_2 + '.shortDescription^5',
            'publiccode.description.' + language_alpha_2 + '.longDescription^4',
            'it-riuso-codiceIPA-label^6',
            'publiccode.name^3',
            'publiccode.description.' + language_alpha_2 + '.localizedName^3',
            'publiccode.description.' + language_alpha_2 + '.shortDescription^2',
            'publiccode.description.' + language_alpha_2 + '.longDescription'
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
esDevelopersItaliaApiQuery.prototype.getQuery = function () {
  var value = this.params['keyword'].slice(0).pop();
  var filter = this.getFilterInQuery();

  var query = {
    'query': {
      'bool': {
        'must': [],
        'filter': [
          { 'term': { 'type': 'api' } },
          { 'term': { 'lang': this.config['language'] } }
        ]
      }
    }
  };

  if (typeof value !== 'undefined') {
    value = value.split('+').join(' ');
    query['query']['bool']['must'].push(
      {
        'multi_match': {
          'query': value,
          'fields': [
            'title^6',
            'subtitle^5',
            'title^3',
            'subtitle^2',
            'html'
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
esDevelopersItaliaPaQuery.prototype.getQuery = function () {
  var value = this.params['keyword'].slice(0).pop();
  var filter = this.getFilterInQuery();
  var language = this.config['language'];
  var language_alpha_2 = language;

  var query = {
    'query': {
      'bool': {
        'must': []
      }
    }
  };

  if (typeof value !== 'undefined') {
    value = value.split('+').join(' ');
    query['query']['bool']['must'].push(
      {
        'multi_match': {
          'query': value,
          'fields': [
            'publiccode.name?6',
            'publiccode.description.' + language_alpha_2 + '.localizedName^6',
            'publiccode.description.' + language_alpha_2 + '.shortDescription^5',
            'publiccode.description.' + language_alpha_2 + '.longDescription^4',
            'publiccode.name^3',
            'publiccode.description.' + language_alpha_2 + '.localizedName^3',
            'publiccode.description.' + language_alpha_2 + '.shortDescription^2',
            'publiccode.description.' + language_alpha_2 + '.longDescription'
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

esDevelopersItaliaPaQuery.prototype.renderIntro = function (tot) {
  var itRiusoCodiceIPALabel = this.params['it-riuso-codiceIPA-label'].slice(0).pop();
  var $intro = $('.intro > h1');

  if (typeof itRiusoCodiceIPALabel !== 'undefined') {
    $intro.text('');
    $intro.html(decodeURI(itRiusoCodiceIPALabel));
  }
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
}

esDevelopersItaliaAutocompleteAllQuery.prototype = Object.create(esDevelopersItaliaQuery.prototype);
esDevelopersItaliaAutocompleteAllQuery.prototype.getQuery = function () {
  var language = this.config['language'];
  var language_alpha_2 = language;

  var value = $(this.config['inputSelector']).val();
  return {
    'query': {
      'bool': {
        'must': [
          {
            'multi_match': {
              'query': value,
              'fields': [
                'publiccode.name^3',
                'it-riuso-codiceIPA-label^3',
                'title^3',
                'subtitle^2',
                'publiccode.description.' + language_alpha_2 + '.localizedName^3',
                'publiccode.description.' + language_alpha_2 + '.shortDescription^2',
                'publiccode.description.' + language_alpha_2 + '.longDescription',
                'html'
              ]
            }
          },
          {
            'bool': {
              'should': [
                {
                  'bool': {
                    'must': [
                      { 'term': { '_type': 'post' } },
                      { 'term': { 'lang': language } }
                    ]
                  }
                },
                { 'term': { '_type': 'software' } },
                { 'term': { '_type': 'administration' } }
              ]
            }
          }
        ],
        'must_not': [
          { 'match': { 'publiccode.intendedAudience.unsupportedCountries': 'it' } }
        ]
      }
    }
  };
};

esDevelopersItaliaAutocompleteAllQuery.prototype.executeESQuery = function () {
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

  if (type.length > 0) {
    params['type'] = type;
  }

  this.client.search(params).then(
    function successSearchCallback(response) {
      object.esSearchSuccessCallback.call(object, response);
    },
    function successSearchCallback(error) {
      object.esSearchErrorCallback.call(object, error);
    }
  );
};

esDevelopersItaliaAutocompleteAllQuery.prototype.getSuggestionDataSoftware = function (software) {
  var value = $(this.config['inputSelector']).val();
  var category_id = this.getSoftwareType(software);

  var language = this.config['language'];
  var language_alpha_2 = language;

  var name = software.publiccode.name;
  if (typeof software.publiccode.description[language_alpha_2] !== 'undefined' && software.publiccode.description[language_alpha_2].localisedName) {
    name = software.publiccode.description[language_alpha_2].localisedName;
  }

  value = value.trim().split(' ');
  for (var i = 0; i < value.length; i++) {
    name = name.replace(new RegExp(value[i], 'ig'), '<b>$&</b>');
  }

  return {
    'name': name,
    'language': language,
    'category': DISE.categories[category_id][language].toUpperCase(),
    'categoryClass': ['category', 'icon', 'icon-type-' + category_id].join(' '),
    'path': '/' + language + '/software/' + software.slug.toLowerCase()
  };
};

esDevelopersItaliaAutocompleteAllQuery.prototype.getSuggestionDataPost = function (post) {
  var value = $(this.config['inputSelector']).val();
  var name = post.title;
  var category = DISE.categories[post.type || 'unknown'];

  value = value.trim().split(' ');
  for (var i = 0; i < value.length; i++) {
    name = name.replace(new RegExp(value[i], 'ig'), '<b>$&</b>');
  }

  return {
    'name': name,
    'language': this.config['language'],
    'category': category[this.config['language']].toUpperCase(),
    'categoryClass': ['category', 'icon', 'icon-type-' + post.type].join(' '),
    'path': post.url
  };
};

esDevelopersItaliaAutocompleteAllQuery.prototype.getSuggestionDataAdministration = function (administration) {
  var value = $(this.config['inputSelector']).val();
  var language = this.config['language'];
  var name = administration['it-riuso-codiceIPA-label'];
  var path = '/' + language;

  value = value.trim().split(' ');
  for (var i = 0; i < value.length; i++) {
    name = name.replace(new RegExp(value[i], 'ig'), '<b>$&</b>');
  }
  path = '/' + language + '/pa/' + administration["it-riuso-codiceIPA"]

  return {
    'name': name,
    'language': language,
    'category': DISE.categories['administration'][language],
    'categoryClass': ['category', 'icon', 'icon-type-administration'].join(' '),
    'path': path
  };
};

esDevelopersItaliaAutocompleteAllQuery.prototype.esSearchSuccessCallback = function (response) {
  var language = this.config['language'];
  var $suggestions = $('#suggestions');
  $suggestions.text('');

  var value = $(this.config['inputSelector']).val();
  if (value.length === 0) {
    return;
  }

  if ((typeof response.hits !== 'undefined') && (typeof response.hits.hits !== 'undefined') && Array.isArray(response.hits.hits)) {
    for (var i = 0; i < response.hits.hits.length; i++) {
      var data;
      if (response.hits.hits[i]['_type'] === 'software') {
        data = this.getSuggestionDataSoftware(response.hits.hits[i]['_source']);
      }

      if (response.hits.hits[i]['_type'] === 'post') {
        data = this.getSuggestionDataPost(response.hits.hits[i]['_source']);
      }

      if (response.hits.hits[i]['_type'] === 'administration') {
        data = this.getSuggestionDataAdministration(response.hits.hits[i]['_source']);
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
};

function esDevelopersItaliaAutocompletePlatformsQuery(config, getParams) {
  esDevelopersItaliaQuery.call(this, config, getParams);
  this.searchObjectId = 'platforms';
}

esDevelopersItaliaAutocompletePlatformsQuery.prototype = Object.create(esDevelopersItaliaAutocompleteAllQuery.prototype);
esDevelopersItaliaAutocompletePlatformsQuery.prototype.getQuery = function () {
  var value = $(this.config['inputSelector']).val();
  return {
    'query': {
      'bool': {
        'must': [
          {
            'multi_match': {
              'query': value,
              'fields': [
                'title^3',
                'subtitle^2',
                'html'
              ]
            }
          }
        ],
        'filter': [
          { 'term': { 'type': 'platform' } },
          { 'term': { 'lang': this.config['language'] } }
        ]
      }
    }
  };
};

function esDevelopersItaliaAutocompleteSoftwareOpenSourceQuery(config, getParams) {
  esDevelopersItaliaQuery.call(this, config, getParams);
  this.searchObjectId = 'software_open';
}

esDevelopersItaliaAutocompleteSoftwareOpenSourceQuery.prototype = Object.create(esDevelopersItaliaAutocompleteAllQuery.prototype);
esDevelopersItaliaAutocompleteSoftwareOpenSourceQuery.prototype.getQuery = function () {
  var language = this.config['language'];
  var language_alpha_2 = language;

  var value = $(this.config['inputSelector']).val();
  return {
    'query': {
      'bool': {
        'must': [
          {
            'multi_match': {
              'query': value,
              'fields': [
                'publiccode.name^3',
                'publiccode.description.' + language_alpha_2 + '.localizedName^3',
                'publiccode.description.' + language_alpha_2 + '.shortDescription^2',
                'publiccode.description.' + language_alpha_2 + '.longDescription'
              ]
            }
          },
          { 'term': { '_type': 'software' } }
        ],
        'must_not': [
          { 'exists': { 'field': 'publiccode.it.riuso.codiceIPA' } },
          { 'match': { 'publiccode.indendedAudience.unsupportedCountries': 'it' } }
        ]
      }
    }
  };
};

function esDevelopersItaliaAutocompleteSoftwareRiusoQuery(config, getParams) {
  esDevelopersItaliaQuery.call(this, config, getParams);
  this.searchObjectId = 'reuse_software';
}

esDevelopersItaliaAutocompleteSoftwareRiusoQuery.prototype = Object.create(esDevelopersItaliaAutocompleteAllQuery.prototype);
esDevelopersItaliaAutocompleteSoftwareRiusoQuery.prototype.getQuery = function () {
  var language = this.config['language'];
  var language_alpha_2 = language;

  var value = $(this.config['inputSelector']).val();
  return {
    'query': {
      'bool': {
        'must': [
          {
            'multi_match': {
              'query': value,
              'fields': [
                'publiccode.name^3',
                'publiccode.description.' + language_alpha_2 + '.localizedName^3',
                'publiccode.description.' + language_alpha_2 + '.shortDescription^2',
                'publiccode.description.' + language_alpha_2 + '.longDescription'
              ]
            }
          },
          { 'term': { '_type': 'software' } },
          { 'exists': { 'field': 'publiccode.it.riuso.codiceIPA' } }
        ]
      }
    }
  };
};

function esDevelopersItaliaAutocompleteAPIQuery(config, getParams) {
  esDevelopersItaliaQuery.call(this, config, getParams);
  this.searchObjectId = 'api';
}

esDevelopersItaliaAutocompleteAPIQuery.prototype = Object.create(esDevelopersItaliaAutocompleteAllQuery.prototype);
esDevelopersItaliaAutocompleteAPIQuery.prototype.getQuery = function () {
  var value = $(this.config['inputSelector']).val();
  return {
    'query': {
      'bool': {
        'must': [
          {
            'multi_match': {
              'query': value,
              'fields': [
                'title^3',
                'subtitle^2',
                'html'
              ]
            }
          }
        ],
        'filter': [
          { 'term': { 'type': 'api' } },
          { 'term': { 'lang': this.config['language'] } }
        ]
      }
    }
  };
};

function esDevelopersItaliaAutocompletePAQuery(config, getParams) {
  esDevelopersItaliaQuery.call(this, config, getParams);
  this.searchObjectId = 'pa';
}

esDevelopersItaliaAutocompletePAQuery.prototype = Object.create(esDevelopersItaliaAutocompleteAllQuery.prototype);
esDevelopersItaliaAutocompletePAQuery.prototype.getQuery = function () {
  var value = $(this.config['inputSelector']).val();
  return {
    'query': {
      'bool': {
        'must': [
          {
            'multi_match': {
              'query': value,
              'fields': [
                'it-riuso-codiceIPA-label'
              ]
            }
          },
          { 'term': { '_type': 'administration' } }
        ]
      }
    }
  };
};
