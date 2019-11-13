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
  - name: twitter
    icon: twitter
    link: //twitter.com/datigovit
  - name: youtube
    icon: youtube
    link: //www.youtube.com/channel/UCHsqR2YhxeKgFT4rAKVcAAQ
resources:
  - Documentazione:
    - title: API di Dati.gov.it
      icon: link
      url: https://www.dati.gov.it/content/sviluppatori
      desc: 
    - title: API di DKAN
      icon: link
      url: https://dkan.readthedocs.io/en/latest/apis/ckan-dataset.html
      desc: 
    - title: Profilo DCAT-AP_IT
      icon: link
      url: https://docs.italia.it/italia/daf/linee-guida-cataloghi-dati-dcat-ap-it/it/stabile/dcat-ap_it.html
      desc: 
  - Repository:
    - title: Panoramica e segnalazioni
      icon: github
      url: https://github.com/italia/dati.gov.it
      desc: 
    - title: Codice sorgente
      icon: github
      url: https://github.com/FormezPA/dkan
      desc: 
  - Linee guida:
    - title: Piano Triennale per l'informatica nella Pubblica Amministrazione 2019-2021
      icon: link
      url: https://pianotriennale-ict.italia.it/
      desc: 
    - title: Valorizzazione del Patrimonio Informativo Pubblico
      icon: pdf
      url: https://www.dati.gov.it/sites/default/files/LG2016_0.pdf
      desc: 
    - title: Cataloghi Dati
      icon: file
      url: https://www.dati.gov.it/sites/default/files/LG2016_0.pdf
      desc: https://docs.italia.it/italia/daf/linee-guida-cataloghi-dati-dcat-ap-it/it/stabile/
---

## Introduzione

