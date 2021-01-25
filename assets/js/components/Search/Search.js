import React, { useState } from 'react';
import { SearchModal } from './SearchModal.js';
import { SearchProvider } from '../../contexts/searchContext.js';
import { ALL_SITE } from '../../utils/constants.js';

export const Search = () => {
  const [openModal, setOpenModal] = useState(false);
  console.log('Search');

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

  if (openModal) {
    return (
      <SearchProvider initialType={ALL_SITE}>
        <SearchModal />
      </SearchProvider>
    );
  }
};
