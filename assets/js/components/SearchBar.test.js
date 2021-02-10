import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { SearchBar } from './SearchBar.js';

const searchBarId = 'search-bar';

describe('SearchBar', () => {
  it('renders a search bar', () => {
    render(<SearchBar onChange={() => {}} />);
    expect(screen.queryByTestId(searchBarId)).toBeInTheDocument();
  });

  it('renders a search bar with a default value', () => {
    render(<SearchBar onChange={() => {}} defaultValue="anpr" />);
    expect(screen.queryByTestId(searchBarId)).toHaveValue('anpr');
  });

  it('dispatches onChange function on change event', async () => {
    const onChange = jest.fn();
    render(<SearchBar onChange={onChange} />);
    userEvent.paste(screen.queryByTestId(searchBarId), 'anpr');
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1));
  });
});
