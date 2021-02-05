import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { CatalogueFiltersTitle } from './CatalogueFiltersTitle.js';

const useStyles = createUseStyles({
  groupContainer: {
    composes: 'mt-2',
    maxHeight: (showAll) => (showAll ? '100%' : '200px'),
    overflowY: 'hidden',
    paddingLeft: '2px',
    transition: 'max-height 0.5s',
  },
  checkbox: {
    flexShrink: 0,
    width: '24px',
    height: '24px',
    marginRight: '8px',
  },
  label: {
    display: 'flex',
    marginBottom: '0px',
    paddingTop: '1px',
    paddingBottom: '8px',
    textTransform: 'capitalize',
    userSelect: 'none',
  },
});

const getCount = (filterValues) => Object.values(filterValues).flat().length;

export const CatalogueFilters = React.memo(({ title, filters, defaultValues = {}, onChange, radio = false, name }) => {
  const [selectedFiltersCount, setSelectedFiltersCount] = useState(getCount(defaultValues));
  const [showAll, setShowAll] = useState(false);

  const classes = useStyles(showAll);
  const { register, getValues } = useForm({
    defaultValues,
  });

  const updateCounter = () => setSelectedFiltersCount(getCount(getValues()));

  const handleOnChangeFilter = () => {
    updateCounter();
    const values = getValues();
    onChange(values[name]);
  };

  const toogleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className={classes.groupContainer}>
        <CatalogueFiltersTitle
          title={title}
          counter={selectedFiltersCount}
          showCollapsableIcon={filters.length > 10}
          onToogleExpandCollapse={toogleShowAll}
        />
        {filters.map(([key, value]) => (
          <label role="button" key={key} className={classes.label}>
            <input
              alt={value}
              role="button"
              className={classes.checkbox}
              type={radio ? 'radio' : 'checkbox'}
              name={name}
              value={key}
              ref={register}
              onChange={handleOnChangeFilter}
            />
            {value}
          </label>
        ))}
      </div>
    </>
  );
});

CatalogueFilters.propTypes = {
  defaultValues: PropTypes.object,
  filters: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  radio: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

CatalogueFilters.displayName = 'CatalogueFilters';
