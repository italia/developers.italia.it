---
title: Designers Italia
subtitle: The Design System for the Italian Public Administration
logo: /assets/images/logo-design@2x.png
external_website: https://designers.italia.it
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

The goal is to provide kits - documents, guides, or software - that can save time and money to the Public Administration and that constitute a solid starting point for the design and development of modern, inclusive and maintainable apps and websites. Some of these projects are already active, while others are foreseen by the [roadmap](https://designers.italia.it/roadmap/){:target="_blank"}. To stay up-to-date with the evolution of the projects, we recommend registering with the [Designers Italia newsletter](https://designers.italia.it/){:target="_blank"}.

The site [designers.italia.it](https://designers.italia.it/){:target="_blank"} contains:

* References to the current version of the [Design guidelines](https://designers.italia.it/guide/){:target="_blank"}.
* [Design templates for websites and services](https://designers.italia.it/modelli/){:target="_blank"} of public entities, such as municipalities and schools.
* A [design system](https://designers.italia.it/design-system/){:target="_blank"} including foundations, components, patterns and showcase.
* A series of [kits for the design of services of the Public Administration](https://designers.italia.it/kit/){:target="_blank"}.
* The [blog](https://medium.com/designers-italia) with use cases of the above tools and articles from the community.
* The [activity plan](https://designers.italia.it/piano-attivita/), containing a roadmap of the activities and the main results by the Designers Italia project, future actions and goals to be achieved.

The source code of the site itself is hosted in a [GitHub repository](https://github.com/italia/designers.italia.it){:target="_blank"}, open to any type of contribution.

# Design system

Since 2022, a unique and coherent desing system has been established by building on and evolving the different kits listed below:

* Introduction to the current version of the [Design System](https://designers.italia.it/design-system/){:target="_blank"}.
* Kickstart [guide](https://designers.italia.it/design-system/come-iniziare/).
* [Contribution model](https://designers.italia.it/design-system/come-contribuire/).
* [Foundations](https://designers.italia.it/design-system/fondamenti/).
* [Components](https://designers.italia.it/design-system/componenti/).

## UI kit

The UI Kit is a set of ready-made visual components to build the interface of a site or an app, following the guidelines for the digital services of the Public Administration. The kit is built with Sketch and defined in an open and collaborative way on GitHub, together with the designers community. The UI Kit is the reference point for UI components and patterns. It has been included as part of the design system since 2022. 

* [Introduction to the UI Kit](https://designers.italia.it/design-system/come-iniziare/per-designer/){:target="_blank"}
* [UI Kit components and patterns](https://www.figma.com/community/file/1105848677422572920/ui-kit-italia-v3-1-0){:target="_blank"}
* [GitHub Repository](https://github.com/italia/design-ui-kit){:target="_blank"}

Many Public Administration projects are using the UI Kit to define their own interfaces, including templates for [sites of the municipalities](https://github.com/italia/design-comuni-prototipi){:target="_blank"} and [sites of schools](https://github.com/italia/design-scuole-prototipi){:target="_blank"}.

For questions and discussions about the UI Kit, on [Developers Italia Slack](https://slack.developers.italia.it/){:target="_blank"}, you can refer to the channel [#design-system-ui-kit](https://developersitalia.slack.com/archives/C9N62GX8E) {:target="_blank"}.

## Web Development Kit

The [Web Development Kits](https://designers.italia.it/kit/web-development-kit/){:target="_blank"} are a set of tools for the front end development of websites and web applications. They are HTML, CSS and Javascript libraries that allow you to create sites that comply with the Design Guidelines and code the provisions of the UI Kit. As of today, the most stable, updated and mature web development kit is Bootstrap Italia, based on the open-source library Bootstrap 4. They all have been included as part of the design system since 2022. 

### Bootstrap Italia

The Bootstrap 4 based kit is the reference point for the development of Public Administration projects. The main purpose is to make available to the community of developers, in line with the [Design Guidelines](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/){:target="_blank"}, syntax, tools, plugins and conventions of an instrument already known and used by many, such as [Bootstrap 4](https://getbootstrap.com/){:target="_blank"}.

* [Bootstrap Italia Documentation](https://italia.github.io/bootstrap-italia/){:target="_blank"}
* [GitHub Repository](https://github.com/italia/bootstrap-italia){:target="_blank"}
* [Bootstrap Italia Playground to start using Bootstrap Italia](https://github.com/italia/bootstrap-italia-playground){:target="_blank"};
* [Example of a template to start with](https://italia.github.io/bootstrap-italia/docs/esempi/template-vuoto/){:target="_blank"}

Bootstrap Italia is already used on some successful projects, such as the [prototype of the website of the Municipality of Cagliari](https://italia.github.io/design-comuni-prototipi/){:target="_blank"} and the [Docs Italia](https://docs.italia.it/){:target="_blank"} website.

Other projects, such as sites for schools, themes for the main CMS (Wordpress, Drupal, Joomla, Plone, Entando, etc.) and generators of static sites (Hugo, Jekyll, etc.), are under evaluation or planning. The only one currently available, still under construction, is the [Wordpress Theme](https://github.com/italia/design-wordpress-theme/){:target="_blank"}.

To report a site, an app or a theme created with Bootstrap Italia, [you can open an issue](https://github.com/italia/bootstrap-italia/issues){:target="_blank"} on the Bootstrap Italia repository or [write a post on the forum](https://forum.italia.it/c/design/esempi-linee-guida){:target="_blank"}!

### Design React Kit

The project aims at building a set of components and a common presentation layer based on [React](https://github.com/facebook/react/){:target="_blank"}. The focus of the project was, at least at this early stage, web apps and hybrid mobile applications based on [React Native](https://facebook.github.io/react-native/){:target="_blank"}. The React Kit is not yet complete because many of the components present on Bootstrap Italia have not yet been converted for use as React components.

* [Design React Kit Documentation](https://italia.github.io/design-react-kit/){:target="_blank"}
* [GitHub Repository](https://github.com/italia/design-react-kit){:target="_blank"}

### Design Angular Kit

The project aims to build a set of components and a common presentation layer based on [Angular](https://angular.io/){:target="_blank"}. The kit is not yet complete.

* [Design Angular Kit Documentation](https://italia.github.io/design-angular-kit/){:target="_blank"}
* [GitHub Repository](https://github.com/italia/design-angular-kit){:target="_blank"}

The contributions on the kits are very important, so if you think you can help with feedback, useful information, bug reports or code, please help!

For questions and discussions on the Web Development Kits, you can refer to the channel [#design-devel](https://developersitalia.slack.com/messages/C7VPAUVB3/){:target="_blank"}.

### Web Toolkit

The Web Toolkit was the first project meant to help the creation of websites for the PA: it is already used by many websites, especially some municipalities and ministries. The feedback received on the use of the Web Toolkit by organizations and suppliers contributed to the definition and creation of the Bootstrap Italia reference kit first, and the Desisgn System later.

For this reason, the Web Toolkit is no longer the subject of significant updates since 2017.

* [Web Toolkit Documentation](https://italia.github.io/design-web-toolkit/){:target="_blank"}
* [GitHub Repository](https://github.com/italia/design-web-toolkit){:target="_blank"}

## Other useful design kits

Web development is only part of the service processing cycle according to the Design Guidelines. Designers Italia provides kits covering the entire design cycle of a service, from research to information architecture, passing through tests with users. For more information, you can start from the [Kit page on the Designers Italia website](https://designers.italia.it/kit/){:target="_blank"}.

For questions and discussions on these design kits, you can refer to the channel [#design-service](https://developersitalia.slack.com/messages/C9HKFKU9J/){:target="_blank"}.
