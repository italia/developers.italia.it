---
title: Publish software for Public Administrations
lang: en
ref:
  it: /it/riuso/pubblicazione
layout: internal-long
subtitle:
see_also:
  - label: Software acquisition
    url: /en/reuse/acquisition
---

When an Italian Public Administation develops or commissions software it must
comply with the [art. 69 of the Codice dell'Amministrazione
Digitale](https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2017-12-13/_rst/capo6_art69.html)
which mandates to publish it in a public open repository covered with an open license
in order to allow other administrations to reuse it.

Such a process is described in details in the [Guidelines]({{
site.url_lineeguidariuso_en }}) issued by the Agency for Digital Italy. The
guidelines technical attachments are formulated to be directly
included in contracts and specifications related to software development,
software modification and maintenance, in order to fulfil the
release obligation.

The process brief:

- The administration must always obtain **full ownership** of the software.
- The software must be published in a **public repository** (e.g., GitHub,
  GitLab, BitBucket etc., also on-premise installations providing that they are **publicly
  accessible**).
- The software must be covered by one of the **[licenses approved by the Open
  Source Initiative](https://opensource.org/licenses)** (the guidelines suggest
  some in particular, in order to allow maximum reusability).
- The repository must contain the file `publiccode.yml` which describes the
  software characteristics and allows to populate the Developers Italia
  [catalogue](/en/software).

## publiccode.yml

Every public software repository must contain a file named `publiccode.yml`
containing all the information useful to populate the Developers Italia
[catalogue](/en/software). publiccode.yml is a standard originally created in
Italy but it is in the process of being adopted internationally.

<a class="btn btn-white btn-outline-primary" href="https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/"><svg class="icon icon-sm icon-primary"><use xlink:href="/assets/svg/sprite.svg#it-file"></use></svg> publiccode.yml specifications</a>
<a class="btn btn-primary" href="https://publiccode-editor.developers.italia.it/"><svg class="icon icon-sm icon-white"><use xlink:href="/assets/svg/sprite.svg#it-pencil"></use></svg> Editor/validator</a>

## Catalogue publication

The catalogue publication, as well as the updates transposition, is **automatic**
since Developers Italia, through a *crawler*, will periodically find and import
all the repositories containing a `publiccode.yml` file.


**Please note:** to allow the Developers Italia crawler to find its own
repositories, each administration must **register the code hosting account**
used to publish all its projects (e.g., the organization's GitHub account). This
is a one-off operation. See the [guidelines](https://docs.italia.it/italia/developers-italia/gl-acquisition-and-reuse-software-for-pa-docs/en/stabile/attachments/annex-A-Guide-to-publishing-software-as-open-source.html#identifying-the-code-hosting-tool) for more information.

<a class="btn btn-white btn-outline-primary" href="https://docs.italia.it/italia/developers-italia/policy-inserimento-catalogo-docs/it/stabile/"><svg class="icon icon-sm icon-primary"><use xlink:href="/assets/svg/sprite.svg#it-file"></use></svg> Rules of the software catalog</a>
<a class="btn btn-primary" href="https://onboarding.developers.italia.it/"><svg class="icon icon-sm icon-white"><use xlink:href="/assets/svg/sprite.svg#it-plus-circle"></use></svg> Code hosting account registration form</a>

## Third party open source software

The third party open source software, such as those which are not put into
reuse by the Public Administration but are potentially interesting for the
public sector, can be included in the Developers Italia catalogue. As such, it is
necessary to:

1. fill and include a `publiccode.yml` file in the repository (leaving the `codiceIPA` key empty);
2. open a new issue on the Catalog's repository using [this page](https://github.com/italia/developers.italia.it/issues/new?assignees=&labels=&projects=&template=add_new_software.yaml)
