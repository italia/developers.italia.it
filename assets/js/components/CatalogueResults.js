import React from 'react';

export const CatalogueResults = () => {
  return (
    <div className="container page-searched-list">
      <div className="row">
        <div className="col-md-3 d-none d-md-block">
          <div className="type">
            <p className="head"> Tipologia </p>
            <div id="list-type">
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="platforms" />
                    <span> Piattaforme </span>
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="software_open"/>
                    <span> Software open source di terze parti </span>
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="reuse_software" />
                    <span> Software a riuso </span>
                </label>
              </div>
            </div>
          </div>
          <div className="arguments">
            <p className="head">Categorie</p>
            <div id="list-tags">


              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="accounting"/>
                    <span>accounting</span>
                </label>
              </div>


              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="applicant-tracking"/>
                    <span>applicant tracking</span>
                </label>
              </div>


              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="application-development"/>
                    <span>application development</span>
                </label>
              </div>


              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="billing-and-invoicing"/>
                    <span>billing and invoicing</span>
                </label>
              </div>

            </div>
          </div>
          <div className="scopes">
            <p className="head">Ambito di applicazione</p>
            <div id="list-scopes">


              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="agriculture" />
                    <span>agriculture</span>
                </label>
              </div>


              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="culture" />
                    <span>culture</span>
                </label>
              </div>


              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="defence" />
                    <span>defence</span>
                </label>
              </div>


              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="education" />
                    <span>education</span>
                </label>
              </div>

            </div>
          </div>
          <div className="status">
            <p className="head">Stato di sviluppo</p>
            <div id="list-status">

              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="concept" />
                    <span>concept </span>
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="development" />
                    <span>in sviluppo </span>
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="beta" />
                    <span>beta </span>
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="stable" />
                    <span>stabile </span>
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" value="obsolete" />
                    <span>obsoleto </span>
                </label>
              </div>

            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="text-center">
            <h1 style={{fontSize: '3rem'}}>Hai cercato "prova"</h1>
            <div className="abstract-sorting row row-eq-height d-none d-md-flex">
              <div className="results-number col-md-6 d-flex"><p>1 risultati</p></div>
              <div className="sortingBy col-md-6">
                <div className="d-flex justify-content-end">
                  <p>Ordina per</p>
                  <div className="form-group">
                    <select aria-label="sort-by" className="form-control">
                      <option value="relevance" className="active">Rilevanza</option>
                      <option value="releasedate">Più recenti</option>
                      <option value="vitality">Più attivi</option>
                      <option value="az">Alfabetico</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container list-item-sorting">
            <div className="row row-eq-height">
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2 p-md-3">
                <span className="icon icon-type-public-sw">SOFTWARE A RIUSO</span>
                <article className="d-flex flex-column align-items-start mb-2 mb-md-5">
                  <a href="/it/software/citsrl-consorzioit-io_messaging" title="IO Messaging"
                     className="d-block decoration-none ">
                    <div data-display-logo-id="sw-437fa1ac8aa4d5028035c6389f257041dae743fd"
                         data-display-logo-src="https://raw.githubusercontent.com/consorzioit/io_messaging/master/images/logo.png">
                      <div style={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          height:'150px',
          backgroundImage: "url('/assets/images/cover_softwareriuso.png')"
          }}></div>
                    </div>
                    <h1 className="projectslist__listing__title text-break">IO Messaging</h1>
                    <h3 className="projectslist__listing">script per invio messaggi ad IO</h3>
                    <span className="projectslist__listing__url">Leggi di più →</span>
                  </a>
                </article>
              </div>
            </div>
            <nav id="paginator"></nav>

          </div>
        </div>
      </div>
      <div id="filters" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"><span className="back" data-dismiss="modal"><i
                className="it-arrow-left"></i></span>Filtri</h5>
              <a className="save" href="" data-dismiss="modal">
                conferma
              </a>
            </div>
            <div className="container-fluid">
              <div className="pill-filters row">
                <ul className="nav nav-pills  w-100" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="pills-arguments-tab" data-toggle="pill" href="#pills-arguments"
                       role="tab" aria-controls="pills-arguments" aria-selected="true">Categorie</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pills-scopes-tab" data-toggle="pill" href="#pills-scopes" role="tab"
                       aria-controls="pills-scopes" aria-selected="true">Ambito di applicazione</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pills-types-tab" data-toggle="pill" href="#pills-types" role="tab"
                       aria-controls="pills-types" aria-selected="true"> Tipologia </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pills-development_status-tab" data-toggle="pill"
                       href="#pills-development_status" role="tab" aria-controls="pills-development_status"
                       aria-selected="false">Stato di sviluppo</a>
                  </li>
                </ul>
              </div>
            </div>
      </div>
        </div>
      </div>
      <div id="sortBy" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabelSort"
           aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabelSort">Ordina per</h5>
            </div>
            <div className="modal-body">
              <a href="" sort="relevance" className="active">Rilevanza <i className="it-check"></i></a>
              <a href="" sort="vitality">Più attivi</a>
              <a href="" sort="releasedate">Più recenti</a>
              <a href="" sort="az">Alfabetico</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
