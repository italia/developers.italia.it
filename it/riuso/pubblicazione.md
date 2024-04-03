---
title: Pubblicazione di software per la Pubblica Amministrazione
lang: it
ref:
  en: /en/reuse/publication
layout: internal-long
subtitle:
see_also:
  - label: Acquisizione di software
    url: /it/riuso/acquisizione
  - label: Dichiarazione di riuso di software
    url: /it/riuso/dichiarazione
---

Quando una Pubblica Amministrazione italiana sviluppa o commissiona software è tenuta, ai sensi dell'[art. 69 del Codice dell'Amministrazione Digitale](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2017-12-13/_rst/capo6_art69.html), a pubblicarlo in repertorio pubblico con licenza aperta al fine di consentirne il riuso da parte di altre amministrazioni.

Questo processo è dettagliatamente descritto nelle [linee guida per l'Acquisizione e il riuso di software]({{ site.url_lineeguidariuso }}) emesse dall'Agenzia per l'Italia Digitale. Gli [allegati tecnici](https://docs.italia.it/italia/developers-italia/lg-acquisizione-e-riuso-software-per-pa-docs/it/stabile/attachments/allegato-b-guida-alla-pubblicazione-open-source-di-software-realizzato-per-la-pa.html) delle linee guida sono formulati in modo da poter essere direttamente inclusi nei contratti e nei capitolati relativi allo sviluppo di software, alla modifica di software esistente e alla manutenzione di software, al fine di ottemperare all'obbligo di rilascio.

Il processo in sintesi:

- L'amministrazione deve ottenerne sempre la **piena titolarità**.
- Il software deve essere pubblicato in un **repositorio pubblico** (ad es. GitHub, GitLab, BitBucket ecc., anche on-premises purché **pubblicamente accessibile**).
- Al software deve essere applicata una delle **[licenze approvate da Open Source Initiative](https://opensource.org/licenses)** (le Linee Guida ne suggeriscono alcune in particolare, per consentire la massima riusabilità).
- Nel repositorio deve essere incluso il file `publiccode.yml` che ne descrive le caratteristiche e consente di popolare il [catalogo del software di Developers Italia](/it/software).


<a class="btn btn-primary" href="https://forum.italia.it/c/software-open-source-per-la-pa"><svg class="icon icon-sm icon-white"><use xlink:href="/assets/svg/sprite.svg#it-horn"></use></svg> Entra nel forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/CJRSS5S9W"><svg class="icon icon-sm icon-white"><use xlink:href="/assets/svg/sprite.svg#it-comment"></use></svg> Dialoga su Slack (#reuse)</a>
<a class="btn btn-white btn-outline-primary" href="https://slack.developers.italia.it/"><svg class="icon icon-sm icon-primary"><use xlink:href="/assets/svg/sprite.svg#it-comment"></use></svg> Registrati su Slack </a>


## publiccode.yml

Tutti i repositori di software pubblico devono contenere un file denominato `publiccode.yml` che contiene tutte le informazioni utili al popolamento del [catalogo](/it/software) di Developers Italia. publiccode.yml è uno standard nato in Italia ma in corso di adozione internazionale.

<a class="btn btn-white btn-outline-primary" href="https://docs.italia.it/italia/developers-italia/publiccodeyml/it/master/"><svg class="icon icon-sm icon-primary"><use xlink:href="/assets/svg/sprite.svg#it-file"></use></svg> Specifiche formato publiccode.yml</a>
<a class="btn btn-primary" href="https://publiccode-editor.developers.italia.it/"><svg class="icon icon-sm icon-white"><use xlink:href="/assets/svg/sprite.svg#it-pencil"></use></svg>Editor/validatore</a>

## Pubblicazione nel catalogo

La pubblicazione nel catalogo, così come il recepimento degli aggiornamenti, è **automatica** poiché mediante un *crawler* sarà Developers Italia a trovare ed importare periodicamente tutti i repositori contenenti un file publiccode.yml.

**Nota bene:** per consentire al catalogo di Developers Italia di trovare i propri repositori, ciascuna amministrazione deve eseguire un'**operazione una tantum per dichiarare lo strumento di code hosting** da essa prescelto per pubblicare tutti i propri progetti (ad es. la propria organizzazione GitHub). Si vedano le [linee guida](https://docs.italia.it/italia/developers-italia/lg-acquisizione-e-riuso-software-per-pa-docs/it/stabile/attachments/allegato-a-guida-alla-pubblicazione-open-source-di-software-realizzato-per-la-pa.html#individuazione-dello-strumento-di-code-hosting) per maggiori dettagli.

<a class="btn btn-white btn-outline-primary" href="https://docs.italia.it/italia/developers-italia/policy-inserimento-catalogo-docs/it/stabile/"><svg class="icon icon-sm icon-primary"><use xlink:href="/assets/svg/sprite.svg#it-file"></use></svg> Regolamento del catalogo software</a>
<a class="btn btn-primary" href="https://onboarding.developers.italia.it/"><svg class="icon icon-sm icon-white"><use xlink:href="/assets/svg/sprite.svg#it-plus-circle"></use></svg> Modulo per dichiarare lo strumento di code hosting</a>

## Software open source di terze parti

I software open source di terze parti, ovvero non messi a riuso dalla Pubblica Amministrazione ma di potenziale interesse per il settore pubblico, possono essere inclusi nel catalogo di Developers Italia. È necessario a tal fine:

1. compilare ed includere il file `publiccode.yml` nel repositorio (lasciando vuoto il campo `codiceIPA`);
2. aggiungere l'URL del repositorio [nella lista](https://github.com/italia/developers.italia.it/blob/HEAD/_data/publishers.thirdparty.yml) aprendo una pull request su GitHub.

## PNRR: soluzioni a Catalogo

Nell'ottica di contribuire al raggiungimento degli obiettivi del Piano Nazionale di Ripresa e Resilienza (PNRR),
e in particolare quelli previsti dalla Missione 1, Componente 1 in capo al Dipartimento per la trasformazione digitale,
abbiamo implementato alcuni percorsi di ricerca tematici, che agevolino le Pubbliche Amministrazioni a
reperire soluzioni rispondenti ai requisiti indicati negli avvisi pubblicati da [PA Digitale 2026](https://padigitale2026.gov.it/){:target="_blank" rel="noopener noreferrer"}.

Nella ricerca di soluzioni che possano concorrere al raggiungimento di tali requisiti, va rispettato quanto previsto dal
Codice dell'Amministrazione Digitale (Artt. [68](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/_rst/capo_VI-articolo_68.html){:target="_blank" rel="noopener noreferrer"}
e [69](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2021-07-30/_rst/capo_VI-articolo_69.html){:target="_blank" rel="noopener noreferrer"}) effettuando una **valutazione comparativa** che dia priorità,
nell'ordine, al software a riuso ed open source di terze parti.

Per agevolare la ricerca di soluzioni idonee abbiamo individuato alcune informazioni che possono essere inserite, su base volontaria e autocertificata, nel file `publiccode.yml`, utilizzato
per la pubblicazione delle schede di presentazione del Catalogo.

Per autocertificare la propria soluzione è necessario seguire le istruzioni di seguito riportate.

### Istruzioni

All'interno del file `publiccode.yml`, nel campo `features` si chiede di inserire i seguenti tag:

* "`PNRR`" per indicare che il software appartiene alla categoria
* "`PNRR/Beneficiari/{NOME BENEFICIARIO}`" per indicare che il software può avere come beneficiari quelli indicati. Questo valore può essere ripetuto tante volte quanto necessario.

  Esempio: "`PNRR/Beneficiari/Scuole`"

  I possibili nomi di beneficiari sono:
    - "`Comuni`"
    - "`Scuole`"
    - "`ASL`"
    - "`Enti Regionali`"
    - "`Università`"
    - "`PA Centrali`"
    - "`Province`"
    - "`Istituti di ricerca e AFAM`"
    - "`Altri enti`"
* `PNRR/Misura/{NUMERO MISURA}` per indicare che il software può essere utile per rispondere alla misura numero `{NUMERO MISURA}`. Questo valore può essere ripetuto tante volte quanto necessario.

  Esempio: "`PNRR/Misura/1.2`"

  Le possibili misure sono:
    - "`1.1`" per Infrastrutture digitali
    - "`1.2`" per Abilitazione e facilitazione migrazione al Cloud
    - "`1.3.1`" per Piattaforma Digitale Nazionale Dati
    - "`1.3.2`" per Sportello Digitale Unico
    - "`1.4.1`" per Esperienza del Cittadino nei servizi pubblici
    - "`1.4.2`" per Accessibilità
    - "`1.4.3`" per Adozione pagoPA e app IO
    - "`1.4.4`" per Adozione identità digitale
    - "`1.4.5`" per Digitalizzazione degli avvisi pubblici
    - "`1.4.6`" per MaaS - Mobility as a service
    - "`1.5`" per Cybersecurity
    - "`1.6`" per Digitalizzazione grandi amministrazioni centrali
    - "`1.7.1`" per Servizio civile digitale
    - "`1.7.2`" per Centri di facilitazione digitale

Per esempio, per dichiarare che un software può essere utile per rispondere alla misura 1.4.1 con beneficiari i comuni, nel file `publiccode.yml` si può inserire:

    description:
      it:
        features:
          - PNRR
          - PNRR/Beneficiari/Comuni
          - PNRR/Misura/1.4.1

Il Catalogo presenta [un filtro di ricerca "PNRR"](/it/search?pnrr=1), che permette di trovare le soluzioni per ciascuno dei tre elementi sopra riportati.
