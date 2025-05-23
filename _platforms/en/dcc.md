---
title: DCC
subtitle: COVID-19 Green certificate
logo: /assets/images/logo-eu@2x.png
external_website: https://www.dgc.gov.it
payoff: EU digital COVID certificate
description: >
  A digital and printable certificate, issued by the Italian Health Ministry, which contains a QR Code to verify its authenticity and validity.
lang: en
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
  - VerificaC19 App:
    - title: VerificaC19 App for Android
      icon: github
      url: https://github.com/ministero-salute/it-dgc-verificaC19-android
      desc: Source code of the VerificaC19 app for Android
    - title: VerificaC19 App for iOS
      icon: github
      url: https://github.com/ministero-salute/it-dgc-verificaC19-ios
      desc: Source code of the VerificaC19 app for iOS
  - SDK:
    - title: SDK for Kotlin (Android)
      icon: github
      url: https://github.com/ministero-salute/it-dgc-verificac19-sdk-android
      desc: Digital Covid Certificate SDK Kotlin for Android (Kotlin) on which the VerificaC19 app is based
    - title: SDK for iOS
      icon: github
      url: https://github.com/hrzucchetti/zconnect-verificaC19-sdk-ios
      desc: ZConnectVerificaC19 SDK for native iOS (Swift)
    - title: SDK for .NET / .NET Framework
      icon: github
      url: https://github.com/DevTrevi/DgcReader
      desc: DgcReader SDK for .NET / .NET Framework
    - title: SDK for Node.js
      icon: github
      url: https://github.com/italia/verificac19-sdk
      desc: VerificaC19 SDK for Node.js (Javascript)
    - title: SDK for PHP
      icon: github
      url: https://github.com/herald-si/verificac19-sdk-php
      desc: Digital Covid Certificate SDK for PHP
    - title: SDK for C++
      icon: github
      url: https://github.com/solari-sviluppo-prodotti/sol-verificaC19-sdk-cpp-linux
      desc: Solari Digital Covid Certificate SDK for C++
    - title: SDK for Java Spring
      icon: github
      url: https://github.com/solari-sviluppo-prodotti/sol-verificaC19-sdk-cpp-linux
      desc: Digital Covid Certificate SDK for Java Spring Digital
  - Utility libraries for DCC:
    - title: DCC-Utils for Node.js
      icon: github
      url: https://github.com/ministero-salute/dcc-utils
      desc: Utility library to read and verify the signature of the EU COVID-19 vaccine certificate in Node.js
    - title: DCC-Utils for Python
      icon: github
      url: https://github.com/italia/dcc-utils
      desc: Utility library to read and verify the signature of the EU COVID-19 vaccine certificate in Python
    - title: VacDec
      icon: github
      url: https://github.com/HQJaTu/vacdec
      desc: Python script to decode the EU COVID-19 vaccine certificate
    - title: DGC for Rust
      icon: github
      url: https://github.com/rust-italia/dgc/
      desc: Utility library to read and verify the signature of the EU COVID-19 vaccine certificate in Rust
  - Documentazione:
    - title: Digital Covid Certificate - High-level description
      url: https://github.com/ministero-salute/it-dgc-documentation
      icon: file
      desc: High-level documentation on the DCC system.
    - title: Documentation on the types of DGC Checks (ScanMode)
      url: https://github.com/ministero-salute/it-dgc-documentation/blob/master/SCANMODE.md
      icon: file
      desc: Detailed documentation of the various types of DCC checks.
    - title: Documentation on the Digital Covid Certificate Revocation List (DRL)
      url: https://github.com/ministero-salute/it-dgc-documentation/blob/master/DRL.md
      icon: file
      desc: Detailed documentation on the operation of the Digital Covid Certificate Revocation List (DRL).
    - title: Onboarding SDK documentation
      url: https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding
      icon: file
      desc: Documentation and rules to onboard potential SDKs.
    - title: Detailed SDK Android documentation
      url: https://ministero-salute.github.io/it-dgc-verificac19-sdk-android/documentation/
      icon: file
      desc: Detailed documentation on the VerificaC19 SDK for Android.
  - External sources:
    - title: README SDK Android
      icon: github
      url: https://github.com/ministero-salute/it-dgc-verificac19-sdk-android/blob/develop/README.md
      desc: Digital Covid Certificate Kotlin (Android) SDK
    - title: EU Digital COVID Certificate (european repository)
      icon: github
      url: https://github.com/eu-digital-green-certificates/dgc-overview
      desc: EU Digital COVID Certificate (european repository)
    - title: DPCM 12 October 2021
      icon: github
      url: https://www.governo.it/sites/governo.it/files/DPCM_12_ottobre.pdf
      desc: DPCM 12 October 2021
    - title: Annex H DPCM 12 Ottobre 2021
      icon: github
      url: https://www.governo.it/sites/governo.it/files/Dpcm_12_ottobre_ALLEGATO_H.pdf
      desc: Annex H DPCM 12 Ottobre 2021
