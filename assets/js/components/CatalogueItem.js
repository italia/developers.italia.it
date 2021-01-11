import React from 'react';
import { getL10NLabels } from '../l10nUtils.js';

export const CatalogueItem = ({ item }) => {
  const l10NLabels = getL10NLabels();
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2 p-md-3">
      <span className={`icon ${item.icon}`}>
        {item.category} {/*// TODO: i18n*/}
      </span>
      <article className="d-flex flex-column align-items-start mb-2 mb-md-5">
        <a href={item.url} title={item.name} className="d-block decoration-none">
          <div
            style={{
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
              height: '150px',
              backgroundImage: `url(${item.logo})`,
            }}
          ></div>
          <h1 className="projectslist__listing__title text-break">{item.name}</h1>
          <h3 className="projectslist__listing">{item.description}</h3>
          <span className="projectslist__listing__url">{l10NLabels.software.read_more} → </span>
        </a>
      </article>
    </div>
  );
};
