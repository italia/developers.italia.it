<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Customizzazione della Swagger UI](#customizzazione-della-swagger-ui)
  - [Generazione degli asset per l'inclusione in Jekyll](#generazione-degli-asset-per-linclusione-in-jekyll)
  - [Fase di sviluppo](#fase-di-sviluppo)
    - [Jekyll](#jekyll)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Customizzazione della [Swagger UI](https://github.com/swagger-api/swagger-ui)

## Generazione degli asset per l'inclusione in Jekyll

```sh
npm build
```

La fase di installazione delle dipendenze è inclusa nello script `prebuild`.

## Fase di sviluppo

```sh
npm start
```

La fase di installazione delle dipendenze è inclusa nello script `prestart`.

In fase di sviluppo il file `index.js` gestisce tramite `window.swaggerUrl` quale specifica Swagger visualizzare (in produzione questo verrà iniettato da Jekyll).

Alcune delle specifiche da poter testare sono presenti su
- https://github.com/teamdigitale/api-openapi-samples/tree/master/openapi-v3
- https://github.com/teamdigitale/api-openapi-samples/tree/master/external-apis

### Jekyll

Il server di sviluppo è stato incluso tramite `iframe` (che punta al server di sviluppo su http://localhost:1234/) anche in `jekyll serve` per semplificare l'integrazione della parte JavaScript.
Per lo styling è ancora opportuno fare affidamento al risultato della `build`.

In alternativa è possibile includere manualmente gli stili in `swagger.html`
```html
<link rel="stylesheet" href="https://italia.github.io/bootstrap-italia/dist/css/bootstrap-italia.min.css">
<link rel="stylesheet" href="https://italia.github.io/bootstrap-italia/dist/css/italia-icon-font.css">

```
ed utilizzare solo il server di sviluppo http://localhost:1234/ notando che gli stili eventualmente ereditati da Jekyll andranno così persi.
