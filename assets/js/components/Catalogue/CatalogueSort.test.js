import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchProvider } from '../../contexts/searchContext';
import { RELEASE_DATE } from '../../utils/constants';
import { CatalogueSort } from './CatalogueSort';

jest.mock('../../utils/l10n.js');

describe('CatalogueSort', () => {
  describe('when the search value is not available', () => {
    it('should hide the relevance filter', () => {
      const screen = render(
        <SearchProvider initialSortBy={RELEASE_DATE} initialSearchValue={null}>
          <CatalogueSort />
        </SearchProvider>
      );
      expect(
        screen.queryByRole('option', {
          name: 'Rilevanza',
        })
      ).toBeNull();
    });
  });

  describe('when the search value is available', () => {
    it('should show the relevance filter', () => {
      const screen = render(
        <SearchProvider initialSortBy={RELEASE_DATE} initialSearchValue={'some search'}>
          <CatalogueSort />
        </SearchProvider>
      );
      expect(
        screen.getByRole('option', {
          name: 'Rilevanza',
        })
      ).toBeInTheDocument();
    });
  });
});
