const fs = require('fs');
const path = require('path');
const axios = require('axios');
const yaml = require('js-yaml');
const { addAbortSignal } = require('stream');
const { normalize } = require('path');

const normalizeRepoUrl = (url) => url.toLowerCase().replace(/.git$/, '');
const absoluteUrl = (url, repo) => {
  if (!url || (/^http(s)?:\/\//i).test(url)) {
    return url;
  }

  const repoUrl = new URL(normalizeRepoUrl(repo));

  switch (repoUrl.host.toLowerCase()) {
    case 'github.com':
      return 'https://raw.githubusercontent.com' + path.join(repoUrl.pathname, 'HEAD', url)
    case 'bitbucket.org':
      return 'https://bitbucket.org' + path.join(repoUrl.pathname, 'raw/HEAD', url)
    default:
      // GitLab
      return `${repoUrl.protocol}//${repoUrl.hostname}` + path.join(repoUrl.pathname, '-/raw/HEAD', url)
  }
};

const addSlug = (software) => ({ ...software, slug: software.id });
const addAliases = (software) => {
  const aliases = [normalizeRepoUrl(software.url), ...software.aliases.map(a => normalizeRepoUrl(a))];

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

  allData = allData
    .map(software => addAliases(addSlug(software)))
    .map(software => addSlug(software))
    .map(software => addPubliccodeDict(software))
    .map(software => ({ ...software, publiccode: { ...software.publiccode, logo: absoluteUrl(software.publiccode.logo, software.url) } }));

  allData.forEach(software => {
    Object.keys(software.publiccode.description).forEach(lang => {
      const desc = software.publiccode.description[lang];
      software.publiccode.description[lang].screenshots = desc.screenshots?.map(ss => absoluteUrl(ss, software.url));
    })
  });

  return allData;
}

const url = 'https://api.developers.italia.it/v1/software';

async function run() {
  const data = await fetchData(url);

  fs.writeFileSync('_data/crawler/software.yml', yaml.dump(data));
}

run();
