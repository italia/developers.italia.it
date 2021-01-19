import React, { useState, useEffect, useRef } from 'react';
import { search } from '../services/searchEngine.js';
import {
  ALL_SITE,
  SOFTWARE_REUSE,
  SOFTWARE_OPEN,
  PLATFORM,
  ADMINISTRATION,
} from '../utils/constants.js';

const lang = 'it';

export const Search = () => {
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([]);
  const [type, setType] = useState(ALL_SITE);
  const urlSearchParams = useRef(new URLSearchParams());

  const handleSearch = async (e) => {
    setSearchValue(e.target.value);
    urlSearchParams.current.set('keyword', e.target.value);
  };

  useEffect(() => {
    const query = async () => {
      const items = await search(type, { searchValue, from: 0, size: 9 });
      setItems(items);
    };
    searchValue ? query() : setItems([]);
  }, [searchValue, type]);

  if (!openModal) {
    return (
      <a data-toggle="modal" data-backdrop="false" data-target="#searchModal" onClick={() => setOpenModal(true)}>
        <div className="form-inline pr-2 pr-lg-0" role="search">
          <div className="form-group position-relative">
            <span className="text-white mr-3 d-none d-lg-inline">CERCA</span>
            <svg className="icon">
              <use xlinkHref="/assets/svg/sprite.svg#it-search"></use>
            </svg>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div role="dialog" className="modal fade show d-block">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="container">
              <p className="h1 modal-title d-inline"> Title </p>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setOpenModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="form-group">
                <div className="autocomplete">
                  <svg
                    className="icon icon-lg"
                    onClick={() => {
                      location.href = `/${lang}/search?${urlSearchParams.current.toString()}`;
                    }}
                  >
                    <use xlinkHref="/assets/svg/sprite.svg#it-search"></use>
                  </svg>
                  <input type="text" className="form-control" value={searchValue} onChange={handleSearch} />
                </div>

                <div>
                  <a
                    className={`btn py-2 px-4 mb-2 btn-filter all ${type === ALL_SITE ? 'active' : ''}`}
                    data="all"
                    onClick={() => setType(ALL_SITE)}
                  >
                    <svg className="icon">
                      <use xlinkHref="/assets/svg/sprite.svg#it-search"></use>
                    </svg>
                    Tutto
                  </a>
                  <a
                    className={`btn py-2 px-4 mb-2 btn-filter platforms ${type === PLATFORM ? 'active' : ''}`}
                    onClick={() => setType(PLATFORM)}
                  >
                    <span className="icon icon-type-platform--gray"></span>piattaforme
                  </a>
                  <a
                    className={`btn py-2 px-4 mb-2 btn-filter software_open ${
                      type === SOFTWARE_OPEN ? 'active' : ''
                    }`}
                    onClick={() => setType(SOFTWARE_OPEN)}
                  >
                    <span className="icon icon-type-software_open--gray"></span>open software
                  </a>
                  <a
                    className={`btn py-2 px-4 mb-2 btn-filter reuse_software ${
                      type === SOFTWARE_REUSE ? 'active' : ''
                    } `}
                    onClick={() => setType(SOFTWARE_REUSE)}
                  >
                    <span className="icon icon-type-software_reuse--gray"></span>riuso
                  </a>
                  <a
                    className={`btn py-2 px-4 mb-2 btn-filter administrations ${
                      type === ADMINISTRATION ? 'active' : ''
                    }`}
                    onClick={() => setType(ADMINISTRATION)}
                  >
                    <svg className="icon">
                      <use xlinkHref="/assets/svg/sprite.svg#it-pa"></use>
                    </svg>
                    amministrazione
                  </a>
                </div>

                {items && (
                  <div>
                    {items.map((i) => (
                      <a className="d-block" key={i.id} href={i.url}>
                        <span className={`results category icon ${i.icon}`}>{i.name}</span>
                        <span>{i.category}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
