---
title: ANPR
logo: /assets/images/logo-anpr@2x.png
subtitle: Anagrafe Nazionale della Popolazione Residente
payoff: L'anagrafe diventa unica e digitale
description: Un'unica anagrafe centrale, raggiungibile anche via API, che mantiene le informazioni aggiornate su residenza, stato di famiglia, e molto altro.
lang: it
ref:
  val: anpr-project
  en: /en/anpr
order: 4
highlight: false
comingsoon: false
layout: platform
github_team: anpr
newsletterdata:
    text: "Iscriviti a questa newsletter se vuoi ricevere aggiornamenti e novità su ANPR: comuni migrati, nuovo materiale, curiosità."
    placeholdertext: mario.rossi@dev.software.it
    privacy_policy: "https://teamdigitale.governo.it/it/privacy-newsletter-anpr.htm"
    action: "https://a0x0b4.emailsp.com/frontend/subscribe.aspx"
    hidden-inputs:
        - 
          type: hidden
          name: group
          value: 16
        - 
          type: hidden
          name: list
          value: 3
    selects:
        -
          name: campo3
          options:
            - 
              value: Cittadino
              valueid: Cittadino
            - 
              value: Comune
              valueid: Comune
            - 
              value: Software House
              valueid: SW_House
            - 
              value: Altro
              valueid: ""
abilitante: true
owners:
    - name: Ministero dell'Interno
      url: http://www.interno.gov.it/
managers:
    - name: Sogei
      url: http://www.sogei.it/
resources:
    - Documentazione:
        - title: Documentazione tecnica e tabelle di riferimento
          icon: file
          url: https://docs.italia.it/italia/anpr/anpr/
          desc: 
    - SDK:
        - title: Client Java di esempio
          icon: github
          url: https://github.com/italia/anpr-client-example
          desc: Client per il test della connessione ad ANPR
---

## Intro

<!-- **Vuoi avere aggiornamenti su ANPR? Iscriviti alla [newsletter di ANPR](#newsletter).** -->

[ANPR](https://anpr.interno.it/) è un progetto storico: invece di avere più di 8.000 anagrafi dislocate nel territorio (in ciascun comune), l'Italia avrà finalmente una anagrafe centrale unica, che semplificherà tutti gli adempimenti.
In futuro speriamo di potervi dare funzionalità come poter comunicare una variazione di domicilio direttamente da un sito web, comodamente dal vostro salotto, oppure di scaricare un certificato di stato di famiglia.

Ma questo è solo l'inizio: avete mai pensato perché dovete spesso chiedere dei certificati all'anagrafe? Semplice: ad oggi non esiste un'anagrafe unica centralizzata a cui gli enti pubblici possono rivolgersi per accedere alle informazioni senza doverle chiedere ogni volta ai cittadini. Con ANPR, tutto cambia.

Ad oggi l'accesso ad ANPR è riservato solo agli operatori anagrafici e ai software delle anagrafi comunali. Questa sezione è quindi dedicata a tutti coloro che stanno supportando i comuni nella fase di passaggio ad ANPR e ci stanno aiutando a realizzare questa visione. C'è ancora molto da fare e il contributo di tutti è importante.

## Canali

Abbiamo creato degli strumenti di collaborazione a vostra disposizione, tra cui un *issue tracker* e un forum dedicato alla discussione delle problematiche di integrazione.

<a class="btn btn-primary" href="https://github.com/italia/anpr/issues"><i class="it-github" /> Issue tracker</a>
<a class="btn btn-primary" href="https://forum.italia.it/c/anpr"><i class="it-horn" /> Entra nel forum</a>
