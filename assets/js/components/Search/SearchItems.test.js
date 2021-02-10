import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { search } from '../../services/searchEngine.js';
import { ALL_SITE } from '../../utils/constants.js';
import { SearchItems } from './SearchItems.js';

jest.mock('../../utils/l10n.js');
jest.mock('../../services/searchEngine.js');

describe('SearchItems', () => {
  it('renders a list of searched items', async () => {
    const [items] = await search(ALL_SITE);
    render(<SearchItems items={items} />);
    expect(screen.queryByTestId('search-modal-items')).not.toBeEmptyDOMElement();
  });
  it('renders no results', async () => {
    render(<SearchItems items={[]} />);
    expect(screen.queryByTestId('search-modal-no-results')).toBeInTheDocument();
  });
});
