---
title: Docs Italia
subtitle: Documenti pubblici, digitali
logo: /assets/images/docs-italia-logo.png
payoff: Documenti pubblici, digitali
description: "Docs Italia è lo strumento per la pubblicazione di documenti tecnici e amministrativi, offrendo ai cittadini la possibilità di leggere e commentare in modo semplice ed accessibile."
lang: it
order: 1
highlight: false
layout: project
github_team: docs
maintainers:
  - francesco
  - lorenzo
    
redirect_from:
  - /it/docs-italia
---

## Intro

[Docs Italia](https://docs.italia.it/) è il luogo per la divulgazione e la consultazione dei documenti pubblici, che offre alle Pubbliche Amministrazioni una piattaforma sicura e completa per la pubblicazione di documenti, e fornisce ai cittadini strumenti di ricerca e consultazione accessibili da ogni tipo di dispositivo.

Una prima versione del progetto Docs Italia è stata completata nel corso del 2018, e molte nuove funzionalità sono previste nel corso dei prossimi mesi. La piattaforma è basata su un progetto open-source molto conosciuto, [ReadTheDocs](https://readthedocs.org/), che ha fornito le fondamenta per una gestione sicura delle identità delle amministrazioni e dei redattori dei documenti gestiti dalla piattaforma.

Docs Italia semplifica drasticamente il processo di pubblicazione. I documenti utilizzano un version control system come sorgente dei dati, favorendo una scrittura collaborativa e aprendo possibilità di analisi, visualizzazione e confronto tra versioni da parte della comunità.

Lo strumento di generazione dei documenti su Docs Italia è [Sphinx](http://www.sphinx-doc.org/en/master/#), fornendo supporto a vari linguaggi tra cui _RestructuredText_ e _MarkDown_. Stiamo lavorando per potenziare tutti gli aspetti della piattaforma sulla base delle esigenze emerse in questo primo anno di sperimentazione: il convertitore di documenti, il flusso di pubblicazione e le funzioni di ricerca e di navigazione. Utilizziamo [Pandoc](https://pandoc.org/) per la conversione dei documenti dai formati più diffusi, quali `.docx` o `.odt`.

## Codice sorgente

Il codice sorgente di Docs Italia è diviso in alcuni repository a seconda del dominio su cui insistono:

### Piattaforma

- La [Piattaforma Docs Italia](https://github.com/italia/docs.italia.it), che come si può notare è un fork del progetto ReadTheDocs.
- Gli [script Ansible](https://github.com/italia/docs-italia-deploy-scripts) per il deploy della piattaforma.

### Convertitore 

- L'app Django con il [convertitore web](https://github.com/italia/docs-italia-convertitore-web).
- Dei [filtri per Pandoc](https://github.com/italia/docs-italia-pandoc-filters).
- Dei [comandi per la conversione dei documenti](https://github.com/italia/docs-italia-comandi-conversione) con Pandoc (in Haskell).

### Documento

- Uno [starter kit](https://github.com/italia/docs-italia-starter-kit) contenente file necessari per la pubblicazione di nuovi documenti.
- Il [tema Sphinx](https://github.com/italia/docs-italia-theme) che è applicato di default ai documenti.
- Dei [template di documento in diversi formati](https://github.com/italia/docs-italia-template-conversione).

Ogni documento visibile su [Docs Italia](https://docs.italia.it/) corrisponde inoltre ad un repository su GitHub, accessibile attraverso un apposito link nella testata del documento stesso.

## Documentazione

La documentazione di Docs Italia è ovviamente pubblicata su Docs Italia stesso. ;-)

Un documento "speciale" è infatti la [Guida a Docs Italia](https://docs.italia.it/italia/docs-italia/docs-italia-guide/), che spiega come creare un'utenza da redattore e pubblicare un documento. Di seguito il repository del documento stesso:

- [Repository della "Guida a Docs Italia"](https://github.com/italia/docs-italia-guide/)

Informazioni di carattere più tecnico possono essere trovate ai file README dei singoli repository, e nella [Wiki del repository principale](https://github.com/italia/docs.italia.it/wiki). 