---

## Intro

The COVID-19 green certificate is a digital and printable certificate, issued by the Italian Health Ministry, which contains a bi-dimensional barcode (QR Code) and an electronic seal qualified to verify its authenticity and validity. The authenticity and validity of the certificate are verified in Italy thanks to the official mobile app *VerificaC19*.

**The certificate is released as a result of a:**

- COVID-19 vaccination (in Italy it is released after every vaccine dose);
- negative result to a rapid antigen test in the last 48 hours or to a molecular test in the last 72 hours;
- recovery from COVID-19 in the last six months;
- vaccination exemption, certified and issued as a result of specific and documented clinical conditions.

Data on certificates issued in Italy are available in CSV and JSON format on [GitHub](https://github.com/ministero-salute/it-dgc-opendata/).

Additional info are available at [https://www.dgc.gov.it](https://www.dgc.gov.it/).

## How to contribute

### Platform code

It is possible the find the official source code of the Android and iOS VerificaC19 app, of the official SDK, of the various backend microservices, and the data on the issued certificates and documentation directly on the [Italian Health Ministry Organization on Github](https://github.com/ministero-salute). It is possible to contribute to the code by opening an issue or a Pull Request to directly solve a problem.

### Developing and proposing a new SDK

To develope a new SDK based on the [official VerificaC19 SDK](https://github.com/ministero-salute/it-dgc-verificac19-sdk-android), it is necessary to:

1. Check the last edits developed for the official VerificaC19 SDK on the [CHANGELOG](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/blob/main/CHANGELOG.md).
2. Check the [official checklist](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/blob/main/CHECKLIST_SDK.md) to implement the functionalities requested in the SDK.
3. Refer to the [documentation repository](https://github.com/ministero-salute/it-dgc-documentation) to have detailed information on the implementation of the verification flow and of the Digital Covid Certificate Revocation List (DRL).

It is recommended to use the [dgc-testdata](https://github.com/eu-digital-green-certificates/dgc-testdata) repository or part of it, which contains useful testcases to check the correctness of the libraries.
It is possible to take inspiration from one of the SDKs available in the [official SDK list](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/#lista-librerie) already following the technical specifics and the requirements implemented by the Italian Health Ministry inside the VerificaC19 government app.

To propose the insertion of a new library/SDK into the list, it is necessary to follow the following steps:
1. Go on the repository [it-dgc-verificac19-sdk-onboarding](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding).
2. Download from the repository the document named [autoDichiarazione.odt](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/raw/main/autoDichiarazione.odt) and fill it.
3. Send the filled and digitally-signed document to **dgsi@postacert.sanita.it**. This document *must not* be included into the repository.
4. Publish the source code of your solution inside a repository owned by you accordingly with the requirements indicated in [this dedicated paragraph](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/#requisiti-minimi).
5. Open a [Pull Request](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/pulls) inside the repository, check all the features requested in the body of the Pull Request and add a new line in the [list](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/#lista-librerie) inserting the required informations.

At this point, a validation phase will start, during which all technical and minimal requirements will be checked.
In case of positive outcome, the Pull Request will be approved within a few days and will appear inside the [list](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/#lista-librerie).
In case of negative outcome, appropriate reasons will be provided by email among with eventual suggestions to adapt the library.
Any further update to the library will be subject to evaluations which may lead to its removal from the [lista](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/#lista-librerie), in case the minimum requirements are no longer met.
