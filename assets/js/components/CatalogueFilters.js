import React from 'react';
import {
  getL10NLabels,
  getSoftwareCategories,
  getSoftwareDevelopmentStatuses,
  getSoftwareScopes,
  getSoftwareTypes,
} from '../l10nUtils.js';
import { CatalogueFiltersGroup } from './CatalogueFiltersGroup.js';
import { useDispatch } from 'react-redux';
import {
  SET_FILTERS_CATEGORIES,
  SET_FILTERS_DEVELOPMENT_STATUTES,
  SET_FILTERS_INTENDED_AUDIENCES,
  SET_SEARCH_TYPE,
} from '../redux/actions.js';
import { initialSearchType, initialCategories } from '../services/searchEngine.js';

export const CatalogueFilters = React.memo(() => {
  console.log('CatalogueFilters');
  const dispatch = useDispatch();
  const softwareTypes = getSoftwareTypes();
  const softwareCategories = getSoftwareCategories();
  const softwareScopes = getSoftwareScopes();
  const softwareDevelopmentStatuses = getSoftwareDevelopmentStatuses();
  const l10NLabels = getL10NLabels();
  const handleOnChangeFilterCategories = (values) => {
    const categories = Object.entries(values).reduce((acc, [key, value]) => {
      if (value) acc.push(key);
      return acc;
    }, []);
    dispatch({
      type: SET_FILTERS_CATEGORIES,
      value: categories,
    });
  };
  const handleOnChangeFilterDevelopmentStatuses = (values) => {
    const developmentStatuses = Object.entries(values).reduce((acc, [key, value]) => {
      if (value) acc.push(key);
      return acc;
    }, []);
    dispatch({
      type: SET_FILTERS_DEVELOPMENT_STATUTES,
      value: developmentStatuses,
    });
  };

  const handleOnChangeFilterIntendedAudiences = (values) => {
    const intendedAudiences = Object.entries(values).reduce((acc, [key, value]) => {
      if (value) acc.push(key);
      return acc;
    }, []);
    dispatch({
      type: SET_FILTERS_INTENDED_AUDIENCES,
      value: intendedAudiences,
    });
  };

  const handleOnChangeSearchType = (values) => {
    const searchType = Object.entries(values).reduce((acc, [key, value]) => {
      if (value) acc.push(key);
      return acc;
    }, []);
    dispatch({
      type: SET_SEARCH_TYPE,
      value: searchType[0],
    });
  };

  return (
    <div className="col-md-3 d-none d-md-block">
      <CatalogueFiltersGroup
        title={l10NLabels.software.type}
        filters={softwareTypes}
        defaultValues={initialSearchType ? { [initialSearchType]: true } : {}}
        onChange={handleOnChangeSearchType}
      />
      <CatalogueFiltersGroup
        title={l10NLabels.software.categories}
        filters={softwareCategories}
        defaultValues={initialCategories.reduce((acc, filterValue) => {
          acc[filterValue] = true;
          return acc;
        }, {})}
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
