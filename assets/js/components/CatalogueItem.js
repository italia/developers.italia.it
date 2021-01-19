import React from 'react';
import { getL10NLabels } from '../utils/l10n.js';
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
    width: '200px',
    backgroundImage: (item) => `url(${item.logo})`,
  },
  icon: {
    composes: 'icon',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
  },
  title: {
    composes: 'mt-2',
    color: 'var(--black)',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
      composes: 'decoration-none',
    },
  },
  description: {
    composes: 'mt-3 mb-2',
    color: 'var(--black)',
    fontSize: '0.9rem',
    fontWeight: '300',
    textDecoration: 'none',
    '&:hover': {
      composes: 'decoration-none',
    },
  },
  readMore: {
    textTransform: 'uppercase',
    position: 'absolute',
    bottom: '40px',
    fontWeight: '600',
  },
});

export const CatalogueItem = ({ item }) => {
  const l10NLabels = getL10NLabels();
  const classes = useStyles(item);
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2 p-md-3">
      <span className={`${classes.icon} ${item.icon}`}>{l10NLabels.software[item.category]}</span>
      <article className="d-flex flex-column align-items-start mb-2 mb-md-5">
        <a href={item.url} title={item.name} className={classes.link}>
          <div className={classes.logo}></div>
          <div className={classes.title}>{item.name}</div>
          <div className={classes.description}>{item.description}</div>
          <div className={classes.readMore}>{l10NLabels.software.read_more} → </div>
        </a>
      </article>
    </div>
  );
};
