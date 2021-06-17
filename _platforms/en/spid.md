---
title: SPID
subtitle: Public System for Digital Identity
logo: /assets/images/logo-spid@2x.png
external_website: https://www.spid.gov.it
payoff: Public System for Digital Identity
description: >
    SPID is the digital identity card for the citizens: a single credential system, with a verified identity, that can be integrated on public and private websites.
lang: en
ref:
  it: /it/spid
order: 2
highlight: true
comingsoon: false
abilitante: true
layout: platform
github_team: spid
socials:
  - name: facebook
    icon: facebook
    link: https://www.facebook.com/groups/agid.spid/
owners:
    - name: Agency for Digital Italy
      url: https://www.agid.gov.it/
resources:
  - Documentation:
    - title: Technical rules (consolidated version)
      url: https://docs.italia.it/italia/spid/spid-regole-tecniche
      icon: file
      desc: The SPID technical rules with all the fixes applied, in an easy to read version published on Docs Italia
    - title: Identity Providers metadata
      url: https://registry.spid.gov.it/identity-providers
      icon: github
      desc: SAML Metadata of the SPID Identity Providers. Service Providers are required to keep metadata up-to-date
    - title: Forms, regulation and documents
      url: https://www.agid.gov.it/it/piattaforme/spid
      icon: file
      desc: The AGID website contains forms, pricing, regulation and other documents about SPID
  - SDK:
    - title: SDK for .NET
      icon: github
      url: https://github.com/italia/spid-dotnet-sdk
      desc: Native library for integrating SPID in .NET applications
    - title: SDK for Django
      icon: github
      url: https://github.com/italia/spid-django
      desc: Native library for integrating SPID in Django (Python) applications
    - title: SDK for Express.js
      icon: github
      url: https://github.com/italia/spid-express
      desc: Native library for integrating SPID in Node/Passport (Javascript) applications
    - title: SDK for Spring
      icon: github
      url: https://github.com/italia/spid-spring
      desc: Native library for integrating SPID in Java Spring applications
    - title: SDK for Ruby
      icon: github
      url: https://github.com/italia/spid-ruby
      desc: Native library for integrating SPID in Ruby applications
    - title: SDK for Ruby on Rails
      icon: github
      url: https://github.com/italia/spid-rails
      desc: Native library for integrating SPID in Ruby on Rails applications
    - title: SDK for Sinatra
      icon: github
      url: https://github.com/italia/spid-sinatra
      desc: Native library for integrating SPID in Sinatra (Ruby) applications
    - title: SDK for Android
      icon: github
      url: https://github.com/INPS-it/SPIDlibraryAndroid
      desc: Native library for integrating SPID in Android (Java) applications
    - title: SDK for iOS
      icon: github
      url: https://github.com/INPS-it/SPIDlibraryIOS
      desc: Native library for integrating SPID in iOS mobile applications
    - title: SDK for PHP
      icon: github
      url: https://github.com/italia/spid-php-lib
      desc: Native library for integrating SPID in PHP applications
    - title: SDK for Wordpress
      icon: github
      url: https://github.com/italia/spid-wordpress
      desc: Native library for integrating SPID in Wordpress (PHP) applications
    - title: SDK for Laravel
      icon: github
      url: https://github.com/italia/spid-laravel
      desc: Native library for integrating SPID in Laravel (PHP) applications
    - title: SDK for Symfony
      icon: github
      url: https://github.com/italia/spid-symfony-bundle
      desc: Native library for integrating SPID in Symfony (PHP) applications
    - title: SDK for Drupal
      icon: github
      url: https://github.com/italia/spid-drupal-module
      desc: Native library for integrating SPID in Drupal (PHP) applications
    - title: SDK for PHP (based on SimpleSAMLphp)
      icon: github
      url: https://github.com/italia/spid-php
      desc: Script for integrating SPID in PHP applications through a guided installer of SimpleSAMLphp
    - title: SDK for Perl
      icon: github
      url: https://github.com/italia/spid-perl
      desc: Native library for integrating SPID in Perl applications
    - title: SDK for Dancer2
      icon: github
      url: https://github.com/italia/spid-perl-dancer2
      desc: Native library for integrating SPID in Dancer2 (Perl) applications
    - title: SDK for Go
      icon: github
      url: https://github.com/italia/spid-go
      desc: Native library for integrating SPID in Golang applications
    - title: Example based on Shibboleth, Nginx and Ansible
      url: https://github.com/italia/spid-ansible-shibboleth-example
      icon: github
      title: Example of configuration of Shibboleth with Nginx via an Ansible playbook
  - Proxy:
    - title: IdentityPython SATOSA
      icon: github
      url: https://github.com/italia/Satosa-Saml2Spid
      desc: Python Proxy with Docker image to enable traditional SAML2 SPs in SPID
    - title: Keycloak
      icon: github
      url: https://github.com/italia/keycloak-spid-provider
      desc: Keycloak OIDC to SAML2 SPID Proxy
    - title: Proxy con Shibboleth
      icon: github
      url: https://github.com/robertogallea/spid-idp-proxy-shibboleth
      desc: SPID Proxy based on Shibboleth IDP and SP
    - title: IAM in Python
      url: https://github.com/italia/spid-sp-sapspid
      icon: github
      desc: SPID compatible Identity Access Management application developed in Python
  - Graphic resources:
    - title: "'Enter with SPID' button"
      icon: github
      url: https://github.com/italia/spid-sp-access-button
      desc: The button to insert in the Service Provider website, that allows users to choose their Identity Provider
    - title: Graphical interfaces for Identity Providers
      icon: github
      url: https://github.com/italia/spid-idp-login-layout
      desc: Static HTML templates for Identity Provider interfaces
    - title: Icons, logos and other graphic resources
      icon: github
      url: https://github.com/italia/spid-graphics
      desc: This repository contains the SPID logo, the Identity Providers logos and other graphic resources
    - title: "'Enter with SPID' button (smart version)"
      icon: github
      url: https://github.com/italia/spid-smart-button
      desc: New version (not yet official) of the 'Enter with SPID' button, that allows users to choose their Identity Provider
  - Tools:
    - title: Test Identity Provider
      url: https://github.com/italia/spid-testenv2
      icon: github
      desc: Test environment that can be used for troubleshooting a Service Provider implementation. It provides full validation against the official SPID rules and can be run as a local application too
    - title: Identity Provider per il collaudo tecnico
      url: https://github.com/italia/spid-saml-check
      icon: github
      desc: Test environment used by AgID for testing the SPs in the onboarding phase, which can be performed locally
    - title: SPID Quality Assessment e CI
      url: https://github.com/italia/spid-sp-test
      icon: github
      desc: spid-sp-test is a SAML2 SPID Service Provider validation tool that can be executed from the command line
    - title: SAML2 certificate creation
      url: https://github.com/italia/spid-compliant-certificates
      icon: github
      desc:  Tool for creating X.509 certificates compliant with SPID Notice n.29 v3
    - title: SPID Metadata builder
      url: https://github.com/italia/spid-metadata-builder
      icon: github
      desc:  Tool for creating SPID metadata of an SP
    - title: SPID Metadata signer
      url: https://github.com/italia/spid-metadata-signer
      icon: github
      desc:  SPID metadata signing tool for an SP
    - title: Firefox SAML Tracer plugin
      url: https://addons.mozilla.org/en-US/firefox/addon/saml-tracer/
      icon:
      desc: A Firefox addon for viewing SAML and WS-Federation messages sent through the browser during single sign-on and single logout.
    - title: Chrome SAML
      url: https://chrome.google.com/webstore/detail/saml-chrome-panel/paijfdbeoenhembfhkhllainmocckace
      icon:
      desc: A Chromium extension for viewing SAML and WS-Federation messages sent through the browser during single sign-on and single logout.
    - title: SAML Developer Tools
      url: https://www.samltool.com
      icon:
      desc: Onelogin SAML2 tools
