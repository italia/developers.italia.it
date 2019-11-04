---
title: dati.gov.it
subtitle: I dati aperti della pubblica amministrazione
logo: /assets/images/logo-dati.gov.it@2x.png
payoff: I dati aperti della pubblica amministrazione
description: >
  Dati.gov.it è il catalogo nazionale dei dati aperti delle pubbliche amministrazioni italiane. Nasce con l'obiettivo di aggregare in un unico portale la maggior parte dei dati aperti esposti dalle varie amministrazioni sia locali che nazionali.
lang: it
ref:
  en: /en/datigov
order: 4
highlight: false
comingsoon: false
layout: platform
github_team: datigov
socials:
  -
    name: twitter
    icon: twitter
    link: //twitter.com/datigovit
  -
    name: youtube
    icon: youtube
    link: //www.youtube.com/channel/UCHsqR2YhxeKgFT4rAKVcAAQ
---

## Introduzione

Le ["Linee Guida Nazionali per la Valorizzazione del Patrimonio Informativo Pubblico"](https://www.dati.gov.it/sites/default/files/LG2016_0.pdf) costituiscono le fondamenta per ogni azione di apertura dei dati da parte delle Pubbliche Amministrazioni italiane, mentre le ["Linee guida per i cataloghi dati"](https://docs.italia.it/italia/daf/linee-guida-cataloghi-dati-dcat-ap-it/it/stabile/) chiariscono gli aspetti implementativi per l'alimentazione e la gestione di cataloghi dati istituzionali secondo il [profilo nazionale di metadatazione DCAT-AP_IT](https://www.dati.gov.it/content/dcat-ap-it-v10-profilo-italiano-dcat-ap-0).

La piattaforma Dati.gov.it è il [catalogo nazionale ufficiale dei dati aperti delle Pubbliche Amministrazioni italiane](https://www.dati.gov.it/) e nasce con l'obiettivo di aggregare in un unico portale potenzialmente tutti i dati aperti esposti dalle varie amministrazioni sia locali che nazionali: al momento più di 25 mila dataset pubblicati da più di 400 istituzioni.

I metadati raccolti ed esposti dal catalogo nazionale confluiscono nel catalogo del [Portale Europeo dei Dati](https://www.europeandataportal.eu/it/homepage).

### I portali dei dati aperti

Ogni Pubblica Amministrazione è libera di scegliere lo strumento che preferisce per pubblicare i propri dati aperti. Ci sono però dei vincoli o delle raccomandazioni sulle modalità di pubblicazione di questi dati, per esempio l'esposizione di metadati che soddisfino le richieste del profilo DCAT-AP_IT.

Tra i software a riuso è disponibile uno strumento *chiavi in mano* che semplifica la costruzione di un catalogo dati *a norma* e indicizzabile dal catalogo nazionale: [CKAN-IT](https://developers.italia.it/it/software/pcm-italia-ckan-it).

## Come funziona

Il catalogo nazionale monitora automaticamente [tutti i cataloghi registrati](https://www.dati.gov.it/elenco-harvest-sources) ed espone i metadati di tutti i loro dataset, così da costituire il [motore di ricerca unico](https://www.dati.gov.it/search/type/dataset) dei dati aperti della Pubblica Amministrazione italiana.

I metadati che descrivono ogni dataset seguono il [profilo ufficiale DCAT-AP_IT](https://docs.italia.it/italia/daf/linee-guida-cataloghi-dati-dcat-ap-it/it/stabile/profilo-overview.html), uno standard internazionale che specifica tutte le informazioni richieste o suggerite.

Tutte le informazioni sui dataset indicizzati dal catalogo nazionale possono essere ricercate mediante il [motore di ricerca interno](https://www.dati.gov.it/search/type/dataset) oppure mediante [Application Programming Interface](https://www.dati.gov.it/content/sviluppatori) (API).

### Documentazione

Il catalogo nazionale è una distribuzione personalizzata del software open-source [DKAN](https://getdkan.org/), basato sul [CMS Drupal](https://www.drupal.org/) e compatibile con [CKAN](https://ckan.org/).

Ulteriori informazioni sono reperibili su Github nel repository [italia/dati.gov.it](https://github.com/italia/dati.gov.it).

### Codice sorgente

Attualmente il codice sorgente del catalogo nazionale è gentilmente ospitato da FormezPA su Github: [FormezPA/dkan](https://github.com/FormezPA/dkan).

## FAQ

**Perché non trovo i dati della mia pubblica amministrazione?**

Ci sono delle precise specifiche tecniche che i portali devono soddisfare per essere federati dal catalogo nazionale. [Qui tutti i dettagli.](https://www.dati.gov.it/content/come-federare-proprio-catalogo-datigovit)

**Ho trovato un errore nelle informazioni di un dataset, come posso segnalarlo?**

...

**Non trovo i dati che mi interessano, cosa posso fare?**

...

**Sono una Pubblica Amministrazione con un portale dati, come posso inserirlo nel catalogo nazionale?**

...

**Sono una Pubblica Amministrazione che vuole pubblicare un portale dati, da dove posso iniziare?**

...
