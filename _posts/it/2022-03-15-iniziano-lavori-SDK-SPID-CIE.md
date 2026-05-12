---
layout: post
title: "Iniziano i lavori per gli SDK OpenID Connect unificati di SPID e CIE "
subtitle: "Un importante avanzamento tecnologico che semplificherà la vita degli sviluppatori"
date: 2022-03-15 10:00:00 +0200
tags: developers skd spid cie
categories: news
author: Giuseppe de Marco
nickname: peppelinux
image: /assets/icons/logo-it.png
ref:
  en: /en/news/2022/03/15/work-is-starting-SDK-SPID-CIE
locale: it
---

Iniziano oggi i lavori su GitHub Italia per la realizzazione degli SDK (Software Development Kit) OpenID Connect dedicati al Sistema Pubblico di identità digitale (SPID) e alla Carta d'Identità Elettronica (CIE) per ben 5 linguaggi di programmazione!

### Di cosa si tratta?

Un avanzamento tecnologico molto importante che ci consente di avvicinare l'esperienza utente di SPID e CIE a quella dei sistemi Single Sign-On privati più popolari e semplificare l'integrazione da parte di sviluppatori e DevOps. Il passaggio verso OpenID Connect ci consente di creare una federazione di identità all’avanguardia e di partecipare a un ecosistema moderno e ricco di strumenti utili.

Ma la novità più importante è che CIE e SPID sono sempre più vicini: i due profili infatti vengono unificati in una unica implementazione, semplificando enormemente la vita degli sviluppatori.

### I dettagli

Gli SDK SPID/CIE OIDC sono pubblicati su GitHub Italia e resi pubblici, con licenza open source, sotto forma di repository e applicazioni installabili. Si tratta di applicazioni di tipo OpenID Connect Relying-Party, realizzate in stretta osservanza delle [Linee Guida OpenID](https://www.agid.gov.it/sites/default/files/repository_files/linee_guida_openid_connect_in_spid.pdf) Connect in SPID. Ognuna di queste verrà sviluppata per uno dei seguenti linguaggi di programmazione:

- PHP
- Python (Django)
- Java (Spring)
- ASPnet Core
- Javascript (node.js)

Ogni repository conterrà:

- l’applicazione installabile e riutilizzabile;
- una documentazione chiara, in lingua inglese, anche sotto forma di README, su come usare l’applicazione, eseguire le unità di test e contribuire al progetto;
- un progetto di esempio per scopi dimostrativi;
- una immagine docker che utilizza il progetto di esempio;
- una pipeline automatica di Continuous Integration (CI) con le unità di test;
- una pipeline automatica di CI con il tool ufficiale di Quality Assessment utilizzato nelle procedure di collaudo SPID e CIE;
- una copertura dei test sul codice non inferiore al 90%.

Ci aspettiamo che gli SDK siano ultimati per metà aprile.

Vuoi contribuire attivamente al lavoro in corso e aiutarci a testarlo? Vuoi proporre un nuovo SDK per il tuo linguaggio di programmazione preferito? Raggiungici sul canale #spid-openid di [Slack Developers](https://slack.developers.italia.it/) e apri issues e pull requests su:

- **[https://github.com/italia/spid-cie-oidc-php](https://github.com/italia/spid-cie-oidc-php)**
- **[https://github.com/italia/spid-cie-oidc-aspnetcore](https://github.com/italia/spid-cie-oidc-aspnetcore)**
- **[https://github.com/italia/spid-cie-oidc-nodejs](https://github.com/italia/spid-cie-oidc-nodejs)**
- **[https://github.com/italia/spid-cie-oidc-java](https://github.com/italia/spid-cie-oidc-java)**
- **[https://github.com/italia/spid-cie-oidc-django](https://github.com/italia/spid-cie-oidc-django)**


Ti aspettiamo!
