import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyle = createUseStyles({
  placeholder: {
    height: '100%',
    width: '100%',
    marginLeft: 0,
    objectFit: 'contain',
  },
  img: {
    extend: 'placeholder',
    display: (loaded) => (loaded ? 'block' : 'none'),
  },
});

export const ImageWithPlaceholder = React.memo(({ img, placeholder, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const classes = useStyle(loaded);

  return (
    <>
      {!loaded && <img className={classes.placeholder} src={placeholder} alt={alt} />}
      {img && <img className={classes.img} src={img} alt={alt} onLoad={() => setLoaded(true)} />}
    </>
  );
});

ImageWithPlaceholder.propTypes = {
  alt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

ImageWithPlaceholder.displayName = 'ImageWithPlaceholder';
