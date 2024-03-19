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

  return allData
    .filter(publisher => publisher.alternativeId)
    .map(publisher => ({ entityName: publisher.description, ipa: publisher.alternativeId }));
}

const url = 'https://api.developers.italia.it/v1/publishers';

async function run() {
  const data = await fetchData(url);

  fs.writeFileSync('_data/crawler/amministrazioni.yml', yaml.dump(data));
}

run();
