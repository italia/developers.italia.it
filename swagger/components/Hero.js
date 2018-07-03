import React, { Component } from "react";

import { sanitizeUrl } from "@braintree/sanitize-url";

import "./Hero.css";

const copyToClipboard = text => {
  const field = document.createElement("textarea");
  field.innerText = text;
  document.body.appendChild(field);
  field.select();
  document.execCommand("copy");
  field.remove();
};

class Hero extends Component {
  render() {
    const { specSelectors, getComponent } = this.props;

    const info = specSelectors.info();
    const title = info.get("title");
    const version = info.get("version");
    const servers = specSelectors.servers();

    const contact = info.get("contact");
    const name = contact && contact.get("name");
    const contactUrl = contact && contact.get("url");
    const email = contact && contact.get("email");

    const terms = info.get("termsOfService");

    const {
      download,
      server,
      url,
      intro,
      channel,
      developer,
      tos
    } = window.i10n.swagger;

    return (
      <section className="swagger--hero">
        <div className="row">
          <div className="col-7">
            {" "}
            <h1 className="display-1 mb-4">
              {title}
              <span className="badge badge-pill badge-primary swagger--hero-pill ml-2">
                {version}
              </span>
            </h1>
            <blockquote className="blockquote" />
            <section className="mb-5">
              <div className="row">
                <div className="col-4">{`${developer}`}</div>
                <div className="col-4">{`${channel}`}</div>
                <div className="col-4">{`${tos}`}</div>
              </div>
              <div className="row">
                <div className="col-4">
                  {contactUrl ? (
                    <a href={sanitizeUrl(contactUrl)} target="_blank">
                      {name}
                    </a>
                  ) : (
                    <span>{name}</span>
                  )}
                </div>
                <div className="col-4">
                  {email ? (
                    <a href={sanitizeUrl(`mailto:${email}`)}>{email}</a>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-4">
                  {terms ? (
                    <a href={sanitizeUrl(terms)} target="_blank">
                      {terms}
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
              </div>
            </section>
            <div>
              <a
                href={window.swaggerUrl}
                role="button"
                className="btn btn-primary mr-3"
                target="_blank"
              >
                {download}
              </a>
              <a
                href={servers && servers.size && servers.first().get("url")}
                role="button"
                className="btn btn-outline-primary mr-3"
                onClick={e => {
                  e.preventDefault();
                  try {
                    const url =
                      servers && servers.size && servers.first().get("url");
                    copyToClipboard(url);
                  } catch (e) {
                    // not supported
                  }
                }}
              >
                {server}
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card rounded border border-primary swagger--hero--card">
              <div className="card-body">
                <div className="position-absolute text-uppercase swagger--hero--card--legend">
                  PIATTAFORMA DI RIFERIMENTO
                </div>

                <h3 className="card-title">Titolo esempio Card</h3>
                <blockquote className="blockquote card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
