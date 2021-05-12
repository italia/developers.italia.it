---
title: SPID
subtitle: Sistema Pubblico di Identità Digitale
logo: /assets/images/logo-spid@2x.png
external_website: https://www.spid.gov.it
payoff: Sistema Pubblico di Identità Digitale
description: >
  Lo SPID è una credenziale unica di accesso, con identità verificata, integrabile da siti pubblici e privati.
lang: it
ref:
  en: /en/spid
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
    - name: Agenzia per l'Italia Digitale
      url: https://www.agid.gov.it/
resources:
  - Documentazione:
    - title: Regole Tecniche consolidate
      url: https://docs.italia.it/italia/spid/spid-regole-tecniche
      icon: file
      desc: Le regole tecniche di SPID con applicati tutti gli avvisi e le correzioni ai refusi, consultabili comodamente su Docs Italia
    - title: Metadata degli Identity Provider
      url: https://registry.spid.gov.it/identity-providers
      icon: file
      desc: Metadata degli Identity Provider, che i Service Provider devono mantenere aggiornati
    - title: Modulistica, circolari e deliberazioni
      url: https://www.agid.gov.it/it/piattaforme/spid
      icon: file
      desc: Sito di AGID contenente la modulistica, i listini, le convenzioni e le deliberazioni che riguardano SPID
  - SDK:
    - title: SDK per PHP (basata su SimpleSAMLphp)
      icon: github
      url: https://github.com/italia/spid-php
      desc: Script per l'integrazione di SPID in applicazioni PHP attraverso l'installazione guidata di SimpleSAMLphp
    - title: SDK per PHP
      icon: github
      url: https://github.com/italia/spid-php-lib
      desc: Libreria nativa per l'integrazione di SPID in applicazioni PHP
    - title: SDK per C#
      icon: github
      url: https://github.com/italia/spid-aspnetcore
      desc: Libreria nativa per l'integrazione di SPID in applicazioni C#
    - title: SDK per .NET
      icon: github
      url: https://github.com/italia/spid-dotnet-sdk
      desc: Libreria nativa per l'integrazione di SPID in applicazioni .NET
    - title: SDK per Django
      icon: github
      url: https://github.com/italia/spid-django
      desc: Libreria nativa per l'integrazione di SPID in applicazioni Django (Python)
    - title: SDK per Express.js
      icon: github
      url: https://github.com/italia/spid-express
      desc: Libreria nativa per l'integrazione di SPID in applicazioni Node/Passport (Javascript)
    - title: SDK per Spring
      icon: github
      url: https://github.com/italia/spid-spring
      desc: Libreria nativa per l'integrazione di SPID in applicazioni Java Spring
    - title: SDK per Ruby
      icon: github
      url: https://github.com/italia/spid-ruby
      desc: Libreria nativa per l'integrazione di SPID in applicazioni Ruby
    - title: SDK per Ruby on Rails
      icon: github
      url: https://github.com/italia/spid-rails
      desc: Libreria nativa per l'integrazione di SPID in applicazioni Ruby on Rails
    - title: SDK per Sinatra
      icon: github
      url: https://github.com/italia/spid-sinatra
      desc: Libreria nativa per l'integrazione di SPID in applicazioni Sinatra (Ruby)
    - title: SDK per Android realizzata da INPS
      icon: github
      url: https://github.com/INPS-it/SPIDlibraryAndroid
      desc: Libreria nativa per l'integrazione di SPID in applicazioni mobile Android (Java)
    - title: SDK per iOS realizzata da INPS
      icon: github
      url: https://github.com/INPS-it/SPIDlibraryIOS
      desc: Libreria nativa per l'integrazione di SPID in applicazioni mobile iOS
    - title: SDK per Wordpress
      icon: github
      url: https://github.com/italia/spid-wordpress
      desc: Plugin nativo per l'integrazione del login con SPID in siti Wordpress (PHP)
    - title: SDK per Laravel
      icon: github
      url: https://github.com/italia/spid-laravel
      desc: Libreria nativa per l'integrazione di SPID in applicazioni Laravel (PHP)
    - title: SDK per Symfony
      icon: github
      url: https://github.com/italia/spid-symfony-bundle
      desc: Libreria nativa per l'integrazione di SPID in applicazioni Symfony (PHP)
    - title: SDK per Drupal
      icon: github
      url: https://github.com/italia/spid-drupal-module
      desc: Libreria nativa per l'integrazione di SPID in applicazioni Drupal (PHP)
    - title: SDK per Perl
      icon: github
      url: https://github.com/italia/spid-perl
      desc: Libreria nativa per l'integrazione di SPID in applicazioni Perl
    - title: SDK per Dancer2
      icon: github
      url: https://github.com/italia/spid-perl-dancer2
      desc: Libreria nativa per l'integrazione di SPID in applicazioni Dancer2 (Perl)
    - title: SDK per Go
      icon: github
      url: https://github.com/italia/spid-go
      desc: Libreria nativa per l'integrazione di SPID in applicazioni Golang
    - title: Esempio con Shibboleth, Nginx e Ansible
      url: https://github.com/italia/spid-ansible-shibboleth-example
      icon: github
      title: Esempio di configurazione di Shibboleth con Nginx tramite un playbook Ansible
  - Proxy:
    - title: IdentityPython SATOSA
      icon: github
      url: https://github.com/italia/Satosa-Saml2Spid
      desc: Python Proxy con immagine Docker per abilitare dei SP SAML2 tradizionali in SPID
    - title: Keycloak
      icon: github
      url: https://github.com/italia/keycloak-spid-provider
      desc: Keycloak OIDC to SAML2 SPID Proxy
    - title: Proxy con Shibboleth
      icon: github
      url: https://github.com/robertogallea/spid-idp-proxy-shibboleth
      desc: Shibboleth IDP con possibilità di delegare l'autenticazione ad un IDP SPID
    - title: IAM in Python
      url: https://github.com/italia/spid-sp-sapspid
      icon: github
      desc: Applicativo di Identity Access Management compatibile con SPID sviluppato in Python
  - Risorse grafiche:
    - title: Bottone "Entra con SPID"
      icon: github
      url: https://github.com/italia/spid-sp-access-button
      desc: Il bottone da inserire nel sito del Service Provider, con integrata la scelta dell'Identity Provider
    - title: Interfacce grafiche per Identity Provider
      icon: github
      url: https://github.com/italia/spid-idp-login-layout
      desc: Modelli in HTML statico per le interfacce degli Identity Provider
    - title: Icone, loghi e materiali grafici
      icon: github
      url: https://github.com/italia/spid-graphics
      desc: Questo repository contiene il logo di SPID, i loghi degli Identity Provider ed altri materiali grafici
    - title: Bottone "Entra con SPID" (versione smart)
      icon: github
      url: https://github.com/italia/spid-smart-button
      desc: Nuova versione (non ancora ufficiale) del bottone "Entra con SPID", con integrata la scelta dell'Identity Provider
  - Tool:
    - title: Identity Provider dimostrativo
      url: https://github.com/italia/spid-testenv2
      icon: github
      desc: Ambiente di test eseguibile in locale
    - title: Identity Provider per il collaudo tecnico
      url: https://github.com/italia/spid-saml-check
      icon: github
      desc: Ambiente di test utilizzato da AgID per il collaudo degli SP in fase di onboarding, eseguibile in locale
    - title: Creazione certificati SAML2
      url: https://github.com/italia/spid-compliant-certificates
      icon: github
      desc:  Tool per la creazione di certificati X.509 conformi all'Avviso SPID n.29 v3
    - title: SPID Metadata builder
      url: https://github.com/italia/spid-metadata-builder
      icon: github
      desc:  Tool per la creazione dei metadati SPID di un SP
    - title: SPID Metadata signer
      url: https://github.com/italia/spid-metadata-signer
      icon: github
      desc:  Tool per la firma dei metadati SPID di un SP
    - title: Firefox SAML Tracer plugin
      url: https://addons.mozilla.org/en-US/firefox/addon/saml-tracer/
      icon:
      desc: Un componente aggiuntivo di Firefox per la visualizzazione dei messaggi SAML inviati tramite il browser durante il Single Sign-On e il Single Logout.
    - title: Chrome SAML
      url: https://chrome.google.com/webstore/detail/saml-chrome-panel/paijfdbeoenhembfhkhllainmocckace
      icon:
      desc: Un componente aggiuntivo di Chromium per la visualizzazione dei messaggi SAML inviati tramite il browser durante il Single Sign-On e il Single Logout.
    - title: SAML Developer Tools
      url: https://www.samltool.com
      icon:
      desc: Onelogin SAML2 tools
