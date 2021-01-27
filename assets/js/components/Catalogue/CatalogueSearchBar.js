import React, { useContext } from 'react';
import debounce from 'lodash.debounce';
import { createUseStyles } from 'react-jss';
import { useForm } from 'react-hook-form';
import { initialSearchValue } from '../../utils/urlSearchParams.js';
import { searchContextDispatch, setSearchValue } from '../../contexts/searchContext.js';
import { DEBOUNCE_SEARCH_MS } from '../../utils/constants.js';
import { l10NLabels } from '../../utils/l10n.js';
import { Icon } from 'design-react-kit';

const useStyle = createUseStyles({
  icon: {
    minWidth: '40px',
    minHeight: '40px',
  },
});

export const CatalogueSearchBar = React.memo(() => {
  const { register } = useForm({
    defaultValues: {
      search: initialSearchValue,
    },
  });
  const classes = useStyle();
  const dispatch = useContext(searchContextDispatch);

  const handleOnChangeSearchValue = debounce((e) => {
    dispatch(setSearchValue(e.target.value));
  }, DEBOUNCE_SEARCH_MS);

  return (
    <h2 className="d-flex align-items-center">
      <Icon color="primary" className={classes.icon} icon="it-search" />
      <input
        placeholder={l10NLabels.search_form_label}
        type="text"
        className="primary-color h-auto"
        name="search"
        ref={register}
        onChange={handleOnChangeSearchValue}
      />
    </h2>
  );
});

CatalogueSearchBar.displayName = 'CatalogueSearchBar';
