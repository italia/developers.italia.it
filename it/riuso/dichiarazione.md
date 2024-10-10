---
title: Dichiarazione di riuso di software
lang: it
ref:
  en:
layout: internal-long
subtitle:
see_also:
  - label: Acquisizione di software
    url: /it/riuso/acquisizione
  - label: Pubblicazione di software
    url: /it/riuso/pubblicazione
---

<!-- markdownlint-disable no-inline-html -->

Secondo quanto previsto dalle [Linee guida su acquisizione e riuso di software per la PA](https://docs.italia.it/AgID/linee-guida-riuso-software/lg-acquisizione-e-riuso-software-per-pa-docs/it/bozza/attachments/allegato-d-guida-alla-modifica-di-software-open-source-preso-a-riuso-o-di-terzi.html)
e dal [Piano Triennale per l'Informatica nella Pubblica
Amministrazione](https://docs.italia.it/italia/piano-triennale-ict/pianotriennale-ict-doc/it/2020-2022/capitolo-1-servizi/cosa-devono-fare-le-pa.html),
non appena una Pubblica Amministrazione italiana acquisisce un software di
titolarità di un altro Ente **è necessario effettuare una dichiarazione per
comunicare all’Ente cedente che il software è stato preso in riuso** ed è
attualmente utilizzato.

Questa segnalazione permette all’Ente cedente di avere contezza di chi stia
attivamente utilizzando un dato software e **facilitarne in questo modo
l'interazione.**

<div class="show-if-not-repo">
  Le operazioni necessarie per effettuare la dichiarazione
  variano in base all’esistenza o meno del software all’interno del catalogo.

  <h2>
    Se il software è presente nel catalogo
  </h2>
</div>

<div class="show-if-repo">
  <p>
    Le operazioni necessarie per effettuare la dichiarazione sono:
  </p>
</div>

<div class="row">
  <div class="col-12 col-lg-6">
    <div class="card-wrapper card-space">
      <div class="card card-bg no-after">
        <div class="card-body d-flex align-items-center">
          <div class="categoryicon-top">
            <span class="circled-step">1</span>
          </div>
          <p>
            Visitare il <strong><a id="repo" rel="noreferrer noopener nofollow external" target="_blank" href="">repository relativo al software in questione</a></strong>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-lg-6">
    <div class="card-wrapper card-space">
      <div class="card card-bg no-after">
        <div class="card-body d-flex align-items-center">
          <div class="categoryicon-top">
            <span class="circled-step">2</span>
          </div>
          <p>
            All’interno del repository è possibile <strong>comunicare con i manutentori
            del software</strong> utilizzando uno degli strumenti di interazione
            messi a disposizione dalla piattaforma.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-lg-6">
    <div class="card-wrapper card-space">
      <div class="card card-bg no-after">
        <div class="card-body d-flex align-items-center">
          <div class="categoryicon-top">
            <span class="circled-step">3</span>
          </div>
          <p>
            Richiedere l'inserimento di <em>nome</em> e <em>codiceIPA</em> del proprio Ente
            nel file <code class="language-plaintext highlighter-rouge">publiccode.yml</code>
            attraverso lo strumento di ticketing  (<em>issue</em>) <strong>oppure</strong>
            aggiungerli direttamente all’interno del campo
            <code class="language-plaintext highlighter-rouge">usedBy</code>
            del <code class="language-plaintext highlighter-rouge">publiccode.yml</code>
            tramite una <em>Pull Request</em>.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-lg-6">
    <div class="card-wrapper card-space">
      <div class="card card-bg no-after">
        <div class="card-body d-flex align-items-center">
          <div class="categoryicon-top">
            <span class="circled-step">4</span>
          </div>
          <p>
            Il manutentore del software potrà concludere le operazioni in
            autonomia e il nome del proprio Ente verrà visualizzato all’interno
            del catalogo.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="show-if-not-repo">
  <h2>
    Se il software non è presente nel catalogo
  </h2>

  <div class="callout note mt-5">
    <div class="callout-title"><svg class="icon"><use xlink:href="/assets/svg/sprite.svg#it-info-circle"></use></svg>Note a riguardo</div>
    <p>
      Si ricorda che la nuova modalità di riuso definita nelle
      <a href="{{ site.url_lineeguidariuso }}">Linee Guida</a>
      prevede che il processo di <a href="/it/riuso/acquisizione">acquisizione</a>
      avvenga attraverso il <a href="/it/software">catalogo del software di Developers Italia</a>.
    </p>
  </div>

  <p>
    Nel caso in cui il software preso a riuso non dovesse ancora essere
    entrato all’interno del catalogo per questioni tecniche oppure dovesse essere
    in procinto di terminare le operazioni di <a href="/it/riuso/pubblicazione">pubblicazione</a>
    <strong>è comunque possibile portare a termine questa dichiarazione.</strong>
  </p>
</div>

Tramite gli strumenti di comunicazione messi a disposizione da Developers Italia,
quali ad esempio Slack oppure il Forum, è sempre possibile avviare una
discussione e il [Team di Developers Italia](/it/contatti) interverrà per aiutare
a completare il processo.

<p class="mt-5">
  <a class="btn btn-primary" href="https://forum.italia.it/c/software-open-source-per-la-pa"><svg class="icon icon-sm icon-white">
      <use xlink:href="/assets/svg/sprite.svg#it-horn"></use>
    </svg> Entra nel forum
  </a>
  <a class="btn btn-primary" href="https://developersitalia.slack.com/messages/CJRSS5S9W"><svg class="icon icon-sm icon-white">
      <use xlink:href="/assets/svg/sprite.svg#it-comment"></use>
    </svg> Dialoga su Slack (#reuse)
  </a>
  <a class="btn btn-white btn-outline-primary" href="https://slack.developers.italia.it/"><svg class="icon icon-sm icon-primary">
      <use xlink:href="/assets/svg/sprite.svg#it-comment"></use>
    </svg> Registrati su Slack</a>
<p>

<script type="text/javascript">
  function showElements(elements, show) {
    for (var i = 0; i < elements.length; i++) {
      let el = elements[i];

      el.style.display = show ? 'block' : 'none';
    }
  }

  const repo = localStorage.getItem('reuse-repo');
  localStorage.removeItem('reuse-repo');

  showElements(document.getElementsByClassName('show-if-repo'), repo !== null);
  showElements(document.getElementsByClassName('show-if-not-repo'), repo === null);

  const repoLink = document.getElementById('repo');
  if (repo !== null) {
    repoLink.setAttribute('href', repo);
  } else {
    repoLink.outerHTML = repoLink.innerText;
  }
</script>
