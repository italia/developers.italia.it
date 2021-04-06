import React from 'react';
import debounce from 'lodash.debounce';
import { createUseStyles } from 'react-jss';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Icon } from 'design-react-kit';
import { DEBOUNCE_SEARCH_MS } from '../utils/constants.js';

const useStyle = createUseStyles({
  icon: {
    minWidth: '40px',
    minHeight: '40px',
  },
  searchBar: {
    color: 'var(--primary) !important',
    fontSize: '3rem',
    height: 'auto !important',
    width: '100%',
    padding: '.375rem .75rem !important',
    marginBottom: 0,
  },
});

export const SearchBar = React.memo(({ defaultValue = '', placeholder = '', onChange }) => {
  const { register } = useForm({
    defaultValues: {
      search: defaultValue,
    },
  });
  const classes = useStyle();

  const handleOnChangeSearchValue = debounce((e) => {
    onChange(e.target.value);
  }, DEBOUNCE_SEARCH_MS);

  return (
    <h2 className="d-flex align-items-center mb-0">
      <Icon color="primary" icon="it-search" className="icon-lg mb-0" />
      <input
        data-testid="search-bar"
        autoFocus={true}
        placeholder={placeholder}
        type="text"
        className={classes.searchBar}
        name="search"
        ref={register}
        onChange={handleOnChangeSearchValue}
      />
    </h2>
  );
});

SearchBar.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchBar.displayName = 'SearchBar';
