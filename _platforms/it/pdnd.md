---
title: PDND
subtitle: Piattaforma Digitale Nazionale Dati
logo: /assets/images/logo-pdnd@2x.png
external_website: https://selfcare.pagopa.it
payoff: Piattaforma Digitale Nazionale Dati
description: >
  Abilita l'interoperabilità dei sistemi informativi degli enti e dei gestori di servizi pubblici
lang: it
highlight: true
comingsoon: false
abilitante: true
hide_activities: true
layout: platform
owners:
    - name: Dipartimento per la trasformazione digitale
      url: https://innovazione.gov.it
managers:
    - name: Pago PA
      url: https://pagopa.it
resources_hide_title: true
resources:
  - Documentazione:
    - title: Manuale operativo PDND
      url: https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita
      icon: link
      desc: Manuale operativo della piattaforma PDND
    - title: Linee guida modello interoperabilità (ModI)
      url: https://www.agid.gov.it/it/infrastrutture/sistema-pubblico-connettivita/il-nuovo-modello-interoperabilita
      icon: file
      desc: Indicazioni, standard e tecnologie da rispettare per permettere l'interoperabilità
    - title: Guida all'utilizzo delle regole per il controllo automatico di specifiche OpenAPI secondo il ModI
      url: https://github.com/italia/api-oas-checker-rules/blob/main/docs/guida_validazione.md
      icon: github
      desc: Istruzioni per verificare automaticamente che le interfacce Open API degli e-service da pubblicare su PDND rispettino le principali regole del ModI
    - title: Guida alla pubblicazione di e-service per WaaS
      url: https://github.com/INPS-it/WaaS.Comuni/blob/main/003%20-%20Guida%20Comuni/Guida.md
      icon: github
      desc: Guida di INPS per supportare i comuni nella pubblicazione di e-service "Welfare as a Service", che alimentano il SIUSS
    - title: Guida alla nomenclatura degli e-service PDND
      url: https://italia.github.io/pdnd-guida-nomenclatura-eservice/
      icon: github
      desc: Buone pratiche perla nomenclatura e la descrizione degli e-service
  - Implementazioni:
    - title: Esempio di API
      url: https://github.com/italia/developers-italia-api
      icon: github
      desc: Esempio di implementazione di un’API
    - title: Specifiche API per le Università
      url: https://github.com/italia/api-padigitale2026-misura1.3.1-uni-afam
      icon: github
      desc: Specifiche API relative alla misura 1.3.1 per l’avviso Università e AFAM
  - Strumenti:
    - title: API OAS Checker
      url: https://italia.github.io/api-oas-checker/
      icon: software
      desc: Analizza le specifiche OpenAPI di un’API REST e individua eventuali difformità rispetto alle regole tecniche Agid
    - title: Regole per il controllo automatico di specifiche OpenAPI secondo il ModI
      url: https://github.com/italia/api-oas-checker-rules
      icon: github
      desc: Regole Spectral per verificare automaticamente che le interfacce Open API degli e-service da pubblicare su PDND rispettino le principali regole del ModI
  - Archivio:
    - title: (2019) Using OpenAPI to standardize the Italian API ecosystem - slide (en)
      url: /assets/images/pdnd/pycon-2019-api.pdf
      icon: file
      desc: Presentazione dello storico di API e Interoperabilità nel contesto italiano
    - title: (2020) Using OpenAPI to standardize the Italian API ecosystem - video (en)
      url: https://www.youtube.com/watch?v=AL5itw_r9iI
      icon: video
      desc: Video dello storico di API e Interoperabilità nel contesto italiano
    - title: (2022) Design secure APIs - slide (en)
      url: /assets/images/pdnd/2022-apisecure-design-secure-apis.pdf
      icon: file
      desc: Presentazione utile per lo sviluppo di API
    - title: (2022) Videointervista e demo di API OAS Checker/Validatore sintattico - video (en)
      url: https://www.youtube.com/watch?v=1BK4yGt64H4
      icon: video
      desc: Video intervista sul Validatore sintattico
    - title: (2022) Community lab su API design e API canvas - slide
      url: /assets/images/pdnd/250522_Community_lab.pdf
      icon: file
      desc: Presentazione utile per lo sviluppo di API interoperabili nel rispetto delle Linee guida Agid
    - title: (2022) Community lab su API design e API canvas - video
      url: https://www.youtube.com/watch?v=D-3t8h1E9yE
      icon: video
      desc: Video utile per lo sviluppo di API interoperabili nel rispetto delle Linee guida Agid
    - title: (2022) Self-explaining APIs - slide (en)
      url: /assets/images/pdnd/europython-2022-self-explaining-api-semantic-schema.pdf
      icon: file
      desc: Presentazione che racconta l'approccio semantico alla progettazione di API interoperabili
    - title: Validatore sintattico - articolo Medium
      url: https://medium.com/developers-italia/openapi-checker-il-verificatore-delle-interfacce-digitali-api-1d50b978c8c5
      icon: link
      desc: Articolo di presentazione del Validatore sintattico

