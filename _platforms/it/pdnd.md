---
title: PDND
subtitle: Piattaforma Digitale Nazionale Dati
logo: /assets/images/logo-daf.jpg
payoff: Valorizziamo il patrimonio informativo pubblico nazionale
description: >
  La vision della PDND è rendere i dati pubblici di facile accesso e comprensione da parte delle PA per supportarle nel proprio data-driven decision making e di facilitare l'accesso alle informazioni che possono essere rese pubbliche da parte di cittadini e imprese.
lang: it
ref:
  en: /en/pdnd
order: 3
highlight: false
comingsoon: false
layout: platform
github_team: daf
resources:
  - Piani triennali:
    - title: Piano triennale per l'informatica nella Pubblica Amministrazione 2019-2021
      icon: file
      url: https://docs.italia.it/italia/piano-triennale-ict/pianotriennale-ict-doc/it/2019-2021/
      desc: 
    - title: Piano triennale per l'informatica nella Pubblica Amministrazione 2017-2019
      icon: file
      url: https://docs.italia.it/italia/piano-triennale-ict/pianotriennale-ict-doc/it/2017-2019/
      desc: 
---

## Intro

La [Piattaforma Digitale Nazionale Dati (PDND)](https://pdnd.italia.it/) - ex DAF (Data & Analytics Framework) è [una delle attività atte a valorizzare il patrimonio informativo pubblico nazionale](https://docs.italia.it/italia/piano-triennale-ict/pianotriennale-ict-doc/it/2019-2021/05_dati-della-pubblica-amministrazione.html#piattaforma-digitale-nazionale-dati-pdnd) approvata dal Governo italiano nell'ambito del [Piano Triennale per l'Informatica nella Pubblica Amministrazione](https://pianotriennale-ict.italia.it/).

La vision del progetto è quella di rendere i dati pubblici di facile accesso e comprensione da parte delle PA per supportarle nel proprio processo decisionale e di facilitare l'accesso alle informazioni che possono essere rese pubbliche ai cittadini e alle imprese.

> Attenzione: al momento la PDND è in fase di migrazione, per cui buona parte dei sistemi e dei servizi non è utilizzabile.

## L'infrastruttura

...

### Piattaforma big data

La piattaforma per la gestione dei big data della PDND è composta da due componenti principali e da una serie di strumenti per l'interscambio dati, l'analisi e la visualizzazione.

Nel **data lake** vengono memorizzati, nel rispetto delle normative in materia di protezione dei dati personali, dati di potenziale interesse quali, ad esempio:

* le basi di dati che le PA generano per svolgere il proprio mandato istituzionale;
* i dati generati dai sistemi informatici delle Pubbliche Amministrazioni come log e dati di utilizzo che non rientrano nella definizione precedente;
* i dati autorizzati provenienti dal web e dai social network di potenziale interesse della Pubblica Amministrazione.

Il **big data engine** permette di armonizzare ed elaborare, sia in modalità *batch* che *real-time*, i dati grezzi memorizzati nel data lake e a implementare modelli di machine learning.

Gli **strumenti per l'interscambio dei dati** sono utili a favorire la fruizione dei dati elaborati da parte dei soggetti interessati, anche attraverso API che espongono dati e funzionalità ad applicazioni terze, mentre gli **strumenti di analisi e visualizzazione** dei dati sono offerti in modalità self-service agli utilizzatori della PDND.

### Dataportal

Il **dataportal** rappresenta l'interfaccia utente per l'utilizzo delle funzionalità implementate nella PDND ed è composto da un catalogo dati e da una serie di moduli per gli strumenti di analisi e visualizzazione dati offerti, per la gestione pubblica o privata di dati e metadati da parte delle Pubbliche Amministrazioni e per la pubblicazione di **data stories** basate sulle analisi degli utenti.

Il **catalogo dati** pubblico è basato su [CKAN-IT](https://developers.italia.it/it/software/pcm-italia-ckan-it) e gestisce i metadati relativi sia ai dati contenuti nella PDND che agli open data aggregati dai [portali dei dati delle Pubbliche Amministrazioni](https://github.com/italia/public-opendata-sources).

## Il team

Alla base dello sviluppo della PDND c'è un **team di esperti di dati**, composto da data scientist, data engineer e big data architect che provvedono al disegno e all'evoluzione concettuale della piattaforma big data, alla costruzione di modelli di interconnessione delle diverse sorgenti dati, all'analisi dei dati, allo sviluppo di modelli di machine learning, al coordinamento dello sviluppo di data application e all'incentivazione della ricerca scientifica su tematiche di interesse per la PA.

<a class="btn btn-primary" href="https://forum.italia.it/c/daf"><i class="it-horn"> Entra nel forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C760XQX9Q"><i class="it-comment"> Dialoga su Slack (#daf)</a>
<a class="btn btn-secondary btn-xs" href="https://slack.developers.italia.it/">(registrati su Slack)</a>
