import React, { useCallback } from 'react';
import { getL10NLabels } from '../l10nUtils.js';
import { useDispatch } from 'react-redux';
import { setSortBy } from '../redux/actions.js';
import { initialSort } from '../services/searchEngine.js';

export const CatalogueSort = React.memo(() => {
  const dispatch = useDispatch();
  const handleChangeSorting = useCallback(
    (e) => {
      dispatch(setSortBy(e.target.value));
    },
    [dispatch]
  );

  const l10NLabels = getL10NLabels();
  return (
    <div className="col-md-6">
      <div className="d-flex justify-content-end align-items-center">
        <p>{l10NLabels.software.sort_by}</p>
        <div className="mb-3 ml-3">
          <select
            aria-label="sort-by"
            className="form-control"
            onChange={handleChangeSorting}
            defaultValue={initialSort}
          >
            <option value="relevance">{l10NLabels.software.sort_by_relevance}</option>
            <option value="release_date">{l10NLabels.software.sort_by_release_date}</option>
            <option value="vitality">{l10NLabels.software.sort_by_vitality}</option>
            <option value="name">{l10NLabels.software.sort_by_alphabetic}</option>
          </select>
        </div>
      </div>
    </div>
  );
});

CatalogueSort.displayName = 'CatalogueSort';
