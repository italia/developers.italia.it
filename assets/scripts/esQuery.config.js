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
      'host': '/elasticsearch/'
    }
  },
  'reuse_software': {
    'type': ['software'],
    'elasticsearch_connection': {
      'host': '/elasticsearch/'
    }
  },
  'administrations': {
    'type': ['software'],
    'elasticsearch_connection': {
      'host': '/elasticsearch/'
    }
  },
  'category': {
    'type': ['software'],
    'elasticsearch_connection': {
      'host': '/elasticsearch/'
    }
  },
  'all': {
    'elasticsearch_connection': {
      'host': '/elasticsearch/'
    }
  },
  'platforms': {
    'type': ['post'],
    'elasticsearch_connection': {
      'host': '/elasticsearch/'
    }
  },
  'api': {
    'type': ['post'],
    'elasticsearch_connection': {
      'host': '/elasticsearch/'
    }
  }
};

var autocompleteQueryconfig = {
  'all': {
    'elasticsearch_connection': {
      'host': '/elasticsearch/'
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'platforms': {
    'elasticsearch_connection': {
      'host': '/elasticsearch/'
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'software_open': {
    'elasticsearch_connection': {
      'host': '/elasticsearch/'
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'reuse_software': {
    'elasticsearch_connection': {
      'host': '/elasticsearch/'
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'api': {
    'elasticsearch_connection': {
      'host': '/elasticsearch/'
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  },
  'administrations': {
    'elasticsearch_connection': {
      'host': '/elasticsearch/'
    },
    'inputSelector': 'form .autocomplete input',
    'size': 9
  }
};
