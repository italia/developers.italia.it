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

#### Struttura del progetto

`_includes/swagger.html` è utilizzato, così come versionato, durante la fase di sviluppo (`npm start`).

In fase di build (`npm build`) il suo contenuto del file `_includes/swagger.html` verrà sostituito con l'output del comando, gli assets inclusi in questa pagina saranno invece spostati, nella medesima fase, in `assets/swagger`.
In fase di build Jekyll (`bundle exec jekyll build`) la pagina sopra (`_includes/swagger.html`) verrà inclusa in ogni template generato che utilizza il layout `_layouts/api-details.html` (es: `_site/it/api`).
Gli assets verranno invece spostati in, e serviti da, `_site/assets/swagger`.
