import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CatalogueNoResults } from './CatalogueNoResults.js';

jest.mock('../../utils/l10n.js', () => {
  const { l10NLabels } = require('../../utils/__mocks__/l10n.js');
  return {
    l10NLabels,
  };
});

describe('CatalogueNoResults', () => {
  it('renders CatalogueNoResults', () => {
    render(<CatalogueNoResults />);
    // expect(screen.queryByTestId('no-results')).toHaveTextContent('Ops! Nessun risultato trovato');
  });
});
