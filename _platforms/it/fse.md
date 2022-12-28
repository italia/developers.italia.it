---
title: FSE
subtitle: Fascicolo Sanitario Elettronico 2.0
logo: /assets/images/FSE_EXT.png
external_website: https://www.fascicolosanitario.gov.it
payoff: Fascicolo sanitario elettronico
description: >
  Il nuovo sistema FSE è l’ecosistema digitale che realizza servizi evoluti basati su documenti e dati per cittadini e operatori sanitari.
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
  - Documentazione:
    - title: Linee guida per l'attuazione FSE 2.0
      url: https://www.gazzettaufficiale.it/eli/id/2022/07/11/22A03961/sg
      icon: file
      desc: Documentazione di alto livello del funzionamento dell'architettura pubblicate in Gazzetta Ufficiale.
    - title: Aggiornamento contenuti FSE 2.0 previsti nei primi 12 mesi
      url: https://www.gazzettaufficiale.it/eli/id/2022/07/11/22A03960/sg
      icon: file
      desc: Decreto contenuti pubblicato in Gazzetta Ufficiale.
    - title: Specifiche di integrazione servizi Gateway FSE 2.0
      url: https://github.com/ministero-salute/it-fse-support/tree/main/doc/integrazione-gateway
      icon: file
      desc: Specifiche di integrazione servizi Gateway FSE 2.0
    - title: Modello middleware regionale
      url: https://github.com/ministero-salute/it-fse-support/tree/main/doc/middleware-regionale
      icon: github
      desc: Definizione dei principi per la conformità dei middleware regionali con FSE 2.0.
    - title: Specifiche HL7 CDA2
      icon: link
      url: http://www.hl7italia.it/hl7italia_D7/node/2359
      desc: Link al sito Hl7 Italia con riferimento allo standard documentale.
    - title: Specifiche tecniche AgID
      icon: link
      url: https://www.fascicolosanitario.gov.it/it/linee-guida-manuali-documenti-tecnici
      desc: Link al sito AgID, riferimento specifiche tecniche.
  - FAQ & Utility:
    - title: Strumenti utili per integrazione Gateway
      icon: github
      url: https://github.com/ministero-salute/it-fse-gtw-tools
      desc: Utilities per generazione JWT e iniezione CDA nel PDF.
    - title: Repository GitHub con materiale di supporto
      icon: github
      url: https://github.com/ministero-salute/it-fse-support
      desc: Supporto integrazione Gateway.
    - title: Schematron e xsd
      icon: github
      url: https://github.com/ministero-salute/it-fse-support/tree/main/validazione
      desc: Schematron e xsd utilizzabili per la validazione dei documenti CDA2.
    - title: OpenAPI per il servizio di validazione CDA2
      icon: github
      url: https://github.com/ministero-salute/it-fse-support/tree/main/openapi/gateway
      desc: OpenAPI del Gateway servizio di validazione CDA2.
    - title: FAQ
      icon: github
      url: https://github.com/ministero-salute/it-fse-support/tree/main/doc/faq
      desc: Domande frequenti.
  - Accreditamento:
    - title: Modulo di richiesta accreditamento
      icon: link
      url: https://ec.europa.eu/eusurvey/runner/FSE-raccolta-id-applicativo
      desc: Modulo di richiesta accreditamento
    - title: Documento processo di accreditamento
      icon: github
      url: https://github.com/ministero-salute/it-fse-support/tree/main/doc/accreditamento
      desc: Documento descrittivo del processo di accreditamento
    - title: Piano dei test
      icon: github
      url: https://github.com/ministero-salute/it-fse-accreditamento/tree/main/Test%20Case
      desc: Lista dei test da eseguire per l'accreditamento
    - title: Processo di accreditamento
      icon: github
      url: https://github.com/ministero-salute/it-fse-accreditamento
      desc: Repository con documentazione per l'accreditamento
---

## Intro

Il Fascicolo Sanitario Elettronico (FSE) è lo strumento attraverso il quale il cittadino può raccogliere e consultare tutta la propria storia sanitaria, condividendola in maniera sicura ed efficiente con gli operatori sanitari.

#### Obiettivi
Il Piano Nazionale di Ripresa e Resilienza (PNRR), Missione 6 Componente 2, promuove il potenziamento del Fascicolo Sanitario Elettronico (FSE) nella sua versione 2.0 al fine di garantirne la **diffusione, l’omogeneità e l’accessibilità su tutto il territorio nazionale** da parte degli assistiti e operatori sanitari.

Secondo le Linee guida di attuazione il FSE dovrà diventare:
- il punto di accesso per tutti i cittadini ai servizi del SSN, indipendentemente dalla regione di appartenenza;
- un ecosistema di servizi basati sui dati e documenti per i professionisti sanitari per la diagnosi e cura dei propri assistiti consentendo una assistenza sempre più personalizzata;
- uno strumento di prevenzione per le strutture ed istituzioni sanitarie.


Affinché ciò avvenga è necessario che l’infrastruttura tecnologica evolva per:
- rendere FSE omogeneo sul territorio nazionale per dati contenuti, servizi offerti, semplicità di utilizzo/interfaccia e portabilità;
- assicurare che i documenti che alimentano il FSE siano effettivamente prodotti secondo gli standard nazionali;
- rendere più efficace l’interoperabilità tra fascicoli regionali; 
- realizzare una effettiva gestione del dato da affiancare a quella del documento;
- garantire che i dati del FSE possano valere anche ai fini secondari (ricerca e governo).

