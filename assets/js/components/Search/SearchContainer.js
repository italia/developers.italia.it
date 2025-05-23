import React from 'react';
import { Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { SearchProvider } from '../../contexts/searchContext.js';
import { ALL_SITE } from '../../utils/constants.js';
import { useModal } from '../../hooks/useModal.js';
import { l10NLabels } from '../../utils/l10n.js';
import { SearchModal } from './SearchModal.js';

const useStyles = createUseStyles({
  icon: {
    composes: 'd-none d-lg-inline',
    backgroundColor: 'var(--bs-white)',
    borderRadius: '100%',
    fill: 'var(--bs-primary)',
    height: '2.6rem',
    padding: '0.8rem',
    width: '2.6rem',
  },
});

export const SearchContainer = () => {
  const classes = useStyles();
  const [isModalOpen, closeModal, openModal] = useModal();

  return (
    <>
      <div onClick={openModal} className="d-flex align-items-center pe-2" role="button" data-testid="search-button">
        <Icon
          className={classes.icon}
          icon="it-search"
          size="lg"
          color="primary"
          title={l10NLabels.search_form_label}
        ></Icon>
        <Icon className="d-inline d-lg-none" icon="it-search" color="light" title={l10NLabels.search_form_label}></Icon>
      </div>
      {isModalOpen && (
        <SearchProvider initialType={ALL_SITE}>
          <SearchModal onClose={closeModal} />
        </SearchProvider>
      )}
    </>
  );
};
