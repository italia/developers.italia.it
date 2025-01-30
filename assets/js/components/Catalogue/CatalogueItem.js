import React from 'react';
import { createUseStyles } from 'react-jss';
import { Icon } from 'design-react-kit';
import { Card, CardBody, CardTitle, CardReadMore, CardText } from 'design-react-kit';
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
    <Card className="card-img no-after shadow" data-testid={id}>
      <div className="img-responsive-wrapper">
        <div className="img-responsive">
          <figure className="img-wrapper">
            <ImageWithPlaceholder placeholder={fallback} alt="logo" img={logo} />
          </figure>
        </div>
      </div>
      <div>
        <Icon icon={icon} size="sm" className="me-1" />
        <span className={classes.category}>{l10NLabels.software[category]}</span>
      </div>
      <CardBody>
        <CardTitle tag="h6">{name}</CardTitle>
        <CardText className="line-clamp">{description}</CardText>
        <CardReadMore
          href={url}
          text={l10NLabels.software.read_more}
          title={l10NLabels.software.read_more}
          iconName="it-arrow-right"
          data-testid="item-anchor"
        />
      </CardBody>
    </Card>
  );
};

CatalogueItem.propTypes = {
  searchItemProptypes,
};
