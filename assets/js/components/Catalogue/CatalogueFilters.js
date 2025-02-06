import React, { useState, useEffect } from 'react';
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
    userSelect: 'none',
  },
});

const getCount = (filterValues) =>
  Object.values(filterValues)
    .flat()
    .filter((v) => v).length;

export const CatalogueFilters = React.memo(
  ({ title, filters, defaultValues = {}, onChange, radio = false, capitalize = true, name }) => {
    const [selectedFiltersCount, setSelectedFiltersCount] = useState(getCount(defaultValues));
    const [showAll, setShowAll] = useState(false);

    const classes = useStyles(showAll);
    const { register, watch } = useForm({
      defaultValues,
    });

    const toogleShowAll = () => {
      setShowAll(!showAll);
    };

    useEffect(() => {
      const subscription = watch((value, { name }) => {
        setSelectedFiltersCount(getCount(value[name]));
        onChange(value[name]);
      });
      return () => subscription.unsubscribe();
    }, [name, watch, setSelectedFiltersCount, onChange]);

    return (
      <>
        <div className={classes.groupContainer}>
          <CatalogueFiltersTitle
            title={title}
            counter={selectedFiltersCount}
            showCollapsableIcon={filters.length > 5}
            onToogleExpandCollapse={toogleShowAll}
          />
          {filters.map(([key, value]) => (
            <label
              role="button"
              key={key}
              className={classes.label}
              style={{ textTransform: capitalize ? 'capitalize' : '' }}
            >
              <input
                alt={value}
                role="button"
                className={classes.checkbox}
                type={radio ? 'radio' : 'checkbox'}
                value={key}
                {...register(name)}
              />
              {value}
            </label>
          ))}
        </div>
      </>
    );
  }
);

CatalogueFilters.propTypes = {
  defaultValues: PropTypes.object,
  filters: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  radio: PropTypes.bool,
  capitalize: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

CatalogueFilters.displayName = 'CatalogueFilters';
