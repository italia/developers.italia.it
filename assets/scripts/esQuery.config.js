var elasticHost = 'https://elasticsearch.developers.italia.it';

var paramKeys = [
  'publiccode.categories',
  'publiccode.intendedAudience.scope',
  'publiccode.developmentStatus',
  'keyword',
  'page',
  'mainCopyrightOwner',
  'categoryCode',
  'categoryName',
  'type',
  'sort',
  'publiccode.it.riuso.codiceIPA',
  'it-riuso-codiceIPA-label'
];

// page query config.
var pagesQueryconfig = {
  'software_open': {
    'type': ['software'],
    'elasticsearch_connection': {
      'host': elasticHost
    }
  },
  'reuse_software': {
    'type': ['software'],
    'elasticsearch_connection': {
      'host': elasticHost
    }
  },
  'administrations': {
    'type': ['software'],
    'elasticsearch_connection': {
      'host': elasticHost
    }
  },
  'category': {
    'type': ['software'],
    'elasticsearch_connection': {
      'host': elasticHost
    }
  },
  'all': {
    'elasticsearch_connection': {
      'host': elasticHost
    }
  },
  'platforms': {
    'type': ['post'],
    'elasticsearch_connection': {
      'host': elasticHost
    }
  },
  'api': {
    'type': ['post'],
    'elasticsearch_connection': {
      'host': elasticHost
    }
  }
};

var autocompleteQueryconfig = {
  'all': {
    'elasticsearch_connection': {
      'host': elasticHost
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'platforms': {
    'elasticsearch_connection': {
      'host': elasticHost
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'software_open': {
    'elasticsearch_connection': {
      'host': elasticHost
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'reuse_software': {
    'elasticsearch_connection': {
      'host': elasticHost
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'api': {
    'elasticsearch_connection': {
      'host': elasticHost
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'administrations': {
    'elasticsearch_connection': {
      'host': elasticHost
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  }
};
