import React, { Component } from "react";

import { sanitizeUrl } from "@braintree/sanitize-url";

import "./Hero.css";

class Hero extends Component {
  render() {
    const { specSelectors, getComponent } = this.props;

    const Markdown = getComponent("Markdown", true);

    const info = specSelectors.info();
    const title = info.get("title");
    const version = info.get("version");
    const servers = specSelectors.servers();

    const description = info.get("description");

    const contact = info.get("contact");
    const email = contact && contact.get("email");
    const name = contact && contact.get("name");
    const url = contact && contact.get("url");

    const tos = info.get("termsOfService");

    return (
      <div className="u-color-grey-50 hero">
        <h1 className="u-text-r-xl u-color-black u-padding-bottom-s">
          {title}
          <span className="Pill Pill--xxs u-background-50 u-color-white u-textWeight-600 hero-pill">
            {version}
          </span>
        </h1>
        <p className="u-padding-bottom-xxl u-text-r-xxs">
          {servers &&
            servers.size && (
              <span>[ Base url: {servers.first().get("url")} ]</span>
            )}
        </p>

        <p className="u-padding-bottom-xs">
          <strong className="u-color-black u-textUppercase u-text-r-xxs">
            Intro
          </strong>
        </p>
        <div className="u-padding-bottom-xl u-text-r-xxs u-lineHeight-l">
          {description ? <Markdown source={description} /> : "-"}
        </div>

        <div className="Grid u-padding-bottom-xs">
          <div className="Grid-cell u-md-size6of12 u-lg-size4of12">
            Developer
          </div>
          <div className="Grid-cell u-md-size6of12 u-lg-size4of12">Licenza</div>
        </div>
        <div className="Grid">
          <div className="Grid-cell u-md-size6of12 u-lg-size4of12">
            {email && <a href={sanitizeUrl(`mailto:${email}`)}>{email}</a>}
          </div>
          <div className="Grid-cell u-md-size6of12 u-lg-size4of12">
            {tos && (
              <a href={sanitizeUrl(tos)} target="_blank">
                Terms of service
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
