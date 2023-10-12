---
title: Piattaforma dei Contratti Pubblici
logo: /assets/images/logo-piattaforma-contratti-pubblici.png
external_website: https://www.anticorruzione.it
payoff: Piattaforma dei Contratti Pubblici
description: >
  Portale unico per l’interoperabilità dell’Ecosistema Nazionale di approvvigionamento digitale
lang: it
highlight: true
comingsoon: false
abilitante: false
hide_activities: true
layout: platform
owners:
    - name: ANAC
      url: https://www.anticorruzione.it
resources_hide_title: false
resources:
  - Per i Gestori e i Titolari di Piattaforme:
    - title: Specifiche Tecniche Piattaforma dei Contratti Pubblici - ANAC
      url: https://github.com/anticorruzione/npa
      icon: github
      desc: >
        Informazioni su come integrare le Piattaforme di approvvigionamento
        digitale ai servizi della Piattaforma dei Contratti Pubblici e ai
        suoi componenti
    - title: Schema Operativo e Allegati - AGID
      url: https://www.agid.gov.it/it/piattaforme/procurement/regole-tecniche-procurement
      icon: link
      desc: >
        Informazioni sul modello di interoperabilità per l’eProcurement,
        sul processo di certificazione delle piattaforme di approvvigionamento
        digitale e su come accreditarsi alla piattaforma di qualificazione
        per eseguire i test di integrazione
    - title: Piattaforma Digitale Nazione Dati (PDND)
      url: https://developers.italia.it/it/pdnd/
      icon: link
      desc: >
        Informazioni sulla PDND, su come aderire e su come utilizzarla

  - Per la Pubblica Amministrazione e la Cittadinanza:
    - title: Open Data e API di Accesso ai Dati Pubblici - ANAC
      url: https://dati.anticorruzione.it/opendata
      icon: link
      desc: >
        Portale dei dati aperti di ANAC che contiene la documentazione
        relativa al Modello dati e alle API di accesso ai dati pubblici

---

## Introduzione

La Piattaforma dei Contratti Pubblici è la nuova piattaforma gestita da ANAC che
abilita la digitalizzazione del ciclo di vita dei Contratti Pubblici, in
conformità a quanto previsto dal Codice dei Contratti Pubblici
([Decreto legislativo 31 marzo 2023, n. 36](https://www.gazzettaufficiale.it/dettaglio/codici/contrattiPubblici){:target="_blank"}).

**Cos’è**

La Piattaforma dei Contratti Pubblici è costituita da una serie di servizi
accessibili in interoperabilità dalle piattaforme digitali di approvvigionamento
che, in adempimento alle previsioni del Codice dei Contratti Pubblici,
consentono la realizzazione dell’Ecosistema Nazionale di approvvigionamento
digitale (art. 22) ed abilitano:

* l’accesso alla Banca Dati Nazionale dei Contratti Pubblici (BDNCP, art 23);
* l’accesso al Fascicolo Virtuale dell’Operatore Economico (FVOE, art. 24);
* la pubblicità legale degli atti (art. 27).

Di seguito si riporta un diagramma illustrativo dell’Ecosistema:

![](/assets/images/piattaforma-contratti-pubblici/piattaforma-contratti-pubblici.png)

Il sistema della Piattaforma dei Contratti Pubblici:

* raccoglie dati e informazioni provenienti dalle Stazioni Appaltanti e dagli
  Operatori Economici relativi all’intero ciclo di vita del Contratto Pubblico e
  li conferisce alla Banca Dati Nazionale Contratti Pubblici (BDNCP);
* consente la verifica dei requisiti di partecipazione degli Operatori Economici
  in ogni fase del Contratto Pubblico;
* esegue la pubblicazione con valore legale a livello europeo e nazionale dei
  bandi e degli avvisi;
* mette a disposizione tutti i dati raccolti ai soggetti interessati, anche in
  forma pubblica, attraverso la realizzazione di Interfacce di analisi dati,
  OpenData e API di accesso.

La Piattaforma dei Contratti Pubblici sostituisce i servizi precedentemente
erogati dai servizi Simog, smartCIG, FVOE 1.0, dalla 5a Serie Speciale -
Contratti Pubblici della Gazzetta Ufficiale, ed offre le ulteriori funzionalità
per consentire alle Stazioni Appaltanti la pubblicazione a livello europeo
(TED).

## Chi la usa e perché

**Le Stazioni Appaltanti** e gli enti concedenti di cui all’art. 1 comma 1 lett. a)
e b) dell’Allegato I.1 al Codice dei contratti pubblici (di seguito Stazioni
Appaltanti):

