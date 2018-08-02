var paramKeys = [
  'tags',
  'developmentStatus',
  'keyword',
  'page',
  'mainCopyrightOwner',
  'categoryCode',
  'categoryName',
  'type',
  'sort',
  'it-riuso-codiceIPA',
  'it-riuso-codiceIPA-label'
];

// page query config.
var pagesQueryconfig = {
  'software_open': {
    'type': ['software'],
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    }
  },
  'reuse_software': {
    'type': ['software'],
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    }
  },
  'administrations': {
    'type': ['software'],
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    }
  },
  'category': {
    'type': ['software'],
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    }
  },
  'all': {
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    }
  },
  'platforms': {
    'type': ['post'],
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    }
  },
  'api': {
    'type': ['post'],
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    }
  }
};

var autocompleteQueryconfig = {
  'all': {
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'platforms': {
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'software_open': {
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'reuse_software': {
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'api': {
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'administrations': {
    'elasticsearch_connection': {
      'host': 'https://elasticsearch.developers.italia.it'
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  }
};
