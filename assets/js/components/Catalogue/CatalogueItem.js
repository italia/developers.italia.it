import React from 'react';
import { l10NLabels } from '../../utils/l10n.js';
import { createUseStyles } from 'react-jss';
import { searchItemProptypes } from '../../services/searchEngine.js';

const useStyles = createUseStyles({
  link: {
    display: 'block',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  logo: {
    composes: 'mt-2',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    height: '150px',
    width: '100%',
    backgroundImage: (item) => `url(${item.logo})`,
  },
  icon: {
    composes: 'icon',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
  },
  title: {
    composes: 'pt-3 pt-md-0',
    color: 'var(--black)',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    wordBreak: 'break-word',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  description: {
    composes: 'mt-3 mb-2',
    color: 'var(--black)',
    fontSize: '0.9rem',
    fontWeight: '300',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  readMore: {
    textTransform: 'uppercase',
    fontWeight: '600',
    marginTop: 'auto',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

export const CatalogueItem = ({ item }) => {
  const classes = useStyles(item);
  return (
    <article className="col-sm-11 mx-auto col-md-6 col-lg-4 col-xl-3 p-3 d-flex flex-column">
      <div>
        <span className={`${classes.icon} ${item.icon}`}>{l10NLabels.software[item.category]}</span>
      </div>
      <div className="my-2 my-md-0">
        <a href={item.url} title={item.name} className={classes.link}>
          <div className={classes.logo}></div>
          <div className={classes.title}>{item.name}</div>
          <div className={classes.description}>{item.description}</div>
        </a>
      </div>
      <a href={item.url} title={item.name} className={classes.readMore}>
        {l10NLabels.software.read_more} →
      </a>
      <div className="dropdown-divider col-12 d-md-none"></div>
    </article>
  );
};

CatalogueItem.propTypes = {
  item: searchItemProptypes,
};
