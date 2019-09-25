---
title: SPID
subtitle: Public System for Digital Identity
logo: /assets/images/logo-spid@2x.png
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
      url: https://docs.italia.it/italia/spid/spid-regole-tecniche/it/stabile/
      icon: file
      desc: The SPID technical rules with all the fixes applied, in an easy to read version published on Docs Italia
    - title: Roadmap SDK
      url: https://trello.com/b/PHF0ErvK/spid-roadmap
      icon: file
      desc: State of the art of the SDKs for SPID developed and maintained by the Developers Italia community
    - title: Identity Providers metadata
      url: https://github.com/italia/spid-registry-idp
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
    - title: SDK for Passport
      icon: github
      url: https://github.com/italia/spid-passport
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
      url: https://github.com/italia/spid-android-sdk
      desc: Native library for integrating SPID in Android (Java) applications
    - title: SDK for iOS
      icon: github
      url: https://github.com/italia/spid-ios-sdk
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
    - title: SDK for concrete5
      icon: github
      url: https://github.com/italia/spid-concrete5
      desc: Native library for integrating SPID in concrete5 (PHP) applications
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
    - title: Plugin for Limesurvey
      icon: github
      url: https://github.com/italia/spid-limesurvey-plugin
      desc: Native plugin for integrating SPID in Limesurvey
    - title: Shibboleth-based proxy
      icon: github
      url: https://github.com/italia/spid-shibboleth-proxy-docker
      desc: Docker image for creating a proxy based on Apache2 and Shibboleth
    - title: Example based on Shibboleth, Nginx and Ansible
      url: https://github.com/italia/spid-ansible-shibboleth-example
      icon: github
      title: Example of configuration of Shibboleth with Nginx via an Ansible playbook
    - title: IAM in Python
      url: https://github.com/italia/spid-sp-sapspid
      icon: github
      desc: SPID-compatible Identity Access Management application developed in Python
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

1. Read the technical docs and use the open source components you can find in Developers Italia.
2. Use the [test Identity Provider](https://github.com/italia/spid-testenv2) for simulating the authentication process and verifying that your implementation is correct.
3. Get in touch with other developers via [Slack](https://slack.developers.italia.it/).
4. Follow the accreditation procedore described in the [AGID website](https://www.spid.gov.it/come-diventare-fornitore-di-servizi-pubblici-e-privati-con-spid).

SPID is based on the SAML2 protocol, thus the integration can be done in several ways:

- by integrating one of the Developers Italia SDKs directly in the application;
- by applying a middleware (like Shibboleth) to the web server;
- by adding an external Identity Access Management component.

In addition, the "Enter with SPID" official button must be included in the Service Provider website, that allows users to choose their Identity Provider. The application/middleware/IAM then generates an AuthnRequest that is later sent to the Identity Provider via a browser redirect.

The Service Provider must update the Identity Provider metadata whenever they are added, removed or when their certificates are updated. This update must be reflected in the "Enter with SPID" button too.

<a class="btn btn-primary" href="https://forum.italia.it/c/spid"><i class="it-horn" /> Enter the forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C73R3UQE8"><i class="it-comment" /> Chat on Slack (#spid)</a> <a href="https://slack.developers.italia.it/"><small>(sign up)</small></a>

In addition, a [public issue tracker](https://github.com/italia/spid/issues) is available.

**The Developers Italia community developed a large amount of open source components (SDK, examples of code) ready to use, and it also developed the test Identity Provider.** Anyone can contribute to the improvement of such components or to the development of new ones (see the [roadmap](https://trello.com/b/PHF0ErvK/spid-roadmap)).