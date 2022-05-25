import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const messages = {
  it: {
    loading: 'Iscrizione in corso...',
    placeholder: 'indirizzo email',
    errorText: 'Qualcosa è andato storto 😔 Riprova più tardi',
    successText:
      "L'iscrizione è andata a buon fine, riceverai aggiornamenti sulle iniziative di Developers Italia e Designers Italia!",
  },
  en: {
    loading: 'Subscribing...',
    placeholder: 'email address',
    errorText: 'Something went wrong 😔 Please try again later',
    successText: "Subscribe successful, we'll send you updates on our projects",
  },
};

const StateClass = Object.freeze({
  LOADING: { className: 'success' },
  SUCCESS: { className: 'success' },
  ERROR: { className: 'danger' },
});

export const MailingListConfirmation = React.memo(({ lang, args }) => {
  const t = useCallback((key) => messages[lang][key], [lang]);

  const [, setState] = useState(StateClass.LOADING);
  const [message, setMessage] = useState(t('loading'));

  const queryArgs = JSON.parse(args);

  useEffect(() => {
    async function subscribe() {
      const endpoint = 'https://sendportal.developers.italia.it/api/v1/confirm-subscribe';

      const params = new URL(window.location).searchParams;
      const hash = params.get('hash');
      let email = params.get('email');

      if (!hash || !email) {
        setState(StateClass.ERROR);
        console.error(`Mailing list subscribe error: hash and email needed`);
        setMessage(t('errorText'));

        return;
      }

      // TODO: lazy hack, this should be escaped by Sendportal
      email = email.replace(' ', '+');

      try {
        const r = await fetch(endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, hash, ...queryArgs }),
        });

        if (!r.ok) {
          throw new Error(`HTTP response: ${r.status}`);
        }
      } catch (e) {
        setState(StateClass.ERROR);
        console.error(`Mailing list subscribe error: ${e}`);
        setMessage(t('errorText'));

        return;
      }

      setState(StateClass.SUCCESS);
      setMessage(t('successText'));
    }

    subscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p>{message}</p>
    </>
  );
});

MailingListConfirmation.propTypes = {
  lang: PropTypes.string.isRequired,
  args: PropTypes.string,
};

MailingListConfirmation.defaultProps = {
  args: '{}',
};

MailingListConfirmation.displayName = 'MailingListConfirmation';
