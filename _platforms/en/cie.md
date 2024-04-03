---
title: CIE
subtitle: Electronic Identity Card
logo: /assets/images/logo-cie@2x.png
external_website: https://www.cartaidentita.interno.gov.it
payoff: Electronic Identity Card
description: >
  The new electronic identity card is more than a simple piece of plastic: thanks to it RF microprocessor it can be read by NFC devices (such as a smartphone) and used for granting access to facilities or for creating secure connections (TLS) to network services.
lang: en
ref:
  it: /it/cie
order: 1
highlight: true
comingsoon: false
layout: platform
github_team: cie
abilitante: true
owners:
    - name: Ministry of the Interior
      url: https://www.interno.gov.it/
managers:
    - name: Istituto Poligrafico e Zecca dello Stato
      url: https://www.ipzs.it/
resources:
  - Documentazione:
    - title: Technical information about the card
      icon: link
      url: https://www.cartaidentita.interno.gov.it/la-carta/caratteristiche-del-documento/
    - title: Microprocessor specs
      icon: file
      url: https://www.cartaidentita.interno.gov.it/downloads/2021/03/cie_3.0_-_specifiche_chip.pdf
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
    - title: SDK for Android - Entra con CIE
      icon: github
      url: https://github.com/italia/cieid-android-sdk
      desc: SDK for Android for the "Login with CIE" authentication method
    - title: CIE/CNS Apache Docker
      icon: settings
      url: https://github.com/italia/cie-cns-apache-docker
      desc: Docker image for exposing a web server with CIE or CNS based authentication
    - title: SDK for .NET (MRTD)
      icon: github
      url: https://github.com/italia/cie-mrtd-dotnet-sdk
      desc: .NET library for reading the MRTD/ICAO information
    - title: Example desktop application (MRTD)
      icon: github
      url: https://github.com/italia/cie-mrtd-example-app
      desc: Example desktop application for reading MRTD/ICAO data using the .NET library
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
    - title: spid-php Proxy
      icon: github
      url: https://github.com/italia/spid-php
      desc: Proxy SPID/CIE SAML based on SDK for PHP spid-php
  - SDK OIDC:
    - title: spid-cie-oidc-php Proxy
      icon: github
      url: https://github.com/italia/spid-cie-oidc-php
      desc: Proxy SPID/CIE OIDC based on SDK for PHP spid-cie-oidc-php
  - Proxy:
    - title: spid-php Proxy
      icon: github
      url: https://github.com/italia/spid-php
      desc: Proxy SPID/CIE SAML based on SDK for PHP spid-php
    - title: spid-cie-oidc-php Proxy
      icon: github
      url: https://github.com/italia/spid-cie-oidc-php
      desc: Proxy SPID/CIE OIDC based on SDK for PHP spid-cie-oidc-php
---

## Intro

The [Electronic Identity Card](https://www.cartaidentita.interno.gov.it){:target="_blank"}
(CIE) version 3.0 is already **distributed in more than 90% of the Italian territory** to citizens who ask for a new identity card or renew an expired/lost one.

The CIE is not only an identity card, but it's also a technology that enables new digital services for citizens, that can be used also via smartphones and tablets, thanks to the **NFC microchip**. Every Italian citizen, in a few years, will carry a unique and secure NFC token in their pockets. This will enable several applications:

 * Low-security electronic passages, like entrance to gyms, where the card can be simply brought close to a reader.

 * High-security elecronic passages, like entrance to sport venues, where many people need to be identified securely and enter quickly.

 * Public transportation, also coupled with a digital wallet for paying the ticket.

 * Presence check at workplace.

 * Hotel checkin, without the need for making copies of the document.

This will be made possible thanks to the identification features embedded in the microchip, whose specifics are open and downloadable from this page.

<a class="btn btn-primary" href="https://forum.italia.it/c/cie" target="_blank"><i class="it-horn" /> Enter the forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C75U26411" target="_blank"><i class="it-comment" /> Chat on Slack (#cie)</a>
<a class="btn btn-white btn-outline-primary" href="https://slack.developers.italia.it/" target="_blank"><i class="it-comment" /> Sign up on Slack</a>

## Information provided by the card

The CIE contains the following information, accessible in different ways and according to different levels of protection:

- **Freely accessible data:** unique card identifier (NIS)
- **Data accessible by scanning the MRZ code o by typing the CAN number (both printed on the card):** name, family name, date and place of birth, gender, nationality, validity for traveling abroad, picture, parents (if the card was emitted when the owner was not of legal age), address (when the card was emitted), tax code, ID number
- **Data accessible by typing the PIN (provided separately):** TLS client certificate
- **Data accessible only by law enforcement:** fingerprints

For more details check [this table](/assets/files/CIE-SDK-overview.ods){:target="_blank"}. Open source resources (SDK, examples) listed in this page allow to read the above data in custom applications.

![](/assets/images/cie/cie_detail.png)
