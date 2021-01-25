import React, { useContext } from 'react';
import { ALL_SITE, SOFTWARE_REUSE, SOFTWARE_OPEN, PLATFORM, ADMINISTRATION } from '../../utils/constants.js';
import { searchContextDispatch, searchContextState, setType } from '../../contexts/searchContext.js';

export const SearchModalType = React.memo(() => {
  console.log('SearchModalType');
  const { type } = useContext(searchContextState);
  const dispatch = useContext(searchContextDispatch);

  return (
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
        className={`btn py-2 px-4 mb-2 btn-filter reuse_software ${type === SOFTWARE_REUSE ? 'active' : ''} `}
        onClick={() => {
          dispatch(setType(SOFTWARE_REUSE));
        }}
      >
        <span className="icon icon-type-software_reuse--gray"></span>riuso
      </a>
      <a
        className={`btn py-2 px-4 mb-2 btn-filter administrations ${type === ADMINISTRATION ? 'active' : ''}`}
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
  );
});

SearchModalType.displayName = 'SearchModalType';
