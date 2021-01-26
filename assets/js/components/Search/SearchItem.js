import React from 'react';
import { Icon } from 'design-react-kit';
import { searchItemProptypes } from '../../services/searchEngine.js';
import { createUseStyles } from 'react-jss';
import { ADMINISTRATION, PLATFORM, SOFTWARE_OPEN, SOFTWARE_REUSE, NEWS, API } from '../../utils/constants.js';
import { l10NLabels } from '../../utils/l10n.js';

const useStyles = createUseStyles({
  category: {
    marginLeft: 'auto',
    opacity: '0.5',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
  },
  item: {
    composes: 'row no-gutters align-items-center',
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#656566',
  },
  icon: {
    margin: '8px',
    fill: '#656566',
    minWidth: '25px',
    minHeight: '25px',
  },
  // TODO: We need to include the missing icons in the standard design react kit!
  iconWithFixedAlignment: {
    extend: 'icon',
    marginLeft: '11px',
    marginRight: '12px',
  },
});

export const SearchItem = ({ item }) => {
  console.log('SearchItem');
  const classes = useStyles();
  const getIcon = () => {
    switch (item.category) {
      case SOFTWARE_OPEN:
        return <div className={`${classes.iconWithFixedAlignment} icon-type-platform--gray`}></div>;
      case SOFTWARE_REUSE:
        return <div className={`${classes.iconWithFixedAlignment} icon-type-software_reuse--gray`}></div>;
      case PLATFORM:
        return <div className={`${classes.iconWithFixedAlignment} icon-type-platform--gray`}></div>;
      case ADMINISTRATION:
        return <Icon className={classes.icon} icon="it-pa"></Icon>;
      case API:
        return <Icon className={classes.icon} icon="it-settings"></Icon>;
      case NEWS:
        return <Icon className={classes.icon} icon="it-horn"></Icon>;
    }

    return <Icon className={classes.icon} icon="it-file"></Icon>;
  };
  return (
    <a className={classes.item} href={item.url}>
      {getIcon()}
      <div className="col">{item.name}</div>
      <div className={classes.category}>{l10NLabels.software[item.category] ?? item.category}</div>
    </a>
  );
};

SearchItem.propTypes = {
  item: searchItemProptypes,
};
