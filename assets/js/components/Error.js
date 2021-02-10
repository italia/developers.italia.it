import React from 'react';
import { l10NLabels } from '../utils/l10n.js';

export const Error = () => (
  <div
    className="d-flex flex-column align-items-center h-100 justify-content-center"
    data-testid="error-something-went-wrong"
  >
    <img src="/assets/images/something_is_wrong.svg" alt={l10NLabels.errors.something_went_wrong} />
    <h3 className="mt-4">{l10NLabels.errors.something_went_wrong}</h3>
  </div>
);
