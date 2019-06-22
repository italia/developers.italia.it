---
title: CIE
subtitle: Carta d'Identità Elettronica
logo: /assets/images/logo-cie@2x.png
payoff: Carta d'Identità Elettronica
description: >
  La nuova CIE è molto più che un documento d'identità: grazie al microprocessore RF può essere letta da dispositivi NFC (es. smartphone) e usata per accedere ai varchi o per creare connessioni sicure (TLS) verso i servizi in rete.
lang: it
order: 1
highlight: true
comingsoon: false
layout: platform
github_team: cie
abilitante: true
owners:
    - name: Ministero dell'Interno
      url: http://www.interno.gov.it/
managers:
    - name: Istituto Poligrafico e Zecca dello Stato
      url: https://www.ipzs.it/
resources:
  - Documentazione:
    - title: Caratteristiche tecniche della carta
      icon: link
      url: http://www.cartaidentita.interno.gov.it/caratteristiche-del-documento/
    - title: Specifiche del microprocessore
      icon: file
      url: http://www.cartaidentita.interno.gov.it/wp-content/uploads/2016/07/cie_3.0_-_specifiche_chip.pdf
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
  - SDK:
    - title: CIE/CNS Apache Docker
      icon: settings
      url: https://github.com/italia/cie-cns-apache-docker
      desc: Immagine Docker per esporre un web server con autenticazione basata su CIE e CNS
    - title: IDEA (app Android)
      icon: telephone
      url: https://github.com/italia/cie-ideaapp
      desc: Sorgenti della app IDEA per Android che consente di leggere e visualizzare i dati della carta con uno smartphone
    - title: SDK per .NET (MRTD)
      icon: github
      url: https://github.com/italia/cie-mrtd-dotnet-sdk
      desc: Libreria .NET per leggere le informazioni MRTD/ICAO
    - title: Applicazione desktop di esempio (MRTD)
      icon: github
      url: https://github.com/italia/cie-mrtd-example-app
      desc: Applicazione desktop di esempio per leggere i dati MRTD/ICAO usando la libreria .NET
    - title: Applicazione web di esempio (MRTD)
      icon: github
      url: https://github.com/italia/cie-mrtd-example-web
      desc: Applicazione web di esempio per leggere i dati MRTD/ICAO usando la libreria .NET
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
    - title: SDK per Objective-C (NIS)
      icon: github
      url: https://github.com/italia/cie-nis-objc-sdk
      desc: Libreria Objective-C per leggere il Numero Identificativo Servizi
---

## Intro

La [Carta d'Identità Elettronica](http://www.cartaidentita.interno.gov.it)
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

<a class="btn btn-primary" href="https://forum.italia.it/c/cie"><i class="it-horn" /> Entra nel forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C75U26411"><i class="it-comment" /> Dialoga su Slack (#cie)</a> <a href="https://slack.developers.italia.it/"><small>(registrati su Slack)</small></a>

## Dati presenti sulla carta

La CIE contiene le seguenti informazioni, che sono accessibili secondo diverse modalità e livelli di protezione:

- **Dati accessibili liberamente:** Numero Unico Servizi (NIS)
- **Dati accessibili con scansione MRZ o digitazione CAN:** nome, cognome, data e luogo di nascita, sesso, cittadinanza, validità per l’espatrio, fotografia, genitori (nel caso di minorenni), indirizzo di residenza (al momento del rilascio), codice fiscale, numero di serie
- **Dati accessibili con PIN:** certificato client
- **Dati accessibili solo a forze dell’ordine:** impronte digitali

Per maggiori dettagli consultare [questa tabella](https://docs.google.com/spreadsheets/d/1mYQsAFIJ_TKLW3raaq0tZWpG8nr9dU4SpoJzH2SAHxM/edit?usp=sharing). Le risorse open source (SDK, esempi) presenti in questa pagina consentono di integrare la lettura di queste informazioni nelle proprie applicazioni.

![](/assets/images/cie/cie_detail.png)
