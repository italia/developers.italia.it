import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { search } from '../../services/searchEngine.js';
import { ALL_SITE } from '../../utils/constants.js';
import { SearchItem } from './SearchItem.js';

jest.mock('../../utils/l10n.js');
jest.mock('../../services/searchEngine.js');

describe('SearchItem', () => {
  it('renders a searched item', async () => {
    const [items] = await search(ALL_SITE);
    render(<SearchItem item={items[0]} />);
    const itemInDOM = screen.queryByTestId(items[0].id);
    expect(itemInDOM).toBeInTheDocument();
    expect(itemInDOM).toHaveAttribute('href', items[0].url);
  });
});
