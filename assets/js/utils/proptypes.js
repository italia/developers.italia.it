import PropTypes from 'prop-types';

export const searchItemProptypes = PropTypes.exact({
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});
