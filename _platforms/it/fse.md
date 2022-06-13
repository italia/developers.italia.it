---
title: FSE
subtitle: Fascicolo Sanitario Elettronico
logo: /assets/images/cover_softwareriuso@2x.png
external_website: https://www.fascicolosanitario.gov.it
payoff: Fascicolo sanitario elettronico
description: >
  Il nuovo FSE è l’ecosistema digitale che realizza servizi evoluti basati sul dato atomico per cittadini e operatori sanitari.
lang: it
order: 2
highlight: true
comingsoon: false
abilitante: false
layout: platform
hide_activities: true
owners:
    - name: Ministero della Salute
      url: https://www.salute.gov.it/
resources:
  - SDK:
    - title: SDK
      icon: github
      url: https://github.com/ministero-salute/
      desc: SDK per integrazione Gateway
  - Documentazione:
    - title: Linee guida Architetturali
      url: https://github.com/ministero-salute/fse-documentation
      icon: file
      desc: Documentazione di alto livello del funzionamento dell'architettura.
    - title: Specifiche Gateway servizio di validazione CDA2
      url: https://github.com/ministero-salute/fse-documentation
      icon: file
      desc: Documentazione dettagliata relativa alle specifiche di integrazione del servizio di validazione CDA2.
  - Swagger:
    - title: Swagger servizio di validazione CDA2
      icon: github
      url: https://github.com/ministero-salute/fse/
      desc: Swagger Gateway servizio di validazione CDA2
---

## Intro 

Il nuovo FSE è l’ecosistema digitale che realizza servizi evoluti basati sul dato atomico. 
A tale fine:
- raccoglie i dati e documenti prodotti dalle strutture sanitarie pubbliche e private accreditate e non accreditate 
- consente ai cittadini di accedere ai propri dati e documenti 
- abilita i professionisti sanitari ad accedere ai dati e documenti dei cittadini
- mette a disposizione degli Enti di ricerca una fonte dati utile per le finalità di ricerca in ambito medico e biomedico
- permette alle Direzioni Sanitarie regionali di svolgere le proprie funzioni di prevenzione e di governo
- consente al Ministero della Salute di avere dati utili per finalità di prevenzione, sorveglianza epidemiologica e governo.

**Obiettivi:**
- Semplificare e uniformare l’accesso e l’uso dei servizi del SSN per cittadini e operatori sanitari
- Integrare e condividere dati clinici tra professionisti e strutture sanitarie 
- Supportare una sempre maggiore qualità e personalizzazione delle cure 
-Creare servizi di monitoraggio e analisi dei dati a supporto dell’azione degli organi di governo del SSN

**Contenuti:**
- Dati identificativi ed amministrativi (inclusi dati su prenotazioni, libretto sanitario, ecc)
- Dati clinici (e documenti strutturati che li contengano (dove previsti nella prima fase di attuazione) acquisiti nelle attività di prevenzione, diagnosi e cura condotte dai professionisti sanitari sugli assistiti:
	- Dati del Profilo Sanitario Sintetico (Patient Summary)
	- Dati di refertazione per ogni branca
	- Dati clinici derivanti da episodi di ricovero
	- Dati di emergenza-urgenza (118, pronto soccorso)
	- Dati provenienti da Cartelle Cliniche
	- Dati del Dossier Farmaceutico
	- Dati di vaccinazione
	- Dati acquisiti durante campagne di screening
	- Dati delle prescrizioni elettroniche, gestite da Sistema TS (tramite il SAC ed i SAR)
	- Ogni altro dato clinico prodotto dai professionisti sanitari durante le attività di prevenzione, diagnosi e cura che sarà definito e standardizzato a livello nazionale in itinere
- Dati clinici e vitali acquisiti da servizi di Telemedicina
- Imaging
- Patient Generated Health Data

**Formato dei dati:**
- HL7 FHIR
- DICOM per le immagini diagnostiche, e DICOM-SR per i dati loro associati

**Formato dei documenti:**
- PDF/A, con HL7 CDA2 iniettato, firmato in PaDES

**Architettura**
- Adozione di un modello che garantisca servizi uniformi su tutto il paese favorendo la standardizzazione dei processi di interoperabilità all’interno delle regioni e a livello nazionale
- Utilizzo del profilo IHE XDS.b per garantire l’interoperabilità dei documenti
- Utilizzo dello standard HL7 FHIR per la fruizione dei dati sanitari

## Come contribuire

### Codice della piattaforma

È possibile reperire il codice della piattaforma e la documentazione direttamente sull'[organizzazione GitHub del Ministero della Salute](https://github.com/ministero-salute). È possibile contribuire al codice aprendo una issue o una Pull Request per risolvere direttamente un problema.

## Canali

<a class="btn btn-primary" href="https://forum.italia.it" target="_blank"><i class="it-horn" /> Entra nel forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/archives/C030BJEGEN8" target="_blank"><i class="it-comment" /> Canale Slack sviluppatori SDK (#dcc-sdk)</a>
