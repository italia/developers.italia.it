import React, { useContext } from 'react';
import { Button, Icon } from 'design-react-kit';
import { ALL_SITE, SOFTWARE_REUSE, SOFTWARE_OPEN, PLATFORM, ADMINISTRATION, API } from '../../utils/constants.js';
import { searchContextDispatch, searchContextState, setType } from '../../contexts/searchContext.js';
import { l10NLabels } from '../../utils/l10n.js';

const buttons = [
  {
    dataTestid: 'search-type-all',
    icon: 'it-search',
    label: l10NLabels.all,
    type: ALL_SITE,
  },
  {
    dataTestid: 'search-type-administration',
    icon: 'it-pa',
    label: l10NLabels.software.administrations,
    type: ADMINISTRATION,
  },
  {
    dataTestid: 'search-type-api',
    icon: 'it-settings',
    label: 'Api',
    type: API,
  },
  {
    dataTestid: 'search-type-platform',
    icon: 'it-piattaforme',
    label: l10NLabels.software.platforms,
    type: PLATFORM,
  },
  {
    dataTestid: 'search-type-software_open',
    icon: 'it-open-source',
    label: l10NLabels.software.software_open,
    type: SOFTWARE_OPEN,
  },
  {
    dataTestid: 'search-type-software_reuse',
    icon: 'it-software',
    label: l10NLabels.software.software_reuse,
    type: SOFTWARE_REUSE,
  },
];

export const SearchType = React.memo(() => {
  const { type } = useContext(searchContextState);
  const dispatch = useContext(searchContextDispatch);

  return (
    <div className="form-group" data-testid="search-type-buttons">
      {buttons.map((b) => (
        <div key={b.dataTestid} className="d-block d-md-inline-block m-1">
          <Button
            className="me-2"
            color="primary"
            outline={type !== b.type}
            icon
            size="lg"
            onClick={() => {
              dispatch(setType(b.type));
            }}
            data-testid={b.dataTestid}
          >
            <Icon icon={b.icon} color={type === b.type ? 'white' : 'primary'} />{' '}
            <span>{b.label ? b.label.toUpperCase() : ''}</span>
          </Button>
        </div>
      ))}
    </div>
  );
});

SearchType.displayName = 'SearchType';
