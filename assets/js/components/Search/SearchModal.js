import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { useSearchEngine } from '../../hooks/useSearchEngine.js';
import { l10NLabels, lang } from '../../utils/l10n.js';
import { searchContextDispatch, searchContextState, setSearchValue } from '../../contexts/searchContext.js';
import { SearchBar } from '../SearchBar.js';
import { Error } from '../Error.js';
import { SearchItems } from './SearchItems.js';
import { SearchType } from './SearchType.js';

const useStyles = createUseStyles({
  modalFullScreen: {
    minWidth: '100% !important',
    margin: '0 !important',
  },
});

export const SearchModal = ({ onClose }) => {
  const [errorMessage, items] = useSearchEngine({ pageSize: 9 });
  const classes = useStyles();
  const { searchValue } = useContext(searchContextState);
  const dispatch = useContext(searchContextDispatch);

  const handleSearch = useCallback((value) => dispatch(setSearchValue(value)), [dispatch]);

  return (
    <Modal className={classes.modalFullScreen} isOpen={true} role="dialog" data-testid="search-modal" autoFocus={false}>
      <ModalHeader id="esempio1" toggle={onClose} className={'mx-md-5'}>
        <div className="row px-1 px-md-2">
          <h1>{l10NLabels['search_form_label']}</h1>
        </div>
      </ModalHeader>
      <ModalBody className="mt-3 p-0" tag="div">
        <div className="container">
          <div className="mb-5">
            <SearchBar onChange={handleSearch} placeholder={l10NLabels.search_form_placeholder} />
          </div>
          <SearchType />
          {errorMessage ? (
            <div className="m-4">
              <Error description={errorMessage} />
            </div>
          ) : (
            <>
              <h5 className="form-group text-uppercase">
                <a href={`/${lang}/search?search_value=${searchValue}`}>{l10NLabels.search_form_catalogue}</a>
              </h5>
              {items !== null && <SearchItems items={items} />}
            </>
          )}
        </div>
      </ModalBody>
    </Modal>
  );
};

SearchModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
