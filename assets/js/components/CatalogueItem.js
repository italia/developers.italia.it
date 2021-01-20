import React from 'react';
import { l10NLabels } from '../utils/l10n.js';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  link: {
    display: 'block',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  logo: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    height: '150px',
    width: '100%',
    backgroundImage: (item) => `url(${item.logo})`,
  },
  icon: {
    composes: 'icon',
    width: '100%',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
  },
  title: {
    composes: 'pt-3 pt-md-0',
    color: 'var(--black)',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textDecoration: 'none',
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
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2 p-md-3 d-flex flex-column">
      <span className={`${classes.icon} ${item.icon}`}>{l10NLabels.software[item.category]}</span>
      <div className="my-2 my-md-0">
        <a href={item.url} title={item.name} className={classes.link}>
          <div className={classes.logo}></div>
          <div className={classes.title}>{item.name}</div>
          <div className={classes.description}>{item.description}</div>
        </a>
      </div>
      <a href={item.url} title={item.name} className={classes.readMore}>
        {l10NLabels.software.read_more} →{' '}
      </a>
    </div>
  );
};
