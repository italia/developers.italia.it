'use strict';

function esDevelopersItaliaQuery(config) {
  var defaultConfig = {
    'fields': [],
    'language': 'it',
    // css selector
    'fullTextSearch': '',
    'totalSelector': '.results-number',
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
    'pageContent': '.list-item-sorting > div'
  };
  this.config = $.extend(defaultConfig, config);
  this.replaceFullTextSearchFieldsLanguage();

  this.throbber = null;

  this.languages = {
    'it': 'ita',
    'en': 'eng'
  };

  this.readMore = {
    'it': 'Leggi di più',
    'en': 'read more'
  };

  console.log(this.config.filter);

  this.templates = Handlebars.templates;

  this.client = new elasticsearch.Client(this.config['elasticsearch_connection']);
};

esDevelopersItaliaQuery.prototype.replaceFullTextSearchFieldsLanguage = function() {
  this.config['fields'] = this.config['fields'].map(function(field){
    return field.replace("###LANGUAGE###", this.config.language);
  }, this);
};

esDevelopersItaliaQuery.prototype.setThrobber = function(throbber) {
  this.throbber = throbber;
};

esDevelopersItaliaQuery.prototype.getFullTextSearchFields = function() {
  return this.config['fields'].slice(0);
};

esDevelopersItaliaQuery.prototype.getFullTextSearchValue = function() {
  if(this.config['fullTextSearch'].length == 0) {
    return false;
  }

  // fullTextSearch must be a css selector.
  return $(this.config.fullTextSearch).val();
};

esDevelopersItaliaQuery.prototype.getFullTextSearch = function() {
  var fields = this.getFullTextSearchFields();
  var value = this.getFullTextSearchValue();

  if (value == false) {
    return false;
  }

  return {
    'multi_match': {
      'query': value,
      'fields': fields
    }
  }
};

esDevelopersItaliaQuery.prototype.getMustInQuery = function() {
  if (this.config['must'].length == 0) {
    return false;
  }

  return this.config['must'].slice(0);
};

esDevelopersItaliaQuery.prototype.getMustNotInQuery = function() {
  if (this.config['must_not'].length == 0) {
    return false;
  }

  return this.config['must_not'].slice(0);
};

esDevelopersItaliaQuery.prototype.getShouldInQuery = function() {
  if (this.config['should'].length == 0) {
    return false;
  }

  return this.config['should'].slice(0);
};

esDevelopersItaliaQuery.prototype.getFilterInQuery = function() {
  return this.config['filter'];
};

esDevelopersItaliaQuery.prototype.getIndexQuery = function(response){
  return this.config['index'];
};

esDevelopersItaliaQuery.prototype.getDocumentTypeQuery = function(response){
  return Array.isArray(this.config['type']) ? this.config['type'].slice(0) : this.config['type'];
};

esDevelopersItaliaQuery.prototype.getFromQuery = function(response){
  return (typeof this.config['page'] == 'undefined') ? 0 : this.config['page'] * this.config['size'];
};

esDevelopersItaliaQuery.prototype.getSizeQuery = function(response){
  return this.config['size'];
};

esDevelopersItaliaQuery.prototype.esSearchSuccessCallback = function(response){
  console.log("RESPONSE: ", response);
  var html = '';
  if ((typeof response.hits != 'undefined') && (typeof response.hits.hits != 'undefined') && Array.isArray(response.hits.hits)) {
    this.throbber.stop();
    this.renderResultCount(response.hits.total);
    for (var i = 0; i < response.hits.hits.length; i++) {
      console.log(response.hits.hits[i]);
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
  }
};

esDevelopersItaliaQuery.prototype.esSearchErrorCallback = function(error){
  console.log(error);
};

esDevelopersItaliaQuery.prototype.executeESQuery = function() {
  var query = {
    'query': {}
  };
  var fullTextSearch = this.getFullTextSearch();
  var must = this.getMustInQuery();
  var mustNot = this.getMustNotInQuery();
  var should = this.getShouldInQuery();
  var filter = this.getFilterInQuery();
  var index = this.getIndexQuery();
  var type = this.getDocumentTypeQuery();
  var esThis = this;

  query['query']['bool'] = {};

  if (fullTextSearch != false) {
    must.push(fullTextSearch);
  }

  if (must != false) {
    query['query']['bool']['must'] = must;
  }

  if (mustNot != false) {
    query['query']['bool']['must_not'] = mustNot;
  }

  if (should != false) {
    query['query']['bool']['should'] = should;
  }

  if (filter != false) {
    query['query']['bool']['filter'] = filter;
  }

  var params = {
    'index': index,
    'body': query,
    'from': this.getFromQuery(),
    'size': this.getSizeQuery()
  };

  if(type.length > 0) {
    params['type'] = type;
  }

  console.log(params);

  this.client.search(params).then(
    function(response) {
      esThis.esSearchSuccessCallback.call(esThis, response);
    },
    function(error) {
      esThis.esSearchErrorCallback.call(esThis, error);
    }
  );
};

esDevelopersItaliaQuery.prototype.renderResultCount = function(tot) {
  var language = this.config['language'];
  $(this.config['totalSelector']).html(this.templates.tot({
    'tot': tot,
    'text': this.config['totalText'][language]
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
    'name': software.name,
    'localisedName': localisedName,
    'language': this.config['language'],
    'screenshot': screenshot,
    'readMore': this.readMore[language]
  };

  return this.templates.software(data);
}

esDevelopersItaliaQuery.prototype.renderPost = function() {
  return 'Post';
}
