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

### Jekyll

Il server di sviluppo è stato incluso tramite `iframe` anche in `jekyll serve` per semplificare l'integrazione della parte JavaScript.
Per lo styling è ancora opportuno fare affidamento al risultato della `build`.
