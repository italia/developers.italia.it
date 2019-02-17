---
title: Pubblicazione di software per la Pubblica Amministrazione
lang: it
layout: internal-long
subtitle:
see_also:
  - label: Acquisizione di software
    url: /it/riuso/acquisizione
---

Quando una Pubblica Amministrazione italiana sviluppa o commissiona software è tenuta, ai sensi dell'[art. 69 del Codice dell'Amministrazione Digitale](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2017-12-13/_rst/capo6_art69.html), a pubblicarlo in repertorio pubblico con licenza aperta al fine di consentirne il riuso da parte di altre amministrazioni.

Questo processo è dettagliatamente descritto nelle [Linee Guida]({{ site.url_lineeguidariuso }}) emesse dall'Agenzia per l'Italia Digitale. Gli allegati tecnici delle Linee Guida sono formulati in modo da poter essere direttamente inclusi nei contratti e nei capitolati relativi allo sviluppo di software, alla modifica di software esistente e alla manutenzione di software, al fine di ottemperare all'obbligo di rilascio.

Il processo in sintesi:

- L'amministrazione deve ottenerne sempre la **piena titolarità**.
- Il software deve essere pubblicato in un **repositorio pubblico** (ad es. GitHub, GitLab, BitBucket ecc., anche on-premises purché **pubblicamente accessibile**).
- Al software deve essere applicata una delle **[licenze approvate da Open Source Initiative](https://opensource.org/licenses)** (le Linee Guida ne suggeriscono alcune in particolare, per consentire la massima riusabilità).
- Nel repositorio deve essere incluso il file `publiccode.yml` che ne descrive le caratteristiche e consente di popolare il [catalogo](/it/software) di Developers Italia.

## publiccode.yml

Tutti i repositori di software pubblico devono contenere un file denominato `publiccode.yml` che contiene tutte le informazioni utili al popolamento del [catalogo](/it/software) di Developers Italia. publiccode.yml è uno standard nato in Italia ma in corso di adozione internazionale.

- [Documentazione di publiccode.yml](https://docs.italia.it/italia/developers-italia/publiccodeyml/it/master/): specifiche e istruzioni per la compilazione
- [Editor](https://publiccode-editor.developers.italia.it/): strumento per la compilazione guidata e la validazione

## Pubblicazione nel catalogo

La pubblicazione nel catalogo, così come il recepimento degli aggiornamenti, è **automatica** poiché mediante un *crawler* sarà Developers Italia a trovare ed importare periodicamente tutti i repositori contenenti un file publiccode.yml.

**Nota bene:** per consentire al catalogo di Developers Italia di trovare i propri repositori, ciascuna amministrazione deve eseguire un'**operazione una tantum per dichiarare lo strumento di code hosting** da essa prescelto per pubblicare tutti i propri progetti (ad es. la propria organizzazione GitHub).

- [Individuazione dello strumento di code hosting](https://docs.italia.it/AgID/linee-guida-riuso-software/lg-acquisizione-e-riuso-software-per-pa-docs/it/bozza/attachments/allegato-b-guida-alla-pubblicazione-open-source-di-software-realizzato-per-la-pa.html#individuazione-dello-strumento-di-code-hosting): il processo spiegato nell'allegato tecnico alle Linee Guida
- [Onboarding](https://onboarding.developers.italia.it/): procedura online per dichiarare il proprio strumento di code hosting

## Software open source di terze parti

I software open source di terze parti, ovvero non messi a riuso dalla Pubblica Amministrazione ma di potenziale interesse per il settore pubblico, possono essere inclusi nel catalogo di Developers Italia. È necessario a tal fine:

1. compilare ed includere il file `publiccode.yml` nel repositorio (lasciando vuoto il campo `codiceIPA`);
2. aprire una [issue su GitHub](https://github.com/italia/developers-italia-backend/issues) per segnalarci l'URL del repositorio in modo da includerlo nel crawler.

