import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Description.css';

class Description extends Component {
  render() {
    const { specSelectors, getComponent } = this.props;

    const info = specSelectors.info();
    const description = info.get('description');

    const Markdown = getComponent('Markdown', true);

    return <div className="swagger--description">{description ? <Markdown source={description} /> : '-'}</div>;
  }
}

Description.propTypes = {
  getComponent: PropTypes.func.isRequired,
  specSelectors: PropTypes.object.isRequired,
};

export default Description;
