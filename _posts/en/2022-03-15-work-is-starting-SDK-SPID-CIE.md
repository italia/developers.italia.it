---
layout: post
title: "Work begins on unified SPID and CIE OpenID Connect SDKs."
subtitle: "An important technological advancement that will make life easier for developers"
date: 2022-03-15 10:00:00 +0200
tags: developers sdk spid cie
categories: news
author: Giuseppe de Marco
nickname: peppelinux
image: /assets/icons/logo-it.png
ref:
  it: /it/news/2022/03/15/iniziano-lavori-SDK-SPID-CIE
locale: en
---

Work is starting today on GitHub Italia on the creation of the OpenID Connect SDKs (Software Development Kit) dedicated to the Public Digital Identity System (SPID) and the Electronic Identity Card (CIE) for 5 programming languages!

### What is it all about?

Today marks the start of a significant technological advancement that allows us to align SPID and CIE's user experience with that of the most popular private Single Sign-On systems while also making integration easier for developers and DevOps. By switching to OpenID Connect, we will be able to build a cutting-edge identity federation and participate in a modern ecosystem brimming with useful tools.

But the most important news is that CIE and SPID are getting closer: the two profiles are now merged into a single implementation, making life much easier for developers.

### The details

The SPID/CIE OIDC SDKs are published on GitHub Italia and made public, under an open source licence, in the form of repositories and installable applications. These are OpenID Connect Relying-Party applications, created in strict compliance with the [OpenID Guidelines](https://www.agid.gov.it/sites/default/files/repository_files/linee_guida_openid_connect_in_spid.pdf) Connect in SPID. Each of these will be developed for one of the following programming languages:

- PHP
- Python (Django)
- Java (Spring)
- ASPnet Core
- Javascript (node.js)

Each repository will contain

- the installable and reusable application;
- a clear documentation, in English language, also in the form of a README, on how to use the application, run the test units and contribute to the project;
- an example project for demonstration purposes;
- a docker image using the example project;
- an automatic Continuous Integration (CI) pipeline with the test units;
- an automatic CI pipeline with the official Quality Assessment tool used in the SPID and CIE testing procedures;
- a code test coverage of no less than 90%.

We expect the SDKs to be finalised by mid-April.

Would you like to actively contribute to the work in progress and help us test it? Would you like to propose a new SDK for your favourite programming language? Join us on the [#spid-openid channel](https://slack.developers.italia.it/) and open issues and pull requests at:

- **[https://github.com/italia/spid-cie-oidc-php](https://github.com/italia/spid-cie-oidc-php)**
- **[https://github.com/italia/spid-cie-oidc-aspnetcore](https://github.com/italia/spid-cie-oidc-aspnetcore)**
- **[https://github.com/italia/spid-cie-oidc-nodejs](https://github.com/italia/spid-cie-oidc-nodejs)**
- **[https://github.com/italia/spid-cie-oidc-java](https://github.com/italia/spid-cie-oidc-java)**
- **[https://github.com/italia/spid-cie-oidc-django](https://github.com/italia/spid-cie-oidc-django)**


We are waiting for you!
