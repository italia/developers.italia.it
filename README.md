[![License](https://img.shields.io/github/license/italia/developers-italia.svg)](https://github.com/italia/developers.italia.it/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/italia/developers-italia.svg)](https://github.com/italia/developers.italia.it/issues)
[![Join the #website channel](https://img.shields.io/badge/Slack%20channel-%23design-blue.svg)](https://developersitalia.slack.com/messages/C7VPAUVB3/)
[![Get invited](https://slack.developers.italia.it/badge.svg)](https://slack.developers.italia.it/)
[![Join the Forum!](https://img.shields.io/badge/Forum-18app-blue.svg)](https://forum.italia.it/)

# Developers Italia [Vai al sito](https://developers.italia.it) 
> La comunità degli sviluppatori che progettano e realizzano i servizi pubblici digitali in Italia

| Questo repositorio contiene il codice sorgente di [Developers
| Italia](https://developers.italia.it)

![Developers Homepage](developers_homepage.png)

## Indice
- [Introduzione](#intro)
- [Finding Projects](#finding-projects)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [Authors](#authors)
- [Licenza](#licenza)


## Introduzione
Il sito Developers Italia è il punto di riferimento per gli sviluppatori dei
servizi pubblici digitali in Italia. 
Il portale contiene le seguenti tre sezioni principali:
* Piattaforme
* Software
* API

### Piattaforme
La sezione _Piattaforme_ contiene il catalogo delle piattaforme abilitati
nazionali e locali: il sistema operativo del Paese. Per ogni piattaforma
abilitante è presente una scheda dedicata che presenta una introduzione e una
serie di risorse utili non solo ad avere maggiori informazioni ma anche per
iniziare a sviluppare. Sono infatti presenti puntatori a middleware, SDK,
librerie di sviluppo, regole tecniche consolidate e altro.

### Software
La sezione _Software_ contiene il catalogo del software a riuso per la PA e il
software FOSS di terze parti. 
Tale catalogo, la cui esistenza è definita all'interno delle linee guida su
acquisizione e riuso di software per la PA, è diviso in due sezioni: 
* software open source di titolarità di una PA italiana;
* software open source di terze parti. 

Il catalogo è in realtà decentralizzato e viene popolato ogni notte 
### API
La sezione _API_ contiene una selezione di API REST italiane a disposizione
degli sviluppatori. 

## Sviluppo
Il sito è sviluppato con Jekyll. Per configurare un ambiente di sviluppo
è sufficiente eseguire i seguenti comandi:

```bash
export ELASTICSEARCH_URL=""
npm install
bundle install
make include-npm-deps
bundle exec jekyll serve
```

Se vuoi contribuire una modifica, è sufficiente aprire una pull-request.

### Environment variables

Le seguenti variabili d'ambiente devono essere configurate (ad es. in CircleCI):

* `ELASTICSEARCH_URL`: URL di Elasticsearch completo di credenziali dell'utente con permessi cluster:monitor (ad es. l'utente "elastic")
* `GITHUB_ACCESS_TOKEN`: token per l'accesso illimitato alle API di GitHub

## Licenza

Il codice sorgente del sito web è rilasciato sotto licenza BSD (codice SPDX:
`BSD-3-Clause`), ed è distributo con questa licenza dal 30 maggio 2018. Il
codice precedente era rilasciato sotto licenza MIT.
