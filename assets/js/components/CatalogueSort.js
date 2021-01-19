import React, { useCallback } from 'react';
import { getL10NLabels } from '../l10nUtils.js';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SORT_BY } from '../redux/actions.js';

export const CatalogueSort = React.memo(() => {
  const sortCriteria = useSelector((state) => state.query.sortBy);
  const dispatch = useDispatch();
  const handleChangeSorting = useCallback(
    (e) => {
      dispatch({
        type: SET_SORT_BY,
        value: {
          field: e.target.value,
        },
      });
    },
    [dispatch]
  );

  const l10NLabels = getL10NLabels();
  return (
    <div className="sortingBy col-md-6">
      <div className="d-flex justify-content-end">
        <p>{l10NLabels.software.sort_by}</p>
        <div className="form-group">
          <select
            aria-label="sort-by"
            className="form-control"
            value={sortCriteria.field}
            onChange={handleChangeSorting}
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
