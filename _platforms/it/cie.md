---
title: CIE
subtitle: Carta d'Identità Elettronica
logo: /assets/images/logo-cie@2x.png
external_website: https://www.cartaidentita.interno.gov.it
payoff: Carta d'Identità Elettronica
description: >
  La nuova CIE è molto più che un documento d'identità: grazie al microprocessore RF può essere letta da dispositivi NFC (es. smartphone) e usata per accedere ai varchi o per creare connessioni sicure (TLS) verso i servizi in rete.
lang: it
ref:
  en: /en/cie
order: 1
highlight: true
comingsoon: false
layout: platform
github_team: cie
abilitante: true
owners:
    - name: Ministero dell'Interno
      url: https://www.interno.gov.it/
managers:
    - name: Istituto Poligrafico e Zecca dello Stato
      url: https://www.ipzs.it/
resources:
  - Documentazione:
    - title: Caratteristiche tecniche della carta
      icon: link
      url: https://www.cartaidentita.interno.gov.it/la-carta/caratteristiche-del-documento/
    - title: Specifiche del microprocessore
      icon: file
      url: https://www.cartaidentita.interno.gov.it/downloads/2021/03/cie_3.0_-_specifiche_chip.pdf
    - title: Manuale Tecnico
      icon: link
      url: https://docs.italia.it/italia/cie/cie-manuale-tecnico-docs/
    - title: Manuale utente del middleware per Windows
      icon: file
      url: https://docs.italia.it/italia/cie/cie-middleware-windows-docs/
  - Middleware:
    - title: Middleware per Windows
      icon: github
      url: https://github.com/italia/cie-middleware
      desc: Il middleware consente di usare la carta come strumento di accesso per i servizi web.
    - title: Middleware per macOS
      icon: github
      url: https://github.com/italia/cie-middleware-macos
      desc: Il middleware consente di usare la carta come strumento di accesso per i servizi web.
    - title: Middleware per Linux
      icon: github
      url: https://github.com/italia/cie-middleware-linux
      desc: Il middleware consente di usare la carta come strumento di accesso per i servizi web.
  - Risorse Grafiche:
    - title: cie-graphics
      icon: github
      url: https://github.com/italia/cie-graphics
      desc: Icone, loghi e grafiche CIE
  - SDK:
    - title: SDK per Android - Entra con CIE
      icon: github
      url: https://github.com/italia/cieid-android-sdk
      desc: SDK per Android per l'integrazione del sistema di autenticazione Entra con CIE
    - title: CIE/CNS Apache Docker
      icon: settings
      url: https://github.com/italia/cie-cns-apache-docker
      desc: Immagine Docker per esporre un web server con autenticazione basata su CIE e CNS
    - title: SDK per .NET (MRTD)
      icon: github
      url: https://github.com/italia/cie-mrtd-dotnet-sdk
      desc: Libreria .NET per leggere le informazioni MRTD/ICAO
    - title: Applicazione desktop di esempio (MRTD)
      icon: github
      url: https://github.com/italia/cie-mrtd-example-app
      desc: Applicazione desktop di esempio per leggere i dati MRTD/ICAO usando la libreria .NET
    - title: SDK per Arduino (NIS)
      icon: github
      url: https://github.com/italia/cie-PN532
      desc: Libreria SPI/I2C per leggere il Numero Identificativo Servizi con Arduino
    - title: SDK per Python (NIS)
      icon: github
      url: https://github.com/italia/cie-nis-python-sdk
      desc: Libreria Python per leggere il Numero Identificativo Servizi
    - title: SDK per C++ (NIS)
      icon: github
      url: https://github.com/italia/cie-nis-cpp-sdk
      desc: Libreria C++ per leggere il Numero Identificativo Servizi
    - title: SDK per Java (NIS)
      icon: github
      url: https://github.com/italia/cie-nis-java-sdk
      desc: Libreria Java per leggere il Numero Identificativo Servizi
    - title: SDK per Express.js
      icon: github
      url: https://github.com/italia/spid-express
      desc: Libreria nativa per l'integrazione di CIE in applicazioni Node/Passport (Javascript)
    - title: SDK per ASPnetCore
      icon: github
      url: https://github.com/italia/cie-aspnetcore
      desc: AspNetCore Remote Authenticator for CIE3.0
    - title: Libreria di .NET Core per leggere e validare il codice NIS
      icon: github
      url: https://github.com/italia/cie-nis-dotnetcore-sdk
      desc: Libreria per leggere e validare il codice NIS da una CIE mediante .NET Core
    - title: Libreria per smartphone iOS sviluppata in Swift che include le funzionalità di autenticazione di "Entra con CIE"
      icon: github
      url: https://github.com/italia/cieid-ios-sdk
      desc: Utilizzando questo kit gli sviluppatori di applicazioni terze iOS possono integrare nella propria app l'autenticazione mediante la cartà d'identità elettronica (CIE 3.0).
    - title: spid-php Proxy
      icon: github
      url: https://github.com/italia/spid-php
      desc: Proxy SPID/CIE SAML basato su SDK per PHP spid-php
  - SDK OIDC:
    - title: spid-cie-oidc-php Proxy
      icon: github
      url: https://github.com/italia/spid-cie-oidc-php
      desc: Proxy SPID/CIE OIDC basato su SDK per PHP spid-cie-oidc-php
  - Proxy:
    - title: spid-php Proxy
      icon: github
      url: https://github.com/italia/spid-php
      desc: Proxy SPID/CIE SAML basato su SDK per PHP spid-php
    - title: spid-cie-oidc-php Proxy
      icon: github
      url: https://github.com/italia/spid-cie-oidc-php
      desc: Proxy SPID/CIE OIDC basato su SDK per PHP spid-cie-oidc-php
