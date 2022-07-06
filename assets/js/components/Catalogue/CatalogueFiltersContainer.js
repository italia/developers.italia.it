import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  l10NLabels,
  getSoftwareCategories,
  getSoftwareDevelopmentStatuses,
  getSoftwareIntendedAudiences,
  softwareTypes,
  softwarePNRR,
  getSoftwarePNRRTargets,
  getSoftwarePNRRMeasures,
} from '../../utils/l10n.js';
import {
  searchContextDispatch,
  searchContextState,
  setFilterCategories,
  setFilterDevelopmentStatuses,
  setFilterIntendedAudience,
  setType,
  setFilterPNRR,
  setFilterPNRRTargets,
  setFilterPNRRMeasures,
} from '../../contexts/searchContext.js';
import { ALL_CATALOGUE } from '../../utils/constants.js';
import { CatalogueFilters } from './CatalogueFilters.js';

const softwareCategories = getSoftwareCategories();
const softwareIntendedAudiences = getSoftwareIntendedAudiences();
const softwareDevelopmentStatuses = getSoftwareDevelopmentStatuses();
const softwareTypesFilter = [[ALL_CATALOGUE, l10NLabels.all], ...softwareTypes];
const softwarePNRRMeasures = getSoftwarePNRRMeasures();
const softwarePNRRTargets = getSoftwarePNRRTargets();

export const CatalogueFiltersContainer = React.memo(({ prefixName }) => {
  const dispatch = useContext(searchContextDispatch);
  const {
    filterCategories,
    filterDevelopmentStatuses,
    filterIntendedAudiences,
    filterPNRR,
    filterPNRRTargets,
    filterPNRRMeasures,
    type,
  } = useContext(searchContextState);
  const typesFilterName = `${prefixName}_type`;
  const categoriesFilterName = `${prefixName}_categories`;
  const intendedAudiencesFilterName = `${prefixName}_intended_audiences`;
  const developmentStatusesFilterName = `${prefixName}_development_statuses`;
  const PNRRFilterName = `${prefixName}_PNRR`;
  const PNRRTargetsFilterName = `${prefixName}_PNRR_targets`;
  const PNRRMeasuresFilterName = `${prefixName}_PNRR_measures`;

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
  const defaultPNRR = useMemo(
    () => ({
      [PNRRFilterName]: filterPNRR,
    }),
    []
  );
  const defaultPNRRTargets = useMemo(
    () => ({
      [PNRRTargetsFilterName]: filterPNRRTargets,
    }),
    []
  );
  const defaultPNRRMeasures = useMemo(
    () => ({
      [PNRRMeasuresFilterName]: filterPNRRMeasures,
    }),
    []
  );
  /* eslint-enable react-hooks/exhaustive-deps */

  const handleChangeOnTypes = (value) => dispatch(setType(value));

  const handleChangeOnCategories = (values) => dispatch(setFilterCategories(values));

  const handleChangeOnIntendedAudiences = (values) => dispatch(setFilterIntendedAudience(values));

  const handleChangeOnDevelopmentStatuses = (values) => dispatch(setFilterDevelopmentStatuses(values));

  const handleChangeOnPNRR = (value) => {
    /* Reset all PNRR filters, if the main PNRR search is disabled */
    if (!value) {
      dispatch(setFilterPNRRTargets(''));
      dispatch(setFilterPNRRMeasures(''));
    }

    dispatch(setFilterPNRR(value));
  };

  const handleChangeOnPNRRTargets = (value) => dispatch(setFilterPNRRTargets(value));

  const handleChangeOnPNRRMeasures = (value) => dispatch(setFilterPNRRMeasures(value));

  return (
    <>
      <CatalogueFilters
        title="PNRR"
        name={PNRRFilterName}
        filters={softwarePNRR}
        defaultValues={defaultPNRR}
        onChange={handleChangeOnPNRR}
        capitalize={false}
      />
      {filterPNRR && (
        <>
          <CatalogueFilters
            title={l10NLabels.software.pnrr_targets}
            name={PNRRTargetsFilterName}
            filters={softwarePNRRTargets}
            defaultValues={defaultPNRRTargets}
            onChange={handleChangeOnPNRRTargets}
            capitalize={false}
            radio={true}
          />
          <CatalogueFilters
            title={l10NLabels.software.pnrr_measures}
            name={PNRRMeasuresFilterName}
            filters={softwarePNRRMeasures}
            defaultValues={defaultPNRRMeasures}
            onChange={handleChangeOnPNRRMeasures}
            capitalize={false}
            radio={true}
          />
        </>
      )}
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
