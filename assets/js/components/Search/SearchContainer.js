import React from 'react';
import { Icon } from 'design-react-kit';
import { SearchModal } from './SearchModal.js';
import { SearchProvider } from '../../contexts/searchContext.js';
import { ALL_SITE } from '../../utils/constants.js';
import { useModal } from '../../hooks/useModal.js';
import { l10NLabels } from '../../utils/l10n.js';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  icon: {
    composes: 'd-none d-lg-inline',
    backgroundColor: 'var(--white)',
    borderRadius: '100%',
    fill: 'var(--primary)',
    height: '2.6rem',
    padding: '0.8rem',
    width: '2.6rem',
  },
});

export const SearchContainer = () => {
  const classes = useStyles();
  const [isModalOpen, closeModal, openModal] = useModal();

  return (
    <SearchProvider initialType={ALL_SITE}>
      <div onClick={openModal} className="d-flex align-items-center pr-2" role="button">
        <span className="text-white mr-3 d-none d-lg-inline">{l10NLabels['search_form_label']}</span>
        <Icon className={classes.icon} icon="it-search"></Icon>
        <Icon className="d-inline d-lg-none" icon="it-search" color="white"></Icon>
      </div>
      {isModalOpen && <SearchModal onClose={closeModal} />}
    </SearchProvider>
  );
};
