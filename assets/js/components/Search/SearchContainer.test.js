/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { search } from '../../services/searchEngine.js';
import { SearchContainer } from './SearchContainer.js';

jest.mock('../../utils/l10n.js');
jest.mock('../../services/searchEngine.js');

describe('SearchContainer', () => {
  beforeEach(() => {
    search.mockClear();
  });

  it('renders search button', async () => {
    render(<SearchContainer />);
    expect(await screen.findByTestId('search-button')).toBeInTheDocument();
    expect(search).toHaveBeenCalledTimes(0);
  });

  it('renders the search modal', async () => {
    render(<SearchContainer />);
    const searchButton = await screen.findByTestId('search-button');
    userEvent.click(searchButton);
    expect(await screen.findByTestId('search-modal')).toBeInTheDocument();
    expect(search).toHaveBeenCalledTimes(1);
  });

  it('closes the search modal on x button click', async () => {
    render(<SearchContainer />);
    const searchButton = await screen.findByTestId('search-button');
    userEvent.click(searchButton);
    const closeButton = await screen.findByTestId('close-search-modal');
    userEvent.click(closeButton);
    expect(screen.queryByTestId('search-modal')).not.toBeInTheDocument();
    expect(search).toHaveBeenCalledTimes(1);
  });

  it('triggers a new search when the user click on a filter type button', async () => {
    render(<SearchContainer />);
    userEvent.click(await screen.findByTestId('search-button'));
    userEvent.click(await screen.findByTestId('search-type-administration'));
    // Just wait that React does its magics
    await screen.findByTestId('search-type-administration');
    expect(search).toHaveBeenCalledTimes(2);
  });

  it('renders the Error component in the modal', async () => {
    search.mockImplementation(() => {
      throw new Error();
    });
    render(<SearchContainer />);
    userEvent.click(await screen.findByTestId('search-button'));
    expect(await screen.findByTestId('error-something-went-wrong')).toBeInTheDocument();
  });
});
