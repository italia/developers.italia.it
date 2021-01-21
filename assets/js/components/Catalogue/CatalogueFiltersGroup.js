import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
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

/*
 The singleSelect parameter is used to address the behaviour of the type filter (e.g. software open source or software for reuse)
 In that case the filtersGroup acts like a select
 */
export const CatalogueFiltersGroup = React.memo(({ title, filters, defaultValues = {}, onChange, singleSelect }) => {
  console.log('CatalogueFiltersGroup');
  const [selectedFiltersCount, setSelectedFiltersCount] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const classes = useStyles(showAll);
  const { register, getValues, setValue } = useForm({
    defaultValues,
  });

  const updateCounter = () => {
    const values = getValues();
    setSelectedFiltersCount(Object.values(values).filter((v) => v).length);
  };

  useEffect(() => {
    updateCounter();
  }, []);

  const handleOnChangeFilter = (e) => {
    if (singleSelect) {
      // deselect others
      Object.keys(getValues()).forEach((key) => {
        if (key !== e.target.name) {
          setValue(key, false);
        }
      });
    }
    updateCounter();
    onChange(getValues());
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
              role="button"
              className={classes.checkbox}
              type="checkbox"
              name={key}
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

CatalogueFiltersGroup.displayName = 'CatalogueFiltersGroup';
