import React, { useContext } from 'react';
import { Button } from 'design-react-kit';
import { Error } from '../Error.js';
import { useSearchEngine } from '../../hooks/useSearchEngine.js';
import { searchContextState } from '../../contexts/searchContext.js';
import { l10NLabels } from '../../utils/l10n.js';
import { CatalogueItems } from './CatalogueItems.js';
import { CatalogueSummary } from './CatalogueSummary.js';

export const CatalogueView = React.memo(() => {
  const { filterCategories, filterDevelopmentStatuses, filterIntendedAudiences, type } = useContext(searchContextState);
  let totalAppliedFilters = filterCategories.length + filterIntendedAudiences.length + filterDevelopmentStatuses.length;
  if (type) {
    totalAppliedFilters++;
  }

  // partialItems: they are partial because we use pagination.
  const [errorMessage, partialItems, itemsCount, fetchMore] = useSearchEngine();

  if (errorMessage) {
    return <Error description={errorMessage} />;
  }

  return (
    <>
      {itemsCount !== null && <CatalogueSummary itemsCount={itemsCount} totalAppliedFilters={totalAppliedFilters} />}
      <div className="mx-auto dropdown-divider"></div>
      {partialItems !== null && <CatalogueItems items={partialItems} />}
      {partialItems !== null && partialItems.length !== itemsCount && (
        <div className="d-flex w-100 justify-content-center mt-4">
          <Button color="primary" onClick={fetchMore}>
            {l10NLabels.software.load_more}
          </Button>
        </div>
      )}
    </>
  );
});

CatalogueView.displayName = 'CatalogueView';
