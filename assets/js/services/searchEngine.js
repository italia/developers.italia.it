import {
  ADMINISTRATION,
  ALL_CATALOGUE,
  ALL_SITE,
  PLATFORM,
  SOFTWARE_OPEN,
  SOFTWARE_REUSE
} from '../utils/constants.js';
import { querySoftware, queryAllSite, queryPlatform, queryAdministration } from '../api/elasticSearch.js';
import PropTypes from 'prop-types';

export const searchItemProptypes = PropTypes.exact({
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const search = async (type, { searchValue, filters = {}, sortBy = {}, from = 0, size = 12 } = {}) => {
  const params = {
    searchValue,
    filters,
    sortBy,
    from,
    size,
  };

  let queryResults;
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
  }

  const [results, total] = queryResults;
  const items = mapESResultsToItems(results);
  return [items, total];
};

// TODO: make this switch more readable

const mapESResultsToItems = (results) => {
  return results.map((result) => {
    switch (result._type) {
      case 'administration':
        return { ...administrationItem(result._source), id: result._id };
      case 'software':
        return { ...softwareItem(result._source), id: result._id };
      case 'post':
        if (result._source.type === 'news') {
          return { ...newsItem(result._source), id: result._id };
        }
        if (result._source.type === 'platform') {
          return { ...platformItem(result._source), id: result._id };
        }
        if (result._source.type === 'api') {
          return { ...apiItem(result._source), id: result._id };
        }

        // The rest are pages (e.g /it/come-lo-uso.html)
        return { ...pageItem(result._source), id: result._id };
    }
  });
};

const administrationItem = (source) => {
  const language = 'it';
  return {
    category: 'administration',
    description: '',
    icon: 'icon-type-administration',
    logo: '/assets/images/cover_amministrazioni.png',
    name: source['it-riuso-codiceIPA-label'],
    url: `/${language}/pa/${source['it-riuso-codiceIPA']}`,
  };
};

const softwareItem = (source) => {
  const language = 'it'; // TODO i18n;

  const descriptionField =
    source.publiccode.description?.[language] ??
    source.publiccode.description['en'] ??
    source.publiccode.description['it'];
  const description = cropString(descriptionField.shortDescription);

  const name = descriptionField.localisedName ?? source.publiccode.name;

  const category = getSoftwareCategory(source.publiccode.it.riuso?.codiceIPA);
  const icon = `icon-type-${category}`;

  const placeholder =
    category === SOFTWARE_REUSE
      ? '/assets/images/cover_softwareriuso.png'
      : '/assets/images/cover_software_opensource.png';
  let logo = descriptionField?.screenshots?.[0] ?? source.publiccode?.logo ?? placeholder;
  // workaround for SVG logo/screens in Github #461
  if (/github/.test(logo) && /\.svg$/.test(logo)) logo += '?sanitize=true';

  const url = `/${language}/software/${source.slug.toLowerCase()}`;

  return {
    category,
    description,
    icon,
    logo,
    name,
    url,
  };
};

const getSoftwareCategory = (IPACode) => (IPACode ? SOFTWARE_REUSE : SOFTWARE_OPEN);

const newsItem = (source) => ({
  category: 'news',
  description: cropString(source.subtitle),
  icon: 'icon-type-news',
  logo: source.image,
  name: source.title,
  url: source.url,
});

const platformItem = (source) => {
  const description = cropString(source.description);
  return {
    category: 'platform',
    description,
    icon: `icon-type-platform`,
    logo: source.logo ?? '/assets/images/cover_piattaforme.png',
    name: source.title,
    url: source.url,
  };
};

const apiItem = (source) => {
  return {
    category: 'api',
    description: cropString(source.abstract),
    icon: `icon-type-api`,
    logo: source?.contact?.logo ?? '/assets/images/cover_api.png',
    name: source.title,
    url: source.url,
  };
};

const pageItem = (source) => ({
  category: 'page',
  description: cropString(source.text),
  icon: `icon-type-unknown`,
  logo: source.image ?? '/assets/icons/logo-it.png',
  name: source.title,
  url: source.url,
});

const cropString = (value) => (value.length >= 100 ? value.substr(0, 100).concat('...') : value);
