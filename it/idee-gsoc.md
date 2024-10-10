---
title: "Google Summer of Code: informazioni per gli studenti"
subtitle: Vuoi partecipare al programma? Qui di seguito trovi alcune idee
lang: it
ref:
  en: /en/gsoc-ideas
layout: internal-simple
image: /assets/images/comelouso-temp-img.jpg
---

Innanzitutto, benvenuti!

La partecipazione al [Google Summer of Code](https://summerofcode.withgoogle.com/)
prevede la presentazione di proposte progettuali, da parte degli studenti
interessati a partecipare, inerenti i progetti sviluppati dall'organizzazione
Developers Italia. Queste proposte verranno valutate sia dagli organizzatori
che dai responsabili di Developers Italia per verificarne l'adeguatezza e la
fattibilità nel periodo previsto dal programma.  Per facilitare questa fase,
alcuni sviluppatori e membri della community di Developers Italia hanno messo
a disposizione alcune idee consultabili nella tabella sottostante.

**Nota bene**: a volte le idee presenti in questa lista potrebbero essere vaghe
o incomplete. Se vuoi sottomettere una proposta basata su queste idee ti
consigliamo di contattare direttamente il responsabile del progetto per
conoscerne i dettagli e capire come procedere.

La selezione per l'iniziativa *Google Summer of Code* è molto competitiva.
Normalmente gli studenti accettati hanno studiato a fondo le tecnologie che
compongono i progetti presentati e sono stati in contatto frequente con
i potenziali mentor. Un semplice copia-incolla di una di queste idee
all'interno della candidatura da presentare a GSoC non basta. D'altro canto, la
creazione di un'idea da zero senza aver precedentemente contattato i potenziali
mentor ha anch'essa scarse possibilità di essere accettata.

Se non ci dovesse essere indicato un contatto specifico per le domande
è possibile chiedere direttamente su [Slack](https://slack.developers.italia.it/).
Puoi richiedere un accesso [qui](https://slack.developers.italia.it/).
Se non sai a chi chiedere non essere timido, il canale
[#welcome](https://developersitalia.slack.com/messages/C8U3ZSM5M) è dedicato
proprio a questo! Nella domanda specifica il progetto che ti interessa con
eventuali puntatori a risorse.


## Idee

Le proposte ben preparate e presentate da studenti volenterosi hanno molte possibilità
di essere selezionate. Saranno considerate proposte per tutti i livelli di
difficoltà, da semplici a molto complesse. Presentati e ti aiuteremo
a costruire una proposta adeguata.

Ricorda che le descrizioni dei progetti che trovi qui sotto sono solo idee
iniziali. Per questo motivo saranno da espandere in dettaglio e da
personalizzare in base alla tua esperienza e ai tuoi interessi.

**Note per la community**.
Ogni progetto nella lista delle idee deve includere:
1. un titolo e una descrizione;
2. una descrizione dettagliata (2-5 frasi);
3. risultati attesi;
4. competenze richieste/preferite;
5. possibile mentor.

E, se possibile, un'indicazione del livello di difficoltà del progetto
(*facile, media, difficile*).


<table id="issues_table" class="table table-striped table-bordered" cellspacing="0" width="100%" role="grid" style="width: 100%;">
    <thead>
        <tr role="row">
            <th data-priority="2" tabindex="0" aria-controls="issues_table" rowspan="1" colspan="1" style="width: 40px;">Progetto</th>
            <th data-priority="0" tabindex="0" aria-controls="issues_table" rowspan="1" colspan="1" style="width: 400px;">Breve Descrizione</th>
            <th data-priority="11" class="sorting_disabled" rowspan="1" colspan="1" style="width: 30px;">Difficoltà</th>
            <th data-priority="10" tabindex="0" aria-controls="issues_table" rowspan="1" colspan="1" style="width: 64px;">Contatto</th>
        </tr>
    </thead>
    <tbody>
        <tr role="row" class="odd" id="agave">
            <td tabindex="0">Developers</td>
            <td>
                <b>Agave CMS</b><br />
                <a href="https://github.com/italia/agavecms">Agave </a>è un CMS
                open source adatto alla generazione di siti web statici. Il
                progetto Agave è attualmente attivo e sono
                già state raggiunte diverse milestone major. Questo
                progetto GSoC sarà quindi focalizzato sul consolidamento
                dell'applicativo in modo da renderlo <i>production ready</i>. Le
                attività saranno di tipo fullstack e varieranno dal
                consolidamento delle tecnologie di infrastruttura (i.e.,
                preparare il deployment rapido) ad attività legate al
                templating engine in modo da produrre risultati aderenti alle
                ultime normative e linee guida di Design.
                <br />
                <b>Mentor:</b> Chiedi su #design-dev nel nostro Slack
                non appena ti sarai fatto un'idea più chiara sul progetto.
                <br />
                <b>Risultati attesi:</b>
                Lato infrastruttura i risultati attesi comprendono il
                raggiungimento di un ambiente docker-based robusto, stabile,
                testato e production-ready. Per quanto concerne gli aspetti di
                template il risultato atteso è l'implementazione completa del
                framework Bootstrap Italia in modo tale da garantire che il
                sito prodotto da Agave sia pienamente compatibile con le linee
                guida italiane di Design.
                <br />
                <b>Competenze richieste:</b>
                <ul>
                    <li> React</li>
                    <li> Ruby on Rails </li>
                    <li> Docker e tecnologie CI/CD</li>
                </ul>
            </td>
            <td>Media</td>
            <td><a href="https://app.slack.com/client/T6C27AXE0/C7VPAUVB3">#design-dev</a></td>
        </tr>
        <tr role="row" class="even" id="api1">
            <td tabindex="0">API</td>
            <td>
                <b>Implementazione di una serie di header HTTP di rate-limit all'interno di diversi prodotti software</b> <br />
                Lo scopo di questo progetto è di lavorare sui nuovi <a href="https://tools.ietf.org/id/draft-polli-ratelimit-headers-01.html">header HTTP di
                rate-limit</a> contenuti nell'Internet Draft. In pratica,
                questa novità dev'essere implementata sotto forma di plugin
                all'interno di software di rilevanza internazionale quali ad
                esempio traefik, nginx, envoy-proxy e 3scale. Di conseguenza,
                sarà anche necessario interagire con altre community già
                esistenti in modo da assicurarsi che i contributi vengano
                recepiti correttamente all'interno delle rispettive codebase.
                <br />
                <b>Mentor:</b> Chiedi sul canale #api del nostro slack appena hai un'idea più concreta riguardante il progetto.
                <br />
                <b>Risultati attesi:</b>
                Plugin funzionanti per traefik, nginx, envoy-proxy etc. che
                implementano gli header di rate-limit. Inoltre, è necessario fornire
                un environment funzionante per testare le implementazioni
                proposte.
                <br />
                <b>Competenze richieste:</b>
                <ul>
                    <li> Golang, JS, Python, Java, C a seconda della
                    piattaforma</li>
                    <li> Basic Linux knowledge</li>
                    <li> Docker e tecnologie di CI/CD</li>
                </ul>
            </td>
            <td>Difficile</td>
            <td><a href="https://app.slack.com/client/T6C27AXE0/CDKBYTG74">#api</a></td>
        </tr>
        <tr role="row" class="odd" id="api2">
            <td tabindex="0">API</td>
            <td>
                <b>Configurazione di alcuni API Gateway</b><br />
                Questo progetto mira ad impostare degli API gateway in grado di
                supportare un set di caratteristiche chiave per
                l'interoperabilità quali:
                <ul>
                    <li> esposizione di API tramite specifiche OpenAPI3;</li>
                    <li> ritorno di RateLimit header fields;</li>
                    <li> ritorno di errori in modo conforme all'RFC7807 (Problem Details for HTTP APIs).</li>
                </ul>
                Gli studenti studieranno, installeranno e configureranno degli
                API gateway e reverse proxy come Kong, 3scale, Nginx, WSO2
                assicurandosi che le feature sopra elencate siano
                presenti e funzionanti.
                Nel caso in cui l'implementazione di tali feature richieda la
                scrittura di plugin dedicati, filtri o componenti esterni,
                è necessario che lo studente si interfacci con le community di
                tali software già esistenti. Per quanto riguarda la parte
                dedicata al ratelimit, lo studente si dovrà interfacciare con
                chi seguirà la <a href="#api1">proposta#2</a>.
                <br />
                <b>Mentor:</b> Chiedi nel canale #api sul nostro slack appena
                hai un'idea chiara sul progetto.
                <br />
                <b>Risultati attesi:</b>
                Il risultato atteso è un docker-compose o un helm chart in
                grado di fornire un setup ridondato di un'infrastruttura
                gateway per esporre API descritte da una specifica
                OAS3.
                <br />
                <b>Competenze richieste:</b>
                <ul>
                    <li> Docker e tecnologie CI/CD </li>
                    <li> Protocollo HTTP </li>
                    <li> Python, Java, C a seconda della piattaforma usata </li>
                    <li> Opzionale: Kubernetes </li>
                </ul>
            </td>
            <td>Difficile</td>
            <td><a href="https://app.slack.com/client/T6C27AXE0/CDKBYTG74">#api</a></td>
        </tr>
        <tr role="row" class="even" id="des1">
            <td tabindex="0">Design</td>
            <td>
                <b>Design system kit per React</b><br />
                Completamento del <a href="https://github.com/italia/design-react-kit/">Design Kit React di Designers Italia </a> tramite l'aggiornamento delle sue dipendenze e l'aggiunta o la correzione di componenti ad oggi mancanti. Inoltre, sarà necessario aggiornare lo <a href="https://storybook.js.org/">Storybook</a> e migliorare la documentazione in modo da rendere l'esperienza più semplice per l'utente. Su un repository separato, dovrà essere implementato un template <a href="https://www.gatsbyjs.org/">Gatsby</a> per facilitare l'adozione del kit all'interno delle pubbliche amministrazioni ed aumentarne il riuso.
                <br />
                <b>Mentor:</b> Designers o sviluppatori del team di Designers Italia.
                <br />
                <b>Risultati attesi:</b>
                Una versione stabile del <a href="https://github.com/italia/design-react-kit/">Design React Kit</a> che contenga la maggior parte dei componenti di Bootstrap Italia e un template Gatsby facile da usare e conforme con le regole sull'accessibilità.
                Questo progetto può essere usato come solida base di partenza:
                <ul>
                    <li> <a href="https://github.com/italia/design-italia-gatsby-starterkit">Design Italia Gatsby Starter Kit</a> (dettagli aggiuntivi possono essere consultati all'interno del thread su Forum Italia).</li>
                </ul>
                <b>Competenze richieste:</b>
                <ul>
                    <li> Design systems</li>
                    <li> Javascript/ES/React</li>
                    <li> Conoscenze di base di StorybookJS e GatsbyJS</li>
                </ul>
            </td>
            <td>Media</td>
            <td><a href="https://app.slack.com/client/T6C27AXE0/C7VPAUVB3">#design-dev</a></td>
        </tr>
        <tr role="row" class="odd" id="des2">
            <td tabindex="0">Design</td>
            <td>
                <b>Un tema Wordpress per i comuni</b><br />
                Creare un tema Wordpress per i comuni basato sul design system italiano.
                Il codice sarà costruito basandosi su <a
                href="https://italia.github.io/bootstrap-italia/">Bootstrap
                Italia</a> in modo da garantire l'adesione ai <a
                href="https://italia.github.io/design-comuni-prototipi/it/kit.html#template-html">template
                HTML</a> che sono già forniti da Designers Italia. I content
                type e la tassonomia dovranno essere consistenti con le linee
                guida presenti all'interno del documento sull'<a href="https://docs.italia.it/italia/designers-italia/design-comuni-docs/it/versione-corrente/modello-sito-comunale/architettura-informazione.html">
                architettura dell'informazione</a>.
                La community di Designers Italia ha già creato due temi Wordpress:
                <ul>
                    <li> <a href="https://github.com/italia/design-wordpress-theme">https://github.com/italia/design-wordpress-theme</a></li>
                    <li> <a href="https://github.com/italia/design-wordpress-theme-wt">https://github.com/italia/design-wordpress-theme-wt</a></li>
                </ul>
                Nota bene: questi temi sono costruiti per siti pubblici general
                purpose e potrebbero non essere completamente validati per
                quanto riguarda l'accessibilità oppure potrebbero necessitare
                degli aggiornamenti. Potrebbero comunque servire come punto di
                partenza per il progetto qui descritto.
                <br />
                <b>Mentor:</b> Designers o sviluppatori del team di Designers Italia.
                <br />
                <b>Risultati attesi:</b>
                Un tema Wordpress funzionante per i comuni basato sul design
                system italiano e pronto per essere usato da qualsiasi comune
                nel proprio sito web, arricchito da una documentazione chiara
                e una licenza open source.
                Il risultato deve rispettare la qualità del <a
                href="https://github.com/italia/design-scuole-wordpress-theme">tema
                Wordpress per le scuole</a> di Designers Italia.
                <br />
                <b>Competenze richieste:</b>
                <ul>
                    <li> Design systems e web development</li>
                    <li> Wordpress plugins e theming best-practices</li>
                    <li> Conoscenza delle architetture dell'informazione</li>
                </ul>
            </td>
            <td>Media</td>
            <td><a href="https://developersitalia.slack.com/messages/C91K0K085/">#design-cms-themes</a></td>
        </tr>
        <tr role="row" class="even" id="des3">
            <td tabindex="0">Design</td>
            <td>
                <b>Un tema Drupal per i comuni</b><br />
                Creare un tema Drupal per i comuni basato sul design system italiano.
                Il codice sarà costruito basandosi su <a
                href="https://italia.github.io/bootstrap-italia/">Bootstrap
                Italia</a> in modo da garantire l'adesione ai <a
                href="https://italia.github.io/design-comuni-prototipi/it/kit.html#template-html">template
                HTML</a> che sono già forniti da Designers Italia. I content
                type e la tassonomia dovranno essere consistenti con le linee
                guida presenti all'interno del documento sull'<a href="https://docs.italia.it/italia/designers-italia/design-comuni-docs/it/versione-corrente/modello-sito-comunale/architettura-informazione.html">architettura dell'informazione</a>.

                Esiste già un tema Drupal per siti web general purpose che può
                servire come punto di partenza per il tema dei comuni:
                <ul>
                <li><a href="https://www.drupal.org/project/bootstrap_italia">https://www.drupal.org/project/bootstrap_italia</a>.</li>
                </ul>
                <br />
                <b>Mentor:</b> Designers o sviluppatori del team di Designers Italia.
                <br />
                <b>Risultati attesi:</b>
                Un tema Wordpress funzionante per i comuni basato sul design
                system italiano e pronto per essere usato da qualsiasi comune
                nel proprio sito web, arricchito da una documentazione chiara
                e una licenza open source.
                Il risultato deve rispettare la qualità del <a
                href="https://github.com/italia/design-scuole-wordpress-theme">tema
                Wordpress per le scuole</a> di Designers Italia.
                <b>Competenze richieste:</b>
                <ul>
                    <li> Design systems e web development</li>
                    <li> Wordpress plugins e theming best-practices</li>
                    <li> Conoscenza delle architetture dell'informazione</li>
                </ul>
            </td>
            <td>Media</td>
            <td><a href="https://developersitalia.slack.com/messages/C91K0K085/">#design-cms-themes</a></td>
        </tr>
        <tr role="row" class="even" id="general">
            <td tabindex="0">Generale</td>
            <td>
                <b>La tua idea!!</b><br /> Qualcosa che ti piacerebbe molto
                fare!
                <br />Hai un'idea brillante da sviluppare insieme
                a Developers Italia ma che non è presente in questa lista?
                Nessun problema!
                Per cortesia, però, facci un favore:
                mettiti in contatto con un mentor al più presto per assicurarti
                che il progetto sia realizzabile e compreso nello scopo di
                Developers Italia. Questo sforzo ci risparmierà molte
                frustrazioni.
                <br />
                <b>Mentor:</b> Proponi la tua idea e chiedi in Developers
                Italia se c'è qualcuno interessato per lavorare insieme a te.
                Se non sai a chi chiedere puoi sempre scrivere su <a
                href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a>.
                <br />
                <b>Risultati attesi:</b> Da discutere con il tuo mentor.
                <br />
                <b>Competenze richieste:</b>
                <ul>
                    <li> a te la scelta :-)</li>
                </ul>
            </td>
            <td>Decidi tu</td>
            <td><a href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a></td>
        </tr>
    </tbody>
</table>
