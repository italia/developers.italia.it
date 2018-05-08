import React from "react";

import Hero from "./Hero";

import "./CustomLayout.css";

// Create the layout component
class CustomLayout extends React.Component {
  render() {
    const { specSelectors, getComponent } = this.props;

    const isSpecEmpty = !specSelectors.specStr();
    const isLoading = specSelectors.loadingStatus() === "loading";
    const isFailed = specSelectors.loadingStatus() === "failed";

    if (isSpecEmpty) {
      let loadingMessage;
      if (isLoading) {
        loadingMessage = <div className="loading" />;
      } else {
        loadingMessage = <h4>No API definition provided.</h4>;
      }

      return (
        <div className="u-posRelative u-background-grey-15">
          <div className="swagger-ui">
            <div className="loading-container">{loadingMessage}</div>
          </div>
        </div>
      );
    }

    const securityDefinitions = specSelectors.securityDefinitions();
    const AuthorizeBtn = getComponent("authorizeBtn", true);

    const Operations = getComponent("operations", true);

    return (
      <div className="u-posRelative u-background-grey-15">
        <div className="u-posRelative u-layout-r-withGutter u-sizeFull head-card">
          <div className="Grid Grid--alignCenter">
            <div className="Grid-cell u-md-size12of12 u-lg-size12of12">
              <div className="u-nbfc u-flexWrap u-flex u-color-grey-30 u-xs-padding-all-none u-borderShadow-m u-xs-borderShadow-none u-borderRadius-m u-background-white u-sizeFill">
                <div className="u-layout-r-withGutter u-sizeFull u-padding-top-xxl u-padding-bottom-xxl">
                  <div className="u-padding-top-xxl u-padding-bottom-xxl">
                    <Hero
                      specSelectors={specSelectors}
                      getComponent={getComponent}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="u-background-grey-15 u-layout-r-withGutter u-padding-bottom-xxl">
          <div className="swagger-ui u-padding-bottom-xs">
            <div>{securityDefinitions ? <AuthorizeBtn /> : null}</div>

            <Operations />
          </div>
        </div>
      </div>
    );
  }
}

export default CustomLayout;
