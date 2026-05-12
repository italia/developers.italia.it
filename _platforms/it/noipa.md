---
title: NoiPA
subtitle: Servizi per il personale delle Pubbliche Amministrazioni
logo: /assets/images/logo-noipa.png
external_website: https://noipa.mef.gov.it
payoff: NoiPA, servizi PA a Persone PA
description: NoiPA è la piattaforma realizzata dal Dipartimento dell'Amministrazione Generale del personale e dei servizi (DAG) del Ministero dell'Economia e delle Finanze (MEF) per la gestione del personale della PA. Il sistema lavora ogni giorno per essere al fianco delle Pubbliche Amministrazioni, seguendo passo dopo passo tutti gli aspetti legati alla gestione del personale.
lang: it
ref:
  en: /en/noipa
order: 4
highlight: true
comingsoon: false
layout: platform
resources:
  - Documentazione:
    - title: Il Portale Open Data
      url: https://dati-noipa.mef.gov.it/cl/web/open-data
      icon: file
      desc: Portale in cui vi è la pubblicazione dei dati in formato aperto, fruibili e riutilizzabili da tutti gli sviluppatori che ne abbiano interesse.
    - title: Executive Summary
      url: https://www.cloudifynoipa.it/documents/20143/672653/Executive-Summary---Cloudify-NoiPA-HL-Design/3f7324a5-d8da-00be-abc5-84bc7bfd405a?version=1.0
      icon: file
      desc: Cloudify NoiPA high level design. Sintesi del documento di progettazione di alto livello del programma di trasformazione digitale "Cloudify NoiPA".
    - title: Business Process Management (BPM)
      url: https://www.cloudifynoipa.it/documents/20143/672653/Business-Process-Management-(BPM)/29137b74-d05a-842e-178f-b6b54eaf54e8?version=1.0
      icon: file
      desc: Linee guida per la progettazione del Business Process Management (BPM). Descrizione dei servizi e definizione degli strumenti di configurazione e personalizzazione dei processi di business.
    - title: Linee guida progettazione metodologia Agile
      url: https://www.cloudifynoipa.it/documents/20143/672653/Linee-guida-progettazione-metodologia-Agile/ecd4f47e-582d-9ed2-c5f3-c189bb760c5f?version=1.0
      icon: file
      desc: Descrizione delle modalità di sviluppo Agile del progetto Cloudify NoiPA.
  - Collaborazione:
    - title: Prototipi
      url: https://www.cloudifynoipa.it/prototipi
      icon: file
      desc: Attraverso la somministrazione di demo interattive, gli utenti potranno valutare prodotti e servizi digitali, sia pre che post rilascio in produzione, favorendo anche la dissemination di nuovi servizi. Inoltre potranno essere coinvolti campioni selezionati di utenti per le fasi di usability testing, in ottica di co-creation della nuova piattaforma.
    - title: Proposte
      url: https://www.cloudifynoipa.it/archivio-proposte
      icon: file
      desc: Rappresenta un canale di comunicazione diretta tra gli utenti finali del servizio e l’Amministrazione, che consente l’inserimento sulla parte pubblica del portale, di proposte su tematiche legate ai servizi offerti da NoiPA o su nuovi requisiti espressi, creando un ponte digitale tra tutti i livelli coinvolti.
  - Dati:
    - title: Ontologia di NoiPA
      url: https://sparql-noipa.mef.gov.it/endpoint/download/owl/NoiPA.owl
      icon: file
      desc: File OWL dell'ontologia dei dati di NoiPA.
    - title: Dataset
      url: https://dati-noipa.mef.gov.it/cl/web/open-data/dataset
      icon: file
      desc: I vari dataset pubblicati sono consultabili alla pagina Dataset.
    - title: Endpoint
      url: https://sparql-noipa.mef.gov.it/sparql
      icon: file
      desc: Accedi all'applicativo Virtuoso SPARQL Query Editor, che ti permetterà di interrogare i Linked Open Data NOIPA e di scaricare i dati richiesti.
  - Esempi:
    - title: Python client di esempio
      icon: github
      url: https://github.com/italia/noipa-python-example
      desc: Python client di esempio per dialogare con le API
collab:
  description:
  links:
  - title: "Visita il portale NoiPA"
    icon: it-external-link
    url: https://noipa.mef.gov.it/
  - title: "Programma Cloudify NoiPA"
    icon: it-external-link
    url: https://www.cloudifynoipa.it
---

## Intro
NoiPA è il luogo dove risiederanno tutte le informazioni relative ad ogni dipendente pubblico italiano,
rappresentando il nuovo corso di modernizzazione di uno Stato capace di creare servizi digitali innovativi volti a
semplificare la vita ai dipendenti pubblici e alle amministrazioni servite.

Da questa piattaforma è possibile ottenere delle informazioni circa il ruolo e l'ufficio di appartenenza dei
dipendenti di molte delle pubbliche amminstrazioni. Integrandosi con questo sistema, quindi, è possibile ottenere
nei propri programmi queste informazioni sugli utenti, in modo automatico e certificato.

Seguendo le linee guida dell’AgID, il nuovo NoiPA è strutturato usando il paradigma del cloud computing, sempre più
oggetto di attenzione da parte delle Amministrazioni Pubbliche perché, migliorando l’efficienza operativa, consente il
raggiungimento di significative economie di scala.

Lo sviluppo del nuovo sistema ha fatto leva sull’esperienza consolidata nell’ambito dei servizi di riferimento di NoiPA, sulle
competenze acquisite attraverso la gestione di una parte rilevante del personale della PA, sulla pre-esistenza di sistemi
conoscitivi evoluti. La creazione di un sistema unico centralizzato di gestione del personale ha determinato una riduzione dei costi per
l’erogazione del servizio, anche grazie alle economie di scala generate dall’ampliamento del numero delle amministrazioni
servite.

Il sistema è progettato intorno all’utente, garantendo una piena flessibilità e personalizzazione dell’operatività.

NoiPA è sempre più aperto alla collaborazione con chi fa della ricerca e dell’innovazione il suo obiettivo.
Se sei un ente di ricerca o una università interessata a collaborare con NoiPA per la realizzazione di progetti innovativi
di livello nazionale e internazionale puoi collaborare con NoiPA.


## Utilizzare le API

I cittadini, le imprese e le pubbliche amministrazioni interessate ad utilizzare i dati utilizzando le API possono trovare alcuni esempi nella pagina [NoiPA Open Data del sito](https://sparql-noipa.mef.gov.it/sparql){:target="_blank"} dove è presente un editor e alcune query SPARQL preimpostate. Esiste anche un repository che implementa un [client Python di esempio](https://github.com/italia/noipa-python-example){:target="_blank"} che si appoggia su SPARQL per mostrare come interfacciarsi alle API.
