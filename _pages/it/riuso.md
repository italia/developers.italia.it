---
title: Acquisizione e riuso di software per la Pubblica Amministrazione
lang: it
layout: simple-internal
subtitle:
image: /assets/images/cover_softwareriuso.jpg
---

Gli articoli [68](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2017-12-13/_rst/capo6_art68.html) e [69](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2017-12-13/_rst/capo6_art69.html) del Codice dell'Amministrazione Digitale disciplinano le modalità con cui una Pubblica Amministrazione può acquisire software e sanciscono l'obbligo di rilasciare con licenza aperta il software da essa sviluppato o commissionato.

Le [Linee Guida](https://docs.italia.it/AgID/linee-guida-riuso-software/lg-acquisizione-e-riuso-software-per-pa-docs/it/bozza/) emesse dall'AgID (in corso di pubblicazione in Gazzetta Ufficiale) descrivono in dettaglio questo processo.

### Quando si sviluppa/commissiona software:

- L'amministrazione deve ottenerne sempre la piena titolarità.
- L'amministrazione può includere nel contratto/capitolato gli allegati tecnici delle Linee Guida, che disciplinano come un fornitore può 
- Il software deve essere pubblicato in un repositorio pubblico (ad es. GitHub, GitLab, BitBucket ecc., anche on-premises purché pubblicamente accessibile)
- Al software deve essere applicata una delle [licenze approvate da Open Source Initiative](https://opensource.org/licenses)
- Nel repositorio deve essere incluso il file `publiccode.yml` che ne descrive le caratteristiche e consente di popolare il [catalogo](/it/software) di Developers Italia.

### Quando si acquisisce software:

- Bisogna effettuare una valutazione comparativa secondo il processo descritto dalle Linee Guida, che secondo i dettami della legge privilegia il software a riuso e il software open source rispetto all'acquisizione di software in licenza d'uso.
- In caso di riuso, non è necessario contattare l'amministrazione titolare perché l'applicativo è già pubblicamente disponibile e la licenza open source regola le condizioni di riutilizzo.
- Se l'amministrazione commissiona delle modifiche al software, è tenuta a sua volta a rilasciarle in open source (assicurandosi che vengano recepite nel progetto originale oppure pubblicando il software integralmente - in tal caso figurerà in Developers Italia come *variante*).

# publiccode.yml

Tutti i repositori di software pubblico devono contenere un file denominato `publiccode.yml` che contiene tutte le informazioni utili al popolamento del [catalogo](/it/software) di Developers Italia. publiccode.yml è uno standard nato in Italia ma in corso di adozione internazionale.

- [Documentazione di publiccode.yml](https://docs.italia.it/italia/developers-italia/publiccodeyml/it/master/): specifiche e istruzioni per la compilazione
- [Editor](https://publiccode-editor.developers.italia.it/): strumento per la compilazione guidata e la validazione

# Pubblicazione nel catalogo

La pubblicazione nel catalogo, così come il recepimento degli aggiornamenti, è **automatica** poiché mediante un *crawler* sarà Developers Italia a trovare ed importare periodicamente tutti i repositori contenenti un file publiccode.yml.

Nota bene: per consentire al catalogo di Developers Italia di trovare i propri repositori, ciascuna amministrazione deve eseguire un'operazione una tantum per dichiarare lo strumento di code hosting da essa prescelto per pubblicare tutti i propri progetti (ad es. la propria organizzazione GitHub).

- [Individuazione dello strumento di code hosting](https://docs.italia.it/AgID/linee-guida-riuso-software/lg-acquisizione-e-riuso-software-per-pa-docs/it/bozza/attachments/allegato-b-guida-alla-pubblicazione-open-source-di-software-realizzato-per-la-pa.html#individuazione-dello-strumento-di-code-hosting): il processo spiegato nell'allegato tecnico alle Linee Guida
- [Onboarding](https://onboarding.developers.italia.it/): procedura per dichiarare il proprio strumento di code hosting

# Software open source di terze parti

I software open source di terze parti, ovvero non messi a riuso dalla Pubblica Amministrazione, ma di potenziale interesse per il settore pubblico possono essere inclusi nel catalogo di Developers Italia. È necessario a tal fine:

1. compilare ed includere il file `publiccode.yml` nel repositorio (lasciando vuoto il campo `codiceIPA`);
2. aprire una [issue su GitHub](https://github.com/italia/developers-italia-backend/issues) per segnalarci l'URL del repositorio in modo da includerlo nel crawler.
