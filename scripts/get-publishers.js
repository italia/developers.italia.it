const fs = require('fs');
const axios = require('axios');
const yaml = require('js-yaml');

async function fetchData(url, pageSize = 100) {
  let afterCursor = '';
  let allData = [];

  do {
    const response = await axios.get(url, {
      params: {
        'page[size]': pageSize,
        'page[after]': afterCursor,
      },
    });
    allData = allData.concat(response.data.data);
    afterCursor = response.data.links.next ? response.data.links.next.split('page[after]=')[1] : '';
  } while (afterCursor);

  return allData;
}

function toElasticSearchBulkFile(data, filename) {
  data
    .filter(publisher => publisher.alternativeId)
    .forEach(publisher => {
      const metadata = {
        'index': {
          '_index': 'developers_italia_it',
          '_id': publisher.id,
        }
      }
      fs.writeFileSync(filename, JSON.stringify(metadata) + '\n', { flag: 'a' });

      const doc = {
        'it-riuso-codiceIPA-label': publisher.description,
        'it-riuso-codiceIPA': publisher.alternativeId,
        'type': 'administration',
      }
      fs.writeFileSync(filename, JSON.stringify(doc) + '\n', { flag: 'a' });
    })
}

const url = 'https://api.developers.italia.it/v1/publishers';

async function run() {
  const publishers = await fetchData(url);

  toElasticSearchBulkFile(publishers, 'elasticsearch.bulk')

  // Adapt the data structure to the legacy amministrazioni.yml format
  data = publishers
    .filter(publisher => publisher.alternativeId)
    .map(publisher => ({ entityName: publisher.description, ipa: publisher.alternativeId }));
  fs.writeFileSync('_data/crawler/amministrazioni.yml', yaml.dump(data));
}

run();
