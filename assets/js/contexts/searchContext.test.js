import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
  searchContextState,
  SearchProvider,
  setFrom,
  setType,
  setSearchValue,
  setFilterDevelopmentStatuses,
  setFilterIntendedAudience,
  setFilterCategories,
  setSortBy,
  searchReducer,
} from './searchContext.js';

import { ALL_CATALOGUE, ADMINISTRATION, ALL_SITE } from '../utils/constants.js';

const DummyUseContext = () => {
  const {
    from,
    type,
    searchValue,
    filterCategories,
    filterDevelopmentStatuses,
    filterIntendedAudiences,
    sortBy,
  } = useContext(searchContextState);

  return (
    <div>
      <div data-testid="from">{from}</div>
      <div data-testid="type">{type}</div>
      <div data-testid="search-value">{searchValue}</div>
      <div data-testid="filter-categories">{filterCategories.join()}</div>
      <div data-testid="filter-development-statuses">{filterDevelopmentStatuses.join()}</div>
      <div data-testid="filter-intended-audiences">{filterIntendedAudiences.join()}</div>
      <div data-testid="sort-by">{JSON.stringify(sortBy)}</div>
    </div>
  );
};

describe('searchContext', () => {
  it('provides correct initial state through useContext', () => {
    render(
      <SearchProvider
        initialType={ALL_CATALOGUE}
        initialSearchValue="foo"
        initialCategories={['business', 'education']}
        initialSortBy={{ field: 'last_release' }}
      >
        <DummyUseContext />
      </SearchProvider>
    );
    expect(screen.getByTestId('from')).toHaveTextContent('0');
    expect(screen.getByTestId('type')).toHaveTextContent(ALL_CATALOGUE);
    expect(screen.getByTestId('search-value')).toHaveTextContent('foo');
    expect(screen.getByTestId('filter-categories')).toHaveTextContent('business,education');
    expect(screen.getByTestId('filter-development-statuses')).toBeEmptyDOMElement();
    expect(screen.getByTestId('filter-intended-audiences')).toBeEmptyDOMElement();
    expect(screen.getByTestId('sort-by')).toHaveTextContent(`{"field":"last_release"`);
  });
});

describe('searchReducer', () => {
  let initialState = {};
  beforeEach(() => {
    initialState = {
      filterCategories: ['john', 'doe'],
      filterDevelopmentStatuses: ['test'],
      filterIntendedAudiences: ['business', 'education'],
      from: 5,
      type: ALL_SITE,
      searchValue: 'app',
      sortBy: { field: 'vitality' },
    };
  });
  it('dispatches new search value', () => {
    expect(searchReducer(initialState, setSearchValue('foo'))).toEqual({
      ...initialState,
      from: 0,
      searchValue: 'foo',
    });
  });
  it('dispatches new type', () => {
    expect(searchReducer(initialState, setType(ADMINISTRATION))).toEqual({
      ...initialState,
      from: 0,
      type: ADMINISTRATION,
    });
  });
  it('dispatches new filter categories', () => {
    expect(searchReducer(initialState, setFilterCategories(['document', 'software']))).toEqual({
      ...initialState,
      from: 0,
      filterCategories: ['document', 'software'],
    });
  });
  it('dispatches new development statuses', () => {
    expect(searchReducer(initialState, setFilterDevelopmentStatuses(['stable']))).toEqual({
      ...initialState,
      from: 0,
      filterDevelopmentStatuses: ['stable'],
    });
  });
  it('dispatches new intended audiences', () => {
    expect(searchReducer(initialState, setFilterIntendedAudience(['john', 'doe']))).toEqual({
      ...initialState,
      from: 0,
      filterIntendedAudiences: ['john', 'doe'],
    });
  });
  it('dispatches new from', () => {
    expect(searchReducer(initialState, setFrom(100))).toEqual({
      ...initialState,
      from: 100,
    });
  });
  it('dispatches new sort', () => {
    expect(searchReducer(initialState, setSortBy('release_date'))).toEqual({
      ...initialState,
      from: 0,
      sortBy: { field: 'release_date' },
    });
  });
});
