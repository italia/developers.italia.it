import React from 'react';
import { createUseStyles } from 'react-jss';
import { Icon } from 'design-react-kit';
import { ImageWithPlaceholder } from '../ImageWithPlaceholder.js';
import { l10NLabels } from '../../utils/l10n.js';
import { searchItemProptypes } from '../../utils/proptypes.js';

const useStyles = createUseStyles({
  link: {
    display: 'block',
    color: '#17324d',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  logoContainer: {
    composes: 'my-3',
    height: '150px',
    width: '100%',
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
    marginBottom: '2rem',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

// eslint-disable-next-line react/prop-types
export const CatalogueItem = ({ id, name, description, url, icon, category, logo, fallback }) => {
  const classes = useStyles();

  return (
    <article
      id={id}
      className="d-flex flex-column align-items-start h-100 mb-4 mb-sm-0 px-10"
      data-testid={id}
      data-class="catalogue-item"
    >
      <div>
        <Icon icon={icon} size="sm" className="me-1" />
        <span className={classes.category}>{l10NLabels.software[category]}</span>
      </div>
      <div className="my-2 my-md-0 w-100">
        <a href={url} title={name} className={classes.link} data-testid="item-anchor">
          <div className={classes.logoContainer}>
            <ImageWithPlaceholder placeholder={fallback} alt="logo" img={logo} />
          </div>
          <div className={classes.title}>{name}</div>
          <div className={classes.description}>{description}</div>
        </a>
      </div>
      <a href={url} title={name} className={classes.readMore}>
        {l10NLabels.software.read_more} →
      </a>
    </article>
  );
};

CatalogueItem.propTypes = {
  searchItemProptypes,
};