---

## Intro

SPID (Sistema Pubblico di Identità Digitale) è la soluzione che permette ai cittadini italiani di accedere a tutti i servizi online della Pubblica Amministrazione con un'unica Identità Digitale utilizzabile da computer, tablet e smartphone.
Il cittadino può ottenere SPID tramite i Gestori di Identità (detti *Identity Provider*); una volta completata la procedura di autenticazione il cittadino accede ai Fornitori di Servizi (detti *Service Provider*).

**Vantaggi per il cittadino:**

- Un'unica credenziale per tutti i siti pubblici e privati, sicura e facile da ricordare
- Il processo di riconoscimento e rilascio si effettua una volta sola e vale per sempre
- SPID è gratuito

**Vantaggi per il Service Provider:**

- Certezza dell'identità dell'utente
- Nessuna necessità di gestire un processo di registrazione/riconoscimento, con risparmio dei relativi costi
- Attributi qualificati (data/luogo di nascita, sesso, e-mail, telefono ecc.)
- Altri attributi già popolati dall'utente (indirizzo di residenza ecc.)

L'integrazione di SPID è consentita sia per i siti della Pubblica Amministrazione (che ne beneficiano gratuitamente), sia per i siti e servizi online dei privati (che pagano il servizio). I vantaggi nella sua adozione sono quindi molteplici: le banche e le assicurazioni, per esempio, potrebbero riconoscere il cittadino che vuole creare un conto o stipulare una polizza semplicemente facendogli fare login tramite SPID.

