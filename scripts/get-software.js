const fs = require('fs');
const axios = require('axios');
const yaml = require('js-yaml');
const { addAbortSignal } = require('stream');
const { normalize } = require('path');

const normalizeUrl = (url) => url.toLowerCase().replace(/.git$/, '');

const addSlug = (software) => ({ ...software, slug: software.id });
const addAliases = (software) => {
  const aliases = [normalizeUrl(software.url), ...software.aliases.map(a => normalizeUrl(a))];

  const uniqNames = [...new Set(aliases.map(a => a.replace('https://', '')))];

  return { ...software, alias_pages: uniqNames }
}
const addPubliccodeDict = (software) => {
  const publiccode = yaml.load(software.publiccodeYml);

  return { ...software, publiccode }
}

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
    .map(software => addAliases(addSlug(software)))
    .map(software => addSlug(software))
    .map(software => addPubliccodeDict(software));
}

const url = 'https://api.developers.italia.it/v1/software';

async function run() {
  const data = await fetchData(url);

  fs.writeFileSync('_data/crawler/software.yml', yaml.dump(data));
}

run();