* per l’assegnazione del CIG a ogni procedura di affidamento, ivi compresi i
  singoli lotti di gara, ove previsti, indipendentemente dall’importo;
* per la pubblicazione degli avvisi di preinformazione, del bando di gara e
  degli avvisi di post informazione;
* per la comunicazione alla BDNCP dei dati sull’esecuzione dei contratti.
* per la verifica del possesso e del mantenimento dei requisiti di
  partecipazione degli Operatori Economici.

Le Stazioni Appaltanti gestiscono tutte le fasi del ciclo di vita del contratto
utilizzando esclusivamente Piattaforme di approvvigionamento digitali
certificate, che accedono in [interoperabilità](https://next.developers.italia.it/it/interoperabilita)
ai servizi offerti dalla Piattaforma dei Contratti Pubblici di ANAC.
Per poter operare in interoperabilità le Stazioni Appaltanti devono infatti
dotarsi di una o più piattaforme digitali certificate (art. 25).

La Piattaforma dei Contratti Pubblici eroga i suoi servizi sottoforma di API e
utilizza la Piattaforma Digitate Nazionale Dati (PDND) per documentarne e
autorizzarne la fruizione e l’accesso.

<br />

**Gli Operatori Economici** di cui all’art. 1 comma 1 lett. l) dell’Allegato I.1
al Codice dei contratti pubblici:

* per la consultazione e l’aggiornamento del proprio Fascicolo Virtuale;
* per la verifica del possesso dei requisiti di partecipazione alle gare;
* per la consultazione dei bandi e degli avvisi pubblici.

L’accesso per gli Operatori Economici avverrà attraverso interfaccia web, che
sarà resa disponibile dal 1°gennaio 2024 nella sezione servizi del portale ANAC.

Non è richiesto nessun prerequisito tecnico per operare nella piattaforma, a
meno del possesso di un’identità digitale LoA3 (equivalenti a SPID Livello 2,
CIE).

<br />

**La Pubblica Amministrazione e la Collettività**

I dati della BDNCP sono resi disponibili alle Pubbliche Amministrazioni
interessate per l’accesso ai dati strutturati sui Contratti Pubblici mantenuti
dalla BDNCP.

