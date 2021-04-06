import React from 'react';
import PropTypes from 'prop-types';

import './Authorize.css';

export default class Authorize extends React.Component {
  onClick() {
    const { authActions, authSelectors } = this.props;
    const definitions = authSelectors.definitionsToAuthorize();

    authActions.showDefinitions(definitions);
  }

  render() {
    const { authSelectors, getComponent } = this.props;

    const AuthorizationPopup = getComponent('authorizationPopup', true);
    const showPopup = !!authSelectors.shownDefinitions();
    const isAuthorized = !!authSelectors.authorized().size;

    const { authorize } = window.l10n.swagger;

    return (
      <div className="swagger--auth auth-wrapper">
        <div className="toggles">
          <label htmlFor="swagger-authorize">
            {authorize}
            <input type="checkbox" id="swagger-authorize" onChange={this.onClick.bind(this)} value={isAuthorized} />
            <span className="lever" />
          </label>
        </div>
        {showPopup && <AuthorizationPopup />}
      </div>
    );
  }
}

Authorize.propTypes = {
  authActions: PropTypes.object.isRequired,
  authSelectors: PropTypes.object.isRequired,
  getComponent: PropTypes.func.isRequired,
};
