---
title: pagoPA
subtitle: Payment interface towards the Public Administration
logo: /assets/images/logo-pagopa@2x.png
payoff: Payment interface towards the Public Administration
description: >
  A single way, with a single interface to the citizen, to pay with credit card, bank transfers or
  even via an app.
lang: en
ref:
  it: /it/pagopa
order: 3
highlight: true
comingsoon: false
layout: platform
github_team: pagopa
abilitante: true
newsletterdata:
    text: "Subscribe to this newsletter if you want to receive news and updates about pagoPA."
    placeholdertext: mario.rossi@dev.software.it
    privacy_policy: "https://teamdigitale.governo.it/it/privacy-newsletter-pagoPA.htm"
    action: "https://a0x0b4.emailsp.com/frontend/subscribe.aspx"
    inputs:
        -
          type: hidden
          name: list
          value: 5
owners:
    - name: Presidenza del Consiglio dei Ministri
      url: http://www.governo.it/
managers:
    - name: SIA SpA
      url: https://www.sia.eu/
resources:
    - Documentation:
      - title: Tech specs of the Nodo dei Pagamenti-SPC
        icon: file
        url: https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/
        desc:
      - title: FAQ
        icon: file
        url: https://docs.italia.it/italia/pagopa/pagopa-docs-faq/
        desc:
      - title: Tech specs of the codes for payments
        icon: file
        url: https://docs.italia.it/italia/pagopa/pagopa-codici-docs/
        desc:
      - title: Guidelines for electronics payments to Public Administrations and managers of public services
        icon: file
        url: https://docs.italia.it/italia/pagopa/lg-pagopa-docs/
        desc:
      - title: Technical guide for the analog notice
        icon: file
        url: http://pagopa-avvisoanalogico.readthedocs.io/it/latest/
      - title: Survey for Municipalities
        icon: pencil
        url: https://docs.google.com/forms/d/e/1FAIpQLScPXF6InyTF_vDVdGg_MphgWpVUf1DfViYKgG0ZBFe40TTgbQ/viewform
        desc: Survey to complete for notifying the state of completion about pagoPA and deployment roadmaps of the services
    - SDK:
      - title: Example iOS app
        icon: github
        url: https://github.com/italia/pagopa-ios-example
        desc: Mobile application for iOS, including the SDK
      - title: Example Android app
        icon: github
        url: https://github.com/italia/pagopa-android-example
        desc: Mobile application for Android, including the SDK
      - title: SDK for Ruby
        icon: github
        url: https://github.com/italia/pagopa-soap-ruby
        desc: Ruby library for accessing the SOAP API
---

## Intro

pagoPA is the payment interface for the Public Administration. It's a platform that connects citizens with the Public Administration and the Payment Service Processors (PSP) in order to enable secure and simple payments.

The integration of pagoPA represents a big advantage for public entities because payments get accredited in real time, thus citizens can instantly get a receipt with full legal value.

pagoPA allows citizens to choose the payment method among the available ones according to their needs and digital skills::

- credit card
- direct bank account charge
- postal account
- innovative payment methods available on the market

We're improving the system towards a market approach by integrating innovative payment methods and improving the user interface and system capabilities according to market standards.

The most important work is about UI (User Interface) and UX (User Experience) which were heavily renewed made more usable for citizens (more information about this is available in [Designers Italia](https://designers.italia.it/progetti/pagopa/)).

<a class="btn btn-primary" href="https://forum.italia.it/c/pagopa"><i class="it-horn" /> Enter the forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C8HC6FVE0"><i class="it-comment" /> Chat on Slack (#pagopa)</a> <a href="https://slack.developers.italia.it/"><small>(sign up)</small></a>
