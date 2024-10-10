/*
 * This is a collection of utils for the localization used on client side code.
 * They work on the string catalogue used by jekyll
 */
import yaml from 'js-yaml';
import { SOFTWARE_OPEN, SOFTWARE_REUSE } from './constants.js';
import softwareCategoriesYml from '!raw-loader!../../../_data/publiccode_categories.yml';
import softwareDevelopmentStatusYml from '!raw-loader!../../../_data/development_status.yml';
import softwareIntendedAudiencesYml from '!raw-loader!../../../_data/publiccode_scopes.yml';
import softwarePNRRTargetsYml from '!raw-loader!../../../_data/pnrr_targets.yml';
import softwarePNRRMeasuresYml from '!raw-loader!../../../_data/pnrr_measures.yml';
import l10nYml from '!raw-loader!../../../_data/l10n.yml';

export const lang = window.lang;
const l10n = yaml.load(l10nYml);

export const l10NLabels = l10n[lang]['t'];

export const softwareTypes = [
  [SOFTWARE_OPEN, l10NLabels.software[SOFTWARE_OPEN]],
  [SOFTWARE_REUSE, l10NLabels.software[SOFTWARE_REUSE]],
];

export const getSoftwareCategories = () => {
  const softwareCategories = yaml.load(softwareCategoriesYml);
  const categoriesMap = Object.values(softwareCategories).map((value) => [
    value,
    l10NLabels.publiccode.categories[value],
  ]);
  return categoriesMap.sort((a, b) => (a[1].toLowerCase() > b[1].toLowerCase() ? 1 : -1));
};

export const getSoftwareDevelopmentStatuses = () => {
  const softwareDevelopmentStatus = yaml.load(softwareDevelopmentStatusYml);
  return Object.entries(softwareDevelopmentStatus).reduce((acc, [key, value]) => {
    acc.push([key, value[lang]]);
    return acc.sort((a, b) => (a[1].toLowerCase() > b[1].toLowerCase() ? 1 : -1));
  }, []);
};

export const getSoftwareIntendedAudiences = () => {
  const softwareIntendedAudiences = yaml.load(softwareIntendedAudiencesYml);
  const audiencesMap = Object.values(softwareIntendedAudiences).map((value) => [
    value,
    l10NLabels.publiccode.scopes[value],
  ]);
  return audiencesMap.sort((a, b) => (a[1].toLowerCase() > b[1].toLowerCase() ? 1 : -1));
};

export const softwarePNRR = [['1', l10NLabels.software.pnrr]];

export const getSoftwarePNRRTargets = () => {
  const PNRRTargets = yaml.load(softwarePNRRTargetsYml);
  return PNRRTargets.map((value) => [value, value.replace(/-/gi, ' ')]);
};

export const getSoftwarePNRRMeasures = () => {
  const PNRRMeasures = yaml.load(softwarePNRRMeasuresYml);
  return Object.entries(PNRRMeasures).reduce((acc, [key, value]) => {
    if (value) {
      acc.push([key, `${key}-${value}`]);
    } else {
      acc.push([key, `${key}`]);
    }
    return acc;
  }, []);
};
