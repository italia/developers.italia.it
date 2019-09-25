---
title: Designers Italia
subtitle: The Design System for the Italian Public Administration
logo: /assets/images/logo-design@2x.png
payoff: Designers on the side of citizens
description: "Designers Italia is the main source for design of Public Administration services: guidelines, tools, a design system and a community of designers to foster collaboration and promote the role of human-centered design during the development of public services."
lang: en
ref:
  it: /it/designers
order: 4
highlight: false
comingsoon: false
layout: platform
github_team: design
socials:
  -
    name: twitter
    icon: twitter
    link: //twitter.com/DesignersITA
  -
    name: medium
    icon: medium
    link: //medium.com/designers-italia
    
    
redirect_from:
  - /en/design
---

## Intro

On this page we present the *design system* created for the Italian Public Administration and the Designers Italia tools available to developers.

The goal is to provide kits - documents, guides, or software - that can save time and money to the Public Administration and that constitute a solid starting point for the design and development of modern, inclusive and maintainable apps and websites. Some of these projects are already active, while others are foreseen by the [roadmap](https://designers.italia.it/roadmap/). To stay up-to-date with the evolution of the projects, we recommend registering with the [Designers Italia newsletter](https://designers.italia.it/).

The site [designers.italia.it](https://designers.italia.it/) contains:

* References to the current version of the [Design Guidelines](https://designers.italia.it/guide/).
* A series of [kits for the design of services of the Public Administration](https://designers.italia.it/kit/).
* The [blog](https://designers.italia.it/blog/) with use case of the kits.

The source code of the site itself is hosted in a [GitHub repository](https://github.com/italia/designers.italia.it) open to any kind of contribution.

## UI Kit

The UI Kit is a set of visual components already ready to build the interface of a site or an app, following the guidelines for the digital services of the Public Administration. The kit is built with Sketch and defined in an open and collaborative way on GitHub together with the designers community. The UI Kit is the reference point for UI components and patterns intended to be implemented using the Web Development Kits, shown below.

* [Introduction to the UI Kit](https://designers.italia.it/kit/ui-kit/)
* [UI Kit components and patterns](https://invis.io/RJFGS2UC3HS)
* [GitHub Repository](https://github.com/italia/design-ui-kit)

Many Public Administration projects are using the UI Kit to define their own interfaces, including models for [sites of the municipalities](https://github.com/italia/design-comuni-prototipi) and [sites of schools](https://github.com/italia/design-scuole-prototipi).

For questions and discussions about the UI Kit, on [Developers Italia Slack](https://slack.developers.italia.it/), you can refer to the channel [#design-ui](https://developersitalia.slack.com/messages/C9N62GX8E/).

## Web Development Kit

The [Web Development Kits](https://designers.italia.it/kit/web-development-kit/) are a set of tools for the front end development of websites and web applications. They are HTML, CSS and Javascript libraries that allow you to create sites that comply with the Design Guidelines and code the provisions of the UI Kit. As of today, the most stable, updated and mature web development kit is Bootstrap Italia, based on the open-source library Bootstrap 4.

### Bootstrap Italia

The Bootstrap 4 based kit is the reference point for the development of Public Administration projects. The main purpose is to make available to the community of developers, in line with the [Design Guidelines](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/), syntax, tools, plugins and conventions of an instrument already known and used by many, such as [Bootstrap 4](https://getbootstrap.com/).

* [Bootstrap Italia Documentation](https://italia.github.io/bootstrap-italia/)
* [GitHub Repository](https://github.com/italia/bootstrap-italia)
* [Example of a template to start with](https://italia.github.io/bootstrap-italia/docs/esempi/template-vuoto/)

Bootstrap Italia is already used on some successful projects, such as the [prototype of the website of the Municipality of Cagliari](https://italia.github.io/design-comuni-prototipi/) and the [Docs Italia](https://docs.italia.it/) website.

Other projects, such as sites for schools, themes for the main CMS (Wordpress, Drupal, Joomla, Plone, Entando, etc.) and generators of static sites (Hugo, Jekyll, etc.), are under evaluation or planning. The only one currently available, still under construction, is the [Wordpress Theme](https://github.com/italia/design-wordpress-theme/).

To report a site, an app or a theme created with Bootstrap Italia, [you can open an issue](https://github.com/italia/bootstrap-italia/issues) on the Bootstrap Italia repository or [write a post on the forum](https://forum.italia.it/c/design/esempi-linee-guida)!

### Web Toolkit

The Web Toolkit was the first project meant to help the creation of websites for the PA: it is already used by many websites, especially some municipalities and ministries. The feedback received on the use of the Web Toolkit by organizations and suppliers contributed to the definition and creation of the Bootstrap Italia reference kit.

For this reason, the Web Toolkit is no longer the subject of significant updates since 2017.

* [Web Toolkit Documentation](https://italia.github.io/design-web-toolkit/)
* [GitHub Repository](https://github.com/italia/design-web-toolkit)

### Design React Kit

The project aims at building a set of components and a common presentation layer based on [React](https://github.com/facebook/react/). The focus of the project was, at least at this early stage, web apps and hybrid mobile applications based on [React Native](https://facebook.github.io/react-native/). The React Kit is not yet complete because many of the components present on Bootstrap Italia have not yet been converted for use as React components.

* [Design React Kit Documentation](https://italia.github.io/design-react-kit/)
* [GitHub Repository](https://github.com/italia/design-react-kit)

### Design Angular Kit

The project aims to build a set of components and a common presentation layer based on [Angular](https://angular.io/). The kit is not yet complete.

* [Design Angular Kit Documentation](https://italia.github.io/design-angular-kit/)
* [GitHub Repository](https://github.com/italia/design-angular-kit)

The contributions on the kits are very important, so if you think you can help with feedback, useful information, bug reports or code, please help!

For questions and discussions on the Web Development Kits, you can refer to the channel [#design-devel](https://developersitalia.slack.com/messages/C7VPAUVB3/).

## Other useful design kits

Web development is only part of the service processing cycle according to the Design Guidelines. Designers Italia provides kits covering the entire design cycle of a service, from research to information architecture, passing through tests with users. For more information, you can start from the [Kit page on the Designers Italia website](https://designers.italia.it/kit/).

For questions and discussions on these design kits, you can refer to the channel [#design-service](https://developersitalia.slack.com/messages/C9HKFKU9J/).
