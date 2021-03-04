---
layout: post
title:  Obiettivo: miglioramento continuo
subtitle: Ottimizzato il motore di ricerca del sito di Developers Italia e del Catalogo del software della PA
date: 2021-03-04 10:00:00 +0100
tags: community sviluppo developers opensource software react
categories: news
author: Emilio Spatola
image: /assets/icons/logo-it.png
locale: it
ref:
  en:
redirect_from:
   -
---

Sono stati tanti i feedback ricevuti in queste settimane relativamente al
[Catalogo](https://developers.italia.it/it/software) del software e in ottica
di miglioramento continuo abbiamo iniziato ad affrontare l’ottimizzazione della
componente “motore di ricerca” interno al sito di Developers Italia.
L’obiettivo era quello di creare un'esperienza utente più semplice, rendendo
i contenuti principali raggiungibili in pochi clic.
La nuova componente permette di ricercare tra i numerosi contenuti del sito
suddivisi nelle seguenti categorie: [software
a riuso](https://developers.italia.it/it/search?type=software_reuse), [software
open source])(https://developers.italia.it/it/search?type=software_open),
[API](https://developers.italia.it/it/api) e [amministrazioni
cedenti](https://developers.italia.it/it/pa). Operativamente è stato eseguito
un refactoring del codice sorgente introducendo React.js in sostituzione ad un
insieme di librerie di più difficile gestione e manutenzione. A ciò si aggiunge
la scelta di Jest come testing framework che permetterà di ottenere un ambiente
di produzione più solido e resiliente. Nella fattispecie, l’introduzione di
React.js con Jest ci garantirà il miglioramento del grado di manutenibilità
dell’intera base di codice, velocizzando il processo di individuazione
e correzione di eventuali bug.
Contemporaneamente abbiamo colto l’occasione per intervenire sulla user
interface, migliorando la fruibilità dell’intero Catalogo anche da dispositivi
mobile.

Nel ringraziarvi per tutti i preziosi suggerimenti che abbiamo ricevuto in
questi mesi vi invitiamo a verificare il corretto funzionamento del motore
e aspettiamo ulteriori consigli sui nostri canali community
([Slack](https://app.slack.com/client/T6C27AXE0/CJRSS5S9W)
e [Forum](https://forum.italia.it/c/software-open-source-per-la-pa/catalogo-foss/66)).

Il Team Developers Italia
