---
title: ANPR
logo: /assets/images/logo-anpr@2x.png
subtitle: Anagrafe Nazionale della Popolazione Residente
payoff: L'anagrafe diventa unica e digitale
description: Un'unica anagrafe centrale, raggiungibile anche via API, che mantiene le informazioni aggiornate su residenza, stato di famiglia, e molto altro.
lang: it
order: 4
maintainers:
  - carlo
  - mirko
highlight: false
comingsoon: false
layout: project
github_team: anpr
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

<form class="Form Form--spaced u-padding-all-l u-background-grey-10 u-text-r-xs u-layout-prose u-margin-bottom-xl"
      action="https://a0x0b4.emailsp.com/frontend/subscribe.aspx">

        <div class="Form-field">
            <label class="Form-label is-required" for="email" >Email *</label>
            <input class="Form-input" id="email" type="email" name="email" aria-required="true" required placeholder="Inserisci la tua e-mail">
        </div>
        <div class="Form-field">
            <label class="Form-label is-required" for="campo3">Gruppo</label>
            <select class="Form-input u-text-r-s u-borderRadius-m"
            		id="campo3" name="campo3" aria-required="true" >
            <option disabled selected></option>
            <option value=""></option>
			<option value="Comune">Comune</option>
			<option value="SW_House">Software House</option><option value="Cittadino">Cittadino</option>
          </select>
       	</div>
        <fieldset class="Form-field Form-field--choose Grid-cell">
        	<legend class="Form-legend is-required">Privacy *</legend>
        	<label class="Form-label is-required" for="privacy">
        	<input type="checkbox" class="Form-input" id="privacy" name="privacy" aria-required="true" required>
        	<span class="Form-fieldIcon" role="presentation"></span>
        	Accetto la <a target="_blank" href="https://developers.italia.it/it/privacy-policy">Privacy Policy</a>
        	</label>
        </fieldset>
    	<div class="Form-field Grid-cell">
    		<p class="u-text-r-xxs u-margin-bottom-m" >Quando invii il modulo, controlla la tua inbox per confermare l'iscrizione</p>
        	<button type="submit" class="Button Button--default u-text-xs">Iscriviti</button>
    	</div>

    <input type="hidden" name="group" value="16" >
	<input type="hidden" name="list" value="3">
</form>


{:/}



Abbiamo creato degli strumenti di collaborazione a vostra disposizione, tra cui un *issue tracker* e un forum dedicato alla discussione delle problematiche di integrazione.

[Issue tracker](https://github.com/italia/anpr/issues)

[Forum di discussione](https://forum.italia.it/c/anpr)
