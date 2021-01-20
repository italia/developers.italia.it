/*
 * This is a collection of utils for the localization used on client side code.
 * They work on the string catalogue used by jekyll
 */
import yaml from 'js-yaml';
import softwareCategoriesYml from '!raw-loader!../../../_data/crawler/software_categories.yml';
import softwareDevelopmentStatusYml from '!raw-loader!../../../_data/development_status.yml';
import softwareIntendedAudiencesYml from '!raw-loader!../../../_data/crawler/software_scopes.yml';
import l10nYml from '!raw-loader!../../../_data/l10n.yml';

const lang = 'it';
const l10n = yaml.load(l10nYml);

export const l10NLabels = l10n[lang]['t'];

export const getSoftwareCategories = () => {
  const softwareCategories = yaml.load(softwareCategoriesYml);
  // TODO: translation in italian
  return softwareCategories.map((value) => [value, value.replace(/-/gi, ' ')]);
};

export const getSoftwareDevelopmentStatuses = () => {
  const softwareDevelopmentStatus = yaml.load(softwareDevelopmentStatusYml);
  return Object.entries(softwareDevelopmentStatus).reduce((acc, [key, value]) => {
    acc.push([key, value[lang]]);
    return acc;
  }, []);
};

export const getSoftwareIntendedAudiences = () => {
  const softwareIntendedAudiences = yaml.load(softwareIntendedAudiencesYml);
  // TODO: translation in Italian
  return softwareIntendedAudiences.map((value) => [value, value.replace(/-/gi, ' ')]);
};
