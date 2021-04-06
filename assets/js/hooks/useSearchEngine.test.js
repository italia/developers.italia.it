/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import './useSearchEngine.js';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { SearchProvider } from '../contexts/searchContext.js';
import { ALL_CATALOGUE } from '../utils/constants.js';
import { search } from '../services/searchEngine.js';
import { useSearchEngine } from './useSearchEngine.js';

jest.mock('../services/searchEngine.js');

const UseSearchEngineExample = () => {
  const [errorMessage, partialItems, itemsCount, fetchMore] = useSearchEngine({ pageSize: 1 });
  const items = partialItems
    ? partialItems.map((i) => (
        <div key={i.id} data-testid={i.id}>
          {i.name}
        </div>
      ))
    : [];

  if (errorMessage) {
    return 'ops...something went wrong';
  }

  return (
    <div>
      <div data-testid="count">{itemsCount}</div>
      {items}
      <button data-testid="fetch-more" onClick={() => fetchMore()}>
        Fetch more
      </button>
    </div>
  );
};

describe('useSearchEngine', () => {
  it('returns items and grand total', async () => {
    const [items, total] = await search(ALL_CATALOGUE);
    render(
      <SearchProvider initialType={ALL_CATALOGUE}>
        <UseSearchEngineExample />
      </SearchProvider>
    );

    expect(await screen.findByTestId('count')).toHaveTextContent(total);
    for (const i of items) {
      expect(await screen.findByTestId(i.id)).toHaveTextContent(i.name);
    }
  });

  it('returns items in batch using fetch more', async () => {
    search.mockClear();
    search
      .mockReturnValueOnce([[{ id: 'foo', name: 'bar' }], 3])
      .mockReturnValueOnce([[{ id: 'software', name: 'libero' }], 3])
      .mockReturnValue([[{ id: 'test', name: 'open source' }], 3]);
    render(
      <SearchProvider initialType={ALL_CATALOGUE}>
        <UseSearchEngineExample />
      </SearchProvider>
    );
    expect(await screen.findByTestId('foo')).toHaveTextContent('bar');
    expect(screen.queryByTestId('software')).not.toBeInTheDocument();
    expect(screen.queryByTestId('test')).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('fetch-more'));

    expect(await screen.findByTestId('software')).toHaveTextContent('libero');
    expect(await screen.queryByTestId('foo')).toBeInTheDocument();
    expect(await screen.queryByTestId('test')).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('fetch-more'));

    expect(await screen.findByTestId('test')).toHaveTextContent('open source');
    expect(await screen.queryByTestId('foo')).toBeInTheDocument();
    expect(await screen.queryByTestId('software')).toBeInTheDocument();

    expect(search).toHaveBeenCalledTimes(3);

    // No more items...don't call search!
    userEvent.click(screen.getByTestId('fetch-more'));

    expect(search).toHaveBeenCalledTimes(3);
  });
});