L’accesso per la Pubblica Amministrazione avviene attraverso i servizi erogati
tramite la Piattaforma Digitale Nazionale Dati (PDND) e pubblicati per la
trasparenza sul portale dell’ANAC, attraverso il quale la collettività può
fruire dei servizi di analisi self- service BI, OpenData e API disponibili sul
[portale ANAC dedicato](https://dati.anticorruzione.it/opendata){:target="_blank"}.

## Architettura dei servizi

I servizi sono organizzati in modo da seguire la successione delle fasi del
ciclo di vita digitale dei Contratti Pubblici.

All’interno di ogni fase sono individuate delle azioni che possono essere
eseguite dagli utenti, o eventi significativi ai fini del monitoraggio di un
contratto.

Il modello dati della Piattaforma dei Contratti Pubblici organizza le
informazioni in schede autoconsistenti. È individuata una scheda per ciascuna
azione o evento significativo nel corso del ciclo di vita del contratto utile al
sistema di monitoraggio.

Nella definizione della tipologia di scheda e del contenuto informativo sono
state seguite le seguenti direttrici:

* il set informativo non estende i dati già precedentemente acquisiti da ANAC, se
  non per quanto riguarda le informazioni ulteriori necessarie per la redazione
  dei formulari della Gazzetta Ufficiale della Comunità Europea (eForms) e
  dell’European Standard Procurement Document (l’ESPD) o Documento di Gara Unico
  Europeo (DGUE);
* le schede ove necessario possono contenere eForm e/o ESPD. In questo caso i due
  oggetti sono completi e autoconsistenti;
* ll formato dati è JSON, tuttavia eForm e ESPD contenuti nella scheda mantengono
  il loro formato nativo (XML) con le annesse regole di correttezza sintattica e
  semantica definite dallo standard;
* le informazioni contenute nelle eForm e ESPD non sono ripetute nella scheda (a
 meno delle ridondanze tra i due modelli);
* in generale il volume delle informazioni richieste è crescente all'aumentare
  dell’importo dell’affidamento, secondo le soglie indicate di seguito:
  * fino a 5.000 euro;
  * da 5.000 euro, fino alla soglia europea;
  * oltre la soglia europea.
  Esistono altresì schede specifiche per particolari tipologie di contratto.
* la definizione delle schede segue l’approccio adottato in sede europea per la
  definizione delle eForm e privilegia la creazione di una serie di schede ad hoc
  per le varie fasi di ciascuna tipologia di affidamento;
* per la definizione del modello dati e delle regole sintattiche-semantiche, ANAC
  ha deciso di abbandonare la redazione di documenti in linguaggio naturale in
  favore dell’uso linguaggi formali di alto livello:
  * per la rappresentazione del modello dati e delle regole sintattiche è utilizzato
    lo standard OpenAPI 3.0 come indicato dalle Linee Guida del Modello
    d'Interoperabilità;
  * per la rappresentazione delle regole semantiche e di congruità è utilizzata la
    notazione DMN (Decision Model and Notation) e il linguaggio FEEL (Friendly
    Enough Expression Language);
  * per gli oggetti eForm ed ESPD che possono essere contenuti all’interno delle
    schede, vengono applicate le regole di correttezza previste dai rispettivi
    modelli. È comunque possibile che le regole ANAC definiscano criteri più
    restrittivi di quelli previsti dallo standard europeo.

## Come Integrarsi

L'integrazione delle Piattaforme di approvvigionamento digitale con la
Piattaforma dei Contratti Pubblici prevede la fruizione degli appositi servizi
esposti da ANAC attraverso la PDND.

Per poter accedere a tali servizi è necessario innanzitutto:

1. figurare nel Registro delle Piattaforme Certificate come Gestori autorizzati,
   completando il processo stabilito dalle Regole tecniche di AGID
   ([Nuova sezione dedicata](https://www.agid.gov.it/it/piattaforme/procurement/certificazione-componenti-piattaforme){:target="_blank"}).
2. aver effettuato l’adesione a PDND, che per i soggetti non iscritti a IPA
   (Soggetti privati) è subordinata al completamento del punto 1.  L’adesione può
   essere effettuata in autonomia sul [portale dedicato](https://www.interop.pagopa.it){:target="_blank"}.

Successivamente, i Gestori di piattaforma possono ricercare nel catalogo PDND
gli e-service ANAC abilitanti la gestione del ciclo di vita dei Contratti
Pubblici (PCP) e procedere, per ciascuno di essi, con:

* la richiesta di fruizione tramite la Piattaforma PDND;
* la configurazione degli elementi necessari alla fruizione sulla Piattaforma PDND;
* la configurazione dei propri sistemi per accedere attraverso i metodi di
autenticazione resi disponibili da PDND.

## Canali

<a class="btn btn-primary" href="https://github.com/anticorruzione/npa/issues" target="_blank" ><svg class="icon icon-white p-1 mr-1"><use xlink:href="/assets/svg/sprite.svg#it-github"></use></svg>
  Vai alle issue
</a>

Utilizza il canale GitHub dedicato per esplorare le specifiche tecniche, aprire
una issue (segnalazioni).
