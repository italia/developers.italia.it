---
title: ANPR
logo: /assets/images/logo-anpr@2x.png
subtitle: National Registry of Resident Population
payoff: The registry becomes one and digital
description: >
  A single centralised registry, accessible by an API, which holds the up-to-date information
  about address, civil state, etc.
lang: en
ref:
  val: anpr-project
  it: /it/anpr
order: 4
highlight: false
comingsoon: false
layout: platform
github_team: anpr
newsletterdata:
    text: "Subscribe to this newsletter if you want to receive news about ANPR: migration updates, new documentation, facts."
    placeholdertext: john.smith@dev.software.it
    privacy_policy: "https://teamdigitale.governo.it/it/privacy-newsletter-anpr.htm"
    action: "https://a0x0b4.emailsp.com/frontend/subscribe.aspx"
    hidden-inputs:
        -
          type: hidden
          name: group
          value: 16
        -
          type: hidden
          name: list
          value: 3
    selects:
        -
          name: campo3
          options:
            -
              value: Cittadino
              valueid: Cittadino
            -
              value: Comune
              valueid: Comune
            -
              value: Software House
              valueid: SW_House
            -
              value: Other
              valueid: ""
abilitante: true
owners:
    - name: Ministry of the Interior
      url: http://www.interno.gov.it/
managers:
    - name: Sogei
      url: http://www.sogei.it/
resources:
    - Documentation:
        - title: Technical documentation and reference tables
          icon: file
          url: https://docs.italia.it/italia/anpr/anpr/
          desc:
    - SDK:
        - title: Example Java client
          icon: github
          url: https://github.com/italia/anpr-client-example
          desc: Client for testing the connection with ANPR
---

## Intro

<!-- **Do you want to stay up-to-date? Subscribe to the ANPR [newsletter](#newsletter).** -->

ANPR is a memorable project: instead of having more than 8,000 registries spread over the entire
national territory (in evey municipality), Italy will have finally a single centralised registry
which will simplify all the interactions with the Public Administration.

In the future we hope to provide more features like update your residency's address or download a
Family Status Declaration straight from the website.

This is only the beginning: did you ever asked yourself why you need to request certificates at the
registry in your municipality? Simple: at today a single centralised registry where the public
offices can access your information doesn't exists at all. With ANPR it will completely different.

At today the access to the ANPR is reserved only to the public administration and their software.
So this section is dedicated to everyone is giving support to municipalities to migrate to ANPR and
is helping us to fulfill our vision. There's a lot of work to do and the contribution of the
community is important.

## Collaboration

We built some collaboration tools for you including an *issue tracker* and a forum dedicated to
discuss all the problems on integrating ANPR.

<a class="btn btn-primary" href="https://github.com/italia/anpr/issues"><svg class="icon icon-white"><use xlink:href="/assets/svg/sprite.svg#it-github"></use></svg> Issue tracker</a>
<a class="btn btn-primary" href="https://forum.italia.it/c/anpr"><svg class="icon icon-white"><use xlink:href="/assets/svg/sprite.svg#it-horn"></use></svg> Enter the forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/archives/C7A8NS7RQ"><i class="it-comment" /> Chat on Slack (#anpr)</a> <a href="https://slack.developers.italia.it/"><small>(sign up)</small></a>