## Come diventare Service Provider

1. Leggi la [documentazione tecnica](https://docs.italia.it/italia/spid/spid-regole-tecniche){:target="_blank"}.
2. Usa e contribuisci ai componenti open source che trovi in [Developers Italia](https://github.com/italia?q=spid){:target="_blank"}.
3. Usa un Identity Provider di test come [spid-saml-check](https://github.com/italia/spid-saml-check){:target="_blank"} oppure [spid-testenv2](https://github.com/italia/spid-testenv2){:target="_blank"} per simulare il flusso di autenticazione e verificare che la tua implementazione sia corretta.
4. Entra in contatto con gli altri sviluppatori in [Slack](https://slack.developers.italia.it/){:target="_blank"}.
5. Segui la procedura di accreditamento [descritta nel sito di AGID](https://www.spid.gov.it/come-diventare-fornitore-di-servizi-pubblici-e-privati-con-spid){:target="_blank"}.
6. Se stai riscontrando problemi con la procedura di accreditamente contatta l'[HelpDesk AgID SPID](mailto:spid.tech@agid.gov.it).

SPID è basato sul protocollo SAML2, per configurarlo è possibile scegliere una tra le molteplici soluzioni disponibili:

- integrando direttamente nell'applicazione uno dei tanti SDK nativi presenti in [Developers Italia](https://github.com/italia?q=spid){:target="_blank"};
- applicando al web server Apache un middleware come [Shibboleth Service Provider](https://github.com/italia/spid-sp-shibboleth){:target="_blank"};
- aggiungendo un componente esterno di Identity Access Management come ad esempio un [Proxy](https://github.com/italia?q=spid+proxy&type=&language=&sort=){:target="_blank"}.

È necessario inoltre integrare nel sito il bottone ufficiale "[Entra con SPID](https://github.com/italia/spid-sp-access-button){:target="_blank"}", che permette all'utente di selezionare il proprio Identity Provider. L'applicazione del Service Provider genera di conseguenza una *AuthnRequest* che viene poi inviata all'Identity Provider attraverso un HTTP Redirect o POST del browser.

Il Service Provider deve aggiornare periodicamente i metadati degli Identity Provider in caso di aggiunta, revoca, modifica o aggiornamento del certificato di uno di essi, e deve riportare tale modifica anche nel bottone "Entra con SPID".
I metadati degli Identity Provider sono disponibili presso lo [SPID registry](https://registry.spid.gov.it/){:target="_blank"}.

## Come contribuire

**La community di Developers Italia ha realizzato un'ampia gamma di componenti open source (SDK, esempi di codice, IAM Proxy, tools) pronti per l'uso.** Chiunque può contribuire al miglioramento dei componenti esistenti o aiutare a svilupparne di nuovi. È importante tenere presente che le risorse messe a disposizione della community non sono da intendersi come normative ma solo come supporto, esempio e aiuto integrativo per gli sviluppatori.

## Canali

<a class="btn btn-primary" href="https://forum.italia.it/c/spid" target="_blank"><i class="it-horn" /> Entra nel forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C73R3UQE8" target="_blank"><i class="it-comment" /> Dialoga su Slack (#spid)</a> <a href="https://slack.developers.italia.it/" target="_blank"><small>(registrati su Slack)</small></a>
