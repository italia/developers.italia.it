import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
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

    userEvent.click(screen.getByAltText('libero'));
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
    userEvent.click(screen.getByAltText('libero'));
    expect(screen.getByTestId('counter')).toHaveTextContent('1');
    userEvent.click(screen.getByAltText('source'));
    expect(screen.getByTestId('counter')).toHaveTextContent('2');
    userEvent.click(screen.getByAltText('libero'));
    userEvent.click(screen.getByAltText('source'));
    expect(screen.queryByTestId('counter')).toBeNull();
  });
});
