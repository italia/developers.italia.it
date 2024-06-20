import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

import { Spinner } from './Spinner';

const stateClass = {
  'loading': 'secondary',
  'good': 'success',
  'error': 'danger',
};

const useStyle = createUseStyles({
  placeholder: {
    height: '100%',
    width: '100%',
    marginLeft: 0,
    objectFit: 'contain',
  },
  badge: {
    // extend: 'placeholder',
    display: (publiccodeState) => (publiccodeState !== 'loading' ? 'block' : 'none'),
  },
});

export const PubliccodeBadge = React.memo(({ repo }) => {
  const [publiccodeState, setPubliccodeState] = useState('loading');

  const classes = useStyle(publiccodeState)

  useEffect(async () => {
    const res = await fetch(logUrl);

    if (res.status >= 200 || res.status <= 299) {
      const data = await res.json();
      const good = data.find(entry => entry?.message?.includes('activity index in the last'));

      setPubliccodeState(good ? 'good' : 'error');
    } else {
      setPubliccodeState('error');
    }
  });

  const repoPath = repo.replaceAll(/^(.+):\/\/|.git$/ig, '');
  const logUrl = `https://crawler.developers.italia.it/${repoPath}/log.json`

  return (
    <>
      <div className="lead">
        <span className={`badge badge-${stateClass[publiccodeState]}`}>
          {publiccodeState === 'loading' && <Spinner />}
          {publiccodeState !== 'loading' && publiccodeState }
        </span>
      </div>

      <a
        className="x-small"
        href={logUrl}
        target="_blank"
        aria-label="Log file of the latest publiccode.yml crawling"
      >
        (JSON log)
      </a>
    </>
  );
});

PubliccodeBadge.propTypes = {
  repo: PropTypes.string.isRequired,
};

PubliccodeBadge.displayName = 'PubliccodeBadge';