collab:
  description: Abbiamo creato degli strumenti di collaborazione a vostra disposizione, tra cui un issue tracker e un forum dedicato alla discussione delle problematiche di integrazione.
  links:
  - name: forum
    url: "https://forum.italia.it/c/cie"
  - title: "Slack"
    icon: it-slack
    url: https://developersitalia.slack.com/archives/C75U26411
---

## Intro

La [Carta d'Identità Elettronica](https://www.cartaidentita.interno.gov.it){:target="_blank"}
(CIE) versione 3.0 viene già **distribuita in oltre il 90% del territorio italiano** a chiunque chieda o rinnovi la carta d'identità.

La CIE non è solo un documento d’identità, ma una tecnologia utile per la
realizzazione di nuovi servizi offerti ai cittadini, fruibili anche tramite
smartphone e tablet, grazie alla presenza di un **microchip NFC**. Se pensate che
ogni italiano, entro 10 anni, avrà nelle proprie tasche un documento d'identità
che è anche un token NFC unico e sicuro, è facile immaginare numerose applicazioni:

 * Varchi elettronici a basso livello di sicurezza, come per esempio l'accesso alla palestra,
   semplicemente avvicinando la carta ad un lettore.

 * Attraversamento veloce e sicuro di varchi ad alto livello di sicurezza,
   come per esempio l'accesso agli stadi.

 * Accesso al trasporto pubblico, magari associato ad un portafoglio virtuale
   per pagare il biglietto.

 * Conferma della presenza sul luogo di lavoro.

 * Check-in in un hotel, senza bisogno di fare fotocopie.

Tutto ciò verrà reso possibile grazie alle funzionalità di identificazione
e sicurezza contenute nel microprocessore, le cui specifiche sono
aperte e disponibili anche in questa pagina.

## Dati presenti sulla carta

La CIE contiene le seguenti informazioni, che sono accessibili secondo diverse modalità e livelli di protezione:

- **Dati accessibili liberamente:** Numero Unico Servizi (NIS)
- **Dati accessibili con scansione MRZ o digitazione CAN:** nome, cognome, data e luogo di nascita, sesso, cittadinanza, validità per l’espatrio, fotografia, genitori (nel caso di minorenni), indirizzo di residenza (al momento del rilascio), codice fiscale, numero di serie
- **Dati accessibili con PIN:** certificato client
- **Dati accessibili solo a forze dell’ordine:** impronte digitali

Per maggiori dettagli consultare [questa tabella](/assets/files/CIE-SDK-overview.ods){:target="_blank"}. Le risorse open source (SDK, esempi) presenti in questa pagina consentono di integrare la lettura di queste informazioni nelle proprie applicazioni.

![](/assets/images/cie/cie_detail.png)
