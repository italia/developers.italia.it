import React from 'react';

export const SearchCatalogue = () => {
  return (
    <a id="search-form" data-toggle="modal" data-backdrop="false" data-target="#searchModal">
      <div className="form-inline pr-2 pr-lg-0" role="search">
        <div className="form-group position-relative">
      <span className="text-white mr-3 d-none d-lg-inline">
        CERCA
      </span>
          <svg className="icon">
            <use xlinkHref="/assets/svg/sprite.svg#it-search"></use>
          </svg>
        </div>
      </div>
    </a>
  )
}
