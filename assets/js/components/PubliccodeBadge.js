import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Spinner } from './Spinner';

const stateClass = {
  loading: 'bg-secondary',
  good: 'bg-success',
  error: 'bg-danger',
};

export const PubliccodeBadge = React.memo(({ id }) => {
  const [publiccodeState, setPubliccodeState] = useState('loading');
  const logUrl = `https://api.developers.italia.it/v1/software/${id}/logs`;

  useEffect(() => {
    async function fetchLogs() {
      const res = await fetch(logUrl);

      if (res.status >= 200 || res.status <= 299) {
        const data = await res.json();
        const good = data.data[0]?.message.includes('GOOD publiccode.yml');

        setPubliccodeState(good ? 'good' : 'error');
      } else {
        setPubliccodeState('error');
      }
    }

    fetchLogs();
  }, [logUrl]);

  return (
    <>
      <div className="lead">
        {publiccodeState === 'loading' && <Spinner />}
        <span className={`badge badge-${stateClass[publiccodeState]}`}>
          {publiccodeState !== 'loading' && publiccodeState}
        </span>
      </div>

      <a
        className="x-small"
        href={logUrl}
        target="_blank"
        aria-label="Log results of the latest publiccode.yml crawling"
        rel="noreferrer"
      >
        (log)
      </a>
    </>
  );
});

PubliccodeBadge.propTypes = {
  id: PropTypes.string.isRequired,
};

PubliccodeBadge.displayName = 'PubliccodeBadge';
