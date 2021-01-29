import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CatalogueContainer } from './CatalogueContainer.js';

jest.mock('../../utils/l10n.js');
jest.mock('../../hooks/useInfiniteScroll.js');
jest.mock('../../services/searchEngine.js');

describe('CatalogueContainer', () => {
  it('renders the catalogue', async () => {
    render(<CatalogueContainer />);
    expect(await screen.findByTestId('catalogue-container')).toBeInTheDocument();
  });
});
