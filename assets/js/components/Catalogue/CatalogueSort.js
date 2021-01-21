import React from 'react';
import { l10NLabels } from '../../utils/l10n.js';
import { useDispatch } from 'react-redux';
import { setSortBy } from '../../redux/actions.js';
import { initialSort } from '../../utils/urlSearchParams.js';

export const CatalogueSort = React.memo(() => {
  console.log('CatalogueSort');
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-end align-items-center">
      <label className="mb-0 pr-2">{l10NLabels.software.sort_by}</label>
      <select onChange={(e) => dispatch(setSortBy(e.target.value))} defaultValue={initialSort}>
        <option value="relevance">{l10NLabels.software.sort_by_relevance}</option>
        <option value="release_date">{l10NLabels.software.sort_by_release_date}</option>
        <option value="vitality">{l10NLabels.software.sort_by_vitality}</option>
        <option value="name">{l10NLabels.software.sort_by_alphabetic}</option>
      </select>
    </div>
  );
});

CatalogueSort.displayName = 'CatalogueSort';
