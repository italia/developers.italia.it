/*
 * This is a collection of utils for the localization used on client side code.
 * They work on the string catalogue used by jekyll
 */
import yaml from 'js-yaml';
import softwareCategoriesYml from '!raw-loader!../../../_data/software_categories.yml';
import developmentStatusYml from '!raw-loader!../../../_data/development_status.yml';
import softwareScopesYml from '!raw-loader!../../../_data/crawler/software_scopes.yml';
import l10nYml from '!raw-loader!../../../_data/l10n.yml';

const lang = 'it';
const l10n = yaml.load(l10nYml);

export const getL10NLabels = () => l10n[lang]['t'];

export const getSoftwareCategories = () => {
  const softwareCategories = yaml.load(softwareCategoriesYml);
  return Object.entries(softwareCategories).reduce((acc, [key, value]) => {
    acc[key] = value['en']; // TODO: translation in Italian
    return acc;
  }, {});
};

export const getSoftwareDevelopmentStatuses = () => {
  const developmentStatus = yaml.load(developmentStatusYml);
  return Object.entries(developmentStatus).reduce((acc, [key, value]) => {
    acc[key] = value[lang];
    return acc;
  }, {});
};

export const getSoftwareScopes = () => {
  const softwareScopes = yaml.load(softwareScopesYml);
  // TODO: translation in Italian
  return softwareScopes.reduce((acc, value) => {
    acc[value] = value;
    return acc;
  }, {});
};
