---
title: CIE
subtitle: Electronic Identity Card
logo: /assets/images/logo-cie@2x.png
payoff: Electronic Identity Card
description: >
  The new electronic identity card is more than a simple piece of plastic: thanks to it RF microprocessor it can be read by NFC devices (such as a smartphone) and used for granting access to facilities or for creating secure connections (TLS) to network services.
lang: en
order: 1
highlight: true
comingsoon: false
layout: platform
github_team: cie
abilitante: true
owners:
    - name: Ministry of the Interior
      url: http://www.interno.gov.it/
managers:
    - name: Istituto Poligrafico e Zecca dello Stato
      url: https://www.ipzs.it/
resources:
  - Documentazione:
    - title: Technical information about the card
      icon: link
      url: http://www.cartaidentita.interno.gov.it/caratteristiche-del-documento/
    - title: Microprocessor specs
      icon: file
      url: http://www.cartaidentita.interno.gov.it/wp-content/uploads/2016/07/cie_3.0_-_specifiche_chip.pdf
    - title: User manual for the Windows middleware
      icon: file
      url: https://docs.italia.it/italia/cie/cie-middleware-windows-docs/
  - Middleware:
    - title: Middleware for Windows
      icon: github
      url: https://github.com/italia/cie-middleware
      desc: The middleware package allows to use the card for accessing web services protected by client authentication.
    - title: Middleware for macOS
      icon: github
      url: https://github.com/italia/cie-middleware-macos
      desc: The middleware package allows to use the card for accessing web services protected by client authentication.
    - title: Middleware for Linux
      icon: github
      url: https://github.com/italia/cie-middleware-linux
      desc: The middleware package allows to use the card for accessing web services protected by client authentication.
  - SDK:
    - title: CIE/CNS Apache Docker
      icon: settings
      url: https://github.com/italia/cie-cns-apache-docker
      desc: Docker image for exposing a web server with CIE or CNS based authentication
    - title: IDEA (app Android)
      icon: telephone
      url: https://github.com/italia/cie-ideaapp
      desc: Source code of the IDEA app for Android which allows to read and view card contents with a smartphone
    - title: SDK for Python (MRTD)
      icon: github
      url: https://github.com/italia/cie-mrtd-dotnet-sdk
      desc: .NET library for reading the MRTD/ICAO information
    - title: Example desktop application (MRTD)
      icon: github
      url: https://github.com/italia/cie-mrtd-example-app
      desc: Example desktop application for reading MRTD/ICAO data using the .NET library
    - title: Example web application (MRTD)
      icon: github
      url: https://github.com/italia/cie-mrtd-example-web
      desc: Example web application for reading MRTD/ICAO data using the .NET library
    - title: SDK for Arduino (NIS)
      icon: github
      url: https://github.com/italia/cie-PN532
      desc: SPI/I2C library for reading the unique card number (NIS) with Arduino
    - title: SDK for Python (NIS)
      icon: github
      url: https://github.com/italia/cie-nis-python-sdk
      desc: Python library for reading the unique card number (NIS)
    - title: SDK for C++ (NIS)
      icon: github
      url: https://github.com/italia/cie-nis-cpp-sdk
      desc: C++ library for reading the unique card number (NIS)
    - title: SDK for Java (NIS)
      icon: github
      url: https://github.com/italia/cie-nis-java-sdk
      desc: Java library for reading the unique card number (NIS)
    - title: SDK for Objective-C (NIS)
      icon: github
      url: https://github.com/italia/cie-nis-objc-sdk
      desc: Objective-C library for reading the unique card number (NIS)
---

## Intro

The [Electronic Identity Card](http://www.cartaidentita.interno.gov.it)
(CIE) version 3.0 is already **distributed in more than 90% of the Italian territory** to citizens who ask for a new identity card or renew an expired/lost one.

The CIE is not only an identity card, but it's also a technology that enables new digital services for citizens, that can be used also via smartphones and tablets, thanks to the **NFC microchip**. Every Italian citizen, in a few years, will carry a unique and secure NFC token in their pockets. This will enable several applications:

 * Low-security electronic passages, like entrance to gyms, where the card can be simply brought close to a reader.

 * High-security elecronic passages, like entrance to sport venues, where many people need to be identified securely and enter quickly.

 * Public transportation, also coupled with a digital wallet for paying the ticket.

 * Presence check at workplace.

 * Hotel checkin, without the need for making copies of the document.

This will be made possible thanks to the identification features embedded in the microship, whose specifics are open and downloadable from this page.

<a class="btn btn-primary" href="https://forum.italia.it/c/cie"><i class="it-horn" /> Enter the forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C75U26411"><i class="it-comment" /> Chat on Slack (#cie)</a> <a href="https://slack.developers.italia.it/"><small>(sign up)</small></a>

## Information provided by the card

The CIE contains the following information, accessible in different ways and according to different levels of protection:

- **Freely accessible data:** unique card identifier (NIS)
- **Data accessible by scanning the MRZ code o by typing the CAN number (both printed on the card):** name, family name, date and place of birth, gender, nationality, validity for traveling abroad, picture, parents (if the card was emitted when the owner was not of legal age), address (when the card was emitted), tax code, ID number
- **Data accessible by typing the PIN (provided separately):** TLS client certificate
- **Data accessible only by law enforcement:** fingerprints

For more details check [this table](https://docs.google.com/spreadsheets/d/1mYQsAFIJ_TKLW3raaq0tZWpG8nr9dU4SpoJzH2SAHxM/edit?usp=sharing). Open source resources (SDK, examples) listed in this page allow to read the above data in custom applications.

![](/assets/images/cie/cie_detail.png)
