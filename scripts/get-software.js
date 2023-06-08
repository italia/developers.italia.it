const fs = require('fs');
const axios = require('axios');
const yaml = require('js-yaml');

const addSlug = (software) => ({ ...software, slug: software.id });

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

  allData.forEach((software, i) => {
    allData[i] = addSlug(software);
  });

  return allData;
}

const url = 'https://api.developers.italia.it/v1/software';

async function run() {
  const data = await fetchData(url);

  fs.writeFileSync('_data/crawler/software.yml', yaml.dump(data));
}

run();
