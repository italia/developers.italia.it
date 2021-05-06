import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { search } from '../../services/searchEngine.js';
import { ALL_CATALOGUE } from '../../utils/constants.js';
import { CatalogueItem } from './CatalogueItem.js';

jest.mock('../../utils/l10n.js');
jest.mock('../../services/searchEngine.js');

describe('CatalogueItem', () => {
  it('renders a catalogue item', async () => {
    const [items] = await search(ALL_CATALOGUE);
    render(<CatalogueItem {...items[0]} />);
    expect(screen.queryByTestId(items[0].id)).toBeInTheDocument();
    expect(screen.queryByTestId('item-anchor')).toHaveAttribute('href', items[0].url);
  });
});