---

## Cos’è e quali vantaggi offre

La **Piattaforma Digitale Nazionale Dati (PDND)** è parte dell’ecosistema
interoperabilità ed è lo strumento per **gestire l’autenticazione,
l’autorizzazione e il tracciamento dei soggetti abilitati per garantire la
sicurezza  delle informazioni**. Fornisce un insieme di regole condivise per
**semplificare gli accordi di interoperabilità** snellendo i processi di
istruttoria, riducendo oneri e procedure amministrative.

PDND, inoltre, mette a disposizione il **Catalogo API**, che espone tutti gli
e-service pubblicati dagli enti e tramite cui è possibile effettuare la
richiesta di fruizione dati e successivamente integrare i propri servizi per i
cittadini.

La finalità della piattaforma è la totale interoperabilità dei dataset e dei
servizi chiave tra le PA centrali e locali, che consente di **realizzare il
principio "once-only"** (la PA non deve chiedere a cittadini e imprese dati che
già possiede) e di **valorizzare il capitale informativo** delle pubbliche
amministrazioni.

La piattaforma offre numerosi vantaggi agli utenti:

* Gli **erogatori**, che rendono disponibili e-service per l’accesso ai loro
  dati, hanno garantita la sicurezza dello scambio di dati e una
  standardizzazione dei processi
* I **fruitori** accedono al catalogo degli e-service disponibili e possono
  integrare le API nei loro servizi a cittadini e imprese
* I **tecnici sviluppatori**, che implementano e gestiscono il ciclo di vita degli
  e-service di un’amministrazione, possono fare integrazioni standard grazie
  alla piattaforma
* I **responsabili della protezione dei dati** degli Enti aderenti possono accedere
  a documenti amministrativi standard e garantire un processo uniforme per
  tutti gli enti
* **Imprese** e **cittadini** possono veder realizzato il principio del once-only,
  evitando di dover fornire informazioni già comunicate in precedenza alla PA

## Scopri come funziona

<a class="btn btn-primary" href="https://developer.pagopa.it/pdnd-interoperabilita/overview" target="_blank">Scopri come funziona</a>

## Scopri come aderire

<a class="btn btn-primary" href="https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita" target="_blank">Scopri come aderire</a>

## Canali

Se hai problemi di back office, puoi rivolgerti all’[**assistenza dedicata sulla
piattaforma PDND**](https://selfcare.pagopa.it).

Per tutte le altre problematiche di natura tecnica, come
errori legati allo stacco del voucher (token JWT) oppure proposte di
miglioramento, puoi utilizzare l’apposita repository Github.

<a class="btn btn-primary" href="https://github.com/pagopa/pdnd-interop-frontend/issues" target="_blank"><i class="it-horn"></i> Apri una issue su GitHub</a>

## Risorse

In questa sezione hai a disposizione una serie di risorse utili per approfondire
le origini normative e tecniche della PDND e per sviluppare progetti che le
utilizzano.

La **Normativa** ti permette di chiarire il contesto in cui è stata istituita e gli
adempimenti necessari per gli enti coinvolti, mentre la **Documentazione** fornisce
informazioni più dettagliate sui componenti e sulle modalità d’uso.

Se sei un developer in **Strumenti** ed **Esempi**, in parte sviluppati da Developers
Italia, puoi trovare supporto tecnico.

Nell’**Archivio** puoi consultare materiale utile a ricostruire la storia di
come è nata la PDND.