#### Architettura
Il FSE 2.0 è una infrastruttura distribuita che comprende elementi regionali e centrali che interoperano tra loro e con altri sistemi secondo modelli di interoperabilità standard [(ModI definito da AgID)](https://docs.italia.it/italia/piano-triennale-ict/lg-modellointeroperabilita-docs/it/bozza/doc/01_Pattern%20interazione/01_introduzione.html).

![](/assets/images/fse/FSE2.png)

Per consentire una gestione più efficace del dato vengono introdotti due nuovi elementi infrastrutturali:
**il Gateway**, che ha il compito di verificare la coerenza nell’applicazione degli standard, sia per dati che per documenti, 
**l’Ecosistema Dati Sanitari (EDS)** che raccoglie, gestisce e rende fruibile il dato mediante servizi REST.  L’EDS, mediante servizi di sottoscrizione e sincronizzazione può alimentare repository regionali con i dati di pertinenza delle regioni nelle modalità indicate dalla norma. L’EDS infine realizza le funzionalità di monitoraggio di alimentazione e di utilizzo del sistema FSE da parte del cittadino e degli operatori sanitari.

#### Standard per dati e documenti
Le Linee guida di attuazione del Fascicolo Sanitario elettronico prevedono che nel FSE 2.0 confluiscano:
dati in formato HL7 FHIR, direttamente acquisiti dai sistemi produttori delle strutture e archiviati nel Data Repository Centrale (e opzionalmente presso data repository locali)
documenti, in formato HL7 CDA2 iniettati in PDF firmati, prodotti a valle della validazione dai sistemi produttori e archiviati nei repository documentali delle strutture sanitarie stesse (dislocati a livello regionale o aziendale).
Stabiliscono inoltre l’elenco dei documenti dei primi 12 mesi, per i quali sono state aggiornate le guide implementative CDA2 e reperibili presso il [sito ufficiale di HL7 Italia](http://www.hl7italia.it/hl7italia_D7/node/2359).

 Il documento [Piattaforma di telemedicina ed Ecosistema FSE](https://github.com/ministero-salute/it-fse-support/tree/main/doc/telemedicina) fornisce maggiori dettagli su come il Gateway FSE e l’Ecosistema Dati Sanitari interoperano con le piattaforme di Telemedicina.


## Codice della piattaforma

Il codice sorgente del Gateway e dell’EDS (Ecosistema Dati Sanitari) verrà rilasciato con licenza open source raggiunta una prima release stabile. Il codice sarà pubblicato dal Ministero della Salute non appena disponibile.

## Aiutaci a migliorare

Segnalaci le proposte di miglioramento e/o le eventuali anomalie che hai riscontrato nell’utilizzo della piattaforma attraverso [il sistema di issue su GitHub](https://github.com/ministero-salute/it-fse-support/issues) o il [canale slack #fse](https://developersitalia.slack.com/archives/C03RDT88FSM) su Developers Italia.

## Prima fase di sperimentazione

È prevista una prima fase di sperimentazione che coinvolge un numero progressivo di regioni che possono candidarsi in raccordo con il Gruppo di coordinamento del tavolo FSE. Le regioni inviano 2 CSR, una per il certificato di autenticazione e una per il certificato di firma, alla casella di progetto [fse_support@sogei.it](mailto:fse_support@sogei.it), verranno emessi da Sogei i certificati di autenticazione e firma che consentiranno  l'accesso ai servizi della piattaforma di pre produzione che progressivamente verranno realizzati.

## Fase di accreditamento

Per avviare l'integrazione in produzione con il Gateway FSE 2.0, è necessario completare la procedura di accreditamento.


Il processo complessivo di adeguamento e messa in produzione dell’applicativo è composto dalle seguenti fasi:
* **fase 1**: accreditamento dell’applicativo software:  
  * viene eseguito presso gli ambienti di test del fornitore al quale vengono rilasciati i certificati di test per accedere al gateway di pre-produzione; tali certificati vengono usati per l’accreditamento di tutti gli applicativi software del medesimo fornitore oggetto di accreditamento;
  * ha l’obiettivo di verificare la conformità con le specifiche nazionali;
* **fase 2**:  verifica tecnica dell'impianto in azienda: 
  * viene eseguito, a discrezione della Regione/Azienda, presso gli ambienti di test dell’azienda/regione;
  * ha come obiettivo quello di verificare la conformità con le specifiche nazionali, regionali e di integrazione; 
* **fase 3**:  deployment e monitoraggio in produzione:  
  * viene eseguito in ambiente di produzione presso regioni e/o aziende (grace period);
  * ha come obiettivo la verifica, mediante monitoraggio puntuale, della correttezza del rollout fino a quando l’impianto non raggiunge la percentuale di fault concordata.

Per la **fase 1** una volta completati i test autonomi sul software è necessario compilare il "[modulo di richiesta accreditamento](https://ec.europa.eu/eusurvey/runner/FSE-raccolta-id-applicativo)" fornendo le informazioni richieste.
Eseguito il "[piano di test](https://github.com/ministero-salute/it-fse-accreditamento/tree/main/Test%20Case)" di accreditamento si invieranno i risultati come indicato nel repository "[it-fse-accreditamento](https://github.com/ministero-salute/it-fse-accreditamento)".

## Canali

<a class="btn btn-primary" href="https://github.com/ministero-salute/it-fse-support/issues" target="_blank"><i class="it-horn" />Richiesta di supporto tramite GitHub</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/archives/C03RDT88FSM" target="_blank"><i class="it-comment" />Canale Slack (#fse)</a>
<a class="btn btn-outline-primary" href="https://slack.developers.italia.it/" target="_blank">Registrati su Slack</a>
