---
title: pagoPA
subtitle: Nodo di pagamento verso la Pubblica Amministrazione
logo: /assets/images/logo-pagopa@2x.png
payoff: Nodo dei Pagamenti verso la Pubblica Amministrazione
description: Un unico nodo di pagamento, con un'unica interfaccia verso il cittadino, per pagare dai tributi alla gita scolastica dei figli con carte di credito, bonifici o anche via app.
lang: it
order: 2
highlight: true
comingsoon: false
layout: project
github_team: pagopa
---

## Intro
pagoPA è il nodo di pagamenti della Pubblica Amministrazione. È una piattaforma che connette tra loro cittadini, Pubblica Amministrazione e i Prestatori di Servizi di Pagamento (PSP) per effettuare pagamenti verso la Pubblica Amministrazione in sicurezza e con semplicità.

Integrare pagoPA rappresenta un grosso vantaggio per le Pubbliche Amministrazioni perché i pagamenti vengono accreditati in tempo reale, vengono correttamente rendicontati e di conseguenza può immediatamente essere rilasciato al cittadino la quietanza con valore legale.

Per un cittadino, pagoPA permette di scegliere il metodo di pagamento tra i diversi a disposizione, a seconda delle comodità e del livello di digitalizzazione. È possibile pagare tramite:

- carta di credito
- addebito in conto
- bollettino postale o altre avvisature cartacee
- forme innovative di pagamenti presenti sul mercato

Stiamo facendo evolvere il sistema in una ottica di mercato integrando canali di pagamento innovativi ed evolvendo l’interfaccia utente e le funzionalità del sistema verso gli standard consolidati sul mercato.

In particolare l’evoluzione più importante riguarda la UI (User Interface) e la UX (User Experience) che entro la fine dell’anno risulteranno pesantemente rinnovate e molto più usabili per il cttadino.

Trovate maggiori informazioni sulla piattaforma [Designers Italia](https://designers.italia.it/progetti/pagopa/).

## Documentazione
Stiamo lavorando ad una revisione profonda della documentazione. Per ora, siamo riusciti a pubblicare in formato più facilmente consultabile i primi documenti che potete leggere di seguito.

- [Specifiche Attuative del Nodo dei Pagamenti-SPC](https://pagopa-specifichepagamenti.readthedocs.io)
- [FAQ](http://pagopa-docs-faq.readthedocs.io)

### Per i Comuni
Di seguito il link al questionario da completare per comunicare lo stato di avanzamento relativo al progetto pagoPA e i piani di attivazione dei vari servizi
- [Link al questionario per i Comuni](https://goo.gl/forms/fv0cde8rAFoDNG433)

## App di esempio

Ci sono due app di esempio, già perfettamente funzionanti, che contengono anche gli SDK utili agli sviluppatori che volessero realizzare le loro applicazioni per pagoPA.

* [App di esempio iOS](https://github.com/italia/pagopa-ios-example)
* [App di esempio Android](https://github.com/italia/pagopa-android-example)

## Newsletter

{::nomarkdown}

<form class="Form Form--spaced u-padding-all-l u-background-grey-10 u-text-r-xs u-layout-prose u-margin-bottom-xl"
      action="http://a0x0b4.emailsp.com/frontend/subscribe.aspx">

        <div class="Form-field">
            <label class="Form-label is-required" for="email" >Email *</label>
            <input class="Form-input" id="email" type="email" name="email" aria-required="true" required placeholder="Inserisci la tua e-mail">
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
        	<button type="submit" class="Button Button--default u-text-xs" value="true">Iscriviti</button>
    	</div>

    <input type="hidden" name="list" value="5">
</form>


{:/}

