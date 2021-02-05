import React, { useContext } from 'react';
import debounce from 'lodash.debounce';
import { Input, Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { searchContextDispatch, setSearchValue } from '../../contexts/searchContext.js';
import { DEBOUNCE_SEARCH_MS } from '../../utils/constants.js';
import { l10NLabels } from '../../utils/l10n.js';

const useStyles = createUseStyles({
  searchBar: {
    color: 'var(--primary) !important',
    fontSize: '3rem',
    height: 'auto!important',
    width: '100%',
  },
});

export const SearchBar = React.memo(() => {
  const classes = useStyles();
  const dispatch = useContext(searchContextDispatch);
  const handleSearch = debounce((e) => {
    dispatch(setSearchValue(e.target.value));
  }, DEBOUNCE_SEARCH_MS);
  return (
    <div className="d-flex align-items-center">
      <Icon color="primary" icon="it-search" className="icon-lg form-group" />
      <Input
        autoFocus={true}
        className={classes.searchBar}
        type="text"
        placeholder={l10NLabels.search_form_placeholder}
        onChange={handleSearch}
      />
    </div>
  );
});

SearchBar.displayName = 'SearchBar';
