import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ALL_CATALOGUE, ADMINISTRATION, ALL_SITE } from '../utils/constants.js';
import {
  searchContextState,
  SearchProvider,
  incrementPage,
  setType,
  setSearchValue,
  setFilterDevelopmentStatuses,
  setFilterIntendedAudience,
  setFilterCategories,
  setSortBy,
  searchReducer,
} from './searchContext.js';

const DummyUseContext = () => {
  const { page, type, searchValue, filterCategories, filterDevelopmentStatuses, filterIntendedAudiences, sortBy } =
    useContext(searchContextState);

  return (
    <div>
      <div data-testid="page">{page}</div>
      <div data-testid="type">{type}</div>
      <div data-testid="search-value">{searchValue}</div>
      <div data-testid="filter-categories">{filterCategories.join()}</div>
      <div data-testid="filter-development-statuses">{filterDevelopmentStatuses.join()}</div>
      <div data-testid="filter-intended-audiences">{filterIntendedAudiences.join()}</div>
      <div data-testid="sort-by">{sortBy}</div>
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
        initialSortBy="last_release"
      >
        <DummyUseContext />
      </SearchProvider>
    );
    expect(screen.getByTestId('page')).toHaveTextContent('0');
    expect(screen.getByTestId('type')).toHaveTextContent(ALL_CATALOGUE);
    expect(screen.getByTestId('search-value')).toHaveTextContent('foo');
    expect(screen.getByTestId('filter-categories')).toHaveTextContent('business,education');
    expect(screen.getByTestId('filter-development-statuses')).toBeEmptyDOMElement();
    expect(screen.getByTestId('filter-intended-audiences')).toBeEmptyDOMElement();
    expect(screen.getByTestId('sort-by')).toHaveTextContent('last_release');
  });
});

describe('searchReducer', () => {
  let initialState = {};
  beforeEach(() => {
    initialState = {
      filterCategories: ['john', 'doe'],
      filterDevelopmentStatuses: ['test'],
      filterIntendedAudiences: ['business', 'education'],
      page: 5,
      type: ALL_SITE,
      searchValue: 'app',
      sortBy: 'vitality',
    };
  });
  it('dispatches new search value', () => {
    expect(searchReducer(initialState, setSearchValue('foo'))).toEqual({
      ...initialState,
      page: 0,
      searchValue: 'foo',
    });
  });
  it('dispatches new type', () => {
    expect(searchReducer(initialState, setType(ADMINISTRATION))).toEqual({
      ...initialState,
      page: 0,
      type: ADMINISTRATION,
    });
  });
  it('dispatches new filter categories', () => {
    expect(searchReducer(initialState, setFilterCategories(['document', 'software']))).toEqual({
      ...initialState,
      page: 0,
      filterCategories: ['document', 'software'],
    });
  });
  it('dispatches new development statuses', () => {
    expect(searchReducer(initialState, setFilterDevelopmentStatuses(['stable']))).toEqual({
      ...initialState,
      page: 0,
      filterDevelopmentStatuses: ['stable'],
    });
  });
  it('dispatches new intended audiences', () => {
    expect(searchReducer(initialState, setFilterIntendedAudience(['john', 'doe']))).toEqual({
      ...initialState,
      page: 0,
      filterIntendedAudiences: ['john', 'doe'],
    });
  });
  it('dispatches new page', () => {
    expect(searchReducer(initialState, incrementPage())).toEqual({
      ...initialState,
      page: 6,
    });
  });
  it('dispatches new sort', () => {
    expect(searchReducer(initialState, setSortBy('release_date'))).toEqual({
      ...initialState,
      page: 0,
      sortBy: 'release_date',
    });
  });
});
