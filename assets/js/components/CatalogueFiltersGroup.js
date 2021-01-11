import React from 'react';
import { useForm } from 'react-hook-form';

export const CatalogueFiltersGroup = React.memo(({ filters, defaultValues = {}, onChange }) => {
  const { register, getValues } = useForm({
    defaultValues,
  });
  return (
    <div id={'list-type'}>
      {Object.entries(filters).map(([key, value]) => (
        <div key={key} className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name={key}
              ref={register}
              onChange={() => {
                const values = getValues();
                onChange(values);
              }}
            />
            <span> {value} </span>
          </label>
        </div>
      ))}
    </div>
  );
});

CatalogueFiltersGroup.displayName = 'CatalogueFiltersGroup';
