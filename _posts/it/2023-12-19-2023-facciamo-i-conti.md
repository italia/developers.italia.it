---
layout: post
title: "2023: facciamo i conti!"
subtitle: "Una breve sintesi di quanto accaduto nel corso dell’anno"
date: 2023-12-19 11:00:00 +0200
tags: developers community opensource partecipazione
categories: news
author: Michela Gabrieli
image: https://developers.italia.it/assets/images/posts/2023-12-19/osor-award-developers-2023.jpg
locale: it
---


Un anno ricco di sfide e opportunità: il 2023 si è rivelato un periodo
importante per la nostra comunità e le nostre iniziative. Hai perso qualche
aggiornamento? In questa news ripercorriamo insieme i temi chiave e le attività
a cui ci siamo dedicati.

![OSOR Award - Finalisti 2023](/assets/images/posts/2023-12-19/osor-award-developers-2023.jpg)

### Catalogo del riuso

Durante il 2023 il **[Catalogo del
riuso](https://developers.italia.it/it/software)**, che include le soluzioni
messe a riuso dalla Pubblica Amministrazione e il software open source di terze
parti destinato alla PA, è cresciuto. Sono oltre 2.500 le PA che hanno
dichiarato di riusare il software reso disponibile da altre pubbliche
amministrazioni o da terze parti. Oggi il Catalogo ospita **403 soluzioni**, il
58% delle quali è stato riusato da almeno una PA.

Proprio per migliorare l’esperienza d’uso del Catalogo, i repository di software
pubblico devono contenere un file
**[publiccode.yml](https://docs.italia.it/italia/developers-italia/publiccodeyml/it/master/)**
che comprende tutte le informazioni utili al popolamento. Quest’anno lo standard
di metadati da noi ideato con lo scopo di rendere più facilmente individuabili
e, di conseguenza, riutilizzabili le soluzioni delle pubbliche amministrazioni è
stato riconosciuto tra i [6 progetti finalisti dell’**EU Public Services Open
Source Achievement Awards
2023**](https://developers.italia.it/it/news/2023/10/20/premio-osor-2023-publiccode-yml-tra-i-progetti-finalisti).
L’iniziativa, promossa dall’**Osservatorio Open Source (OSOR) della Commissione
europea**, ha l’obiettivo di individuare e presentare le eccellenze nel campo
delle soluzioni e delle iniziative open source sviluppate da o per le pubbliche
amministrazioni in Europa. Si tratta quindi di un riconoscimento significativo
per tutti noi che quotidianamente ci impegniamo per innovare il settore del
software libero nella PA, promuovendo l’avanzamento tecnologico e la
collaborazione aperta.

Intanto, per avere un Catalogo sempre più flessibile, interoperabile e
completamente basato su API (interfacce di programmazione delle applicazioni),
abbiamo rifattorizzato il crawler del software e creato un nuovo strumento per
aprire issue automaticamente sui repository con errori nei file publiccode.yml.
Il risultato è una semplificazione del sistema.

### Interoperabilità, ontologie e vocabolari controllati

La sezione dedicata alle API è stata evoluta per descrivere in modo più completo
l'**[ecosistema interoperabilità e le sue
componenti](https://www.developers.italia.it/it/interoperabilita/)**. Nella
sezione piattaforme è stata inserita una scheda relativa alle informazioni e
agli strumenti riguardanti la **[Piattaforma Digitale Nazionale Dati
(PDND)](https://developers.italia.it/it/pdnd/)**, che abilita l'interoperabilità
dei sistemi informativi degli enti e dei gestori di servizi pubblici. Il nostro
intento, in collaborazione con PagoPA, è stato quello di fornire maggiori
informazioni e supporto ai tecnici che devono realizzare servizi interoperabili
catalogati e autorizzati.

Analogamente, per fornire una documentazione dedicata al personale tecnico della
Pubblica Amministrazione e dei fornitori, abbiamo collaborato con l’Autorità
Nazionale Anti Corruzione (ANAC) alla produzione di una scheda per la
**[Piattaforma dei Contratti
Pubblici](https://developers.italia.it/it/piattaforma-contratti-pubblici/)**,
punto centrale della digitalizzazione degli appalti prevista dal **[Nuovo Codice
Degli
Appalti](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-03-31;36)**.

Per supportare l’adozione di sistemi interoperabili, assieme all’Istituto
Nazionale di Statistica (ISTAT), e con la collaborazione di esperti del
Consiglio Nazionale delle Ricerche (CNR), abbiamo contribuito a mettere a
disposizione di soggetti pubblici e privati
**[schema.gov.it](https://schema.gov.it)**: il Catalogo nazionale per
l'interoperabilità semantica dei dati facilita la creazione di servizi digitali
che, sfruttando le potenzialità della semantica dei dati, permette la
realizzazione di API per la condivisione di informazioni tramite PDND.

L’accesso alle risorse del catalogo è libero, ma un uso più frequente è
prevedibile dal parte degli sviluppatori e i ricercatori di enti pubblici e
privati. I principali contributori al catalogo sono gli enti pubblici che stanno
investendo in servizi digitali da esporre nella PDND e che potrebbero
beneficiare del riuso di risorse semantiche già esistenti. Attualmente sul
catalogo sono presenti oltre 100 risorse semantiche messe a disposizione da
diverse amministrazioni centrali.

### Design system del Paese

Non possiamo tralasciare il lavoro realizzato sul **[design system del
Paese](https://designers.italia.it/design-system/come-iniziare/)**, per la cura
della documentazione presente nel sito Designers Italia, e per l’evoluzione di
tutto l’ecosistema di risorse di sviluppo. In particolare abbiamo curato il
framework **[Bootstrap Italia](https://github.com/italia/bootstrap-italia)**
([rilasci](https://github.com/italia/bootstrap-italia/releases)), lo strumento a
disposizione degli sviluppatori per realizzare interfacce ed esperienze di siti
e servizi pubblici digitali, e la sua
[documentazione](https://italia.github.io/bootstrap-italia/). Con l'aiuto della
community abbiamo evoluto i kit “community-driven”
**[React](https://github.com/italia/design-react-kit)** e
**[Angular](https://github.com/italia/design-angular-kit/)** che arriveranno a
una versione stabile nel primo trimestre del prossimo anno. Al contempo, ci
siamo impegnati a curare e aggiornare i repository dedicati ai [modelli di siti
e servizi per i Comuni e le scuole](https://designers.italia.it/modelli/). In
tutto ciò abbiamo scelto di considerare l'**accessibilità by design parte di
ogni processo e risorsa** per abilitare PA e fornitori a realizzare esperienze
digitali sempre più semplici, inclusive ed efficaci.

### Community

Riteniamo di grande importanza il **punto di vista della community**. Per questa
ragione, anche quest'anno, in collaborazione con [Designers
Italia](https://designers.italia.it/), abbiamo somministrato un questionario. Le
preziose [informazioni
raccolte](https://developers.italia.it/it/news/2023/07/11/come-cambia-la-community-di-developers-italia-e-designers-italia)
sono e saranno fondamentali per migliorarci costantemente.

Anche per questo, sulla base delle indicazioni raccolte, e nell’intento di
promuovere contenuti utili ai professionisti che ci seguono, abbiamo pubblicato
una serie di contenuti sui canali di comunicazione di Developers Italia
([Medium](https://medium.com/developers-italia) e
[NoBlogo](https://noblogo.org/developers-italia/)) dedicati al **cloud** e in
particolare le [modalità di gestione di una migrazione al
cloud](https://medium.com/developers-italia/come-gestire-una-migrazione-al-cloud-d8b7820177a8),
le [buone pratiche per le
amministrazioni](https://medium.com/developers-italia/la-responsabilit%C3%A0-ai-tempi-del-cloud-buone-pratiche-per-le-amministrazioni-ed42b30fcb4b),
l’[innovazione trasparente: re-architect o refactoring di applicazioni per il
cloud](https://medium.com/developers-italia/linnovazione-trasparente-re-architect-o-refactoring-di-applicazioni-per-il-cloud-c94f53df1c8d)
e il [monitoraggio dei
costi](https://medium.com/developers-italia/il-monitoraggio-dei-costi-cloud-82aae39a2e81).
Sempre nell’intento di promuovere buone pratiche, abbiamo partecipato al
**[Codemotion Workshop Fest
2023](https://developers.italia.it/it/news/2023/03/21/Codemodio-WS-Fest-Guida-galattica-per-maintainer)**,
e condotto il workshop “**[A European Open Source Catalogue for the Public
Sector](https://developers.italia.it/it/news/2023/05/29/developers-italia-a-stoccolma-punto-futuro-digitale-europa)**”
tenutosi a Stoccolma, sulla necessità di un catalogo europeo di applicazioni
open source.

Il 2023 è stato anche l’anno in cui abbiamo iniziato a comunicare attraverso un
nuovo canale aggiuntivo: [Mastodon](https://mastodon.uno/@developersITA), una
soluzione decentralizzata e basata su software libero.

Non poteva poi mancare, come da consuetudine, la nostra **[partecipazione
all’Hacktoberfest](https://developers.italia.it/it/news/2023/10/12/hacktoberfest-2023)**,
un’occasione globale che raduna appassionati di open source da tutto il mondo.
Durante l’intero mese di ottobre, gli interessati, a prescindere dal livello di
esperienza, hanno avuto l’opportunità di confrontarsi e divertirsi contribuendo
allo sviluppo dei servizi pubblici digitali come SPID, publiccode.yml, OpenAPI
(come il validatore di API), il sito e le API di Developers Italia, le attività
legate allo sviluppo front-end nei repository di Designers Italia, con sfide che
hanno coinvolto Bootstrap Italia e Design React Kit.

### Verso il nuovo anno!

Concludiamo questo viaggio attraverso il 2023 con un sorriso e lo sguardo fisso
verso l'orizzonte del 2024. L'anno trascorso ci ha regalato sfide da superare,
momenti di crescita e speranza per un futuro in continuo divenire, augurandoci
di poter contribuire ulteriormente allo sviluppo di servizi digitali pubblici.

Buone feste!
