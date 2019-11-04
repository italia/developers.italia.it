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
---

## Pubblicazione di software per la Pubblica Amministrazione

Quando una Pubblica Amministrazione italiana sviluppa o commissiona software è tenuta, ai sensi dell'[art. 69 del Codice dell'Amministrazione Digitale](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2017-12-13/_rst/capo6_art69.html), a pubblicarlo in repertorio pubblico con licenza aperta al fine di consentirne il riuso da parte di altre amministrazioni.

Questo processo è dettagliatamente descritto nelle [linee guida per l'Acquisizione e il riuso di software]({{ site.url_lineeguidariuso }}) emesse dall'Agenzia per l'Italia Digitale. Gli [allegati tecnici](https://docs.italia.it/italia/developers-italia/lg-acquisizione-e-riuso-software-per-pa-docs/it/stabile/attachments/allegato-b-guida-alla-pubblicazione-open-source-di-software-realizzato-per-la-pa.html) delle linee guida sono formulati in modo da poter essere direttamente inclusi nei contratti e nei capitolati relativi allo sviluppo di software, alla modifica di software esistente e alla manutenzione di software, al fine di ottemperare all'obbligo di rilascio.

Il processo in sintesi:

- L'amministrazione deve ottenerne sempre la **piena titolarità**.
- Il software deve essere pubblicato in un **repositorio pubblico** (ad es. GitHub, GitLab, BitBucket ecc., anche on-premises purché **pubblicamente accessibile**).
- Al software deve essere applicata una delle **[licenze approvate da Open Source Initiative](https://opensource.org/licenses)** (le Linee Guida ne suggeriscono alcune in particolare, per consentire la massima riusabilità).
- Nel repositorio deve essere incluso il file `publiccode.yml` che ne descrive le caratteristiche e consente di popolare il [catalogo del software di Developers Italia](/it/software).


<a class="btn btn-primary" href="https://forum.italia.it/c/software-open-source-per-la-pa"><i class="it-horn" /> Entra nel forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/CJRSS5S9W"><i class="it-comment" /> Dialoga su Slack (#reuse)</a> <a href="https://slack.developers.italia.it/"><small>(registrati su Slack)</small></a>


## publiccode.yml

Tutti i repositori di software pubblico devono contenere un file denominato `publiccode.yml` che contiene tutte le informazioni utili al popolamento del [catalogo](/it/software) di Developers Italia. publiccode.yml è uno standard nato in Italia ma in corso di adozione internazionale.

<a class="btn btn-outline-primary" href="https://docs.italia.it/italia/developers-italia/publiccodeyml/it/master/"><i class="it-file" /> Specifiche formato publiccode.yml</a>
<a class="btn btn-primary" href="https://publiccode-editor.developers.italia.it/"><svg class="icon icon-sm icon-white"><use xlink:href="/assets/bootstrap-italia/dist/svg/sprite.svg#it-pencil"></use></svg> Editor/validatore</a>

## Pubblicazione nel catalogo

La pubblicazione nel catalogo, così come il recepimento degli aggiornamenti, è **automatica** poiché mediante un *crawler* sarà Developers Italia a trovare ed importare periodicamente tutti i repositori contenenti un file publiccode.yml.

**Nota bene:** per consentire al catalogo di Developers Italia di trovare i propri repositori, ciascuna amministrazione deve eseguire un'**operazione una tantum per dichiarare lo strumento di code hosting** da essa prescelto per pubblicare tutti i propri progetti (ad es. la propria organizzazione GitHub). Si vedano le [linee guida](https://docs.italia.it/developers-italia/linee-guida-riuso-software/lg-acquisizione-e-riuso-software-per-pa-docs/it/stabile/attachments/allegato-b-guida-alla-pubblicazione-open-source-di-software-realizzato-per-la-pa.html#individuazione-dello-strumento-di-code-hosting) per maggiori dettagli.

<a class="btn btn-outline-primary" href="https://docs.italia.it/italia/developers-italia/policy-inserimento-catalogo-docs/it/stabile/"><i class="it-file" /> Regolamento del catalogo software</a>
<a class="btn btn-primary" href="https://onboarding.developers.italia.it/"><svg class="icon icon-sm icon-white"><use xlink:href="/assets/bootstrap-italia/dist/svg/sprite.svg#it-plus-circle"></use></svg> Modulo per dichiarare lo strumento di code hosting</a>

## Software open source di terze parti

I software open source di terze parti, ovvero non messi a riuso dalla Pubblica Amministrazione ma di potenziale interesse per il settore pubblico, possono essere inclusi nel catalogo di Developers Italia. È necessario a tal fine:

1. compilare ed includere il file `publiccode.yml` nel repositorio (lasciando vuoto il campo `codiceIPA`);
2. aggiungere l'URL del repositorio nella [lista](https://github.com/italia/developers-italia-backend/blob/master/crawler/whitelist/thirdparty.yml) aprendo una pull request su GitHub.

