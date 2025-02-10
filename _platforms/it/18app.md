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
      url: https://www.beniculturali.it/
managers:
    - name: Sogei
      url: https://www.sogei.it/
resources:
    - Software:
        - title: Carta Docente WooCommerce plugin
          icon: open-source
          url: /it/software//ilghera-wc-carta-docente-c00aa7
        - title: 18app WooCommerce plugin
          icon: open-source
          url: /it/software/ilghera-wc-18app-86eb94
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
    - Esempi:
        - title: Esempio in Python
          icon: github
          url: https://github.com/italia/18app-python-example
---

## Intro

18app e Carta Docente sono due programmi previsti dalla legge con i quali
viene assegnato un bonus economico (€500) a determinate categorie di persone
(rispettivamente, tutti i 18enni e i docenti di ruolo) da
spendere con specifici vincoli (in cultura e formazione) presso esercenti
accreditati.

I beneficiari si identificano tramite [SPID](/it/spid), e possono poi utilizzare
una responsive web application (quindi anche da smartphone) per spendere il
proprio portafoglio virtuale creandosi dei buoni sconto (QRCode e codice
alfanumerico), utilizzabili presso gli esercenti convenzionati, che rientrano
in due categorie: esercenti fisici o esercenti online. L'esercente, verificato
che il coupon è valido, effettua lo sconto per l'acquirente, e poi
successivamente emette fattura verso lo Stato per recuperare l'importo scontato.

## Validazione dei coupon

Per validare un coupon, l'esercente può collegarsi via API al sistema di
backend, effettuando quindi una integrazione con il proprio sistema di cassa,
oppure manualmente tramite una semplice web form. Per consumare il web service
di verifica del voucher, ogni esercente dovrà essere
dotato di un certificato di autenticazione da installare nel proprio client del
servizio e da utilizzare nella chiamata SOAP per effettuare l’autenticazione in
modalità SSL con certificato client.

## Canali

<a class="btn btn-primary" href="https://forum.italia.it/c/18app-carta-docente" target="_blank"><i class="it-horn" /> Entra nel forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C7AAA10PN" target="_blank"><i class="it-comment" /> Dialoga su Slack (#18app)</a>
<a class="btn btn-white btn-outline-primary" href="https://slack.developers.italia.it/" target="_blank"><i class="it-comment" /> Registrati su Slack</a>

Questi spazi di discussione non sono presidiati da Sogei pertanto non sono canali di assistenza. Per i recapiti di assistenza e maggiori informazioni puoi consultare i siti delle iniziative:

- [18app](https://www.18app.italia.it/){:target="_blank"}
- [Carta Docente](https://cartadeldocente.istruzione.it/){:target="_blank"}
