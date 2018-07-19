import React, { Component } from "react";

import { sanitizeUrl } from "@braintree/sanitize-url";

import "./Hero.css";

import platformIcon from "../assets/platform.png";

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
    const summary = info.get("summary");
    const project = info.get("project");

    const reference = projects.filter(proj => proj.id === project)[0];

    const {
      download,
      server,
      url,
      intro,
      channel,
      developer,
      tos,
      platform,
      goToPlatform
    } = window.l10n.swagger;

    return (
      <section className="swagger--hero">
        <div className="row">
          <div className="col-7">
            <div className="mr-5">
              <h1 className="display-1 mb-4">
                {title}
                <span className="badge badge-pill badge-primary swagger--hero-pill ml-2">
                  {version}
                </span>
              </h1>
              <section className="mb-5">
                <div className="row">
                  <div className="col">
                    {(() => {
                      if (summary) {
                        return (
                          <blockquote className="mb-5 blockquote swagger--hero-summary">
                            {summary}
                          </blockquote>
                        );
                      }
                    })()}
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">{`${developer}`}</div>
                  <div className="col-4">{`${channel}`}</div>
                  <div className="col-4">{`${tos}`}</div>
                </div>
                <div className="row">
                  <div className="col-4 text-overflow-wrap">
                    {contactUrl ? (
                      <a href={sanitizeUrl(contactUrl)} target="_blank">
                        {name}
                      </a>
                    ) : (
                      <span>{name}</span>
                    )}
                  </div>
                  <div className="col-4 text-overflow-wrap">
                    {email ? (
                      <a href={sanitizeUrl(`mailto:${email}`)}>{email}</a>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-4 text-overflow-wrap">
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
          </div>
          <div className="col">
            {(() => {
              if (project) {
                const { id, title, description } = reference;
                return (
                  <div className="card rounded border border-primary mt-5 swagger--hero--card">
                    <div className="card-body">
                      <div className="position-absolute text-uppercase swagger--hero--card-legend">
                        {platform}
                      </div>

                      <h3 className="card-title">{title}</h3>
                      <blockquote
                        className="blockquote card-text swagger--hero--card-description"
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                      <div>
                        <a
                          className="text-uppercase swagger--hero--card-platform-link"
                          href={`/${lang}/${id}`}
                        >
                          <img className="mr-2" src={platformIcon} alt={goToPlatform} />
                          {goToPlatform} →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            })()}
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
