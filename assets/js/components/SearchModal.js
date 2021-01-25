import React, { useContext } from 'react';
import debounce from 'lodash.debounce';
import {
  ALL_SITE,
  SOFTWARE_REUSE,
  SOFTWARE_OPEN,
  PLATFORM,
  ADMINISTRATION,
  DEBOUNCE_SEARCH_MS
} from '../utils/constants.js';
import { lang } from '../utils/l10n.js';
import { searchContextDispatch, searchContextState, setSearchValue, setType } from '../contexts/searchContext.js';
import { useSearchEngine } from '../hooks/useSearchEngine.js';

export const SearchModal = () => {
  const [items] = useSearchEngine({ pageSize: 9 });
  console.log('searchModal');
  const { type } = useContext(searchContextState);
  const dispatch = useContext(searchContextDispatch);

  const handleSearch = debounce((e) => {
    dispatch(setSearchValue(e.target.value));
  }, DEBOUNCE_SEARCH_MS);

  return (
    <div role="dialog" className="modal fade show d-block">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="container">
              <p className="h1 modal-title d-inline"> Title </p>
              <span aria-hidden="true">&times;</span>
            </div>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="form-group">
                <div className="autocomplete">
                  <svg
                    className="icon icon-lg"
                    onClick={() => {
                      location.href = `/${lang}/search?`;
                    }}
                  >
                    <use xlinkHref="/assets/svg/sprite.svg#it-search"></use>
                  </svg>
                  <input type="text" className="form-control" onChange={handleSearch} />
                </div>

                <div>
                  <a
                    className={`btn py-2 px-4 mb-2 btn-filter all ${type === ALL_SITE ? 'active' : ''}`}
                    data="all"
                    onClick={() => {
                      dispatch(setType(ALL_SITE));
                    }}
                  >
                    <svg className="icon">
                      <use xlinkHref="/assets/svg/sprite.svg#it-search"></use>
                    </svg>
                    Tutto
                  </a>
                  <a
                    className={`btn py-2 px-4 mb-2 btn-filter platforms ${type === PLATFORM ? 'active' : ''}`}
                    onClick={() => {
                      dispatch(setType(PLATFORM));
                    }}
                  >
                    <span className="icon icon-type-platform--gray"></span>piattaforme
                  </a>
                  <a
                    className={`btn py-2 px-4 mb-2 btn-filter software_open ${type === SOFTWARE_OPEN ? 'active' : ''}`}
                    onClick={() => {
                      dispatch(setType(SOFTWARE_OPEN));
                    }}
                  >
                    <span className="icon icon-type-software_open--gray"></span>open software
                  </a>
                  <a
                    className={`btn py-2 px-4 mb-2 btn-filter reuse_software ${
                      type === SOFTWARE_REUSE ? 'active' : ''
                    } `}
                    onClick={() => {
                      dispatch(setType(SOFTWARE_REUSE));
                    }}
                  >
                    <span className="icon icon-type-software_reuse--gray"></span>riuso
                  </a>
                  <a
                    className={`btn py-2 px-4 mb-2 btn-filter administrations ${
                      type === ADMINISTRATION ? 'active' : ''
                    }`}
                    onClick={() => {
                      dispatch(setType(ADMINISTRATION));
                    }}
                  >
                    <svg className="icon">
                      <use xlinkHref="/assets/svg/sprite.svg#it-pa"></use>
                    </svg>
                    amministrazione
                  </a>
                </div>

                {items !== null && (
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
