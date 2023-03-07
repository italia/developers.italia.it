import React, { useContext } from 'react';
import { l10NLabels } from '../../utils/l10n.js';
import { initialSortBy } from '../../utils/urlSearchParams.js';
import { searchContextState, searchContextDispatch, setSortBy } from '../../contexts/searchContext.js';
import { RELEVANCE } from '../../utils/constants.js';

export const CatalogueSort = React.memo(() => {
  const { searchValue, sortBy } = useContext(searchContextState);
  const dispatch = useContext(searchContextDispatch);
  const showRelevance = sortBy === RELEVANCE || searchValue;
  return (
    <div className="d-flex flex-wrap justify-content-end align-items-center">
      <label className="mb-0 pr-2">{l10NLabels.software.sort_by}</label>
      <select onChange={(e) => dispatch(setSortBy(e.target.value))} defaultValue={initialSortBy}>
        {showRelevance ? <option value="relevance">{l10NLabels.software.sort_by_relevance}</option> : null}
        <option value="release_date">{l10NLabels.software.sort_by_release_date}</option>
        <option value="vitality">{l10NLabels.software.sort_by_vitality}</option>
        <option value="name">{l10NLabels.software.sort_by_alphabetic}</option>
      </select>
    </div>
  );
});

CatalogueSort.displayName = 'CatalogueSort';
