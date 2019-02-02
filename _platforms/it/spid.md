---
title: SPID
subtitle: Sistema Pubblico di Identità Digitale
logo: /assets/images/logo-spid@2x.png
payoff: Sistema Pubblico di Identità Digitale
description: >
  Lo SPID è una credenziale unica di accesso, con identità verificata, che può essere integrata
  secondo lo standard SAML su siti pubblici ma anche privati.
maintainers:
  - umbros
lang: it
order: 1
highlight: true
comingsoon: false
layout: platform
github_team: spid
socials:
  -
    name: facebook
    icon: facebook
    link: https://www.facebook.com/groups/agid.spid/
---

## Intro
SPID (Sistema Pubblico di Identità Digitale) è la soluzione che permette ai cittadini italiani di accedere a tutti i servizi online della Pubblica Amministrazione con un'unica Identità Digitale utilizzabile da computer, tablet e smartphone.
Il cittadino può ottenere SPID tramite i Gestori di Identità (detti Identity Provider); una volta completata
la procedura di verifica (che certifica l'identità del richiedente), vengono rilasciate un set di credenziali che possono essere utilizzate su tutti i siti (chiamati Service Provider).

L'integrazione di SPID è consentita sia per i siti Pubblica Amministrazione, sia per i siti e servizi online dei privati. I vantaggi nell'adottare SPID sono quindi molteplici: le banche e le assicurazioni, per esempio, potrebbero riconoscere il cittadino che vuole creare un conto o stipulare una polizza semplicemente facendogli fare login.


**Roadmap**

Sono in seguenti sviluppi che coinvolgono anche la community:

 * Creazione di plugin per i principali CMS (Wordpress, Drupal, Joomla, ecc.)
 * Scheletri di integrazione in ambito mobile (iOS, Android)
 * Testsuite di validazione dell'integrazione di SPID
 * Ambiente di testing e validazione di SPID

## Documentazione
SPID utilizza un protocollo aperto (SAML 2) che può essere implementato applicando le regole tecniche ufficiali.

[Regole tecniche](https://docs.italia.it/italia/spid/spid-regole-tecniche/)


## Codice sorgente
Ancora il codice pubblicato è molto poco, ma abbiamo grandi piani al riguardo (vedi roadmap):

[Bottone SPID di accesso, con scelta dell'IdP integrata](https://github.com/italia/spid-sp-access-button)

[Layout standard di IdP](https://github.com/italia/spid-idp-login-layout)

[Playbook Ansible per SP](https://github.com/italia/spid-sp-playbook)

**Grafica**

Abbiamo pubblicato un po' di asset che tornano comodi durante l'integrazione:

[Icone, loghi e grafiche SPID](https://github.com/italia/spid-graphics)

[Bottone SPID (solo asset)](https://github.com/italia/spid-button)


## Collaborazione
Abbiamo aperto un'area di discussione nel nostro forum, per risolvere le problematiche tecniche di integrazione,
e a breve sarà disponibile anche un issue tracker pubblico.

[Forum di discussione tecnica](https://forum.italia.it/c/spid)

Facciamo anche delle call settimanali su Jitsi, qui trovato le informazioni
per partecipare. Chiunque sia interessato a seguire lo sviluppo può entrare:

[Videocall settimanale](https://forum.italia.it/t/spid-weekly-meeting/276)


