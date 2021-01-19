import React from 'react';
import {
  getL10NLabels,
  getSoftwareCategories,
  getSoftwareDevelopmentStatuses,
  getSoftwareScopes,
} from '../l10nUtils.js';
import { CatalogueFiltersGroup } from './CatalogueFiltersGroup.js';
import { useDispatch } from 'react-redux';
import { setFilterCategories, setFilterDevelopmentStatuses, setFilterIntendedAudience } from '../redux/actions.js';
import { initialCategories } from '../services/searchEngine.js';
import { CatalogueSearchType } from './CatalogueSearchType.js';

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

export const CatalogueFilters = React.memo(() => {
  console.log('CatalogueFilters');
  const dispatch = useDispatch();
  const softwareCategories = getSoftwareCategories();
  const softwareScopes = getSoftwareScopes();
  const softwareDevelopmentStatuses = getSoftwareDevelopmentStatuses();
  const l10NLabels = getL10NLabels();
  const handleOnChangeFilterCategories = (values) => dispatch(setFilterCategories(getFiltersFromUserInput(values)));
  const handleOnChangeFilterDevelopmentStatuses = (values) =>
    dispatch(setFilterDevelopmentStatuses(getFiltersFromUserInput(values)));
  const handleOnChangeFilterIntendedAudiences = (values) =>
    dispatch(setFilterIntendedAudience(getFiltersFromUserInput(values)));

  return (
    <div className="col-md-3 d-none d-md-block">
      <CatalogueSearchType />
      <CatalogueFiltersGroup
        title={l10NLabels.software.categories}
        filters={softwareCategories}
        defaultValues={defaultCategories}
        onChange={handleOnChangeFilterCategories}
      />
      <CatalogueFiltersGroup
        title={l10NLabels.software.intended_audience}
        filters={softwareScopes}
        onChange={handleOnChangeFilterIntendedAudiences}
      />
      <CatalogueFiltersGroup
        title={l10NLabels.software.development_status}
        filters={softwareDevelopmentStatuses}
        onChange={handleOnChangeFilterDevelopmentStatuses}
      />
    </div>
  );
});

CatalogueFilters.displayName = 'CatalogueFilters';
