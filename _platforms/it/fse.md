---
title: FSE
subtitle: Fascicolo Sanitario Elettronico
logo: /assets/images/FSE_EXT.png
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
  - Supporto Sviluppo:
    - title: Pagina di supporto github
      icon: github
      url: https://github.com/ministero-salute/it-fse-support
      desc: Supporto integrazione Gateway.
    - title: Schematron
      icon: github
      url: https://github.com/ministero-salute/it-fse-support/tree/main/schematron
      desc: Schematron utilizzabili per la validazione dei documenti CDA2.
    - title: OpenAPI validazione CDA2
      icon: github
      url: https://github.com/ministero-salute/it-fse-support/tree/main/openapi/gateway
      desc: OpenAPI Gateway servizio di validazione CDA2.
  - Documentazione:
    - title: Linee guida per l'attuazione FSE 2.0
      url: https://www.gazzettaufficiale.it/eli/id/2022/07/11/22A03961/sg
      icon: file
      desc: Documentazione di alto livello del funzionamento dell'architettura pubblicate in Gazzetta Ufficiale.
    - title: Aggirnamento contenuti FSE 2.0 previsti nei primi 12 mesi
      url: https://www.gazzettaufficiale.it/eli/id/2022/07/11/22A03960/sg
      icon: file
      desc: Decreto contenuti pubblicato in Gazzetta Ufficiale.
    - title: Specifiche di integrazione servizio di validazione CDA2
      url: https://github.com/ministero-salute/it-fse-support/tree/main/doc/integrazione-gateway
      icon: file
      desc: Documentazione dettagliata relativa alle specifiche di integrazione del servizio di validazione CDA2 esposto dal Gateway.
    - title: Specifiche HL7 CDA2
      icon: link
      url: http://www.hl7italia.it/hl7italia_D7/node/2359
      desc: Link al sito Hl7 Italia con riferimento allo standard documentale.
    - title: Specifiche tecniche AgID
      icon: link
      url: https://www.fascicolosanitario.gov.it/it/linee-guida-manuali-documenti-tecnici
      desc: Link al sito AgID, riferimento specifiche tecniche.
  - Validazione Integrazioni:
    - title: Processo di validazione Gateway ed EDS
      url: #
      icon: file
      desc: Verrà predisposta una sezione a supporto della procedura di validazione.
---

## Intro 

Il Fascicolo Sanitario Elettronico (FSE) è lo strumento attraverso il quale il cittadino può tracciare e consultare tutta la storia della propria vita sanitaria, condividendola in maniera sicura ed efficiente con gli operatori sanitari.

**Obiettivi:**
Il Piano Nazionale di Rilancio e Resilienza (PNRR), Missione 6 Componente 2, promuove il potenziamento del Fascicolo Sanitario Elettronico (FSE) nella sua versione 2.0 al fine di garantirne la **diffusione, l’omogeneità e l’accessibilità su tutto il territorio nazionale** da parte degli assistiti e operatori sanitari.

Secondo le Linee guida di attuazione il FSE dovrà diventare:
il punto unico ed esclusivo di accesso per tutti i cittadini ai servizi del SSN, indipendentemente dalla regione di appartenenza; 
un ecosistema di servizi basati sui dati per i professionisti sanitari per la diagnosi e cura dei propri assistiti e per una assistenza sempre più personalizzata sul paziente;
uno strumento per le strutture ed istituzioni sanitarie che potranno utilizzare le informazioni cliniche per effettuare analisi di dati clinici e migliorare l'erogazione dei servizi sanitari.


Affinché ciò avvenga è necessario che l’infrastruttura tecnologica evolva per:
rendere FSE omogeneo sul territorio nazionale per dati contenuti, servizi offerti, semplicità di utilizzo/interfaccia e portabilità;
assicurare che i documenti che alimentano il FSE siano effettivamente prodotti secondo gli standard nazionali;
rendere più efficace l’interoperabilità tra fascicoli regionali; 
realizzare una effettiva gestione del dato da affiancare a quella del documento;
garantire che i dati del FSE possano valere anche ai fini secondari (ricerca e governo).


Il FSE 2.0 è una infrastruttura distribuita che comprende elementi regionali e centrali che interoperano tra loro e con altri sistemi secondo modelli di interoperabilità standard [(ModI definito da AgID)](https://docs.italia.it/italia/piano-triennale-ict/lg-modellointeroperabilita-docs/it/bozza/doc/01_Pattern%20interazione/01_introduzione.html).

![](/assets/images/fse/FSE2.png)

Per consentire una gestione più efficace del dato vengono introdotti due nuovi elementi infrastrutturali:
**il Gateway**, che ha il compito di verificare la coerenza nell’applicazione degli standard, sia per dati che per documenti, 
**l’Ecosistema Dati Sanitari (EDS)** che raccoglie, gestisce e rende fruibile il dato mediante servizi REST.  L’EDS, mediante servizi di sottoscrizione e sincronizzazione può alimentare repository regionali con i dati di pertinenza delle regioni nelle modalità indicate dalla norma. L’EDS infine realizza le funzionalità di monitoraggio di alimentazione e di utilizzo del sistema FSE da parte del cittadino e degli operatori sanitari.

**Standard per dati e documenti**
Le Linee guida di attuazione del Fascicolo Sanitario elettronico prevedono che nel FSE 2.0 confluiscano:
dati in formato HL7 FHIR, direttamente acquisiti dai sistemi produttori delle strutture e archiviati nel Data Repository Centrale (e opzionalmente presso data repository locali)
documenti, in formato HL7 CDA2 iniettati in PDF firmati, prodotti a valle della validazione dai sistemi produttori e archiviati nei repository documentali delle strutture sanitarie stesse (dislocati a livello regionale o aziendale).
Stabiliscono inoltre l’elenco dei documenti dei primi 12 mesi, per i quali sono state aggiornate le guide implementative CDA2 e reperibili presso il [sito ufficiale di HL7 Italia](http://www.hl7italia.it/hl7italia_D7/hl7it_publications).

Il documento [Architettura FSE 2.0](https://docs.google.com/document/d/1-JD75i0dV5dJFiTj9ZaTrZXPSzn-hfuA/edit#heading=h.30j0zll) fornisce maggiori dettagli sull’architettura del Fascicolo 2.0 e sulle interazioni tra gli elementi che la compongono. Il documento [Piattaforma di telemedicina ed Ecosistema FSE]( https://docs.google.com/document/d/10JPeUUiGEKIbLBt0uMrqJYgJLR7M7eAj/edit#heading=h.gjdgxs ) fornisce maggiori dettagli su come il Gateway FSE e l’Ecosistema Dati Sanitari interoperano con le piattaforme di Telemedicina.


## Codice della piattaforma

È possibile reperire il codice pubblico della piattaforma e la documentazione direttamente sull’organizzazione [GitHub del Ministero della Salute](https://github.com/ministero-salute/it-fse-landing).

## Aiutaci a migliorare

Segnalaci le proposte di miglioramento e/o le eventuali anomalie che hai riscontrato nell’utilizzo della piattaforma attraverso [il canale Issue tracker](https://github.com/ministero-salute/it-fse-support/issues).

## Canali

<a class="btn btn-primary" href="https://github.com/ministero-salute/it-fse-support/issues" target="_blank"><i class="it-horn" /> Issue tracker</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/archives/C030BJEGEN8" target="_blank"><i class="it-comment" /> Canale Slack sviluppatori (#FSE)</a>
