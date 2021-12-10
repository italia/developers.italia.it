---
title: DGC
subtitle: Certificazione verde Covid-19
logo: https://www.dgc.gov.it/web/img/logo-eu.png
external_website: https://www.dgc.gov.it
payoff: EU digital COVID certificate
description: >
  È una Certificazione in formato digitale e stampabile, emessa dalla Piattaforma nazionale del Ministero della Salute, che contiene un QR Code per verificarne autenticità e validità
lang: it
ref:
  en: /en/dgc
order: 2
highlight: true
comingsoon: false
abilitante: false
layout: platform
owners:
    - name: Ministero della Salute
      url: https://www.salute.gov.it/
resources:
  - Documentazione:
    - title: Documentazione onboarding SDK
      url: https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding
      icon: file
      desc: Il presente repository contienere la documentazione e le regole per fare onboarding di eventuali SDK.
  - SDK:
    - title: SDK per Kotlin (Android)
      icon: github
      url: https://github.com/ministero-salute/it-dgc-verificac19-sdk-android
      desc: Digital Green Certificate SDK Kotlin (Android)
    - title: SDK per PHP
      icon: github
      url: https://github.com/herald-si/verificac19-sdk-php
      desc: Digital Green Certificate SDK PHP
    - title: SDK per iOS
      icon: github
      url: https://github.com/hrzucchetti/zconnect-verificaC19-sdk-ios
      desc: ZConnectVerificaC19SDK - IOS native (swift)
    - title: SDK per .NET / .NET Framework
      icon: github
      url: https://github.com/DevTrevi/DgcReader
      desc: DgcReader - .NET / .NET Framework
    - title: SDK per Node.js
      icon: github
      url: https://github.com/italia/verificac19-sdk
      desc: VerificaC19 SDK for Node.js
  - Risorse esterne:
    - title: README SDK Android
      icon: github
      url: https://github.com/ministero-salute/it-dgc-verificac19-sdk-android/blob/develop/README.md
      desc: Digital Green Certificate Kotlin (Android) SDK
    - title: Documentazione SDK Android
      icon: github
      url: https://ministero-salute.github.io/it-dgc-verificac19-sdk-android/documentation/
      desc: Documentazione SDK Android
    - title: EU Digital COVID Certificate (repository europeo)
      icon: github
      url: https://github.com/eu-digital-green-certificates/dgc-overview
      desc: EU Digital COVID Certificate (repository europeo)
    - title: DPCM 12 Ottobre 2021
      icon: github
      url: https://www.governo.it/sites/governo.it/files/DPCM_12_ottobre.pdf
      desc: DPCM 12 Ottobre 2021
    - title: Allegato H DPCM 12 Ottobre 2021
      icon: github
      url: https://www.governo.it/sites/governo.it/files/Dpcm_12_ottobre_ALLEGATO_H.pdf
      desc: Allegato H DPCM 12 Ottobre 2021
---

## Intro

È una Certificazione in formato digitale e stampabile, emessa dalla Piattaforma nazionale del Ministero della Salute, che contiene un QR Code per verificarne autenticità e validità.
È una certificazione digitale e stampabile (cartacea), che contiene un codice a barre bidimensionale (QR Code) e un sigillo elettronico qualificato. In Italia, viene emessa soltanto attraverso la Piattaforma nazionale DGC del Ministero della Salute.

**La Certificazione attesta una delle seguenti condizioni:**

- aver fatto la vaccinazione anti COVID-19 (in Italia viene emessa dopo ogni dose di vaccino)
- essere negativi al test antigenico rapido nelle ultime 48 ore o al test molecolare nelle ultime 72 ore
- essere guariti dal COVID-19 negli ultimi sei mesi

Il Regolamento europeo sulla  Certificazione è entrato in vigore il 1 luglio 2021 in tutti i Paesi dell’Unione e avrà durata di un anno.

L’Italia ha anticipato l’emissione della Certificazione verde COVID-19 al 17 giugno 2021 e ne ha esteso progressivamente l’utilizzo sul territorio nazionale.


## Come contribuire

### Inserimento di una libreria nella lista 

Per proporre l’inserimento di una nuova libreria/SDK nella lista è necessario seguire i seguenti passi:

1. Andare su https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding
2. Scaricare dal presente repository il documento denominato [autoDichiarazione.odt](autoDichiarazione.odt) e compilarlo.
3. Inviare a **dgsi@postacert.sanita.it** l’autodichiarazione di cui al punto 1 opportunamente compilata e firmata digitalmente. Tale documento *non* dovrà essere incluso nel repository.
4. Pubblicare il codice sorgente della propria soluzione all’interno di un repository di titolarità del richiedente secondo le modalità indicate nel [paragrafo dedicato](#requisiti-minimi).
5. Aprire una [Pull Request](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/pulls) in questo repository e inserire una nuova riga nella [lista](#lista-librerie) inserendo le informazioni richieste. 

A questo punto inizierà una fase di validazione di quanto sottoposto per verificare l’effettiva rispondenza delle specifiche tecniche e dei requisiti minimi. 
In caso di esito positivo, la Pull Request verrà consolidata entro pochi giorni e apparirà all’interno della [lista](#lista-librerie).
In caso di esito negativo, saranno fornite via email le opportune motivazioni ed eventuali suggerimenti per rendere la libreria aderente ai requisiti minimi.
Eventuali aggiornamenti futuri delle librerie saranno oggetto di successive valutazioni che potrebbero portare alla rimozione della stessa dalla [lista](#lista-librerie) ove non fossero rispettati i requisiti minimi.

## Canali

<a class="btn btn-primary" href="https://forum.italia.it" target="_blank"><i class="it-horn" /> Entra nel forum</a>
<a class="btn btn-primary" href="https://slack.developers.italia.it" target="_blank"><i class="it-comment" /> Dialoga su Slack</a>
