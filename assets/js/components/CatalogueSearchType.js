import React from 'react';
import { createUseStyles } from 'react-jss';
import { l10NLabels } from '../utils/l10n.js';
import { PLATFORM, SOFTWARE_OPEN, SOFTWARE_REUSE } from '../utils/constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchType } from '../redux/actions.js';

const useStyles = createUseStyles({
  container: {
    composes: 'mt-5',
    paddingLeft: '2px',
  },
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
  console.log('CatalogueSearchType');
  const classes = useStyles();
  const searchType = useSelector((state) => state.query.searchType);
  const dispatch = useDispatch();
  const softwareTypes = [
    [PLATFORM, l10NLabels['software']['platforms']],
    [SOFTWARE_OPEN, l10NLabels['software'][SOFTWARE_OPEN]],
    [SOFTWARE_REUSE, l10NLabels['software'][SOFTWARE_REUSE]],
  ];
  const handleOnChangeSearchType = (e) => {
    const newSearchType = e.target.name === searchType ? null : e.target.name;
    dispatch(setSearchType(newSearchType));
  };
  return (
    <div className={classes.container}>
      <p className={classes.title}> {l10NLabels.software.type} </p>
      {softwareTypes.map(([key, value]) => (
        <label key={key} className={classes.label}>
          <input
            className={classes.checkbox}
            checked={key === searchType}
            type="checkbox"
            name={key}
            onChange={handleOnChangeSearchType}
          />
          {value}
        </label>
      ))}
    </div>
  );
});

CatalogueSearchType.displayName = 'CatalogueSearchType';
