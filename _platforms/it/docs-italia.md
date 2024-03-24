---
title: Docs Italia
subtitle: Documenti pubblici, digitali
logo: /assets/images/logo-docs-italia.png
external_website: https://docs.italia.it
payoff: Documenti pubblici, digitali
description: "Docs Italia è lo strumento per la pubblicazione di documenti tecnici e amministrativi, che offre ai cittadini la possibilità di leggere e commentare in modo semplice ed accessibile."
lang: it
ref:
  en: /en/docs-italia
highlight: false
layout: platform
github_team: docs-italia
---

## Intro

[Docs Italia](https://docs.italia.it/){:target="_blank"} è il luogo per la divulgazione e la consultazione dei documenti pubblici, che offre alle Pubbliche Amministrazioni una piattaforma sicura e completa per la pubblicazione di documenti, e fornisce ai cittadini strumenti di ricerca e consultazione accessibili da ogni tipo di dispositivo.

Docs Italia semplifica drasticamente il processo di pubblicazione. I documenti utilizzano un version control system come sorgente dei dati, favorendo una scrittura collaborativa e aprendo possibilità di analisi, visualizzazione e confronto tra versioni da parte della comunità.

Lo strumento di generazione dei documenti su Docs Italia è [Sphinx](https://www.sphinx-doc.org/en/master/#){:target="_blank"}, fornendo supporto a vari linguaggi tra cui _RestructuredText_ e _MarkDown_. Stiamo lavorando per potenziare tutti gli aspetti della piattaforma sulla base delle esigenze emerse in questo primo anno di sperimentazione: il convertitore di documenti, il flusso di pubblicazione e le funzioni di ricerca e di navigazione. Utilizziamo [Pandoc](https://pandoc.org/){:target="_blank"} per la conversione dei documenti dai formati più diffusi, quali `.docx` o `.odt`.

Una prima versione del progetto Docs Italia è stata completata nel corso del 2018, e molte nuove funzionalità sono previste nel corso dei prossimi mesi. La piattaforma è basata su un progetto open-source molto conosciuto, [ReadTheDocs](https://readthedocs.org/){:target="_blank"}, che ha fornito le fondamenta per una gestione sicura delle identità delle amministrazioni e dei redattori dei documenti gestiti dalla piattaforma.

**Roadmap**

Queste sono le principali attività che stiamo ipotizzando per il prossimo futuro:

* Potenziamento del motore di ricerca basato su **ElasticSearch** con filtri per popolarità, publisher, tag, progetti.
* Completamento e documentazione delle **API** per ottenere dati e dettagli dei documenti.
* Gestione di vocabolari controllati per **tagging** dei contenuti e miglioramento della navigazione tra documenti correlati.
* Miglioramento dell'**interfaccia frontend** del sito, coerentemente con i [layout previsti](https://invis.io/AQMX2Y2GTH2){:target="_blank"}.
* Semplificazione del processo di onboarding e del backoffice di amministrazione/pubblicazione.
* Consolidamento dell'**infrastruttura** e della gestione dei log, miglioramento delle strategie per il ripristino in caso di incidenti.
* Gestione degli Enti in modalità "whitelabel": vogliamo dare la possibilità ad ogni Ente presente su Docs Italia di personalizzare la propria pagina ed usare **domini esterni con URL personalizzati** e fornire la possibilità di **includere contenuti** di Docs Italia sul proprio sito.

Se hai delle idee per il progetto, o pensi di poter dare una mano su tematiche descritte nella roadmap, contattaci nel forum o su Slack. Chiunque può contribuire!

<a class="btn btn-primary" href="https://forum.italia.it/" target="_blank"><i class="it-horn" /> Entra nel forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C9T4ELD4G" target="_blank"><i class="it-comment" /> Dialoga su Slack (#docs-italia)</a>
<a class="btn btn-white btn-outline-primary" href="https://slack.developers.italia.it/" target="_blank"><i class="it-comment" /> Registrati su Slack</a>

## Codice sorgente

Il codice sorgente di Docs Italia è diviso in alcuni repository a seconda del dominio su cui insistono:

### Piattaforma

- La [Piattaforma Docs Italia](https://github.com/italia/docs.italia.it){:target="_blank"}, che come si può notare è un fork del progetto ReadTheDocs, scritto in Python con Django.
- Gli [script Ansible](https://github.com/italia/docs-italia-deploy-scripts){:target="_blank"} per il deploy della piattaforma.

### Convertitore

- L'app Django con il [convertitore web](https://github.com/italia/docs-italia-convertitore-web){:target="_blank"}.
- Dei [filtri per Pandoc](https://github.com/italia/docs-italia-pandoc-filters){:target="_blank"}.
- Dei [comandi per la conversione dei documenti](https://github.com/italia/docs-italia-comandi-conversione){:target="_blank"} con Pandoc (in Haskell).

### Documento

- Uno [starter kit](https://github.com/italia/docs-italia-starter-kit){:target="_blank"} contenente file necessari per la pubblicazione di nuovi documenti.
- Il [tema Sphinx](https://github.com/italia/docs-italia-theme){:target="_blank"} che è applicato di default ai documenti.
- Dei [template di documento in diversi formati](https://github.com/italia/docs-italia-template-conversione){:target="_blank"}.

Ogni documento visibile su [Docs Italia](https://docs.italia.it/){:target="_blank"} corrisponde inoltre ad un repository su GitHub, accessibile attraverso un apposito link nella testata del documento stesso.

## Documentazione

La documentazione di Docs Italia è ovviamente pubblicata su Docs Italia stesso! ;-)

Un documento "speciale" è infatti la **Guida a Docs Italia**, che spiega come sia possibile per qualsiasi Ente pubblico creare un'utenza da redattore e pubblicare un documento. Se vuoi aggiungere un documento su Docs Italia, puoi sicuramente partire da qui:

- [Guida a Docs Italia](https://docs.italia.it/italia/docs-italia/docs-italia-guide/){:target="_blank"}

All'interno del documento potrai trovare i riferimenti con cui entrare in contatto con i nostri tech writer, che potranno supportarti nella fase di iscrizione del tuo Ente e durante la scrittura o la conversione dei documenti.

Informazioni di carattere più tecnico possono essere trovate ai file README dei singoli repository, e nella [Wiki del repository principale](https://github.com/italia/docs.italia.it/wiki){:target="_blank"}.
