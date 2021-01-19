import React from 'react';
import { useForm } from 'react-hook-form';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    composes: 'mt-5',
    maxHeight: '513px',
    overflow: 'scroll',
    paddingLeft: '2px',
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
    position: 'absolute',
    backgroundColor: 'var(--white)',
    width: '100%',
    paddingBottom: '8px',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});

export const CatalogueFiltersGroup = React.memo(({ title, filters, defaultValues = {}, onChange }) => {
  console.log('CatalogueFiltersGroup');
  const classes = useStyles();
  const { register, getValues } = useForm({
    defaultValues,
  });
  const handleOnChangeFilter = () => {
    const values = getValues();
    onChange(values);
  };
  return (
    <div className={classes.container}>
      <p className={classes.title}> {title} </p>
      {Object.entries(filters).map(([key, value]) => (
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
  );
});

CatalogueFiltersGroup.displayName = 'CatalogueFiltersGroup';
