import React, { useEffect, useState } from 'react';
import { search } from '../services/searchEngine.js';
import { CatalogueFilters } from './CatalogueFilters.js';
import { CatalogueItems } from './CatalogueItems.js';
import { CatalogueSummary } from './CatalogueSummary.js';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { CatalogueNoResults } from './CatalogueNoResults.js';

const useStyle = createUseStyles({
  container: {
    composes: 'container',
    marginTop: '3.5rem',
  },
});

export const Catalogue = () => {
  console.log('Catalogue');
  const classes = useStyle();
  const filterCategories = useSelector((state) => state.query.filterCategories);
  const filterDevelopmentStatuses = useSelector((state) => state.query.filterDevelopmentStatuses);
  const filterIntendedAudiences = useSelector((state) => state.query.filterIntendedAudiences);
  const searchType = useSelector((state) => state.query.searchType);
  const searchValue = useSelector((state) => state.query.searchValue);
  const sortBy = useSelector((state) => state.query.sortBy);

  const [catalogueData, setCatalogueData] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const query = async () => {
      const [results, total] = await search(searchType, {
        from: 0,
        filters: {
          categories: filterCategories,
          developmentStatuses: filterDevelopmentStatuses,
          intendedAudiences: filterIntendedAudiences,
        },
        searchValue,
        sortBy,
        size: 12,
      });
      setCatalogueData(results);
      setTotal(total);
    };
    query();
  }, [searchType, searchValue, filterCategories, filterDevelopmentStatuses, filterIntendedAudiences, sortBy]);

  // First mount, waiting for data
  if (catalogueData === null) return <></>;

  return (
    <div className={classes.container}>
      <div className="row">
        <CatalogueFilters />
        <div className="col-md-9">
          {catalogueData.length > 0 ? (
            <>
              <CatalogueSummary itemCount={total} />
              <CatalogueItems items={catalogueData} />
            </>
          ) : (
            <CatalogueNoResults />
          )}
        </div>
      </div>
    </div>
  );
};
