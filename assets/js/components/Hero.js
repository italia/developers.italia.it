import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { sanitizeUrl } from '@braintree/sanitize-url';

import './Hero.css';

const platformIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABj9JREFUeNrM2n1sE2UcB/Bfe+31dYy9dCwsKUw2NqZzKDpEGcIcEkLUQDYXXmJCDJIoCwqJAYlE/yBGDSYGAuJChEHExAjhRZmLYpSXsY4RpuyFMIa8DHAbsI3rurv2Wn/P1m4dtKPt3fNsl/zS7sm110/vuee+z9NpfD4fMNrisQqx1mBJWNuxTmC5WBxcwwDaD3S5fdsab7vTfrvsAp0WoGiqCaal8pd4DtazANOEDgKb7rjTKs4JcLTBBT3iwPESjBpYkmuGpTMsTMA0oI8AjyGwWwx9HFZgNaFRAVmD1YBGDOTx2nx5igFEGaD6XxHcXnZgJdCogHMQuHqWFfLSDCDjMS/clGDnGYEZOBZorMArCWbtBmz+C0uPNafTKX+J4DQW4GigagDbH9o1jRU4EigNILAGjwRlAVQMXobg7FS+BcHvjwQOBR0NoCLwYgQvfww4GGrFmj/KQLXBf2IJwdAc0eM73nDbbR8jQFXAWRN4h0EHJdh8nUBzbnV7jm/9o8d++OKYAyoCE2xZQZwj0cKVEOi2/bXCmg+OdIV850XZRliZb4GnRxc4Irj8rAAnWsSQO+4qToAleZYtWtJt23rksO/4eq4JnkjWAyL34J+NYwBJtjasi8kWriLDpoeF2aawO97s8pCHXHJG0zsFuXVReTu03gsNnmbTwSrstqT7TkrUf4xNB/3o0dhysZa23vVs/P2SC76rdcLlTk/oz52ih92liZCZoi8IDEb5rZ3umsqmPthTK8DV+xGBP8KmwwzBEQOzknXw9kwrvDLVCPZEXQE2nQq+veRjrWvpcJdWNffBXhx9RzrD7yC4gA04auDcTAOkJ+l3+5drLoQLDLOw1o4BsBLgt1iOSCPgaIFVBUYT6pWAD2E1jyYwlmla1GAyaNkfD6YKVDLxVgvMBBgKavNXi3+BWTVwNoJXD4HJfdhMGchjZfiDRXcwNF0QvWd6+rypE8bpGjnNYPJXHbzqBSvgBIIWkESkQo8XdrQ/8NgTzJzLpNeQ+2hdfzLqEOQzW6q6U2uuS1CYYYClz/ZPdep0WtgYK5jMgq6EAGuwwl0sSoGSDFub7khZFQ4BTmPYz53Iw6aica7JSQPJqObTyq787aeFwVelWLRQnGeGN6ebyVSHCpgG8ECdEw7+0wv3+4a+yg2FcbB+XnylDp/LnHb4q9udeO5xCvRjfS+U5JlnYFVFcYarSWHY/hpr7avZxrBgmsDANsHKkYeWgVDvlJs3HO3ijzW6QA7Rr2x4hhHbX8q6tAt++tsFWvxilz1joQrU4zEW4hTz89cS5GQrlxkYjDLaBbmh7obI78Qu7MBrlRJ43X8P5GINXqgpVo4acNZkA7z7khWmp/FykoXLxOarwbcXMhwvxg/yxfmbIlAEZ/gfWygCAYFl2HyELKOECwyswEyAkSSjYeBvTjuh5rpIG6w6MJoIyAJMDRhL1o0VfAHBH4YBUwcqCfURg5PNBGzC4GF5GMyxAoaC5vhDPZkwd1AEgxf3QSBQBJLl0HRyW/EH+6GV+rYuT4Mg+WBiPAdxBu1KbKvEukMDLGGWpwS0k6XoLpcXQ70MKXEcjDdpBxfH7Hed8rW39ndCc4cH8u08vIcHyZ1ogHiTMrDjhggeb2RdSw3gvV55R32bBNtOClB/S4KZkwzwyYJ4mOpf7ry27tA9+77zvYOvMuIVNC/DiJNmC3WwmsBdmM9PtoogBR2rbLYVNi8Y7yDQH3aeelC6+dfuR95FbXBwl6YNDGwHViRBUZapzD8f9VSUVwuzy886gVyntMCYpeH7ut5+5IrnLVSB4w0aWPSkCTbNH9dms+oGV+rTeyVfRcNtafbeWgF+buqjBS52y/AZCfV4q6EGfOMpEyx/zgo5qXybQQcFD4d68kv3fATvQnAimT/+guAeUXUwCQlyhPEwVuBVBAZ++RbCBYZEGPhpf8fFW5KNIpgJMJJk1H+GA+B95wa6NGWw6sBoImBU4LlTjLD6xajB1ICxZF0aYOpAJaFeDTDPCqgE+ggYR2lbRW3kYPJPj6yAakBjApNBS8J4xAqoJjRqcKiNFpAGNCYwbSBNaFjw0cahaMkKyAIacpSubHaBntPAgmwTEyBL6DAwWa3359yvWAAD2/8CDADDtMdrtdKF6gAAAABJRU5ErkJggg==';

