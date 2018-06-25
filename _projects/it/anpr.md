---
title: ANPR
logo: /assets/images/logo-anpr@2x.png
subtitle: Anagrafe Nazionale della Popolazione Residente
payoff: L'anagrafe diventa unica e digitale
description: Un'unica anagrafe centrale, raggiungibile anche via API, che mantiene le informazioni aggiornate su residenza, stato di famiglia, e molto altro.
lang: it
order: 4
ref: anpr-project
maintainers:
  - carlo
  - mirko
highlight: true
comingsoon: false
layout: project
github_team: anpr
abilitante: true
owners:
    - mininterno
managers:
    - sogei
resources:
    - In primo piano:
        - title: Lorem ipsum dolor sit amet, consectetur adipiscing elit
          icon: github
          url: '#'
          desc: Morbi sit amet pulvinar dolor, id sagittis dolor. Mauris cursus gravida nunc, sit amet laoreet ex. Curabitur sed eleifend diam. Fusce vehicula, turpis a cursus feugiat, orci sapien efficitur velit
        - title: Pulvinar dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit
          icon: github
          url: '#'
          desc: Morbi sit amet pulvinar dolor, id sagittis dolor. Mauris cursus gravida nunc, sit amet laoreet ex. Curabitur sed eleifend diam. Fusce vehicula, turpis a cursus feugiat, orci sapien efficitur velit
        - title: Consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit
          icon: github
          url: '#'
          desc: Morbi sit amet pulvinar dolor, id sagittis dolor. Mauris cursus gravida nunc, sit amet laoreet ex. Curabitur sed eleifend diam. Fusce vehicula, turpis a cursus feugiat, orci sapien efficitur velit
    - SDK:
        - title: Lorem ipsum dolor sit amet, consectetur adipiscing elit
          icon: github
          url: '#'
          desc: Morbi sit amet pulvinar dolor, id sagittis dolor. Mauris cursus gravida nunc, sit amet laoreet ex. Curabitur sed eleifend diam. Fusce vehicula, turpis a cursus feugiat, orci sapien efficitur velit
        - title: Pulvinar dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit
          icon: github
          url: '#'
          desc: Morbi sit amet pulvinar dolor, id sagittis dolor. Mauris cursus gravida nunc, sit amet laoreet ex. Curabitur sed eleifend diam. Fusce vehicula, turpis a cursus feugiat, orci sapien efficitur velit
        - title: Consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit
          icon: github
          url: '#'
          desc: Morbi sit amet pulvinar dolor, id sagittis dolor. Mauris cursus gravida nunc, sit amet laoreet ex. Curabitur sed eleifend diam. Fusce vehicula, turpis a cursus feugiat, orci sapien efficitur velit
    - Risorse grafiche:
        - title: Lorem ipsum dolor sit amet, consectetur adipiscing elit
          icon: github
          url: '#'
          desc: Morbi sit amet pulvinar dolor, id sagittis dolor. Mauris cursus gravida nunc, sit amet laoreet ex. Curabitur sed eleifend diam. Fusce vehicula, turpis a cursus feugiat, orci sapien efficitur velit
        - title: Pulvinar dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit
          icon: github
          url: '#'
          desc: Morbi sit amet pulvinar dolor, id sagittis dolor. Mauris cursus gravida nunc, sit amet laoreet ex. Curabitur sed eleifend diam. Fusce vehicula, turpis a cursus feugiat, orci sapien efficitur velit
        - title: Consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit
          icon: github
          url: '#'
          desc: Morbi sit amet pulvinar dolor, id sagittis dolor. Mauris cursus gravida nunc, sit amet laoreet ex. Curabitur sed eleifend diam. Fusce vehicula, turpis a cursus feugiat, orci sapien efficitur velit
            
---

## Intro
**Vuoi avere aggiornamenti su ANPR? Iscriviti alla nostra [newsletter](#newsletter)**

ANPR è un progetto storico: invece di avere più di 8.000 anagrafi dislocate nel territorio (in ciascun comune), l'Italia avrà finalmente una anagrafe centrale unica, che semplificherà tutti gli adempimenti.
In futuro speriamo di potervi dare funzionalità come poter comunicare una variazione di domicilio direttamente da un sito web, comodamente dal vostro salotto, oppure di scaricare un certificato di stato di famiglia.

Ma questo è solo l'inizio: avete mai pensato perché dovete spesso chiedere dei certificati all'anagrafe? Semplice: ad oggi non esiste un'anagrafe unica centralizzata a cui gli enti pubblici possono rivolgersi per accedere alle informazioni senza doverle chiedere ogni volta ai cittadini. Con ANPR, tutto cambia.

Ad oggi, l'accesso ad ANPR è riservato solo agli operatori anagrafici e ai software delle anagrafi comunali. Questa sezione è quindi dedicata a tutti coloro che stanno supportando i comuni nella fase di passaggio ad ANPR e ci stanno aiutando a realizzare questa visione. C'è ancora molto da fare e il contributo di tutti è importante.


## Documentazione
Stiamo lavorando ad una revisione profonda della documentazione. Per ora, siamo riusciti a pubblicare in formato più facilmente consultabile tutte le tabelle e codici.

[Documentazione tecnica e tabelle di riferimento](https://anpr.readthedocs.io)



## Collaborazione
Iscriviti a questa newsletter se vuoi ricevere aggiornamenti e novità su ANPR: comuni migrati, nuovo materiale, curiosità.

 <a name="newsletter"></a>

{::nomarkdown}

<form class="border border-light lightgrey-bg-c1 p-2 p-md-3 mt-2 mb-2">
  <div class="form-group">
    <span class="d-block small font-weight-bold">Email *</span>
    <input type="email" class="form-control" id="email" placeholder="Inserisci la tua e-mail" required>
    <label for="email" class="sr-only">Email *</label>
  </div>
  <div class="form-group">
    <span class="d-block small font-weight-bold">Gruppo *</span>
    <select id="campo3" name="campo3" required>
      <option disabled selected></option>
      <option value=""></option>
			<option value="Comune">Comune</option>
			<option value="SW_House">Software House</option><option value="Cittadino">Cittadino</option>
    </select>
    <label for="campo3" class="sr-only">Gruppo</label>
  </div>
  <div class="form-check pl-0">
    <input type="checkbox" class="form-check-input" id="privacy" name="privacy" required>
    <label class="d-block " for="privacy">Accetto la <a target="_blank" href="https://developers.italia.it/it/privacy-policy">Privacy Policy</a></label>
  </div>
  <p class="small" >Quando invii il modulo, controlla la tua inbox per confermare l'iscrizione</p>
  <button type="submit" class="btn btn-primary">Iscriviti</button>
  <input type="hidden" name="group" value="16" >
	<input type="hidden" name="list" value="3">

</form>



{:/}



Abbiamo creato degli strumenti di collaborazione a vostra disposizione, tra cui un *issue tracker* e un forum dedicato alla discussione delle problematiche di integrazione.

[Issue tracker](https://github.com/italia/anpr/issues)

[Forum di discussione](https://forum.italia.it/c/anpr)
