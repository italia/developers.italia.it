import React, { useContext } from 'react';
import debounce from 'lodash.debounce';
import { DEBOUNCE_SEARCH_MS } from '../../utils/constants.js';
import { lang } from '../../utils/l10n.js';
import { searchContextDispatch, setSearchValue } from '../../contexts/searchContext.js';
import { useSearchEngine } from '../../hooks/useSearchEngine.js';
import { SearchModalType } from './SearchModalType.js';
import { SearchItems } from './SearchItems.js';

export const SearchModal = () => {
  const [items] = useSearchEngine({ pageSize: 9 });
  console.log('searchModal');
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

                <SearchModalType />
                {items !== null && <SearchItems items={items} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
