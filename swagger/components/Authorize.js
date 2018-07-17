import React from "react";

import "./Authorize.css";

export default class Authorize extends React.Component {
  onClick() {
    let { authActions, authSelectors } = this.props;
    let definitions = authSelectors.definitionsToAuthorize();

    authActions.showDefinitions(definitions);
  }

  render() {
    let { authSelectors, getComponent } = this.props;

    const AuthorizationPopup = getComponent("authorizationPopup", true);
    let showPopup = !!authSelectors.shownDefinitions();
    let isAuthorized = !!authSelectors.authorized().size;

    const { authorize } = window.l10n.swagger;

    return (
      <div className="swagger--auth auth-wrapper">
        <div className="toggles">
          <label htmlFor="swagger-authorize">
            {authorize}
            <input
              type="checkbox"
              id="swagger-authorize"
              onChange={this.onClick.bind(this)}
              value={isAuthorized}
            />
            <span className="lever" />
          </label>
        </div>
        {showPopup && <AuthorizationPopup />}
      </div>
    );
  }
}
