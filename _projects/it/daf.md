---
title: DAF
subtitle: Data & Analytics Framework
logo: /assets/images/logo-daf-temp.png
payoff: Valorizziamo il patrimonio informativo pubblico nazionale
description: >
  La vision del DAF è rendere i dati pubblici di facile accesso e comprensione da parte delle PA per supportarle nel proprio data driven decision making, e di facilitare l'accesso alle informazioni che possono essere rese pubbliche da parte di cittadini e imprese.
lang: it
order: 3
highlight: true
comingsoon: false
layout: project
github_team: daf
maintainers:
  - alessandro
  - fabiana
---

## Intro

Il [Data & Analytics Framework (DAF)](https://pianotriennale-ict.readthedocs.io/it/latest/doc/09_data-analytics-framework.html) è una delle
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


## Documentazione

Qui puoi trovare la documentazione tecnica attualmente disponibile:

[Piano di sviluppo](http://daf-piano-di-sviluppo.readthedocs.io/it/latest/)

[Documentazione tecnica per sviluppatori](https://daf-docs.readthedocs.io/en/latest/)


## Codice sorgente

Attualmente, il DAF è in fase di pieno sviluppo, in tutti i suoi componenti, e i
progressi possono essere seguiti direttamente sui vari repositori GitHub:

[DAF core (piattaforma big-data)](https://github.com/italia/daf)

[Data portal](https://github.com/italia/daf-dataportal)

[Nuovo sito dati.gov.it (opendata)](https://github.com/italia/daf-publicdata)


## Collaborazione

Utilizziamo una sezione del forum per discutere di dati, open data e DAF. In precedenza,
avevamo aperto una mailing-list per trattare i temi di dati e opendata, per cui puoi trovare là
l'archivio delle precedenti discussioni e iscriverti per partecipare. A breve, migreremo l'archivio
della mailing-list nel forum.


[Discussioni su DAF nel forum](https://forum.italia.it/c/daf)

[Vecchia mailing-list OpenData & Analytics](https://groups.google.com/a/teamdigitale.governo.it/forum/#!forum/data)
