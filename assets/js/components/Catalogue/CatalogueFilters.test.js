import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { CatalogueFilters } from './CatalogueFilters.js';

describe('CatalogueFilters', () => {
  it('renders CatalogueFilters', () => {
    const onChange = jest.fn();
    render(
      <CatalogueFilters
        title={'661'}
        onChange={onChange}
        filters={[
          ['foo', 'bar'],
          ['open', 'source'],
          ['software', 'libero'],
        ]}
        name="test"
      />
    );

    expect(screen.queryByAltText('libero')).toBeInTheDocument();
  });

  it('dispatches onChange function on click', () => {
    const onChange = jest.fn();
    render(
      <CatalogueFilters
        title={'Software'}
        onChange={onChange}
        filters={[
          ['foo', 'bar'],
          ['open', 'source'],
          ['software', 'libero'],
        ]}
        name="test"
      />
    );

    userEvent.click(screen.getByAltText('libero'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('updates internal counter on click', () => {
    const onChange = jest.fn();
    render(
      <CatalogueFilters
        title={'Software'}
        onChange={onChange}
        filters={[
          ['foo', 'bar'],
          ['open', 'source'],
          ['software', 'libero'],
        ]}
        name="test"
      />
    );

    expect(screen.queryByTestId('counter')).not.toBeInTheDocument();
    userEvent.click(screen.getByAltText('libero'));
    expect(screen.getByTestId('counter')).toHaveTextContent('1');
    userEvent.click(screen.getByAltText('source'));
    expect(screen.getByTestId('counter')).toHaveTextContent('2');
    userEvent.click(screen.getByAltText('libero'));
    userEvent.click(screen.getByAltText('source'));
    expect(screen.queryByTestId('counter')).not.toBeInTheDocument();
  });
});
