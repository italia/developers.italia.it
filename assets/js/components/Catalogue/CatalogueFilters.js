import React, { useContext } from 'react';
import {
  l10NLabels,
  getSoftwareCategories,
  getSoftwareDevelopmentStatuses,
  getSoftwareIntendedAudiences,
  softwareTypes,
} from '../../utils/l10n.js';
import { CatalogueFiltersGroup } from './CatalogueFiltersGroup.js';
import { initialCategories, initialType } from '../../utils/urlSearchParams.js';
import {
  searchContextDispatch,
  setFilterCategories,
  setFilterDevelopmentStatuses,
  setFilterIntendedAudience,
  setType,
} from '../../contexts/searchContext.js';
import { ALL_CATALOGUE } from '../../utils/constants.js';

const getFiltersFromUserInput = (values) => {
  const filters = Object.entries(values).reduce((acc, [key, value]) => {
    if (value) acc.push(key);
    return acc;
  }, []);
  return filters;
};

const defaultCategories = initialCategories.reduce((acc, filterValue) => {
  acc[filterValue] = true;
  return acc;
}, {});

const defaultTypes = initialType ? { [initialType]: true } : {};

const softwareCategories = getSoftwareCategories();
const softwareIntendedAudiences = getSoftwareIntendedAudiences();
const softwareDevelopmentStatuses = getSoftwareDevelopmentStatuses();

export const CatalogueFilters = React.memo(() => {
  const dispatch = useContext(searchContextDispatch);

  const handleChangeOnTypes = (values) => {
    const [type] = getFiltersFromUserInput(values);
    if (type) {
      dispatch(setType(type));
    } else {
      dispatch(setType(ALL_CATALOGUE));
    }
  };

  const handleChangeOnCategories = (values) => {
    const categories = getFiltersFromUserInput(values);
    dispatch(setFilterCategories(categories));
  };

  const handleChangeOnIntendedAudiences = (values) => {
    const intendedAudiences = getFiltersFromUserInput(values);
    dispatch(setFilterIntendedAudience(intendedAudiences));
  };

  const handleChangeOnDevelopmentStatuses = (values) => {
    const developmentStatuses = getFiltersFromUserInput(values);
    dispatch(setFilterDevelopmentStatuses(developmentStatuses));
  };

  return (
    <>
      <CatalogueFiltersGroup
        title={l10NLabels.software.type}
        filters={softwareTypes}
        defaultValues={defaultTypes}
        onChange={handleChangeOnTypes}
        singleSelect={true}
      />
      <CatalogueFiltersGroup
        title={l10NLabels.software.categories}
        filters={softwareCategories}
        defaultValues={defaultCategories}
        onChange={handleChangeOnCategories}
      />
      <CatalogueFiltersGroup
        title={l10NLabels.software.intended_audience}
        filters={softwareIntendedAudiences}
        onChange={handleChangeOnIntendedAudiences}
      />
      <CatalogueFiltersGroup
        title={l10NLabels.software.development_status}
        filters={softwareDevelopmentStatuses}
        onChange={handleChangeOnDevelopmentStatuses}
      />
    </>
  );
});

CatalogueFilters.displayName = 'CatalogueFilters';
