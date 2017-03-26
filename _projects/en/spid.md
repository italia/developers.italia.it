---
title: SPID
subtitle: Public System for Digital Identity
logo: /assets/images/logo-spid@2x.png
payoff: Public System for Digital Identity
description: >
    SPID is the digital identity card for the citizens: a single credential system, with a verified identity, that can be integrated on public, but also privates websites according to the SAML standard.
maintainers:
  - umbros
lang: en
order: 1
highlight: true
comingsoon: false
layout: project
socials:
  -
    name: facebook
    icon: facebook
    link: https://www.facebook.com/groups/agid.spid/
---

## Intro
SPID (Public System for Digital Identity) is the solution that allows the Italian citizens to access all online services of the Public Administration with a single Digital Identity (username and password) that can be used from computers, tablets and smartphones. Citizens can get SPID through a series of private companies  under agreements (known as Identity Provider); once the verification procedure is completed (which certifies the identity of the applicant), you are released a set of credentials that can be used on all the websites (called Service Provider).

At the moment, the integration of SPID is allowed only on the websites of the Public Administration, but soon it will be disciplined and open also for the websites of private companies. The advantages of adopting SPID will be therefore so many: banks and insurance companies, for example, might recognize the citizen who wants to create an account or stipulate an insurance policy simply through the login.


**Roadmap**

We have scheduled for 2017 the following developments, for which we want to involve the community:

 * Creation of plugins for the main CMSes (Wordpress, Drupal, Joomla, etc.)
 * Integrations on mobiles (iOS, Android)
 * Testsuite of validation of the integration of SPID
 * Testing and validation of SPID



## Documentazione
SPID uses an open protocol (SAML 2) that can be implemented by applying the official technical rules.

[Technical rules](http://spid-regole-tecniche.readthedocs.io/en/latest/)


## Codice sorgente
The released code is still very little, we have big plans about it (see roadmap):

[SPID button, with integrated IdP choice](https://github.com/italia/spid-sp-access-button)

[Standard IdP layout](https://github.com/italia/spid-idp-login-layout)

**Grafica**

We published some useful asset during the integration procedure:

[Icons, logos and assets](https://github.com/italia/spid-graphics)

[SPID button (asset only)](https://github.com/italia/spid-button)


## Collaborazione
We opened an area of discussion in our forum, to solve the technical problems of integration, and a public issue tracker will be soon available.

[Forum for technical discussion](https://forum.developers.italia.it/c/spid)
