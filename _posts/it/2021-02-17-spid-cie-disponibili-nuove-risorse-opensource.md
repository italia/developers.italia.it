---
layout: post
title:  SPID e CIE, disponibili nuove risorse open source
subtitle: La community di Developers Italia a supporto delle PA
date: 2021-02-17 08:00:00 +0100
tags: community sviluppatori developers riuso opensource software
categories: news
author: Giuseppe De Marco
nickname: peppelinux
image: /assets/icons/logo-it.png
locale: it
ref:
  en:
redirect_from:
   -
---

Entro il 28 febbraio 2021 tutte le amministrazioni locali e centrali dovranno integrare [SPID](https://developers.italia.it/it/spid) (Sistema Pubblico di Identità Digitale) e [CIE](https://developers.italia.it/it/cie) (Carta d’Identità Elettronica) come sistemi di autenticazione, uniformando di fatto l’accesso ai servizi pubblici digitali in tutto il Paese.
Una scadenza importante, quella prevista dal Decreto Legge “semplificazione e innovazione digitale”, che ha portato in questi mesi il team e la community di Developers Italia a impegnarsi su più fronti per supportare gli enti, effettuando numerosi rilasci di librerie e software applicativo.

Un esempio significativo è rappresentato dal [middleware](https://github.com/italia/spid-express) che permette una facile integrazione di SPID e CIE all’interno di architetture web basate sullo stack tecnologico **Express**.

Un'altra risorsa pubblicata è [Satosa-Saml2SPID](https://github.com/italia/Satosa-Saml2Spid), un proxy di autenticazione compatibile con il Sistema Pubblico di Identità Digitale italiano. Nella fattispecie questa soluzione consente di abbattere i tempi di accreditamento per tutte le organizzazioni che già sfruttano **SAML2** come protocollo di autenticazione. Satosa-Saml2SPID è un esempio di un software open source sviluppato originariamente all'interno della pubblica amministrazione italiana, l’[Università della Calabria](https://developers.italia.it/it/pa/unical), con una potenziale ricaduta positiva per molti altri enti che stanno effettuando il percorso di trasformazione digitale.

Per gli enti che utilizzano **Entando** è disponibile un [modulo di integrazione con SPID](https://github.com/italia/spid-keycloak-entando).
Di fatto questo si basa su *keycloak* come piattaforma di gestione delle identità e il modulo pubblicato permette di configurarla facilmente per agevolare l’integrazione. Come per *Satosa-Saml2SPID*, anche questa componente può essere usata in modalità standalone.

Altri progetti degni di nota sviluppati da membri della community di Developers Italia e recentemente pubblicati sono [AspNetCore Remote Authenticator for SPID](https://github.com/italia/spid-aspnetcore) e [AspNetCore Remote Authenticator for CIE](https://github.com/italia/cie-aspnetcore) che rappresentano strumenti semplici ed immediati per integrare rispettivamente SPID e CIE in web app sviluppate con **AspNetCore MVC**. In questo caso un ringraziamento speciale del team è rivolto a Daniele Giallonardo per il suo contributo.

Tutte le soluzioni citate sono accomunate dalla loro natura open source che garantisce la possibilità di consultare il codice sorgente e testare in modo indipendente le possibili integrazione per adattarle alle proprie esigenze.

### Il lavoro della community continua

Hai già sviluppato un'integrazione con SPID o CIE oppure ci stai lavorando? Parliamone insieme nei canali di community ([Slack](https://app.slack.com/client/T6C27AXE0/C73R3UQE8) -registrati [qui](https://slack.developers.italia.it)- e [Forum Italia](https://forum.italia.it/c/software-open-source-per-la-pa/49)) per verificare l’eventuale inserimento all’interno dell’organizzazione [github.com/italia](https://github.com/italia). Portando il tuo progetto in questa vetrina entrerai a far parte del gruppo di manutentori di Developers Italia e potrai ricevere feedback e soprattutto contributi da parte di tutta la community. [Scopri come partecipare](https://developers.italia.it/it/come-partecipo)!

Il Team Developers Italia
