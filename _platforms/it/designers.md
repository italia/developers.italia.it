---
title: Designers Italia
subtitle: Il Design System della Pubblica Amministrazione Italiana
logo: /assets/images/logo-design@2x.png
payoff: Designers dalla parte dei cittadini
description: "Designers Italia è il punto di riferimento per la progettazione dei servizi della Pubblica Amministrazione: linee guida, strumenti, un design system e una community di designer per favorire la collaborazione e promuovere il ruolo dello human-centered design nello sviluppo dei servizi pubblici."
lang: it
ref:
  en: /en/designers
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
  - /it/design
---

## Intro

In questa pagina presentiamo il *design system* realizzato per la Pubblica Amministrazione italiana e gli strumenti di Designers Italia a disposizione degli sviluppatori.

L’obiettivo è fornire dei kit (documenti, guide, o software) che facciano risparmiare tempo e denaro alla Pubblica Amministrazione e che costituiscano una solida base di partenza per la progettazione e lo sviluppo di app e siti web moderni, inclusivi e manutenibili. Alcuni di questi progetti sono già attivi, altri sono invece previsti dalla [roadmap](https://designers.italia.it/roadmap/). Per restare aggiornati sull’evoluzione dei progetti consigliamo di iscriversi alla [newsletter di Designers Italia](https://designers.italia.it/).

Il sito [designers.italia.it](https://designers.italia.it/) contiene:

* I riferimenti alla versione corrente delle [Linee Guida di Design](https://designers.italia.it/guide/)
* Una serie di [kit per il design dei servizi della Pubblica Amministrazione](https://designers.italia.it/kit/)
* Il [blog](https://designers.italia.it/blog/) con case histories di utilizzo dei kit

Il codice sorgente del sito stesso si trova in un [repository GitHub](https://github.com/italia/designers.italia.it) aperto ad ogni tipo di contributo.

## UI Kit
Lo UI Kit è un set di componenti visive già pronte per assemblare l’interfaccia di un sito o di un app, seguendo le linee guida per i servizi digitali della Pubblica Amministrazione. Il Kit è costruito con Sketch e definito in maniera aperta e collaborativa su GitHub insieme alla community dei designer. Lo UI Kit è il punto di riferimento per i componenti e i pattern di UI destinati ad essere implementati con l'utilizzo dei Web Development Kit, mostrati di seguito.

* [Introduzione allo UI Kit](https://designers.italia.it/kit/ui-kit/)
* [Tutti i componenti e i pattern dello UI Kit](https://invis.io/RJFGS2UC3HS)
* [Repository GitHub](https://github.com/italia/design-ui-kit)

Molti progetti della Pubblica Amministrazione stanno già utilizzando lo UI Kit per definire le proprie interfacce, tra cui i modelli per i [siti dei comuni](https://github.com/italia/design-comuni-prototipi) e i [siti delle scuole](https://github.com/italia/design-scuole-prototipi).

Per domande e discussioni sullo UI Kit, sullo [Slack di Developers Italia](https://slack.developers.italia.it/) è disponibile e aperto a tutti il canale [#design-ui](https://developersitalia.slack.com/messages/C9N62GX8E/).

## Web Development Kit
I [Web Development Kit](https://designers.italia.it/kit/web-development-kit/) sono un insieme di strumenti per lo sviluppo front end di siti e applicazioni web. Sono librerie HTML, CSS e Javascript che permettono di realizzare siti conformi alle Linee Guida di Design e realizzano in codice quanto previsto dallo UI Kit. Allo stato attuale, il kit per lo sviluppo web più stabile, aggiornato e maturo è Bootstrap Italia, basato sulla libreria open-source Bootstrap 4.

### Bootstrap Italia

Il kit basato su Bootstrap 4 è il punto di riferimento per lo sviluppo dei progetti della Pubblica Amministrazione. Lo scopo principale è mettere a disposizione della comunità di sviluppatori, coerentemente con le [Linee Guida di Design](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/), la sintassi, gli strumenti, il parco di plugin e le convenzioni tipiche di uno strumento da molti già conosciuto ed utilizzato, quale appunto [Bootstrap 4](https://getbootstrap.com/).

* [Documentazione di Bootstrap Italia](https://italia.github.io/bootstrap-italia/)
* [Repository GitHub](https://github.com/italia/bootstrap-italia)
* [Esempio di template base da cui partire](https://italia.github.io/bootstrap-italia/docs/esempi/template-vuoto/)

Bootstrap Italia è già utilizzato su alcuni progetti con successo, come il [prototipo del sito del Comune di Cagliari](https://italia.github.io/design-comuni-prototipi/) e il sito [Docs Italia](https://docs.italia.it/). 

Altri progetti, come i siti per le scuole e i temi per i principali CMS (Wordpress, Drupal, Joomla, Plone, Entando, ecc.) e generatori di siti statici (Hugo, Jekyll, ecc.), sono in fase di valutazione o pianificazione. L'unico attualmente disponibile, per quanto ancora in lavorazione, è il [Tema Wordpress](https://github.com/italia/design-wordpress-theme/).

Per segnalare un sito, una app o un tema realizzato con Bootstrap Italia, [puoi aprire una issue](https://github.com/italia/bootstrap-italia/issues) sul repository di Bootstrap Italia o [scrivere un post sul forum](https://forum.italia.it/c/design/esempi-linee-guida)!

### Web Toolkit

Il Web Toolkit è stato il primo progetto concreto per aiutare la realizzazione di siti web per la PA; esso è già usato da molti siti web, in particolare alcuni comuni e ministeri. I feedback ricevuti sull’utilizzo del Web Toolkit da parte di enti e fornitori hanno contribuito alla definizione e alla creazione del kit di riferimento Bootstrap Italia.

Per questo, il Web Toolkit non è più oggetto di significativi aggiornamenti dal 2017.

* [Documentazione del Web Toolkit](https://italia.github.io/design-web-toolkit/)
* [Repository GitHub](https://github.com/italia/design-web-toolkit)

### Design React Kit

Il progetto ha come obiettivo quello di costruire un set di componenti ed un layer di presentazione comune basato su [React](https://github.com/facebook/react/). Il focus del progetto sono state, almeno in questa fase iniziale, le web app e/o le applicazioni mobile ibride basate su [React Native](https://facebook.github.io/react-native/). Il React Kit non è ancora completo in quanto molti dei componenti presenti su Bootstrap Italia non sono ancora stati convertiti per l’utilizzo come componenti React.

* [Documentazione del Design React Kit](https://italia.github.io/design-react-kit/)
* [Repository GitHub](https://github.com/italia/design-react-kit)

### Design Angular Kit

Il progetto ha come obiettivo quello di costruire un set di componenti ed un layer di presentazione comune basato su [Angular](https://angular.io/). Il kit non è ancora completo.

* [Documentazione del Design Angular Kit](https://italia.github.io/design-angular-kit/)
* [Repository GitHub](https://github.com/italia/design-angular-kit)

Le contribuzioni sui kit sono molto importanti, per cui se pensi di poter dare una mano con feedback, informazioni utili, segnalazioni di bug o codice, fatti avanti!

Per domande e discussioni sui Web Development Kit, sullo [Slack di Developers Italia](https://slack.developers.italia.it/) è disponibile il canale [#design-devel](https://developersitalia.slack.com/messages/C7VPAUVB3/).

## Altri kit utili per la progettazione

Lo sviluppo web è soltanto parte del ciclo di lavorazione di un servizio secondo le Linee Guida di Design. Designers Italia mette a disposizione Kit che coprono tutto il ciclo di progettazione di un servizio, dalla ricerca all'architettura dell'informazione, passando per i test con gli utenti. Per maggiori informazioni, puoi iniziare dalla pagina dei [Kit sul sito di Designers Italia](https://designers.italia.it/kit/).

Per domande e discussioni su questi kit di design, sullo [Slack di Developers Italia](https://slack.developers.italia.it/) è disponibile il canale [#design-service](https://developersitalia.slack.com/messages/C9HKFKU9J/).

