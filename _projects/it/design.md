---
title: Designers Italia
subtitle: Il Design System della Pubblica Amministrazione Italiana
logo: /assets/images/logo-design@2x.png
payoff: Designers dalla parte dei cittadini
description: designers.italia.it è il punto di riferimento per il design della pubblica amministrazione - linee guida, strumenti e un forum per favorire la collaborazione e promuovere il ruolo dello human centered design nello sviluppo dei servizi pubblici.

lang: it
order: 4
highlight: true
comingsoon: false
layout: project
maintainers:
  - matteo
  - lorenzo
  - danilo
  - davide
socials:
  -
    name: twitter
    icon: twitter
    link: //twitter.com/DesignersITA
  -
    name: behance
    icon: behance
    link: //behance.net/italia
---

## Intro
Il progetto Designers Italia ha anche l'obiettivo  di fornire una serie di strumenti operativi che possano aiutare le pubbliche amministrazioni ad applicare le [Linee Guida di Design](https://design-italia.readthedocs.io/it/stable/) dei servizi pubblici digitali.
L'idea di fondo è fonire dei kit, in alcuni casi del software, che facciano risparmiare tempo e denaro alle PA e che costuiscano una solida base di partenza per lo sviluppo di app (web e mobile) e siti internet.
Alcune di questi progetti sono già attivi o sono in via di attivazione, altri sono ancora in fase "esplorativa".
Per restare aggiornati sull'evoluzione dei progetti consigliamo di seguire la [roadmap sull'Interface Design](https://designers.italia.it/user-interface/) e di iscriversi alla [newsletter di Designers Italia](https://designers.italia.it/)

### Lo UI Kit
La community dei designers svilupperà un UI Kit basato su Sketch e costruito in maniera aperta e collaborativa su github.
La è utile anche per mappare i componenti che a tendere confluiranno nei vari kit che seguono. L'allineamento di Ui Kit e web toolkit è previsto entro fine 2017.

Repo
 [https://github.com/italia/design-ui-kit](https://github.com/italia/design-ui-kit)

Roadmap su [Google Spreadsheet](https://docs.google.com/spreadsheets/d/183hI6EBJo3EeiEcQPGZIe3hNN7EerTU5Udk6SkrH2OU/edit?usp=sharing)

Il progetto [su Behance](https://www.behance.net/gallery/53244611/UI-Kit-designers-italia)

_Progetti attivi_

## Italia Web Toolkit
Il toolkit rappresenta l'implementazione di riferimento delle linee guida di design della PA.
Contiene fogli di stile CSS, componenti Javascript accessibili e snippet HTML riutilizzabili per lo sviluppo del frontend di siti web della Pubblica Amministrazione conformi alle linee guida di design.

Il toolkit comprende:
- fogli di stile CSS
- componenti interattivi (Javascript)
- snippet e template HTML

Il repository è [https://github.com/italia/design-web-toolkit](https://github.com/italia/design-web-toolkit)

Per chi vuole utilizzare il toolkit o contribuire allo sviluppo è disponibile la [documentazione](https://italia.github.io/design-web-toolkit/)

Qui la descrizione completa delle [tecnologie utilizate](https://italia.github.io/design-web-toolkit/docs/tecnologie.html)

## designers.italia.it
Il sito [designers.italia.it](https://designers.italia.it/) è lo strumento a supporto della comunità italiana dei Designers.
Il sito costituisce un importante complemento alle linee guida di design. In esso verranno progressivamente pubblicati blog-post, altri kit non basati sul software, dettagli sui progetti specifici, etc.
Il sito è basato su (Jekyll)[https://github.com/jekyll/jekyll] ed è basato su [questo repository](https://github.com/italia/designers.italia.it), ovviamente pubblico.

_Progetti in fase di avvio_

## Italia React Toolkit
Il progetto, ancora in fase di definizione della roadmap, ha come obiettivo quello d costruire un set di componenti ed un layer di presentazione comune  basato su [React](https://github.com/facebook/react/) e coerente con le [Linee Guida di Design](https://design-italia.readthedocs.io/it/stable/).
Il focus del progetto saranno, almeno in una fase iniziale, le web app e/o le applicazione mobile ibride basate su [React Native](https://facebook.github.io/react-native/).
I pattern di interazione da sviluppare/portare in questo primo tempo saranno appunto quelli tipici di questi casi d'uso.
E' ancora in fase di valutazione la possibilità di utilizzare come base o come esempio i progetti [Ant Design](https://github.com/ant-design/ant-design/) o [UI Material](https://github.com/callemall/material-ui/tree/v1-beta)

## Italia Bootstrap 4 Toolkit
Il progetto, ancora nella fase di definizione della roadmap, ha come obiettivo quello di portare tutti i componenti e gli elementi di interfaccia presenti nell'_Italia Web Toolkit_ in un kit che abbia [Bootstrap4](https://github.com/twbs/bootstrap) come base, da poco entrato in beta.
Lo scopo principale è mettere a disposizione della comunità di sviluppatori, coerentemente con le [Linee Guida di Design](https://design-italia.readthedocs.io/it/stable/), la sintassi, i tool, il parco di plugin e le convenzioni tipiche di uno stumento da molti già consosciuto ed utilizzato, quale appunto Bootstrap.

Il repository di questo progetto è [https://github.com/italia/design-bootstrap4](https://github.com/italia/design-bootstrap4)


## I progetti futuri

Alcuni altri progetti sono in valutazione.
Molti di questi vedranno sicuramente la luce nel 2018, ma al momento non abbiamo ancora una roadmap precisa nè sono state allocate risorse o individuati i potenziali maintainers.
Per questo ogni contributo è benvenuto, sia anche semplicemente un suggerimento sulla impostazione iniziale o sul set di strumenti che andrebbero integrato. Di seguito la lista dei repositories che nel frattempo abbiamo già creato.

_Progetti in fase di valutazione_

### Italia Angular Toolkit
Ovviamente accanto a react saremmo felicid i mettere a disposizione un toolkit per lo sviluppo di web app basate su Angular. Non sono ancora state prese decisioni circa la versione, l'impostazione generale nè l'eventuale (e forse auspicata) compatibilità con il framework [ionic](https://github.com/ionic-team/ionic)

Repo [https://github.com/italia/design-angular](https://github.com/italia/design-angular)

### Template base per CMS

Alcuni dei progetti che seguono hanno come obiettivo quello di sviluppare un tema di partenza per i principali CMS. Per tema di partenza intendiamo un tema base o starter theme, una ossatura solida e basata su strumenti di build diffusi che consenta poi lo sviluppo di moduli e template dedicati a determinate situzione o content types.
Ovviamente sarebbe importante che il tema avesse come dipendenza uno dei toolkit che già sono stati presentati, in modo da non bloccare o rischiare di restare disallineati rispetto alla evoluzione dei componenti di UI.

### Tema Joomla secondo linee guida

Repo [https://github.com/italia/design-joomla-theme](https://github.com/italia/design-joomla-theme)

### Tema Drupal secondo linee guida

Repo [https://github.com/italia/design-drupal-theme](https://github.com/italia/design-drupal-theme)

### Tema Wordpress secondo linee guida

Repo [https://github.com/italia/design-wordpress-theme](https://github.com/italia/design-wordpress-theme)

### Tema Liferay secondo linee guida
[https://github.com/italia/design-liferay-theme](https://github.com/italia/design-liferay-theme)

### Tema Jekyll secondo linee guida
[https://github.com/italia/design-jekyll-theme](https://github.com/italia/design-jekyll-theme)

### I project leader di questo progetto
- [Il team di project leader su Github](https://github.com/orgs/italia/teams/design)
