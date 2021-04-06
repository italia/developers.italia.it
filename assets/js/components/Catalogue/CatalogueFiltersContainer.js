import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  l10NLabels,
  getSoftwareCategories,
  getSoftwareDevelopmentStatuses,
  getSoftwareIntendedAudiences,
  softwareTypes,
} from '../../utils/l10n.js';
import {
  searchContextDispatch,
  searchContextState,
  setFilterCategories,
  setFilterDevelopmentStatuses,
  setFilterIntendedAudience,
  setType,
} from '../../contexts/searchContext.js';
import { ALL_CATALOGUE } from '../../utils/constants.js';
import { CatalogueFilters } from './CatalogueFilters.js';

const softwareCategories = getSoftwareCategories();
const softwareIntendedAudiences = getSoftwareIntendedAudiences();
const softwareDevelopmentStatuses = getSoftwareDevelopmentStatuses();
const softwareTypesFilter = [[ALL_CATALOGUE, l10NLabels.all], ...softwareTypes];

export const CatalogueFiltersContainer = React.memo(({ prefixName }) => {
  const dispatch = useContext(searchContextDispatch);
  const { filterCategories, filterDevelopmentStatuses, filterIntendedAudiences, type } = useContext(searchContextState);
  const typesFilterName = `${prefixName}_type`;
  const categoriesFilterName = `${prefixName}_categories`;
  const intendedAudiencesFilterName = `${prefixName}_intended_audiences`;
  const developmentStatusesFilterName = `${prefixName}_development_statuses`;

  /* eslint-disable react-hooks/exhaustive-deps */
  const defaultTypes = useMemo(
    () => ({
      [typesFilterName]: type !== ALL_CATALOGUE ? type : ALL_CATALOGUE,
    }),
    []
  );
  const defaultCategories = useMemo(
    () => ({
      [categoriesFilterName]: filterCategories,
    }),
    []
  );
  const defaultDevelopmentStatuses = useMemo(
    () => ({
      [developmentStatusesFilterName]: filterDevelopmentStatuses,
    }),
    []
  );
  const defaultIntendedAudiences = useMemo(
    () => ({
      [intendedAudiencesFilterName]: filterIntendedAudiences,
    }),
    []
  );
  /* eslint-enable react-hooks/exhaustive-deps */

  const handleChangeOnTypes = (value) => dispatch(setType(value));

  const handleChangeOnCategories = (values) => dispatch(setFilterCategories(values));

  const handleChangeOnIntendedAudiences = (values) => dispatch(setFilterIntendedAudience(values));

  const handleChangeOnDevelopmentStatuses = (values) => dispatch(setFilterDevelopmentStatuses(values));

  return (
    <>
      <CatalogueFilters
        title={l10NLabels.software.type}
        name={typesFilterName}
        filters={softwareTypesFilter}
        defaultValues={defaultTypes}
        onChange={handleChangeOnTypes}
        radio={true}
      />
      <CatalogueFilters
        title={l10NLabels.software.categories}
        name={categoriesFilterName}
        filters={softwareCategories}
        defaultValues={defaultCategories}
        onChange={handleChangeOnCategories}
      />
      <CatalogueFilters
        title={l10NLabels.software.intended_audience}
        name={intendedAudiencesFilterName}
        filters={softwareIntendedAudiences}
        defaultValues={defaultIntendedAudiences}
        onChange={handleChangeOnIntendedAudiences}
      />
      <CatalogueFilters
        title={l10NLabels.software.development_status}
        name={developmentStatusesFilterName}
        filters={softwareDevelopmentStatuses}
        defaultValues={defaultDevelopmentStatuses}
        onChange={handleChangeOnDevelopmentStatuses}
      />
    </>
  );
});

CatalogueFiltersContainer.propTypes = {
  prefixName: PropTypes.string.isRequired,
};

CatalogueFiltersContainer.displayName = 'CatalogueFiltersContainer';
