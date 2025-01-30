import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { search } from '../../services/searchEngine.js';
import { ALL_CATALOGUE } from '../../utils/constants.js';
import { CatalogueItem } from './CatalogueItem.js';

jest.mock('../../utils/l10n.js');
jest.mock('../../services/searchEngine.js');

describe('CatalogueItem', () => {
  it('renders a catalogue item', async () => {
    const [items] = await search(ALL_CATALOGUE);
    await render(<CatalogueItem {...items[0]} />);
    expect(await screen.queryByTestId(items[0].id)).toBeInTheDocument();
    expect(await screen.queryByTestId(items[0].id).querySelector('a')).toHaveAttribute('href', items[0].url);
  });
});
