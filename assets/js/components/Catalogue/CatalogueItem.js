import React from 'react';
import { createUseStyles } from 'react-jss';
import { Icon } from 'design-react-kit';
import { Card, CardReadMore } from 'design-react-kit';
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
export const CatalogueItem = ({ id, name, description, url, icon, category, logo, fallback, simple = false }) => {
  const classes = useStyles();
  if (!simple) {
    return (
      <div data-testid={id}>
        <Card image rounded shadow="sm">
          <div className="it-card-image-wrapper">
            <div className="ratio ratio-16x9">
              <figure className="figure img-full">
                <ImageWithPlaceholder placeholder={fallback} alt={'Logo ' + name} img={logo} />
              </figure>
            </div>
          </div>
          {icon && (
            <div className="m-1">
              <Icon icon={icon} size="sm" className="me-1" />
              <span className={classes.category}>{l10NLabels.software[category]}</span>
            </div>
          )}
          <h3 className="it-card-title ">
            {name}
          </h3>
          <div className="it-card-body">

            <p className="it-card-text">{description}</p>
            <CardReadMore
              href={url}
              text={l10NLabels.software.read_more}
              title={name + l10NLabels.software.read_more}
              iconName="it-arrow-right"
              data-testid="item-anchor"
            />
          </div>
        </Card>
      </div>
    );
  } else {
    return (
      <Card image rounded shadow="sm" data-testid={id}>
        <div className="it-card-body">
          <h3 className="it-card-title ">
            {name}
          </h3>
          <p className="it-card-text">{description}</p>
          <CardReadMore
            href={url}
            text={l10NLabels.software.read_more}
            title={name + l10NLabels.software.read_more}
            iconName="it-arrow-right"
            data-testid="item-anchor"
          />
        </div>
      </Card>
    );
  }
};

CatalogueItem.propTypes = {
  searchItemProptypes,
};
