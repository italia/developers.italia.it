import React from 'react';
import {
  l10NLabels,
  getSoftwareCategories,
  getSoftwareDevelopmentStatuses,
  getSoftwareIntendedAudiences,
} from '../utils/l10n.js';
import { CatalogueFiltersGroup } from './CatalogueFiltersGroup.js';
import { useDispatch } from 'react-redux';
import { setFilterCategories, setFilterDevelopmentStatuses, setFilterIntendedAudience } from '../redux/actions.js';
import { CatalogueSearchType } from './CatalogueSearchType.js';
import { initialCategories } from '../utils/urlSearchParams.js';

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

// N.B. In case of input props we should use useMemo and useCallback optimization
export const CatalogueFilters = React.memo(() => {
  console.log('CatalogueFilters');
  const dispatch = useDispatch();
  const softwareCategories = getSoftwareCategories();
  const softwareIntendedAudiences = getSoftwareIntendedAudiences();
  const softwareDevelopmentStatuses = getSoftwareDevelopmentStatuses();

  return (
    <>
      <CatalogueSearchType />
      <CatalogueFiltersGroup
        title={l10NLabels.software.categories}
        filters={softwareCategories}
        defaultValues={defaultCategories}
        onChange={(values) => dispatch(setFilterCategories(getFiltersFromUserInput(values)))}
      />
      <CatalogueFiltersGroup
        title={l10NLabels.software.intended_audience}
        filters={softwareIntendedAudiences}
        onChange={(values) => dispatch(setFilterIntendedAudience(getFiltersFromUserInput(values)))}
      />
      <CatalogueFiltersGroup
        title={l10NLabels.software.development_status}
        filters={softwareDevelopmentStatuses}
        onChange={(values) => dispatch(setFilterDevelopmentStatuses(getFiltersFromUserInput(values)))}
      />
    </>
  );
});

CatalogueFilters.displayName = 'CatalogueFilters';
