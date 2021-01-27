import React from 'react';

import { render, screen } from '@testing-library/react';
import { CatalogueFiltersTitle } from './CatalogueFiltersTitle.js';

describe('CatalogueFiltersTitle', () => {
  it('renders CatalogueFilterTitle', () => {
    render(
      <CatalogueFiltersTitle
        title="foo"
        counter={0}
        onToogleExpandCollapse={Function.prototype}
        showCollapsableIcon={false}
      />
    );
    expect(screen.queryByTestId('catalogue-filters-title')).toBeTruthy();
  });
});
