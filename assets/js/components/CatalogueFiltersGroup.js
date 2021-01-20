import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  groupContainer: {
    composes: 'mt-5',
    maxHeight: (showAll) => (showAll ? '90vh' : '360px'),
    overflow: (showAll) => (showAll ? 'scroll' : 'hidden'),
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
    paddingTop: '1px',
    paddingBottom: '8px',
    marginBottom: '0px',
    display: 'flex',
    textTransform: 'capitalize',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    backgroundColor: 'var(--white)',
    width: '93%',
    height: '40px',
    paddingBottom: '8px',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  filtersContainer: {
    marginTop: '40px',
  },
  expandIcon: {
    composes: 'icon icon-primary',
    width: '40px',
    height: '40px',
  },
});

export const CatalogueFiltersGroup = React.memo(({ title, filters, defaultValues = {}, onChange }) => {
  console.log('CatalogueFiltersGroup');
  const [showAll, setShowAll] = useState(false);
  const container = useRef(null);

  const classes = useStyles(showAll);
  const { register, getValues } = useForm({
    defaultValues,
  });
  const handleOnChangeFilter = () => {
    const values = getValues();
    onChange(values);
  };

  const handleToogleShowAll = () => {
    container.current.scrollTop = 0;
    setShowAll(!showAll);
  };

  return (
    <>
      <div className={classes.groupContainer} ref={container}>
        <div className={classes.title}>
          <p className="mb-0"> {title} </p>
          {filters.length > 10 && (
            <div role="button" onClick={handleToogleShowAll}>
              <svg className={classes.expandIcon}>
                <use xlinkHref={`/assets/svg/sprite.svg#${showAll ? 'it-collapse' : 'it-expand'}`}></use>
              </svg>
            </div>
          )}
        </div>
        <div className={classes.filtersContainer}>
          {filters.map(([key, value]) => (
            <label key={key} className={classes.label}>
              <input
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
      </div>
    </>
  );
});

CatalogueFiltersGroup.displayName = 'CatalogueFiltersGroup';
