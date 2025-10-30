import {
  ADMINISTRATION,
  ALL_CATALOGUE,
  ALL_SITE,
  API,
  PLATFORM,
  SOFTWARE_OPEN,
  SOFTWARE_REUSE,
} from '../utils/constants.js';
import { lang } from '../utils/l10n.js';
import { queryAdministration, queryAllSite, queryApi, queryPlatform, querySoftware } from '../api/elasticSearch.js';

const LOGO_IT = '/assets/icons/logo-it.png';

/**
 * Helper function to find the appropriate language description
 * according to IETF BCP 47 standards, handling variants like it-IT
 */
function getDescriptionField(source, currentLang) {
  if (!source.publiccode?.description) {
    return null;
  }

  const descriptions = source.publiccode.description;
  const descKeys = Object.keys(descriptions);

  if (descKeys.length === 0) {
    return null;
  }

  // 1. Exact match
  if (descriptions[currentLang]) {
    return descriptions[currentLang];
  }

  // 2. Look for variants (e.g. it-IT when currentLang is 'it')
  const baseLang = currentLang.split('-')[0];
  const variants = descKeys.filter((key) => key.startsWith(baseLang + '-'));

  if (variants.length > 0) {
    return descriptions[variants[0]];
  }

  // 3. Fallback to preferred languages
  if (descriptions['en']) {
    return descriptions['en'];
  }

  if (descriptions['it']) {
    return descriptions['it'];
  }

  // 4. Last resort: take the first available description
  return descriptions[descKeys[0]];
}

export const search = async (type, { searchValue, filters = {}, sortBy = 'relevance', from = 0, size = 12 } = {}) => {
  const params = {
    searchValue,
    filters,
    sortBy,
    from,
    size,
  };

  let queryResults = [[], 0];
  if (type === ALL_SITE) {
    queryResults = await queryAllSite(params);
  } else if (type === SOFTWARE_OPEN) {
    queryResults = await querySoftware({ ...params, type: SOFTWARE_OPEN });
  } else if (type === SOFTWARE_REUSE) {
    queryResults = await querySoftware({ ...params, type: SOFTWARE_REUSE });
  } else if (type === ALL_CATALOGUE) {
    // Query all catalogue
    queryResults = await querySoftware(params);
  } else if (type === PLATFORM) {
    queryResults = await queryPlatform(params);
  } else if (type === ADMINISTRATION) {
    queryResults = await queryAdministration(params);
  } else if (type === API) {
    queryResults = await queryApi(params);
  }

  const [results, total] = queryResults;
  const items = mapESResultsToItems(results);
  return [items, total];
};

/* eslint-disable no-underscore-dangle */
const mapESResultsToItems = (results) =>
  results.map((result) => {
    switch (result._source.type) {
      case 'administration':
        return { ...administrationItem(result._source), id: result._id };
      case 'software':
        return { ...softwareItem(result._source), id: result._id };
      case 'platform':
        return { ...platformItem(result._source), id: result._id };
      case 'api':
        return { ...apiItem(result._source), id: result._id };
      case 'news':
        return { ...newsItem(result._source), id: result._id };
      default:
        // The rest are pages (e.g /it/come-lo-uso.html)
        return { ...pageItem(result._source), id: result._id };
    }
  });
/* eslint-enable no-underscore-dangle */

const administrationItem = (source) => ({
  category: 'administration',
  description: '',
  icon: 'it-pa',
  logo: '/assets/images/cover_amministrazioni.png',
  fallback: '/assets/images/cover_amministrazioni.png',
  name: source['it-riuso-codiceIPA-label'],
  url: `/${lang}/pa/${source['it-riuso-codiceIPA']}`,
});

const softwareItem = (source) => {
  const descriptionField = getDescriptionField(source, lang);

  // Handle case where no description is available
  const description = descriptionField?.shortDescription ? cropString(descriptionField.shortDescription) : '';

  const name = descriptionField?.localisedName ?? source.publiccode.name;

  // Create a default empty object for 'it' if it doesn't exist
  // This ensures source.publiccode.IT will never be undefined
  if (source.publiccode && !source.publiccode.IT) {
    source.publiccode.IT = {};
  }

  // Handle safely accessing nested properties that might not exist
  const ipaCode = source.publiccode?.it?.riuso?.codiceIPA;
  const category = getSoftwareCategory(ipaCode);
  const icon = category === SOFTWARE_REUSE ? 'it-software' : 'it-open-source';

  const fallback =
    category === SOFTWARE_REUSE
      ? '/assets/images/cover_softwareriuso.png'
      : '/assets/images/cover_software_opensource.png';
  let logo = descriptionField?.screenshots?.[0] ?? source.publiccode?.logo ?? fallback;
  // workaround for SVG logo/screens in Github #461
  if (/github/.test(logo) && /\.svg$/.test(logo)) {
    logo += '?sanitize=true';
  }

  const url = `/${lang}/software/${source.slug.toLowerCase()}`;

  return {
    category,
    description,
    icon,
    logo,
    fallback,
    name,
    url,
  };
};

const getSoftwareCategory = (IPACode) => (IPACode ? SOFTWARE_REUSE : SOFTWARE_OPEN);

const newsItem = (source) => ({
  category: 'news',
  description: cropString(source.subtitle),
  icon: 'it-horn',
  logo: source.image,
  fallback: LOGO_IT,
  name: source.title,
  url: source.url,
});

const platformItem = (source) => {
  const description = cropString(source.description);
  return {
    category: 'platform',
    description,
    icon: 'it-piattaforme',
    logo: source.logo ?? '/assets/images/cover_piattaforme.png',
    fallback: '/assets/images/cover_piattaforme.png',
    name: source.title,
    url: source.url,
  };
};

const apiItem = (source) => ({
  category: 'api',
  description: cropString(source.abstract),
  icon: 'it-settings',
  logo: source?.contact?.logo ?? '/assets/images/cover_api.png',
  fallback: '/assets/images/cover_api.png',
  name: source.title,
  url: source.url,
});

const pageItem = (source) => ({
  category: 'page',
  description: cropString(source.text),
  icon: 'it-file',
  logo: source.image ?? LOGO_IT,
  fallback: LOGO_IT,
  name: source.title,
  url: source.url,
});

const cropString = (value) => {
  if (!value || typeof value !== 'string') {
    return '';
  }
  return value.length >= 100 ? value.substr(0, 100).concat('...') : value;
};
