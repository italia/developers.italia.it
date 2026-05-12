---
title: DCC
subtitle: Certificazione verde COVID-19
logo: /assets/images/logo-eu@2x.png
external_website: https://www.dgc.gov.it
payoff: EU digital COVID certificate
description: >
  Una Certificazione in formato digitale e stampabile, emessa dal Ministero della Salute, che contiene un QR Code per verificarne autenticità e validità.
lang: it
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
  - App VerificaC19:
    - title: App VerificaC19 per Android
      icon: github
      url: https://github.com/ministero-salute/it-dgc-verificaC19-android
      desc: Codice sorgente della app VerificaC19 per sistema operativo Android
    - title: App VerificaC19 per iOS
      icon: github
      url: https://github.com/ministero-salute/it-dgc-verificaC19-ios
      desc: Codice sorgente della app VerificaC19 per sistema operativo iOS
  - SDK:
    - title: SDK per Kotlin (Android)
      icon: github
      url: https://github.com/ministero-salute/it-dgc-verificac19-sdk-android
      desc: Digital Covid Certificate SDK Kotlin per Android (linguaggio Kotlin) sul quale si basa la app VerificaC19
    - title: SDK per iOS
      icon: github
      url: https://github.com/hrzucchetti/zconnect-verificaC19-sdk-ios
      desc: ZConnectVerificaC19 SDK per iOS native (linguaggio Swift)
    - title: SDK per .NET / .NET Framework
      icon: github
      url: https://github.com/DevTrevi/DgcReader
      desc: DgcReader SDK per .NET / .NET Framework
    - title: SDK per Node.js
      icon: github
      url: https://github.com/italia/verificac19-sdk
      desc: VerificaC19 SDK per Node.js (linguaggio Javascript)
    - title: SDK per PHP
      icon: github
      url: https://github.com/herald-si/verificac19-sdk-php
      desc: Digital Covid Certificate SDK per PHP
    - title: SDK per C++
      icon: github
      url: https://github.com/solari-sviluppo-prodotti/sol-verificaC19-sdk-cpp-linux
      desc: Solari Digital Covid Certificate SDK per C++
    - title: SDK per Java Spring
      icon: github
      url: https://github.com/solari-sviluppo-prodotti/sol-verificaC19-sdk-cpp-linux
      desc: Digital Covid Certificate SDK per Java Spring Digital
  - Librerie di utility per DCC:
    - title: DCC-Utils per Node.js
      icon: github
      url: https://github.com/ministero-salute/dcc-utils
      desc: Libreria di utility per leggere e verificare la firma dei EU COVID-19 vaccine certificate in Node.js
    - title: DCC-Utils per Python
      icon: github
      url: https://github.com/italia/dcc-utils
      desc: Libreria di utility per leggere e verificare la firma dei EU COVID-19 vaccine certificate in Python
    - title: VacDec
      icon: github
      url: https://github.com/HQJaTu/vacdec
      desc: Script Python per la decodifica degli EU COVID-19 vaccine certificate
    - title: DGC per Rust
      icon: github
      url: https://github.com/rust-italia/dgc/
      desc: Libreria di utility per leggere e verificare la firma dei EU COVID-19 vaccine certificate in Rust
  - Documentazione:
    - title: Digital Covid Certificate descrizione ad alto livello
      url: https://github.com/ministero-salute/it-dgc-documentation
      icon: file
      desc: Documentazione di alto livello del funzionamento del sistema DCC.
    - title: Documentazione Tipologie di Verifica DGC (ScanMode)
      url: https://github.com/ministero-salute/it-dgc-documentation/blob/master/SCANMODE.md
      icon: file
      desc: Documentazione dettagliata delle varie tipologie di verifica del DCC.
    - title: Documentazione Digital Covid Certificate Revocation List (DRL)
      url: https://github.com/ministero-salute/it-dgc-documentation/blob/master/DRL.md
      icon: file
      desc: Documentazione dettagliata del funzionamento della Digital Covid Certificate Revocation List (DRL).
    - title: Documentazione onboarding SDK
      url: https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding
      icon: file
      desc: Documentazione e regole per fare onboarding di eventuali SDK.
    - title: Documentazione SDK Android dettagliata
      url: https://ministero-salute.github.io/it-dgc-verificac19-sdk-android/documentation/
      icon: file
      desc: Documentazione dettagliata del SDK VerificaC19 per Android.
  - Risorse esterne:
    - title: README SDK Android
      icon: github
      url: https://github.com/ministero-salute/it-dgc-verificac19-sdk-android/blob/develop/README.md
      desc: Digital Covid Certificate Kotlin (Android) SDK
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

