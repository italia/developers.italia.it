---
title: Docs Italia
subtitle: Public documents, made digital
logo: /assets/images/logo-docs-italia.png
external_website: https://docs.italia.it
payoff: Public documents, made digital
description: "Docs Italia is the tool for publishing technical and legal documents, offering to citizens the ability to read and comment easily"
lang: en
ref:
  it: /it/docs-italia
highlight: true
order: 5
layout: platform
github_team: docs-italia
---

## Intro

[Docs Italia](https://docs.italia.it/){:target="_blank"} is the place where public digital documents can be published and browsed. It offers to the public entities a secure and feature-complete platform for publishing documents and it offers to citizens tools for searching and browsing documents, that can be accessed from any device.

Docs Italia simplifies the publishing process: documents use a version control system as data source, encouraging collaborative editing and allowing the community to perform analysis and comparisons between different versions.

The generation tool behind Docs Italia is [Sphinx](https://www.sphinx-doc.org/en/master/#){:target="_blank"}, which supports several markup languages among which _RestructuredText_ and _MarkDown_. We're working for improving the platform according to the needs detected during the first test year: the document converter, the publishing flow and search/browsing tools. We use [Pandoc](https://pandoc.org/){:target="_blank"} for converting documents from the most used formats, like `.docx` and `.odt`.

A first relase of Docs Italia was completed during 2018, and more features are scheduled for the next months. he platform is based on the well known open source project [ReadTheDocs](https://readthedocs.org/){:target="_blank"}, which serves as a basis for secure identity management of organizations and editors.

**Roadmap**

These are the main tasks scheduled for the near future:

* Improvement of the search engine based on **ElasticSearch** by adding the ability to filter by popularity, publisher, tags, projects.
* Finalization of the **API** for getting data and metadata of documents.
* Handling of controlled vocabularies for **tagging** contents and improvement of navigation between related documents.
* Improvement of the **frontend interface**, according to the [designs](https://invis.io/AQMX2Y2GTH2){:target="_blank"}.
* Simplifcation of the onboarding process and the administration/publishing backoffice.
* Improvement of the **infrastructure** and log handling, and improvement of disaster recovery strategy.
* Whitelabel features for organizations: we want to enable organizations to customize their page and use their own domains as well as embed contents from Docs Italia in their website.

If you have ideas for this project, or you think you can help about these features, contact us in the forum or in Slack. Everyone can contribute!

<a class="btn btn-primary" href="https://forum.italia.it/" target="_blank"><i class="it-horn" /> Enter the forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C9T4ELD4G" target="_blank"><i class="it-comment" /> Chat on Slack (#docs-italia)</a>
<a class="btn  btn-outline-primary" href="https://slack.developers.italia.it/" target="_blank"><i class="it-comment" /> Sign up on Slack</a>

## Source code

Il codice sorgente di Docs Italia è diviso in alcuni repository a seconda del dominio su cui insistono:

### Platform

- The [Docs Italia platform](https://github.com/italia/docs.italia.it){:target="_blank"}, a fork of ReadTheDocs, written in Python and Django.
- The [Ansible scripts](https://github.com/italia/docs-italia-deploy-scripts){:target="_blank"} for deploying the platform.

### Converter

- The Django app with the [web converter](https://github.com/italia/docs-italia-convertitore-web){:target="_blank"}.
- [Pandoc filters](https://github.com/italia/docs-italia-pandoc-filters){:target="_blank"}.
- [Commands for converting documents](https://github.com/italia/docs-italia-comandi-conversione){:target="_blank"} with Pandoc (in Haskell).

### Documet

- A [starter kit](https://github.com/italia/docs-italia-starter-kit){:target="_blank"} containing files for publishing new documents.
- The [Sphinx theme](https://github.com/italia/docs-italia-theme){:target="_blank"} which is applied by default to documents.
- [Document tempates](https://github.com/italia/docs-italia-template-conversione){:target="_blank"} in several formats.

Each document visible on [Docs Italia](https://docs.italia.it/){:target="_blank"} has a corresponding GitHub repository, whose link is included in the website header.

## Documentation

Documentation for Docs Italia is published in Docs Italia itself! ;-)

A special document is the **Docs Italia Guide**, which explains how each public organization can create its account and publish a document. If you want to publish contents on Docs Italia you can start here:

- [Docs Italia Guide](https://docs.italia.it/italia/docs-italia/docs-italia-guide/){:target="_blank"}

In the document you'll find the contacts of our tech writers who can help you in setting up the platform for your organization and writing or converting documents.

More technical information can be found in the README files of single repositories, and in the [main repository wiki](https://github.com/italia/docs.italia.it/wiki){:target="_blank"}.
