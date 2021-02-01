import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody } from 'design-react-kit';
import { useSearchEngine } from '../../hooks/useSearchEngine.js';
import { SearchType } from './SearchType.js';
import { SearchItems } from './SearchItems.js';
import { SearchBar } from './SearchBar.js';
import { createUseStyles } from 'react-jss';
import { l10NLabels, lang } from '../../utils/l10n.js';
import { searchContextState } from '../../contexts/searchContext.js';

const useStyles = createUseStyles({
  modalFullScreen: {
    minWidth: '100% !important',
    margin: '0 !important',
  },
  closeButton: {
    composes: 'close',
    fontSize: '3rem',
    marginLeft: 'auto',
  },
});

export const SearchModal = ({ onClose }) => {
  const [items] = useSearchEngine({ pageSize: 9 });
  const classes = useStyles();
  const { searchValue } = useContext(searchContextState);

  return (
    <Modal className={classes.modalFullScreen} isOpen={true} role="dialog" toggle={onClose} data-testid="search-modal">
      <ModalBody className="mt-3" tag="div">
        <div className="container">
          <div className="row px-1 px-md-2">
            <h1>{l10NLabels['search_form_label']}</h1>
            <button className={classes.closeButton} onClick={onClose} data-testid="close-search-modal">
              ×
            </button>
          </div>
          <SearchBar />
          <SearchType />
          <h5 className="form-group text-uppercase">
            <a href={`/${lang}/search?keyword=${searchValue}`}>{l10NLabels.search_form_catalogue}</a>
          </h5>
          {items !== null && <SearchItems items={items} />}
        </div>
      </ModalBody>
    </Modal>
  );
};

SearchModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
