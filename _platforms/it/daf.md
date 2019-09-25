---
title: DAF
subtitle: Data & Analytics Framework
logo: /assets/images/logo-daf.jpg
payoff: Valorizziamo il patrimonio informativo pubblico nazionale
description: >
  La vision del DAF è rendere i dati pubblici di facile accesso e comprensione da parte delle PA per supportarle nel proprio data driven decision making, e di facilitare l'accesso alle informazioni che possono essere rese pubbliche da parte di cittadini e imprese.
lang: it
ref:
  en: /en/daf
order: 3
highlight: false
comingsoon: false
layout: platform
github_team: daf
resources:
  - Documentazione:
    - title: Piano di sviluppo
      icon: file
      url: https://docs.italia.it/italia/daf/daf-piano-di-sviluppo/
      desc: 
    - title: Documentazione tecnica per sviluppatori
      icon: file
      url: https://docs.italia.it/italia/daf/daf-docs/
      desc: 
  - Repository:
    - title: DAF core (piattaforma big data)
      icon: github
      url: https://github.com/italia/daf
      desc: 
    - title: Data Portal
      icon: github
      url: https://github.com/italia/daf-dataportal
      desc: 
    - title: Nuovo sito dati.gov.it (open data)
      icon: github
      url: https://github.com/italia/daf-publicdata
      desc: 
---

## Intro

Il [Data & Analytics Framework (DAF)](https://docs.italia.it/italia/pianotriennale-ict/pianotriennale-ict-doc/it/bozza/doc/09_data-analytics-framework.html) è una delle
attività atte a valorizzare il patrimonio informativo pubblico nazionale
approvata dal Governo italiano nell'ambito del [Piano Triennale per
l'Informatica nella PA (2017-2019)](https://pianotriennale-ict.italia.it/). La
vision del progetto è quella di rendere i dati pubblici di facile accesso e
comprensione da parte delle PA per supportarle nel proprio processo
decisionale, e di facilitare l'accesso alle informazioni che possono essere
rese pubbliche ai cittadini e alle imprese.

Il DAF si compone di:

 * Una **Piattaforma Big Data** costituita da:
    * un *data lake* dove vengono memorizzati, nel rispetto delle normative in
      materia di protezione dei dati personali, dati di potenziale interesse
      quali, ad esempio: le basi di dati che le PA generano per svolgere il
      proprio mandato istituzionale; i dati generati dai sistemi informatici
      delle Pubbliche Amministrazioni come log e dati di utilizzo che non
      rientrano nella definizione precedente; i dati autorizzati provenienti
      dal web e dai social network di potenziale interesse della Pubblica
      Amministrazione;
    * un *big data engine*, utile ad armonizzare ed elaborare, sia in modalità
      batch che real-time, i dati grezzi memorizzati nel data lake e a
      implementare modelli di machine learning;
    * *strumenti per l'interscambio dei dati*, utili a favorire la fruizione
      dei dati elaborati da parte dei soggetti interessati, anche attraverso
      API che espongono dati e funzionalità ad applicazioni terze;
    * *strumenti di analisi e visualizzazione* dei dati offerti in modalità
      self-service agli utilizzatori del DAF;
 * Un **Dataportal**, che rappresenta l'interfaccia utente per l'utilizzo delle
   funzionalità implementate nel DAF. In particolare, il dataportal si compone
   di:
    * un catalogo dei dataset basato su CKAN, che gestisce i metadati relativi
      sia ai dati contenuti nel DAF che agli open data harvestati dai siti
      delle PA;
    * interfacce utente per accedere ai tool di analisi e data visualization
      menzionati sopra;
    * un modulo riservato alle PA per gestire il processo di ingestion e
      gestione dei dati e metadati nel DAF;
    * un modulo per data stories, attraverso il quale gli utenti possono
      pubblicare le proprie analisi e collaborare con altri utenti.

 * Un **team di esperti di dati**, composto da data scientist, data engineer e
   big data architect che provvedono al disegno e all'evoluzione concettuale
   della piattaforma big data, alla costruzione di modelli di interconnessione
   delle diverse sorgenti dati, all'analisi dei dati, allo sviluppo di modelli
   di machine learning, al coordinamento dello sviluppo di data application e
   all'incentivazione della ricerca scientifica su tematiche di interesse per
   la PA.

<a class="btn btn-primary" href="https://forum.italia.it/c/daf"><i class="it-horn" /> Entra nel forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C760XQX9Q"><i class="it-comment" /> Dialoga su Slack (#daf)</a> <a href="https://slack.developers.italia.it/"><small>(registrati su Slack)</small></a>
