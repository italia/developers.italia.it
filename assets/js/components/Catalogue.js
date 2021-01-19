import React, { useEffect, useState } from 'react';
import { search } from '../services/searchEngine.js';
import { CatalogueFilters } from './CatalogueFilters.js';
import { CatalogueItems } from './CatalogueItems.js';
import { CatalogueSummary } from './CatalogueSummary.js';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  container: {
    composes: 'container',
    marginTop: '5rem',
  },
});

export const Catalogue = () => {
  const classes = useStyle();
  const filterCategories = useSelector((state) => state.query.filterCategories);
  const filterDevelopmentStatuses = useSelector((state) => state.query.filterDevelopmentStatuses);
  const filterIntendedAudiences = useSelector((state) => state.query.filterIntendedAudiences);
  const searchType = useSelector((state) => state.query.searchType);
  const searchValue = useSelector((state) => state.query.searchValue);
  const sortBy = useSelector((state) => state.query.sortBy);

  const [catalogueData, setCatalogueData] = useState([]);

  useEffect(() => {
    console.log('effect');
    const query = async () => {
      const results = await search(searchType, {
        from: 0,
        filters: {
          categories: filterCategories,
          developmentStatuses: filterDevelopmentStatuses,
          intendedAudiences: filterIntendedAudiences,
        },
        searchValue,
        sortBy,
        size: 350,
      });
      setCatalogueData(results);
    };
    query();
  }, [searchType, searchValue, filterCategories, filterDevelopmentStatuses, filterIntendedAudiences, sortBy]);

  console.log('test');

  return (
    <div className={classes.container}>
      <div className="row">
        <CatalogueFilters />
        <div className="col-md-9">
          <CatalogueSummary itemCount={catalogueData.length} />
          <CatalogueItems items={catalogueData} />
        </div>
      </div>
    </div>
  );
};
