---
title: pagoPA
subtitle: Nodo di pagamento verso la Pubblica Amministrazione
logo: /assets/images/logo-pagopa@2x.png
payoff: Nodo dei Pagamenti verso la Pubblica Amministrazione
description: Un unico nodo di pagamento, con un'unica interfaccia verso il cittadino, per pagare dai tributi alla gita scolastica dei figli con carte di credito, bonifici o anche via app.
lang: it
order: 3
highlight: true
comingsoon: false
layout: platform
github_team: pagopa
abilitante: true
newsletterdata:
    text: "Iscriviti a questa newsletter se vuoi ricevere aggiornamenti e novità su pagoPA."
    placeholdertext: mario.rossi@dev.software.it
    privacy_policy: "https://teamdigitale.governo.it/it/privacy-newsletter-pagoPA.htm"
    action: "https://a0x0b4.emailsp.com/frontend/subscribe.aspx"
    inputs:
        - 
          type: hidden
          name: list
          value: 5
owners:
    - name: Presidenza del Consiglio dei Ministri
      url: http://www.governo.it/
managers:
    - name: Team per la Trasformazione Digitale
      url: https://teamdigitale.governo.it/
    - name: SIA SpA
      url: https://www.sia.eu/
resources:
    - Documentazione:
      - title: Specifiche Attuative del Nodo dei Pagamenti-SPC
        icon: file
        url: https://docs.italia.it/italia/pagopa/pagopa-specifichepagamenti-docs/
        desc: 
      - title: FAQ
        icon: file
        url: https://docs.italia.it/italia/pagopa/pagopa-docs-faq/
        desc: 
      - title: Specifiche attuative dei codici identificativi di versamento, riversamento e rendicondazione
        icon: file
        url: https://docs.italia.it/italia/pagopa/pagopa-codici-docs/
        desc: 
      - title: Linee guida pagamenti elettronici a favore delle pubbliche amministrazioni e dei gestori di pubblici servizi
        icon: file
        url: https://docs.italia.it/italia/pagopa/lg-pagopa-docs/
        desc: 
      - title: Guida tecnica avviso analogico
        icon: file
        url: http://pagopa-avvisoanalogico.readthedocs.io/it/latest/
      - title: Questionario per i Comuni
        icon: pencil
        url: https://docs.google.com/forms/d/e/1FAIpQLScPXF6InyTF_vDVdGg_MphgWpVUf1DfViYKgG0ZBFe40TTgbQ/viewform
        desc: Questionario da completare per comunicare lo stato di avanzamento relativo al progetto pagoPA e i piani di attivazione dei vari servizi
    - SDK:
      - title: App di esempio iOS
        icon: github
        url: https://github.com/italia/pagopa-ios-example
        desc: Applicazione mobile per iOS, comprensiva di SDK
      - title: App di esempio Android
        icon: github
        url: https://github.com/italia/pagopa-android-example
        desc: Applicazione mobile per Android, comprensiva di SDK
      - title: SDK per Ruby
        icon: github
        url: https://github.com/italia/pagopa-soap-ruby
        desc: Libreria Ruby per accesso alle API SOAP

---

## Intro
pagoPA è il nodo di pagamento della Pubblica Amministrazione. È una piattaforma che connette tra loro cittadini, Pubblica Amministrazione e i Prestatori di Servizi di Pagamento (PSP) per effettuare pagamenti verso la Pubblica Amministrazione in sicurezza e con semplicità.

Integrare pagoPA rappresenta un grosso vantaggio per le Pubbliche Amministrazioni perché i pagamenti vengono accreditati in tempo reale, vengono correttamente rendicontati e di conseguenza può immediatamente essere rilasciato al cittadino la quietanza con valore legale.

Per un cittadino, pagoPA permette di scegliere il metodo di pagamento tra i diversi a disposizione, a seconda delle comodità e del livello di digitalizzazione. È possibile pagare tramite:

- carta di credito
- addebito in conto
- bollettino postale o altre avvisature cartacee
- forme innovative di pagamenti presenti sul mercato

Stiamo facendo evolvere il sistema in una ottica di mercato integrando canali di pagamento innovativi ed evolvendo l’interfaccia utente e le funzionalità del sistema verso gli standard consolidati sul mercato.

In particolare l’evoluzione più importante riguarda la UI (User Interface) e la UX (User Experience) che è stata pesantemente rinnovata e resa molto più usabile per il cttadino (maggiori informazioni a questo proposito sulla piattaforma [Designers Italia](https://designers.italia.it/progetti/pagopa/)).

<a class="btn btn-primary" href="https://forum.italia.it/c/pagopa"><i class="it-horn" /> Entra nel forum</a>
<a class="btn btn-primary" href="https://developersitalia.slack.com/messages/C8HC6FVE0"><i class="it-comment" /> Dialoga su Slack (#pagopa)</a> <a href="https://slack.developers.italia.it/"><small>(registrati su Slack)</small></a>
