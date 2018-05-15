import React from "react";

export default class AuthorizeBtn extends React.Component {
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

    return (
      <div className="auth-wrapper">
        <button
          className="Button Button--round u-borderRadius-m u-text-r-xxs u-background-white u-color-50"
          onClick={this.onClick.bind(this)}
        >
          {"Authorize "}
          <span
            className={`u-text-r-xxs Icon Icon-${
              isAuthorized ? "lock" : "unlock"
            }`}
          />
        </button>
        {showPopup && <AuthorizationPopup />}
      </div>
    );
  }
}
