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
  queryContextDispatch,
  setFilterCategories,
  setFilterDevelopmentStatuses,
  setFilterIntendedAudience,
  setType,
} from '../../contexts/searchContext.js';

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

// N.B. In case of input props we should use useMemo and useCallback optimization
export const CatalogueFilters = React.memo(() => {
  console.log('CatalogueFilters');
  const softwareCategories = getSoftwareCategories();
  const softwareIntendedAudiences = getSoftwareIntendedAudiences();
  const softwareDevelopmentStatuses = getSoftwareDevelopmentStatuses();
  const dispatch = useContext(queryContextDispatch);

  return (
    <>
      <CatalogueFiltersGroup
        title={l10NLabels.software.type}
        filters={softwareTypes}
        defaultValues={defaultTypes}
        onChange={(values) => {
          const [type] = getFiltersFromUserInput(values);
          if (type) {
            dispatch(setType(type));
          } else {
            dispatch(setType(null));
          }
        }}
        singleSelect={true}
      />
      <CatalogueFiltersGroup
        title={l10NLabels.software.categories}
        filters={softwareCategories}
        defaultValues={defaultCategories}
        onChange={(values) => {
          const categories = getFiltersFromUserInput(values);
          dispatch(setFilterCategories(categories));
        }}
      />
      <CatalogueFiltersGroup
        title={l10NLabels.software.intended_audience}
        filters={softwareIntendedAudiences}
        onChange={(values) => {
          const intendedAudiences = getFiltersFromUserInput(values);
          dispatch(setFilterIntendedAudience(intendedAudiences));
        }}
      />
      <CatalogueFiltersGroup
        title={l10NLabels.software.development_status}
        filters={softwareDevelopmentStatuses}
        onChange={(values) => {
          const developmentStatuses = getFiltersFromUserInput(values);
          dispatch(setFilterDevelopmentStatuses(developmentStatuses));
        }}
      />
    </>
  );
});

CatalogueFilters.displayName = 'CatalogueFilters';
