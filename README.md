# Sorgenti di developers.italia.it

## La comunità degli sviluppatori che progettano e realizzano i servizi pubblici digitali in Italia

Questo repositorio contiene il codice sorgente di developers.italia.it.

Il sito è sviluppato con Jekyll. Per configurare un ambiente di sviluppo è sufficiente eseguire i seguenti comandi:

```bash
export ELASTICSEARCH_URL=""
npm install
bundle install
make include-npm-deps
bundle exec jekyll serve
```

Alternativamente è possibile configurare l'ambiente di sviluppo tramite docker utilizzando i seguenti comandi:

```bash
docker-compose up -d
```
Una volta che il container sarà partito ti potrai connettere al sito web all'indirizzo `http://localhost:4000/`

**NOTA:** Le variabili d'ambiente sono definite all'interno del file `docker-compose.yml`, assicurati che siano impostate con i valori corretti prima di avviare il container. 

Se vuoi contribuire una modifica, è sufficiente aprire una pull-request.

### Environment variables

Le seguenti variabili d'ambiente devono essere configurate (ad es. in CircleCI):

* `ELASTICSEARCH_URL`: URL di Elasticsearch completo di credenziali dell'utente con permessi cluster:monitor (ad es. l'utente "elastic")
* `GITHUB_ACCESS_TOKEN`: token per l'accesso illimitato alle API di GitHub

## Licenza

Il codice sorgente del sito web è rilasciato sotto licenza BSD (codice SPDX: `BSD-3-Clause`), ed è distributo con questa licenza dal 30 maggio 2018. Il codice precedente era rilasciato sotto licenza MIT.