La Certificazione verde COVID-19 è una certificazione in formato digitale e stampabile, emessa dal Ministero della Salute, che contiene un codice a barre bidimensionale (QR Code) e un sigillo elettronico qualificato per verificarne autenticità e validità. L’autenticità e validità della certificazione sono verificate in Italia attraverso l'applicazione mobile ufficiale *VerificaC19*.

**La Certificazione viene rilasciata a seguito dei seguenti eventi clinici:**

- vaccinazione anti COVID-19 (in Italia viene emessa dopo ogni dose di vaccino)
- risultato negativo al test antigenico rapido nelle ultime 48 ore o al test molecolare nelle ultime 72 ore
- guarigione dal COVID-19 negli ultimi sei mesi
- esenzione dalla vaccinazione, certificato emesso a fronte di specifiche condizioni cliniche documentate.

I dati sulle certificazioni emesse in Italia sono disponibili in formato CSV e JSON su [GitHub](https://github.com/ministero-salute/it-dgc-opendata/).

Maggiori informazioni sono reperibili consultando il sito [https://www.dgc.gov.it](https://www.dgc.gov.it/).

## Come contribuire

### Codice della piattaforma

È possibile reperire il codice delle app di VerificaC19 per Android e iOS, del SDK ufficiale, dei vari microservizi backend, i dati sulle certificazioni emesse e la documentazione direttamente sull'[organizzazione GitHub del Ministero della Salute](https://github.com/ministero-salute). È possibile contribuire al codice aprendo una issue o una Pull Request per risolvere direttamente un problema.

### Sviluppare e proporre un nuovo SDK

Per sviluppare un nuovo SDK basato sul [SDK ufficiale VerificaC19](https://github.com/ministero-salute/it-dgc-verificac19-sdk-android) occorre:

1. Verificare le ultime modifiche sviluppate per il SDK ufficiale VerificaC19 consultando il [CHANGELOG](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/blob/main/CHANGELOG.md).
2. Consultare la [checklist ufficiale](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/blob/main/CHECKLIST_SDK.md) per implementare le funzionalità richieste nel SDK.
3. Fare riferimento al [repository della documentazione](https://github.com/ministero-salute/it-dgc-documentation) per avere informazioni dettagliate sull'implementazione del flusso di verifica e della Digital Covid Certificate Revocation List (DRL).

Si raccomanda di utilizzare il repository [dgc-testdata](https://github.com/eu-digital-green-certificates/dgc-testdata) o parte di esso, che contiene testcase utili per controllare la correttezza delle librerie.
È possibile prendere spunto da uno dei SDK presenti nella [lista ufficiale di SDK](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/#lista-librerie) già aderenti alle specifiche tecniche e ai requisiti implementati dal Ministero della Salute all’interno dell’applicazione governativa VerificaC19.

Per proporre l’inserimento di una nuova libreria/SDK nella lista è necessario seguire i seguenti passi:

1. Andare sul repository [it-dgc-verificac19-sdk-onboarding](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding).
2. Scaricare dal presente repository il documento denominato [autoDichiarazione.odt](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/raw/main/autoDichiarazione.odt) e compilarlo.
3. Inviare a **dgsi@postacert.sanita.it** l’autodichiarazione di cui al punto 1 opportunamente compilata e firmata digitalmente. Tale documento *non* dovrà essere incluso nel repository.
4. Pubblicare il codice sorgente della propria soluzione all’interno di un repository di titolarità del richiedente secondo le modalità indicate nel [paragrafo dedicato](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/#requisiti-minimi).
5. Aprire una [Pull Request](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/pulls) all'interno del repository, fare i check delle feature richieste nel corpo della Pull Request e inserire una nuova riga nella [lista](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/#lista-librerie) inserendo le informazioni richieste.

A questo punto inizierà una fase di validazione di quanto sottoposto per verificare l’effettiva rispondenza delle specifiche tecniche e dei requisiti minimi.
In caso di esito positivo, la Pull Request verrà consolidata entro pochi giorni e apparirà all’interno della [lista](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/#lista-librerie).
In caso di esito negativo, saranno fornite via email le opportune motivazioni ed eventuali suggerimenti per rendere la libreria aderente ai requisiti minimi.
Eventuali aggiornamenti futuri delle librerie saranno oggetto di successive valutazioni che potrebbero portare alla rimozione della stessa dalla [lista](https://github.com/ministero-salute/it-dgc-verificac19-sdk-onboarding/#lista-librerie) laddove non fossero rispettati i requisiti minimi.
