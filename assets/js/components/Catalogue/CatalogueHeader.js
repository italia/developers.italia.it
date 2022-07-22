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
  const { searchValue, filterPNRR } = useContext(searchContextState);
  const dispatch = useContext(searchContextDispatch);

  const handleSearch = useCallback((value) => dispatch(setSearchValue(value)), [dispatch]);

  return (
    <div className="text-center">
      {filterPNRR ? (
        <h1 className={classes.header}>{l10NLabels.software.cataloguePNRR}</h1>
      ) : (
        <h1 className={classes.header}>{l10NLabels.software.catalogue}</h1>
      )}

      <div className="col-10 mx-auto text-center mb-3">
        <SearchBar onChange={handleSearch} defaultValue={searchValue} placeholder={l10NLabels.search_form_label} />
      </div>

      <div className="alert alert-info text-left" role="alert">
        Garantiamo che i software del catalogo siano open source, ma non forniamo supporto o manutenzione, né
        assicuriamo che rispondano a specifiche esigenze delle pubbliche amministrazioni.
        <br />
        Le informazioni presenti nelle schede sono fornite da chi pubblica il software.
      </div>
    </div>
  );
});

CatalogueHeader.displayName = 'CatalogueHeader';
