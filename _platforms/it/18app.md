---
title: 18app e Carta Docente
subtitle: Bonus cultura e formazione
logo: /assets/images/logo-18app-cartadocente@2x.png
external_website: https://www.18app.italia.it
payoff: La piattaforma dove spendere i bonus cultura e formazione
description: >
  Se sei un esercente e vuoi integrarti con la piattaforma via API per validare i coupon, puoi trovare qui documentazione e SDK.
lang: it
ref:
  en: /en/18app
order: 3
highlight: false
comingsoon: false
layout: platform
github_team: 18app
owners:
    - name: Ministero per i Beni e le Attività Culturali
      url: http://www.beniculturali.it/
managers:
    - name: Sogei
      url: http://www.sogei.it/
resources:
    - Documentazione:
        - title: Guida per gli esercenti
          icon: file
          url: https://docs.italia.it/italia/18app/18app-esercenti-docs/
          desc: Documentazione per gli esercenti interessati ad integrarsi con le API per la verifica dei coupon
    - SDK:
        - title: SDK per Java
          icon: github
          url: https://github.com/italia/18app-java-sdk
        - title: SDK per PHP
          icon: github
          url: https://github.com/italia/18app-php-sdk
        - title: SDK per .NET
          icon: github
          url: https://github.com/italia/18app-dotnet-sdk
        - title: SDK per C++
          icon: github
          url: https://github.com/italia/18app-cpp-sdk
        - title: SDK per Magento (TODO)
          icon: github
          url: https://github.com/italia/18app-magento-sdk
---

## Intro

18app e Carta Docente sono due programmi previsti dalla legge con i quali
viene assegnato un bonus economico (€500) a determinate categorie di persone
(rispettivamente, tutti i 18enni e i docenti di ruolo) da
spendere con specifici vincoli (in cultura e formazione) presso esercenti
accreditati.

I beneficiari si identificano tramite [SPID](/it/spid), e possono poi utilizzare una
responsive web application (quindi anche da smartphone) per spendere il
proprio portafoglio virtuale creandosi dei buoni sconto (QRCode e codice
alfanumerico), utilizzabili presso gli esercenti convenzionati, che rientrano
in due categorie: esercenti fisici o esercenti online. L'esercente, verificato
che il coupon è valido, effettua lo sconto per l'acquirente, e poi
successivamente emette fattura verso lo Stato per recuperare l'importo scontato.

Per validare un coupon, l'esercente può collegarsi via API al sistema di
backend, effettuando quindi una integrazione con il proprio sistema di cassa,
oppure manualmente tramite una semplice web form.

<a class="btn btn-primary" href="https://forum.italia.it/c/18app-carta-docente" target="_blank"><i class="it-horn" /> Entra nel forum</a>
<a class="btn btn-outline-primary" href="https://developersitalia.slack.com/messages/C7AAA10PN" target="_blank"><i class="it-comment" /> Dialoga su Slack (#18app)</a> <a class="btn btn-primary" href="https://slack.developers.italia.it/" target="_blank"><i class="it-comment">Registrati su Slack</i></a>

Questi spazi di discussione non sono presidiati da Sogei pertanto non sono canali di assistenza. Per i recapiti di assistenza e maggiori informazioni puoi consultare i siti delle iniziative:

- [18app](https://www.18app.italia.it/){:target="_blank"}
- [Carta Docente](https://cartadeldocente.istruzione.it/){:target="_blank"}

## App nativa

In Developers Italia è in corso lo sviluppo di una app nativa per 18app, che nella primavera 2019 diventerà la app ufficiale.

- [Scheda nel catalogo del software](/it/software/m_bac-italia-18app)
- [Repository GitHub](https://github.com/italia/18app){:target="_blank"}
