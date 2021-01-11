import React, { useEffect, useState } from 'react';
import { search } from '../services/searchEngine.js';
import { CatalogueFilters } from './CatalogueFilters.js';
import { CatalogueItems } from './CatalogueItems.js';
import { CatalogueSummary } from './CatalogueSummary.js';
import { useSelector } from 'react-redux';

export const Catalogue = () => {
  const filterCategories = useSelector((state) => state.query.filterCategories);
  const filterDevelopmentStatuses = useSelector((state) => state.query.filterDevelopmentStatuses);
  const filterIntendedAudiences = useSelector((state) => state.query.filterIntendedAudiences);
  const searchType = useSelector((state) => state.query.searchType);
  const searchValue = useSelector((state) => state.query.searchValue);
  const sortBy = useSelector((state) => state.query.sortBy);

  const [catalogueData, setCatalogueData] = useState([]);

  useEffect(() => {
    console.log('effect');
    const query = async () => {
      const results = await search(searchType, {
        from: 0,
        filters: {
          categories: filterCategories,
          developmentStatuses: filterDevelopmentStatuses,
          intendedAudiences: filterIntendedAudiences,
        },
        searchValue,
        sortBy,
        size: 350,
      });
      setCatalogueData(results);
    };
    query();
  }, [searchType, searchValue, filterCategories, filterDevelopmentStatuses, filterIntendedAudiences, sortBy]);

  console.log('test');

  return (
    <div className="container page-searched-list">
      <div className="row">
        <CatalogueFilters />
        <div className="col-md-9">
          <CatalogueSummary />
          <CatalogueItems items={catalogueData} />
        </div>
      </div>
      <div
        id="filters"
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <span className="back" data-dismiss="modal">
                  <i className="it-arrow-left"></i>
                </span>
                Filtri
              </h5>
              <a className="save" href="" data-dismiss="modal">
                conferma
              </a>
            </div>
            <div className="container-fluid">
              <div className="pill-filters row">
                <ul className="nav nav-pills  w-100" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-arguments-tab"
                      data-toggle="pill"
                      href="#pills-arguments"
                      role="tab"
                      aria-controls="pills-arguments"
                      aria-selected="true"
                    >
                      Categorie
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-scopes-tab"
                      data-toggle="pill"
                      href="#pills-scopes"
                      role="tab"
                      aria-controls="pills-scopes"
                      aria-selected="true"
                    >
                      Ambito di applicazione
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-types-tab"
                      data-toggle="pill"
                      href="#pills-types"
                      role="tab"
                      aria-controls="pills-types"
                      aria-selected="true"
                    >
                      {' '}
                      Tipologia{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-development_status-tab"
                      data-toggle="pill"
                      href="#pills-development_status"
                      role="tab"
                      aria-controls="pills-development_status"
                      aria-selected="false"
                    >
                      Stato di sviluppo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="sortBy"
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabelSort"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabelSort">
                Ordina per
              </h5>
            </div>
            <div className="modal-body">
              <a href="" sort="relevance" className="active">
                Rilevanza <i className="it-check"></i>
              </a>
              <a href="" sort="vitality">
                Più attivi
              </a>
              <a href="" sort="releasedate">
                Più recenti
              </a>
              <a href="" sort="az">
                Alfabetico
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
