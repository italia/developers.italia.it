import React from 'react';
import { createUseStyles } from 'react-jss';
import { Icon } from 'design-react-kit';
import { l10NLabels } from '../../utils/l10n.js';
import { searchItemProptypes } from '../../utils/proptypes.js';

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
  category: {
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
    <article
      className="col-sm-11 col-md-6 col-lg-4 col-xl-3 p-3 d-flex flex-column"
      id={item.id}
      data-testid={item.id}
      data-class="catalogue-item"
    >
      <div>
        <Icon icon={item.icon} size="sm" className="mr-1" />
        <span className={classes.category}>{l10NLabels.software[item.category]}</span>
      </div>
      <div className="my-2 my-md-0">
        <a href={item.url} title={item.name} className={classes.link} data-testid="item-anchor">
          <div className={classes.logo}></div>
          <div className={classes.title}>{item.name}</div>
          <div className={classes.description}>{item.description}</div>
        </a>
      </div>
      <a href={item.url} title={item.name} className={classes.readMore}>
        {l10NLabels.software.read_more} →
      </a>
    </article>
  );
};

CatalogueItem.propTypes = {
  item: searchItemProptypes,
};