Le ["Linee Guida Nazionali per la Valorizzazione del Patrimonio Informativo Pubblico"](https://www.dati.gov.it/sites/default/files/LG2016_0.pdf) costituiscono le fondamenta per ogni azione di apertura dei dati da parte delle Pubbliche Amministrazioni italiane, mentre le ["Linee guida per i cataloghi dati"](https://docs.italia.it/italia/daf/linee-guida-cataloghi-dati-dcat-ap-it/it/stabile/) chiariscono gli aspetti implementativi per l'alimentazione e la gestione di cataloghi dati istituzionali secondo il [profilo nazionale di metadatazione DCAT-AP_IT](https://www.dati.gov.it/content/dcat-ap-it-v10-profilo-italiano-dcat-ap-0).

La piattaforma Dati.gov.it è il [catalogo nazionale ufficiale dei dati aperti delle Pubbliche Amministrazioni italiane](https://www.dati.gov.it/) previsto dal ["Piano Triennale per l'informatica nella Pubblica Amministrazione"](https://docs.italia.it/italia/piano-triennale-ict/pianotriennale-ict-doc/it/2019-2021/05_dati-della-pubblica-amministrazione.html#basi-di-dati-di-interesse-nazionale) e nasce con l'obiettivo di aggregare in un unico portale potenzialmente tutti i dati aperti esposti dalle varie amministrazioni sia locali che nazionali: al momento più di 25 mila dataset pubblicati da più di 400 istituzioni.

I metadati raccolti ed esposti dal catalogo nazionale confluiscono nel catalogo del [Portale Europeo dei Dati](https://www.europeandataportal.eu/it/homepage).

### I portali dei dati aperti

Ogni Pubblica Amministrazione è libera di scegliere lo strumento che preferisce per pubblicare i propri dati aperti. Ci sono però dei vincoli o delle raccomandazioni sulle modalità di pubblicazione di questi dati, per esempio l'esposizione di metadati che soddisfino le richieste del profilo DCAT-AP_IT.

Tra i software a riuso è disponibile uno strumento *chiavi in mano* che semplifica la costruzione di un catalogo dati *a norma* e indicizzabile dal catalogo nazionale: [CKAN-IT](https://developers.italia.it/it/software/pcm-italia-ckan-it).

CKAN-IT è conforme alle [specifiche DCAT-AP_IT](https://docs.italia.it/italia/daf/linee-guida-cataloghi-dati-dcat-ap-it/it/stabile/profilo-overview.html), quindi i metadati che descrivono ogni dataset seguono lo standard nazionale che specifica tutte le informazioni richieste o suggerite, compatibile con quello europeo [DCAT-AP](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe) e quello internazionale [DCAT](https://www.w3.org/TR/vocab-dcat-2/).

## Come funziona

Il catalogo nazionale monitora automaticamente [tutti i cataloghi registrati](https://www.dati.gov.it/elenco-harvest-sources) ed espone i metadati di tutti i loro dataset, così da costituire il [motore di ricerca unico](https://www.dati.gov.it/search/type/dataset) dei dati aperti della Pubblica Amministrazione italiana.

Tutte le informazioni sui dataset indicizzati dal catalogo nazionale possono essere ricercate mediante il [motore di ricerca interno](https://www.dati.gov.it/search/type/dataset) oppure mediante [Application Programming Interface](https://www.dati.gov.it/content/sviluppatori) (API).

### Limiti attuali

Al momento Dati.gov.it non è conforme al profilo DCAT-AP_IT e non è in grado di aggregare e indicizzare cataloghi conformi al profilo DCAT-AP_IT.
Non fa inoltre uso del [vocabolario controllato ufficiale delle licenze di riuso](https://github.com/italia/daf-ontologie-vocabolari-controllati/tree/master/VocabolariControllati/licences) dei dataset pubblicati.

### Roadmap di sviluppo

Una roadmap di sviluppo è in preparazione e prevede una revisione complessiva della piattaforma tecnologica di Dati.gov.it.
Questi alcuni punti in discussione:

* backend basato su CKAN-IT così da superare i limiti attuali e garantire la conformità al profilo DCAT-AP_IT
* integrazione del catalogo delle [Basi di dati della Pubblica Amministrazione](http://basidati.agid.gov.it/catalogo/)
* integrazione con il portale del [Repertorio Nazionale dei Dati Territoriali](https://geodati.gov.it/geoportale/)

### Ulteriori risorse

Il catalogo nazionale è una distribuzione personalizzata del software open-source [DKAN](https://getdkan.org/), basato sul [CMS Drupal](https://www.drupal.org/) e compatibile con [CKAN](https://ckan.org/). Attualmente il codice sorgente del catalogo nazionale è gentilmente ospitato da FormezPA su Github: [FormezPA/dkan](https://github.com/FormezPA/dkan).

Ulteriori informazioni sono reperibili su Github nel repository [italia/dati.gov.it](https://github.com/italia/dati.gov.it).

## FAQ

**Perché non trovo i dati della mia pubblica amministrazione?**

Ci sono delle precise specifiche tecniche che i portali devono soddisfare per essere federati dal catalogo nazionale. [Qui tutti i dettagli.](https://www.dati.gov.it/content/come-federare-proprio-catalogo-datigovit)

**Ho trovato un errore nelle informazioni di un dataset, come posso segnalarlo?**

Puoi inviare una segnalazione alla redazione mediante una delle modalità di contatto previste. [Qui tutti i dettagli.](https://www.dati.gov.it/content/contatti).

**Non trovo i dati che mi interessano o i dati che ho trovato hanno dei problemi, cosa posso fare?**

Dati.gov.it aggrega i dataset pubblicati dalle Pubbliche Amministrazioni competenti, per segnalare la mancanza di un dataset o la presenza di errori un un dataset pubblicato contatta direttamente la PA competente. Puoi anche cercare informazioni su [Forum Italia](https://forum.italia.it/c/dati) e confrontarti con l'esperienza della community.

**Sono una Pubblica Amministrazione con un portale dati, come posso inserirlo nel catalogo nazionale?**

Puoi inviare una richiesta alla redazione mediante una delle modalità di contatto previste. [Qui tutti i dettagli.](https://www.dati.gov.it/content/contatti).

**Sono una Pubblica Amministrazione che vuole pubblicare un portale dati, da dove posso iniziare?**

[CKAN-IT](https://developers.italia.it/it/software/pcm-italia-ckan-it) è uno strumento inserito tra i software a riuso che semplifica la costruzione di un catalogo dati *a norma* e indicizzabile dal catalogo nazionale. Per ulteriori informazioni puoi aprire una [issue sul repository del progetto](https://github.com/italia/ckan-it/issues) oppure scrivere su [Forum Italia](https://forum.italia.it/c/dati).
