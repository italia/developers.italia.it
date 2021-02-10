import React from 'react';
import PropTypes from 'prop-types';

import Hero from './Hero';
import Description from './Description';
import Authorize from './Authorize';

import './CustomLayout.css';

// Create the layout component
class CustomLayout extends React.Component {
  render() {
    const { specSelectors, getComponent, authActions, authSelectors } = this.props;

    const isSpecEmpty = !specSelectors.specStr();
    const isLoading = specSelectors.loadingStatus() === 'loading';

    if (isSpecEmpty) {
      let loadingMessage;
      if (isLoading) {
        loadingMessage = <div className="loading" />;
      } else {
        loadingMessage = <h4>No API definition provided.</h4>;
      }

      return (
        <div className="swagger-ui">
          <div className="loading-container">{loadingMessage}</div>
        </div>
      );
    }

    const securityDefinitions = specSelectors.securityDefinitions();

    const Operations = getComponent('operations', true);
    const Models = getComponent('Models', true);

    return (
      <section className="custom-layout">
        <div className="container custom-layout--hero">
          <Hero specSelectors={specSelectors} />
        </div>

        <section className="swagger-ui">
          <section className="custom-layout--swagger--description">
            <div className="container">
              <div className="position-relative rounded shadow-lg bg-white p-5 custom-layout--description">
                <div className="p-0">
                  <Description specSelectors={specSelectors} getComponent={getComponent} />
                </div>
              </div>

              <div>
                {securityDefinitions ? (
                  <div className="pb-3">
                    <Authorize getComponent={getComponent} authActions={authActions} authSelectors={authSelectors} />
                  </div>
                ) : null}
              </div>
            </div>
          </section>

          <section className="mt-5 mb-5 custom-layout--swagger--operations">
            <div className="container">
              <Operations />

              <Models />
            </div>
          </section>
        </section>
      </section>
    );
  }
}

CustomLayout.propTypes = {
  authActions: PropTypes.object.isRequired,
  authSelectors: PropTypes.object.isRequired,
  getComponent: PropTypes.func.isRequired,
  specSelectors: PropTypes.object.isRequired,
};

export default CustomLayout;
