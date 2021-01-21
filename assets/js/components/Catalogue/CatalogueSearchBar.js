import React from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { setSearchValue } from '../../redux/actions.js';
import { useForm } from 'react-hook-form';
import { initialSearchValue } from '../../utils/urlSearchParams.js';

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
  const dispatch = useDispatch();

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
