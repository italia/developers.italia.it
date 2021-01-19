import React from 'react';
import { createUseStyles } from 'react-jss';
import { getL10NLabels } from '../utils/l10n.js';
import { PLATFORM, SOFTWARE_OPEN, SOFTWARE_REUSE } from '../constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchType } from '../redux/actions.js';

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

export const CatalogueSearchType = React.memo(() => {
  const classes = useStyles();
  const searchType = useSelector((state) => state.query.searchType);
  const dispatch = useDispatch();
  const l10NLabels = getL10NLabels();
  const softwareTypes = {
    [SOFTWARE_OPEN]: l10NLabels['software'][SOFTWARE_OPEN],
    [SOFTWARE_REUSE]: l10NLabels['software'][SOFTWARE_REUSE],
    [PLATFORM]: l10NLabels['software']['platforms'],
  };
  return (
    <div className="mt-5">
      <p className={classes.title}> {l10NLabels.software.type} </p>
      {Object.entries(softwareTypes).map(([key, value]) => (
        <label key={key} className={classes.label}>
          <input
            className={classes.checkbox}
            checked={key === searchType}
            type="checkbox"
            name={key}
            onChange={(e) => {
              const newSearchType = e.target.name === searchType ? null : e.target.name;
              dispatch(setSearchType(newSearchType));
            }}
          />
          {value}
        </label>
      ))}
    </div>
  );
});

CatalogueSearchType.displayName = 'CatalogueSearchType';
