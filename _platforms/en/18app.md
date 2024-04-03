---
title: 18app and Carta Docente
subtitle: Bonus culture and education
logo: /assets/images/logo-18app-cartadocente@2x.png
external_website: https://www.18app.italia.it
payoff: The platform where to spend the culture and education's bonus
description: >
  If you are a business owner and want to integrate with the platform for validating the coupons, here you can find documentation and SDKs.
lang: en
ref:
  it: /it/18app
order: 3
highlight: false
comingsoon: false
layout: platform
github_team: 18app
owners:
    - name: Ministry of Cultural Heritage and Activities
      url: https://www.beniculturali.it/
managers:
    - name: Sogei
      url: https://www.sogei.it/
resources:
    - Documentation:
        - title: Guide for merchants
          icon: file
          url: https://docs.italia.it/italia/18app/18app-esercenti-docs/
          desc: Documentation for merchants who are interested in validating coupons via API
    - SDK:
        - title: SDK for Java
          icon: github
          url: https://github.com/italia/18app-java-sdk
        - title: SDK for PHP
          icon: github
          url: https://github.com/italia/18app-php-sdk
        - title: SDK for .NET
          icon: github
          url: https://github.com/italia/18app-dotnet-sdk
        - title: SDK for C++
          icon: github
          url: https://github.com/italia/18app-cpp-sdk
        - title: SDK for Magento (TODO)
          icon: github
          url: https://github.com/italia/18app-magento-sdk
---

## Intro

18app and Carta Docente are two financial bonuses (500€) targeted at particular categories (18 years old people and school teachers) that can be spent in the accredited stores for buying goods and services.

Users enter with their [SPID digital identity](/en/spid) into a web application that allows them to create coupons (identified by an alphanumeric code and a QR code) of arbitrary amounts, that can be later spent in the accredited stores, which can be either physical or online. At the payment stage, merchants verify that the supplied coupon is valid and subtract their value from the due amount. They will emit an invoice to the State in order to be reimbursed.

In order to validate a coupon, merchants can use a simple web form or can leverage an API in order to build an integration directly from their payment software.

<a class="btn btn-primary" href="https://forum.italia.it/c/18app-carta-docente" target="_blank"><i class="it-horn" /> Enter the forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C7AAA10PN" target="_blank"><i class="it-comment" /> Chat on Slack (#18app)</a> <a href="https://slack.developers.italia.it/" target="_blank"><small>(sign up)</small></a>

These discussion channels are aimed at free discussion among developers; they are not moderated by Sogei so no helpdesk is provided. Check the official websites in order to contact the official helpdesk:

- [18app](https://www.18app.italia.it/){:target="_blank"}
- [Carta Docente](https://cartadeldocente.istruzione.it/){:target="_blank"}

## Native app

In Developers Italia a native mobile app for 18app is being developed. This app will become official in Q2 2019.

- [More details in the software catalogue](/en/software/m_bac-italia-18app)
- [GitHub repository](https://github.com/italia/18app){:target="_blank"}
