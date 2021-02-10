import React, { useCallback, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { l10NLabels } from '../../utils/l10n.js';
import { SearchBar } from '../SearchBar.js';
import { searchContextDispatch, searchContextState, setSearchValue } from '../../contexts/searchContext.js';

const useStyles = createUseStyles({
  header: {
    fontSize: '3rem',
  },
  image: {
    minHeight: '25vw',
  },
});

export const CatalogueHeader = React.memo(() => {
  const classes = useStyles();
  const { searchValue } = useContext(searchContextState);
  const dispatch = useContext(searchContextDispatch);

  const handleSearch = useCallback((value) => dispatch(setSearchValue(value)), [dispatch]);

  return (
    <div className="text-center">
      <h1 className={classes.header}>{l10NLabels.software.catalogue}</h1>
      <div className="row"></div>
      <div className="col-10 mx-auto text-center mb-3">
        <SearchBar onChange={handleSearch} defaultValue={searchValue} placeholder={l10NLabels.search_form_label} />
      </div>
    </div>
  );
});

CatalogueHeader.displayName = 'CatalogueHeader';
