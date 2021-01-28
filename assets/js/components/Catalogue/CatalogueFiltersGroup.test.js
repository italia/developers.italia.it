import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CatalogueFiltersGroup } from './CatalogueFiltersGroup.js';

describe('CatalogueFiltersGroup', () => {
  it('renders CatalogueFiltersGroup', () => {
    const onChange = jest.fn();
    render(
      <CatalogueFiltersGroup
        title={'661'}
        onChange={onChange}
        filters={[
          ['foo', 'bar'],
          ['open', 'source'],
          ['software', 'libero'],
        ]}
      />
    );

    expect(screen.queryAllByAltText('libero')).toBeTruthy();
  });

  it('dispatches onChange function on click', () => {
    const onChange = jest.fn();
    render(
      <CatalogueFiltersGroup
        title={'Software'}
        onChange={onChange}
        filters={[
          ['foo', 'bar'],
          ['open', 'source'],
          ['software', 'libero'],
        ]}
      />
    );

    const inputEl = screen.getByAltText('libero');
    fireEvent(
      inputEl,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('updates internal counter on click', () => {
    const onChange = jest.fn();
    render(
      <CatalogueFiltersGroup
        title={'Software'}
        onChange={onChange}
        filters={[
          ['foo', 'bar'],
          ['open', 'source'],
          ['software', 'libero'],
        ]}
      />
    );

    expect(screen.queryByTestId('counter')).toBeNull();
    fireEvent(
      screen.getByAltText('libero'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByTestId('counter')).toHaveTextContent('1');
    fireEvent(
      screen.getByAltText('source'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByTestId('counter')).toHaveTextContent('2');
    fireEvent(
      screen.getByAltText('libero'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      screen.getByAltText('source'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.queryByTestId('counter')).toBeNull();
  });
});
