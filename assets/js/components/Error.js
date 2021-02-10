import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { l10NLabels } from '../utils/l10n.js';

const useStyle = createUseStyles({
  description: {
    opacity: '0.8',
  },
});

export const Error = ({ description = null }) => {
  const classes = useStyle();
  return (
    <div
      className="d-flex flex-column align-items-center h-100 justify-content-center"
      data-testid="error-something-went-wrong"
    >
      <img src="/assets/images/something_is_wrong.svg" alt={l10NLabels.errors.something_went_wrong} />
      <h3 className="mt-4">{l10NLabels.errors.something_went_wrong}</h3>
      {description && <div className={classes.description}>{description}</div>}
    </div>
  );
};

Error.propTypes = {
  description: PropTypes.string,
};
