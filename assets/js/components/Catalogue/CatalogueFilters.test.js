import React from 'react';

import { render } from '@testing-library/react';
import { CatalogueFilters } from './CatalogueFilters.js';

jest.mock('../../utils/l10n.js', () => {
  const {
    l10NLabels,
    getSoftwareCategories,
    softwareTypes,
    getSoftwareIntendedAudiences,
    getSoftwareDevelopmentStatuses,
  } = require('../../utils/__mocks__/l10n.js');
  return {
    l10NLabels,
    getSoftwareIntendedAudiences,
    getSoftwareDevelopmentStatuses,
    getSoftwareCategories,
    softwareTypes,
  };
});

describe('CatalogueFilters', () => {
  it('renders CatalogueFilters', () => {
    // render(<CatalogueFilters />);
  });
});
