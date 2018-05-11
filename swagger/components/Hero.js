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

    const terms = info.get("license");

    const { download, url, intro, license, developer } = window.i10n.swagger;

    return (
      <div className="u-color-grey-50 u-posRelative swagger--hero">
        <h1 className="u-text-h2 u-color-black u-padding-bottom-xs">
          {title}
          <span className="Pill Pill--xxs u-background-50 u-color-white u-textWeight-600 swagger--hero-pill">
            {version}
          </span>
        </h1>

        <a
          href={window.swaggerUrl}
          className="Button Button--round u-borderRadius-m u-text-r-xxs u-background-white u-color-50 u-posAbsolute"
          target="_blank"
        >
          {download}
        </a>

        <p className="u-padding-bottom-xxl u-text-r-xxs">
          {servers && servers.size ? (
            <span>
              [ {`${url}`}: {servers.first().get("url")} ]
            </span>
          ) : (
            "-"
          )}
        </p>

        <div className="u-padding-bottom-xs">
          <strong className="u-color-black u-textUppercase u-text-h6">
            {`${intro}`}
          </strong>
        </div>
        <div className="u-padding-bottom-xl u-lineHeight-xl u-text-r-xs">
          {description ? <Markdown source={description} /> : "-"}
        </div>

        <div className="Grid u-padding-bottom-xs">
          <div className="Grid-cell u-md-size6of12 u-lg-size4of12">
            {`${developer}`}
          </div>
          <div className="Grid-cell u-md-size6of12 u-lg-size4of12">
            {`${license}`}
          </div>
        </div>
        <div className="Grid">
          <div className="Grid-cell u-md-size6of12 u-lg-size4of12">
            {email ? <a href={sanitizeUrl(`mailto:${email}`)}>{email}</a> : "-"}
          </div>
          <div className="Grid-cell u-md-size6of12 u-lg-size4of12">
            {terms && terms.get("url") ? (
              <a href={sanitizeUrl(terms.get("url"))} target="_blank">
                {terms.get("name")}
              </a>
            ) : (
              "-"
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