---

## Intro

SPID (Public System for Digital Identity) is the solution that allows the Italian citizens to access all online services of the Public Administration with a single Digital Identity (username and password) that can be used from computers, tablets and smartphones.
Citizens can get SPID through a series of private companies under agreements (known as *Identity Providers*); once the verification procedure is completed (which certifies the identity of the applicant), you are released a set of credentials that can be used on all the websites (called *Service Providers*).

**Advantages for citizens:**

- A single set of credentials for all public websites (and private websites too), secure and easy to remember
- The verification process, after which the credentials are released, needs to be done only once
- SPID is free

**Advantages for Service Providers:**

- Secure and certified identification of users
- No need to handle custom registration/verification processes, thus reduced costs
- Qualified attributes (birth date/place, gender, e-mail, phone etc.)
- Other attributes already populated by users (home address etc.)

SPID can be integrated in the websites of the Public Administration, but also on private websites. In the first case the service is free, while for privates fees are applied. There are several advantages for including SPID in private websites: banks and insurance companies, for instance, can easily recognize users who want to open an account just by accepting their SPID login, without any additional verification process.

## How to become a Service Provider

1. Read [tecnhical documentation](https://docs.italia.it/italia/spid/spid-regole-tecniche).
2. Use and contribute to the open source components available in [Developers Italia](https://github.com/italia?q=spid).
3. Use a test identity provider such as[spid-saml-check](https://github.com/italia/spid-saml-check){:target="_blank"} or [spid-testenv2](https://github.com/italia/spid-testenv2){:target="_blank"} to simulate the authentication flow and verify that your implementation is correct.
4. Get in touch with other developers at [Slack](https://slack.developers.italia.it/){:target="_blank"}.
5. Follow the onboarding procedure [described here](https://www.spid.gov.it/come-diventare-fornitore-di-servizi-pubblici-e-privati-con-spid){:target="_blank"}.
6. If you have any further questions or are having problems with onboarding procedure, please contact [SPID HelpDesk](mailto:spid.tech@agid.gov.it).

SPID is based on the SAML2 protocol, thus the integration can be done in several ways:

- by integrating one of the [Developers Italia](https://github.com/italia?q=spid) SDKs directly in the application;
- by applying a middleware (like [Shibboleth Service Provider](https://github.com/italia/spid-sp-shibboleth)) to the web server;
- by adding an external Identity Access Management component, like a [Proxy](https://github.com/italia?q=spid+proxy&type=&language=&sort=).

In addition, the [Enter with SPID](https://github.com/italia/spid-sp-access-button){:target="_blank"}" official button must be included in the Service Provider website, that allows users to choose their Identity Provider. The application/middleware/IAM then generates an AuthnRequest that is later sent to the Identity Provider via a browser redirect.

The Service Provider must update the Identity Provider metadata whenever they are added, removed or when their certificates are updated. This update must be reflected in the "Enter with SPID" button too.

## How to contribute

**The Developers Italia community has created a wide range of ready-to-use open source components (SDK, code examples, IAM Proxy, tools).** Anyone can contribute to the improvement of existing components or help develop some new. It is important to keep in mind that the resources made available to the community are not intended as regulations but only as support, example and supplementary help for developers.

## Get in touch

<a class="btn btn-primary" href="https://forum.italia.it/c/spid" target="_blank"><i class="it-horn" /> Enter the forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C73R3UQE8" target="_blank"><i class="it-comment" /> Chat on Slack (#spid)</a> <a href="https://slack.developers.italia.it/" target="_blank"><small>(sign up)</small></a>
