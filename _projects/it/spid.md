---
title: SPID
logo: /assets/images/logo-spid@2x.png
payoff: Sistema Pubblico di Identità Digitale
description: >
  Lo SPID è la carta d'identità digitale dei cittadini: una credenziale unica di accesso, con identità verificata, che può essere integrata
  secondo lo standard SAML su siti pubblici ma anche privati.
maintainers:
  - umbros
lang: it
order: 1
highlight: true
comingsoon: true
layout: project
socials:
  -
    name: facebook
    icon: facebook
    link: https://www.facebook.com/groups/agid.spid/
---

## Intro
SPID (Sistema Pubblico di Identità Digitale) è la soluzione che permette ai cittadini italiani di accedere a tutti i servizi online 
della Pubblica Amministrazione con un'unica Identità Digitale (username e password) utilizzabile da computer, tablet e smartphone.
Il cittadino può ottenere SPID tramite una serie di aziende private convenzionate (dette Identity Provider); una volta completata
la procedura di verifica (che certifica l'identità del richiedente), vengono rilasciate un set di credenziali che possono essere
utilizzate su tutti i siti (chiamati Service Provider).

Al momento, l'integrazione di SPID è consentita solo nei siti della Pubblica Amministrazione, ma presto verrà disciplinata e aperta
anche per i siti di aziende private. I vantaggi nell'adottare SPID saranno quindi molteplici: le banche e le assicurazioni, per esempio,
potrebbero riconoscere il cittadino che vuole creare un conto o stipulare una polizza semplicemente facendogli fare login.


**Roadmap**
Abbiamo in programma per il 2017 i seguenti sviluppi, per i quali vogliamo coinvolgere la comunità:

 * Creazione di plugin per i principali CMS (Wordpress, Drupal, Joomla, ecc.)
 * Scheletri di integrazione in ambito mobile (iOS, Android)
 * Testsuite di validazione dell'integrazioen di SPID
 * Ambiente di testing e validazione di SPID


## Documentazione
SPID utilizza un protocollo aperto (SAML 2) che può essere implementato applicando le regole tecniche ufficiali. A breve pubblicheremo
anche una serie di guide (vedi anche la roadmap qui sotto).

[Regole tecniche](http://spid-regole-tecniche.readthedocs.io/en/latest/)


## Codice sorgente
Ancora il codice pubblicato è molto poco, ma abbiamo grandi piani al riguardo (vedi roadmap):

[Bottone SPID di accesso, con scelta dell'IdP integrata](https://github.com/italia/spid-sp-access-button)

[Layout standard di IdP](https://github.com/italia/spid-idp-login-layout)

**Grafica**
Abbiamo pubblicato un po' di asset che tornano comodi durante l'integrazione:

[Icone, loghi e grafiche SPID](https://github.com/italia/spid-graphics)

[Bottone SPID (solo asset)](https://github.com/italia/spid-button)


## Collaborazione
Abbiamo aperto un'area di discussione nel nostro forum, per risolvere le problematiche tecniche di integrazione,
e a breve sarà disponibile anche un issue tracker pubblico.

[Forum di discussione tecnica](https://forum.developers.italia.it/c/spid)
