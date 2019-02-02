---
title: CIE
subtitle: Carta d'Identità Elettronica
logo: /assets/images/logo-cie@2x.png
payoff: Carta d'Identità Elettronica
description: >
  La nuova CIE è molto più che un documento d'identità: grazie al microprocessore RF può essere letta da dispositivi NFC (es. smartphone), usata per accedere ai varchi e per creare connessioni sicure (TLS) verso i servizi in rete.
lang: it
order: 9
highlight: true
comingsoon: false
layout: platform
github_team: cie
---

## Intro

La [Carta d'Identità Elettronica](http://www.cartaidentita.interno.gov.it)
(CIE) è giunta alla revisione 3.0, e viene già distribuita potenzialmente a
circa il 50% dei cittadini italiani. Entro l'estate 2018, tutte i comuni
italiani rilasceranno la CIE.

CIE non è solo un documento d’identità, ma una tecnologia utile per la
realizzazione di nuovi servizi offerti ai cittadini, fruibili anche tramite
smartphone e tablet, grazie alla presenza di un microchip NFC. Se pensate che
ogni italiano, entro 10 anni, avrà nelle proprie tasche un documento d'identità
che è anche un token NFC unico e sicuro, è facile immaginare numerose applicazioni:

 * Varchi elettronici a basso livello di sicurezza, come per esempio l'accesso alla palestra,
   semplicemente avvicinando la carta ad un lettore.

 * Attraversamento veloce e sicuro di varchi ad alto livello di sicurezza,
   come per esempio l'accesso agli stadi.

 * Accesso al trasporto pubblico, magari associato ad un portafoglio virtuale
   per pagare il biglietto.

 * Conferma della presenza sul luogo di lavoro.

 * Check-in in un hotel, senza bisogno di fare fotocopie.

Tutto ciò verrà reso possibile grazie alle funzionalità di identificazione
e sicurezza contenute nel microprocessore, le cui specifiche sono
aperte e disponibili sia sul portale ufficiale del Ministero degli Interni,
sia in questa pagina.

Su Developers Italia, infatti, troverai tutte le informazioni tecniche e le librerie
software per iniziare subito a sviluppare nuovi servizi. Sul forum, avrai anche
accesso diretto ai progettisti della CIE per avere tutti i chiarimenti tecnici
necessari.

## Documentazione

Attualmente, la documentazione è disponibile in PDF ma la stiamo convertendo
secondo lo standard di Developers Italia:

[Sezione di informazioni tecniche sul sito ufficiale](http://www.cartaidentita.interno.gov.it/caratteristiche-del-documento/)

[Specifiche del microprocessore](http://www.cartaidentita.interno.gov.it/wp-content/uploads/2016/07/cie_3.0_-_specifiche_chip.pdf)

[Progettazione di servizi basati su CIE (in arrivo)]()


## Codice sorgente

Abbiamo rilasciato in beta il primo middleware della CIE per Windows, che
esporta le interfacce CSP e PKCS11. Sono in fase di sviluppo i middleware
per macOS e Linux, e una libreria di supporto per Android:

[Middleware per Windows](https://github.com/italia/cie-middleware)


## Collaborazione

Utilizziamo il nostro forum per discutere delle tematiche tecniche, per la
progettazione di nuovi servizi, e per riportare problemi. Contattaci pure
nel canale dedicato alla CIE.

[Sezione CIE sul Forum](https://forum.italia.it/c/cie)


