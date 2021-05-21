import React from 'react';

import './Spinner.css';

export const Spinner = React.memo(() => {
  return (
    <>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </>
  );
});

Spinner.displayName = 'Spinner';
