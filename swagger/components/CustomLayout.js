import React from "react";

import Hero from "./Hero";
import AuthorizeBtn from "./AuthorizeBtn";

import "./CustomLayout.css";

const isDev = () => process.env.NODE_ENV === "development";

// Create the layout component
class CustomLayout extends React.Component {
  render() {
    const {
      specSelectors,
      getComponent,
      authActions,
      authSelectors
    } = this.props;

    const { download } = window.i10n.swagger;

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

    const Operations = getComponent("operations", true);
    const Models = getComponent("Models", true);

    // Won't be positioned while in development
    const styles = isDev() ? "" : "swagger--head-card";

    return (
      <div className="u-background-grey-15">
        <div
          className={`u-posRelative u-layout-r-withGutter u-sizeFull ${styles}`}
        >
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
            <div>
              {securityDefinitions ? (
                <AuthorizeBtn
                  getComponent={getComponent}
                  authActions={authActions}
                  authSelectors={authSelectors}
                />
              ) : null}
            </div>

            <Operations />

            <Models />
          </div>
        </div>
      </div>
    );
  }
}

export default CustomLayout;
