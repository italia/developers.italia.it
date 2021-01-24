import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { useForm } from 'react-hook-form';
import { initialSearchValue } from '../../utils/urlSearchParams.js';
import { queryContextDispatch, setSearchValue } from '../../contexts/searchContext.js';

const useStyle = createUseStyles({
  icon: {
    composes: 'icon icon-primary',
    minWidth: '40px',
    minHeight: '40px',
  },
});

export const CatalogueSearchBar = React.memo(() => {
  console.log('CatalogueSearchBar');
  const { register } = useForm({
    defaultValues: {
      search: initialSearchValue,
    },
  });
  const classes = useStyle();
  const dispatch = useContext(queryContextDispatch);

  return (
    <h2 className="d-flex align-items-center">
      <svg className={classes.icon}>
        <use xlinkHref="/assets/svg/sprite.svg#it-search"></use>
      </svg>
      <input
        type="text"
        className="primary-color h-auto"
        name="search"
        ref={register}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />
    </h2>
  );
});

CatalogueSearchBar.displayName = 'CatalogueSearchBar';
