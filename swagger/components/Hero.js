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
    const name = contact && contact.get("name");
    const contactUrl = contact && contact.get("url");
    const email = contact && contact.get("email");

    const terms = info.get("termsOfService");

    const {
      download,
      url,
      intro,
      channel,
      developer,
      tos
    } = window.i10n.swagger;

    return (
      <div className="u-color-grey-50 u-posRelative swagger--hero">
        <h1 className="u-text-h2 u-color-black u-padding-bottom-xs swagger--hero-header">
          {title}
          <span className="Pill Pill--xxs u-background-50 u-color-white u-textWeight-600 u-margin-left-xs swagger--hero-pill">
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
            <code>
              [ {`${url}`}: {servers.first().get("url")} ]
            </code>
          ) : (
            "-"
          )}
        </p>

        <div className="u-padding-bottom-xl u-lineHeight-xl u-text-r-xs">
          {description ? <Markdown source={description} /> : "-"}
        </div>

        <div className="Grid u-padding-bottom-m u-padding-top-xxl">
          <div className="Grid-cell u-md-size4of12 u-lg-size4of12">
            {`${developer}`}
          </div>
          <div className="Grid-cell u-md-size4of12 u-lg-size4of12">
            {`${channel}`}
          </div>
          <div className="Grid-cell u-md-size4of12 u-lg-size4of12">
            {`${tos}`}
          </div>
        </div>

        <div className="Grid">
          <div className="Grid-cell u-md-size4of12 u-lg-size4of12">
            <div>
              {contactUrl ? (
                <a href={sanitizeUrl(contactUrl)} target="_blank">
                  <img
                    className="swagger--hero-contact-logo"
                    src={window.contactLogo}
                    alt={name}
                  />
                </a>
              ) : (
                <img
                  className="swagger--hero-contact-logo"
                  src={window.contactLogo}
                  alt={name}
                />
              )}
            </div>
          </div>
          <div className="Grid-cell u-md-size4of12 u-lg-size4of12">
            <div>
              {email ? (
                <a href={sanitizeUrl(`mailto:${email}`)}>{email}</a>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="Grid-cell u-md-size4of12 u-lg-size4of12">
            {terms ? (
              <a href={sanitizeUrl(terms)} target="_blank">
                {terms}
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
