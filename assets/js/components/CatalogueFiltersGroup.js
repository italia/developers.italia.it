import React from 'react';
import { useForm } from 'react-hook-form';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  checkbox: {
    flexShrink: 0,
    width: '24px',
    height: '24px',
    marginRight: '8px',
  },
  label: {
    display: 'flex',
    textTransform: 'capitalize',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});

export const CatalogueFiltersGroup = React.memo(({ title, filters, defaultValues = {}, onChange }) => {
  const classes = useStyles();
  const { register, getValues } = useForm({
    defaultValues,
  });
  return (
    <div className="mt-5">
      <p className={classes.title}> {title} </p>
      {Object.entries(filters).map(([key, value]) => (
        <label key={key} className={classes.label}>
          <input
            className={classes.checkbox}
            type="checkbox"
            name={key}
            ref={register}
            onChange={() => {
              const values = getValues();
              onChange(values);
            }}
          />
          {value}
        </label>
      ))}
    </div>
  );
});

CatalogueFiltersGroup.displayName = 'CatalogueFiltersGroup';
