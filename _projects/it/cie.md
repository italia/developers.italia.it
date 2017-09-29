---
title: CIE
subtitle: Carta d'Identità Elettronica
logo: /assets/images/logo-cie@2x.png
payoff: Carta d'Identità Elettronica
description: >
  La nuova carta d'identità è molto più che un pezzo di plastica: puoi comunicarci via NFC, per usarla per varchi d'ingresso o come certificato digitale d'identità (compatibile SSL).
lang: it
order: 9
highlight: true
comingsoon: false
layout: project
---

## Intro

La Carta d'Identità Elettronica (CIE per gli amici) è giunta alla revisione
3.0, e viene già distribuita potenzialmente a circa il 50% dei cittadini
italiani al momento del rinnovo; entro la fine dell'estate 2018, tutte le
anagrafi italiane rilasceranno solo CIE.

CIE non è solo un documento d'identità, ma una potente smartcard NFC, che può
aprire la strada alla creazione di nuovi servizi, anche tramite smartphone.
Ogni italiano, infatti, entro 10 anni avrà nelle proprie tasche un token NFC
unico e sicuro, che potrebbe essere utilizzato per tante applicazioni:

 * Identificazione a bassa sicurezza, come per esempio l'accesso alla palestra.
   In questi casi, è sufficiente leggere via NFC l'ID univoco della carta,
   che non richiede nessun immissione di PIN.

 * Identificazione a media sicurezza, come tornelli di accesso per stadi o luoghi
   sorvegliati, in cui è possibile associare alla scansione anche la scansione
   del codice a barre che consente l'estrazione di un primo livello di dati
   anagrafici.

 * Utilizzo come accesso ad un portafoglio virtuale, per esempio per pagare 
   i biglietti sui mezzi pubblici.

 * Identificazione e trascrizione rapida di informazioni anagrafiche, per esempio
   per fare rapidamente un check-in in un hotel senza bisogno di fare fotocopie.

Su Developers Italia, troverai tutte le informazioni tecniche e le librerie
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

