const fs = require('fs');
const path = require('path');
const axios = require('axios');
const yaml = require('js-yaml');

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

  return allData;
}

function toElasticSearchBulkFile(software, filename) {
  software
    .map(software => addSlug(software))
    .map(software => addPubliccodeDict(software))
    .map(software => ({ ...software, publiccode: { ...software.publiccode, logo: absoluteUrl(software.publiccode.logo, software.url) } }))
    .forEach(s => {
      const metadata = {
        'index': {
          '_index': 'software',
          '_id': s.id,
        }
      }
      fs.writeFileSync(filename, JSON.stringify(metadata) + '\n', { flag: 'a' });

      const doc = {
        'crawltime': s.updatedAt,
        'slug': s.slug,
        'publiccode': s.publiccode,
        'type': 'software',
      }
      fs.writeFileSync(filename, JSON.stringify(doc) + '\n', { flag: 'a' });
    })
}

const url = 'https://api.developers.italia.it/v1/software';

async function run() {
  const software = await fetchData(url);

  toElasticSearchBulkFile(software, 'elasticsearch.bulk')

  // Adapt the data structure to the legacy software.yml format
  const data = software
    .map(software => addAliases(addSlug(software)))
    .map(software => addSlug(software))
    .map(software => addPubliccodeDict(software))
    .map(software => ({ ...software, publiccode: { ...software.publiccode, logo: absoluteUrl(software.publiccode.logo, software.url) } }));

  data.forEach(software => {
    Object.keys(software.publiccode.description).forEach(lang => {
      const desc = software.publiccode.description[lang];
      software.publiccode.description[lang].screenshots = desc.screenshots?.map(ss => absoluteUrl(ss, software.url));
    })
  });

  fs.writeFileSync('_data/crawler/software.yml', yaml.dump(data));
}

run();
