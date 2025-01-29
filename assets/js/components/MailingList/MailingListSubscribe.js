import React, { useState } from 'react';
import PropTypes from 'prop-types';

const messages = {
  it: {
    header: 'Le nostre iniziative, direttamente nella tua mail',
    title: 'Lasciaci la tua email e ti aggiorneremo sulle nostre prossime iniziative',
    loading: 'Caricamento...',
    buttonText: 'Iscriviti alla mailing list',
    placeholder: 'indirizzo email',
    errorText: 'Qualcosa è andato storto 😔 Riprova più tardi',
    successText: 'Ti abbiamo mandato un’email, segui il collegamento per confermare la tua iscrizione',
    privacyText: 'leggi l’informativa',
  },
  en: {
    header: 'Our initiatives, right in your email',
    title: 'Leave us your email address and we’ll keep you posted',
    loading: 'Loading...',
    buttonText: 'Subscribe to the mailing list',
    placeholder: 'email address',
    errorText: 'Something went wrong 😔 Please try again later',
    successText: 'We sent you an email, follow the link to confirm your subscription',
    privacyText: 'privacy policy',
  },
};

const StateClass = Object.freeze({
  START: { className: '' },
  LOADING: { className: 'success' },
  SUCCESS: { className: 'success' },
  ERROR: { className: 'danger' },
});

export const MailingListSubscribe = React.memo(({ text, args, 'extra-fields': extraFields, privacy, lang, type }) => {
  const [state, setState] = useState(StateClass.START);
  const [message, setMessage] = useState('');

  const t = (key) => messages[lang][key];

  const onSubmit = async (e) => {
    const endpoint = 'https://sendportal.developers.italia.it/api/v1/subscribe';
    const data = {};

    new FormData(e.target).forEach((value, key) => (data[key] = value));

    e.preventDefault();

    try {
      setState(StateClass.LOADING);

      const r = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
  };

  const queryArgs = JSON.parse(args);

  if (type === 'big') {
    const fields = JSON.parse(extraFields);

    return (
      <>
        <div className="banner-newsletter__inner container d-flex justify-content-center position-relative">
          <div className="banner-newsletter__bkg">
            <img src="/assets/images/banner-newsletter-image.svg" />
          </div>
          <form className="col-sm-10" onSubmit={onSubmit}>
            <h1 className="mb-2 mb-md-4" name="newsletter">
              {t('header')}
            </h1>
            {Object.entries(queryArgs).map(([argName, argValue], i) => (
              <input type="hidden" name={argName} value={argValue} key={i} />
            ))}
            <div className="py-1 py-md-2">
              <div className="form-group mw-md-50 mb-2 mb-md-4">
                <i className="it-mail"></i>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder={t('placeholder')}
                />
                <div className="my-2 my-md-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg banner-newsletter__submit"
                    disabled={state === StateClass.LOADING}
                  >
                    {state === StateClass.LOADING ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                        <span className="sr-only">{t('loading')}</span>
                      </>
                    ) : (
                      t('buttonText')
                    )}
                  </button>
                </div>
              </div>
              <div className="row mw-md-50">
                <div className="col-md ">
                  {fields &&
                    Object.entries(fields).map(([fieldName, values], i) => (
                      <div key={i} className="banner-newsletter__select">
                        <select id={fieldName} name={fieldName} required>
                          <option disabled="" />
                          {Object.entries(values).map(([valName, valId], valIdx) => (
                            <option key={valIdx} value={valId}>
                              {valName}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="row mw-md-50">
              {text}
              <a target="_blank" rel="noreferrer" className="text-white fw-bold" href={privacy}>
                ({t('privacyText')})
              </a>
            </div>
            <div
              className={`alert alert-${state.className} form-row position-absolute`}
              style={{ visibility: state === StateClass.SUCCESS || state === StateClass.ERROR ? 'visible' : 'hidden' }}
              role="alert"
            >
              {message}
            </div>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="homelayout__first__newsletter mt-2 mt-md-5">
        <p className="mb-2 mb-md-4 h5 ">
          <strong>{t('title')}</strong>
        </p>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="email">{t('placeholder')}</label>
              <input type="email" required id="newsletter" name="email" className="form-control" />
              {Object.entries(queryArgs).map(([argName, argValue], i) => (
                <input type="hidden" name={argName} value={argValue} key={i} />
              ))}
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary" disabled={state === StateClass.LOADING}>
                  {state === StateClass.LOADING ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                      <span className="sr-only">{t('loading')}</span>
                    </>
                  ) : (
                    t('buttonText')
                  )}
                </button>
              </div>
            </div>
            <p className="mt-2 mt-md-4 primary-color-a11">
              {text} (<a href={privacy}>{t('privacyText')}</a>)
            </p>
          </div>
          <div
            className={`alert alert-${state.className} form-row position-absolute`}
            style={{ visibility: state === StateClass.SUCCESS || state === StateClass.ERROR ? 'visible' : 'hidden' }}
            role="alert"
          >
            {message}
          </div>
        </form>
      </div>
    </>
  );
});

MailingListSubscribe.propTypes = {
  text: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  args: PropTypes.string,
  'extra-fields': PropTypes.string,
  privacy: PropTypes.string.isRequired,
  type: PropTypes.string,
};

MailingListSubscribe.defaultProps = {
  type: 'small',
  args: '{}',
  'extra-fields': '{}',
};

MailingListSubscribe.displayName = 'MailingListSubscribe';
