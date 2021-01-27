import React, { useContext } from 'react';
import { Button, Icon } from 'design-react-kit';
import { ALL_SITE, SOFTWARE_REUSE, SOFTWARE_OPEN, PLATFORM, ADMINISTRATION, API } from '../../utils/constants.js';
import { searchContextDispatch, searchContextState, setType } from '../../contexts/searchContext.js';
import { createUseStyles } from 'react-jss';
import { l10NLabels } from '../../utils/l10n.js';

const useStyles = createUseStyles({
  icon: {
    marginRight: '8px',
    minWidth: '32px',
    minHeight: '32px',
  },
  baseButton: {
    textTransform: 'capitalize',
    justifyContent: 'center',
    padding: '8px 24px',
    width: '100%',
  },
  buttonInactiveType: {
    composes: 'btn-default',
    extend: 'baseButton',
    background: 'var(--white)',
    border: '1px solid #656566',
    color: '#656566',
    '& span': {
      extend: 'icon',
    },
    '& svg': {
      extend: 'icon',
      fill: '#656566',
    },
  },
  buttonActiveType: {
    composes: 'btn-primary',
    extend: 'baseButton',
    '& span': {
      extend: 'icon',
      filter: 'invert(100%) brightness(200%)',
    },
    '& svg': {
      extend: 'icon',
      fill: 'var(--white)',
    },
  },
});

export const SearchType = React.memo(() => {
  const classes = useStyles();
  const { type } = useContext(searchContextState);
  const dispatch = useContext(searchContextDispatch);

  return (
    <div className="form-group">
      <div className="d-block d-md-inline-block m-1">
        <Button
          className={type === ALL_SITE ? classes.buttonActiveType : classes.buttonInactiveType}
          color="default"
          icon={true}
          tag="button"
          onClick={() => {
            dispatch(setType(ALL_SITE));
          }}
        >
          <Icon icon="it-search" /> {l10NLabels['all']}
        </Button>
      </div>

      <div className="d-block d-md-inline-block m-1">
        <Button
          className={type === ADMINISTRATION ? classes.buttonActiveType : classes.buttonInactiveType}
          color="default"
          icon={true}
          tag="button"
          onClick={() => {
            dispatch(setType(ADMINISTRATION));
          }}
        >
          <Icon icon="it-pa" /> {l10NLabels['software']['administrations']}
        </Button>
      </div>

      <div className="d-block d-md-inline-block m-1">
        <Button
          className={type === API ? classes.buttonActiveType : classes.buttonInactiveType}
          color="default"
          icon={true}
          tag="button"
          onClick={() => {
            dispatch(setType(API));
          }}
        >
          <Icon icon="it-settings" /> Api
        </Button>
      </div>

      <div className="d-block d-md-inline-block m-1">
        <Button
          className={type === PLATFORM ? classes.buttonActiveType : classes.buttonInactiveType}
          color="default"
          icon={true}
          tag="button"
          onClick={() => {
            dispatch(setType(PLATFORM));
          }}
        >
          <span className={`icon-type-platform--gray`}></span> {l10NLabels['software']['platforms']}
        </Button>
      </div>

      <div className="d-block d-md-inline-block m-1">
        <Button
          className={type === SOFTWARE_OPEN ? classes.buttonActiveType : classes.buttonInactiveType}
          color="default"
          icon={true}
          tag="button"
          onClick={() => {
            dispatch(setType(SOFTWARE_OPEN));
          }}
        >
          <span className={`icon-type-software_open--gray`}></span> {l10NLabels['software']['software_open']}
        </Button>
      </div>

      <div className="d-block d-md-inline-block m-1">
        <Button
          className={type === SOFTWARE_REUSE ? classes.buttonActiveType : classes.buttonInactiveType}
          color="default"
          icon={true}
          tag="button"
          onClick={() => {
            dispatch(setType(SOFTWARE_REUSE));
          }}
        >
          <span className={`icon-type-software_reuse--gray`}></span> {l10NLabels['software']['software_reuse']}
        </Button>
      </div>
    </div>
  );
});

SearchType.displayName = 'SearchType';
