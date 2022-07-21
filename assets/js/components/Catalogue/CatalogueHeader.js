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
      {filterPNRR && (
        <div className="col-10 mx-auto text-center mb-3">
          <i>
            Questo software può concorrere al raggiungimento degli obiettivi delle misure indicate, <b>secondo quanto
            dichiarato da chi lo mette a disposizione.<br />Developers Italia non manutiene direttamente, né garantisce che il software sia sufficiente a
            rispondere alle previsioni del PNRR</b>{' '}
            <a href="/it/riuso/pubblicazione#pnrr-soluzioni-a-catalogo" target="_blank" rel="noopener noreferrer">
              Scopri di più
            </a>
            .
          </i>
        </div>
      )}

      <div className="col-10 mx-auto text-center mb-3">
        <SearchBar onChange={handleSearch} defaultValue={searchValue} placeholder={l10NLabels.search_form_label} />
      </div>
    </div>
  );
});

CatalogueHeader.displayName = 'CatalogueHeader';
