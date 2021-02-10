import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchProvider } from '../../contexts/searchContext.js';
import { ALL_CATALOGUE } from '../../utils/constants.js';
import { search } from '../../services/searchEngine.js';
import { CatalogueView } from './CatalogueView.js';

jest.mock('../../utils/l10n.js');
jest.mock('../../services/searchEngine.js');
jest.mock('../../hooks/useScrollIntoView.js');

describe('CatalogueView', () => {
  beforeEach(() => {
    search.mockClear();
  });

  it('renders CatalogueView with items and grand total', async () => {
    const [items, total] = await search(ALL_CATALOGUE);
    render(
      <SearchProvider initialType={ALL_CATALOGUE}>
        <CatalogueView />
      </SearchProvider>
    );
    for (const i of items) {
      expect(await screen.findByTestId(i.id)).toBeInTheDocument();
    }
    expect(await screen.findByTestId('counter-summary')).toHaveTextContent(total);
  });

  it('renders CatalogueView with no items and grand total equal to zero', async () => {
    search.mockImplementation(() => [[], 0]);
    render(
      <SearchProvider initialType={ALL_CATALOGUE}>
        <CatalogueView />
      </SearchProvider>
    );
    expect(await screen.findByTestId('counter-summary')).toHaveTextContent('0');
    expect(await screen.findByTestId('catalogue-no-results')).toBeInTheDocument();
    expect(screen.queryByTestId('catalogue-items')).not.toBeInTheDocument();
  });

  it('renders the Error component', async () => {
    search.mockImplementation(() => {
      throw new Error();
    });
    render(
      <SearchProvider initialType={ALL_CATALOGUE}>
        <CatalogueView />
      </SearchProvider>
    );
    expect(await screen.findByTestId('error-something-went-wrong')).toBeInTheDocument();
    expect(screen.queryByTestId('catalogue-items')).not.toBeInTheDocument();
  });
});
