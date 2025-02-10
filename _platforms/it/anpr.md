---
title: ANPR
logo: /assets/images/logo-anpr@2x.png
external_website: https://anagrafenazionale.interno.it
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
abilitante: true
owners:
    - name: Ministero dell'Interno
      url: https://www.interno.gov.it/
managers:
    - name: Sogei
      url: https://www.sogei.it/
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
collab:
  description: Abbiamo creato degli strumenti di collaborazione a vostra disposizione, tra cui un issue tracker e un forum dedicato alla discussione delle problematiche di integrazione.
  links:
  - name: issue_tracker
    url: "https://github.com/italia/anpr/issues"
  - name: forum
    url: "https://forum.italia.it/c/anpr"
  - title: "Dialoga su Slack (#anpr)"
    icon: it-slack
    url: https://developersitalia.slack.com/archives/C7A8NS7RQ
---

## Intro

Avete mai pensato perché dovete spesso chiedere dei certificati all'anagrafe?
Semplice: ad oggi non esiste un'anagrafe unica centralizzata a cui gli enti
pubblici possono rivolgersi per accedere alle informazioni senza doverle
chiedere ogni volta ai cittadini. Con [ANPR](https://anpr.interno.it/) tutto
cambia: invece di avere circa 8.000 anagrafi dislocate nel territorio (in
ciascun comune), l'Italia avrà finalmente una anagrafe centrale unica, che
semplificherà tutti gli adempimenti.
Questo aprirà le porte a possibili nuove funzionalità come poter comunicare una
variazione di domicilio direttamente da un sito web, comodamente dal vostro
salotto, oppure di scaricare un certificato di stato di famiglia.


## Lavorare con ANPR

Ad oggi l'accesso ad ANPR è riservato solo agli operatori anagrafici e ai
software delle anagrafi comunali. Questa sezione è quindi dedicata a tutti
coloro che stanno supportando i comuni nella fase di passaggio ad ANPR e ci
stanno aiutando a realizzare questa visione.

ANPR prevede un ambiente di test che i Comuni possono utilizzare per:

- verificare il software sviluppato dal Comune per l’estrazione dei dati dall’anagrafe comunale e il loro invio ad ANPR (test del subentro);
- apprendere le modalità di funzionamento della Web Application (WA e WA integrata);
- verificare il funzionamento del proprio sistema gestionale integrato con i servizi di ANPR (WS);
- verificare l’allineamento delle proprie basi dati locali di servizio (WA integrata e WS).

[ANPR](https://www.anpr.interno.it/portale/){:target="_blank"} è un progetto
storico: invece di avere circa 8.000 anagrafi dislocate nel territorio (in
ciascun comune), l'Italia avrà finalmente una anagrafe centrale unica, che
semplificherà tutti gli adempimenti.
In futuro speriamo di potervi dare funzionalità come poter comunicare una
variazione di domicilio direttamente da un sito web, comodamente dal vostro
salotto, oppure di scaricare un certificato di stato di famiglia.

Per le specifiche tecniche la documentazioni dei servizi e la guida al processo
di migrazione per i comuni si faccia riferimento alla [Documentazione tecnica
e tabelle di riferimento](https://docs.italia.it/italia/anpr/anpr/){:target="_blank"}.