const copyToClipboard = (text) => {
  const field = document.createElement('textarea');
  field.innerText = text;
  document.body.appendChild(field);
  field.select();
  document.execCommand('copy');
  field.remove();
};

class Hero extends Component {
  render() {
    /* project.js provides support for processing
       the x-project OAS field used to reference teamdigitale's projects
    */
    const projects = require('../projects.js');
    const { specSelectors } = this.props;

    const info = specSelectors.info();
    const title = info.get('title');
    const version = info.get('version');
    const servers = specSelectors.servers();

    const contact = info.get('contact');
    const name = contact && contact.get('name');
    const contactUrl = contact && contact.get('url');
    const email = contact && contact.get('email');

    const terms = info.get('termsOfService');
    const summary = info.get('x-summary');
    const project = info.get('x-project');

    // Check if project exists in the projects list.
    const reference = projects.filter((proj) => proj.id === project)[0];

    const { download, server, channel, developer, tos, platform, goToPlatform } = window.l10n.swagger;

    return (
      <section className="swagger--hero">
        <div className="row">
          <div className={project ? 'col-lg-7' : 'col-lg'}>
            <div className="mr-5">
              <h1 className="display-1 mb-4">
                {title}
                <span className="badge badge-pill bg-primary swagger--hero-pill ms-2">{version}</span>
              </h1>
              <section className="mb-5">
                <div className="row">
                  <div className="col">
                    {(() => {
                      if (summary) {
                        return <blockquote className="mb-5 blockquote swagger--hero-summary">{summary}</blockquote>;
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
                      <a href={sanitizeUrl(contactUrl)} target="_blank" rel="noreferrer">
                        {name}
                      </a>
                    ) : (
                      <span>{name}</span>
                    )}
                  </div>
                  <div className="col-4 text-overflow-wrap">
                    {email ? <a href={sanitizeUrl(`mailto:${email}`)}>{email}</a> : ''}
                  </div>
                  <div className="col-4 text-overflow-wrap">
                    {terms ? (
                      <a href={sanitizeUrl(terms)} target="_blank" rel="noreferrer">
                        {terms}
                      </a>
                    ) : (
                      '-'
                    )}
                  </div>
                </div>
              </section>
              <div>
                <a
                  href={window.swaggerUrl}
                  role="button"
                  className="btn btn-primary me-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  {download}
                </a>
                <a
                  href={servers && servers.size && servers.first().get('url')}
                  role="button"
                  className="btn  btn-outline-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    try {
                      const url = servers && servers.size && servers.first().get('url');
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
          {(() => {
            if (project) {
              const { id, title, description } = reference;
              return (
                <div className="col-lg">
                  <div className="card rounded border border-primary mt-5 swagger--hero--card">
                    <div className="card-body">
                      <div className="position-absolute text-uppercase swagger--hero--card-legend">{platform}</div>

                      <h3 className="card-title">{title}</h3>
                      <blockquote
                        className="blockquote card-text swagger--hero--card-description"
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                      <div>
                        {/* eslint-disable-next-line no-undef */}
                        <a className="text-uppercase swagger--hero--card-platform-link" href={`/${lang}/${id}`}>
                          <img className="me-2" src={platformIcon} alt={goToPlatform} />
                          {goToPlatform} →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })()}
        </div>
      </section>
    );
  }
}

Hero.propTypes = {
  specSelectors: PropTypes.object.isRequired,
};

export default Hero;
