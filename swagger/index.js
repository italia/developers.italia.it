import React from "react";
import SwaggerUI from "swagger-ui";

import CustomLayoutPlugin from "./plugins/CustomLayoutPlugin";

import "swagger-ui/dist/swagger-ui.css";

// window.swaggerUrl/window.l10n... are populated by Jekyll
if (process.env.NODE_ENV === "development") {
  const L10N = {
    download: "Scarica OpenAPI",
    server: "Copia link del server",
    url: "Server",
    developer: "Erogatore",
    channel: "Contatto",
    tos: "Condizioni di utilizzo",
    authorize: "Autorizza",
    platform: "Piattaforma di riferimento",
    goToPlatform: "Vai alla piattaforma"
  };

  const PROJECTS = [
    {
      id: "18app",
      description:
        "Se sei un esercente e vuoi integrarti con la piattaforma, qui puoi trovare le informazioni dettagliate per come integrarsi in modo efficace con la piattaforma. <br />",
      title: "18App e Carta Docente",
      subtitle: "Bonus cultura e formazione",
      payoff: "La piattaforma dove spendere i bonus cultura e formazione"
    },
    {
      id: "anpr",
      description:
        "Un&#39;unica anagrafe centrale, raggiungibile anche via API, che mantiene le informazioni aggiornate su residenza, stato di famiglia, e molto altro.",
      title: "ANPR",
      subtitle: "Anagrafe Nazionale della Popolazione Residente",
      payoff: "L&#39;anagrafe diventa unica e digitale"
    },
    {
      id: "cie",
      description:
        "La nuova CIE è molto più che un documento d&#39;identità grazie al microprocessore RF può essere letta da dispositivi NFC (es. smartphone), usata per accedere ai varchi e per creare connessioni sicure (TLS) verso i servizi in rete. <br />",
      title: "CIE",
      subtitle: "Carta d&#39;Identità Elettronica",
      payoff: "Carta d&#39;Identità Elettronica"
    },
    {
      id: "daf",
      description:
        "La vision del DAF è rendere i dati pubblici di facile accesso e comprensione da parte delle PA per supportarle nel proprio data driven decision making, e di facilitare l&#39;accesso alle informazioni che possono essere rese pubbliche da parte di cittadini e imprese. <br />",
      title: "DAF",
      subtitle: "Data &amp; Analytics Framework",
      payoff: "Valorizziamo il patrimonio informativo pubblico nazionale"
    },
    {
      id: "datigov",
      description:
        "Dati.gov.it e’ il catalogo nazionale dei dati aperti delle pubbliche amministrazioni italiane. Nasce con l’obiettivo di aggregare in un unico portale la maggior parte dei dati aperti esposti dalle varie amministrazioni sia locali che nazionali. <br />",
      title: "dati.gov.it",
      subtitle: "I dati aperti della pubblica amministrazione",
      payoff: "I dati aperti della pubblica amministrazione"
    },
    {
      id: "design",
      description:
        "designers.italia.it è il punto di riferimento per il design della pubblica amministrazione - linee guida, strumenti e un forum per favorire la collaborazione e promuovere il ruolo dello human centered design nello sviluppo dei servizi pubblici.",
      title: "Designers Italia",
      subtitle: "Il Design System della Pubblica Amministrazione Italiana",
      payoff: "Designers dalla parte dei cittadini"
    },
    {
      id: "devops",
      description:
        "DevOps Italia è il punto di riferimento per lo sviluppo delle pratiche di DevOps e del Cloud della pubblica amministrazione - linee guida, strumenti e un forum per favorire la collaborazione e promuovere il paradigma del Cloud nello sviluppo dei servizi pubblici.",
      title: "Devops Italia",
      subtitle: "Comunità DevOps per il Cloud della PA",
      payoff: "Comunità DevOps della PA"
    },
    {
      id: "fatturapa",
      description:
        "Un formato XML per descrivere in modo non ambiguo una fattura scopri come può essere utile, anche tra privati, e come integrarlo nei tuoi software gestionali. <br />",
      title: "FatturaPA",
      subtitle: "La fattura elettronica",
      payoff: "La fatturazione elettronica verso lo Stato e tra privati"
    },
    {
      id: "pagopa",
      description:
        "Un unico nodo di pagamento, con un&#39;unica interfaccia verso il cittadino, per pagare dai tributi alla gita scolastica dei figli con carte di credito, bonifici o anche via app.",
      title: "PagoPA",
      subtitle: "Nodo di pagamento verso la Pubblica Amministrazione",
      payoff: "Nodo dei Pagamenti verso la Pubblica Amministrazione"
    },
    {
      id: "spid",
      description:
        "Lo SPID è una credenziale unica di accesso, con identità verificata, che può essere integrata secondo lo standard SAML su siti pubblici ma anche privati. <br />",
      title: "SPID",
      subtitle: "Sistema Pubblico di Identità Digitale",
      payoff: "Sistema Pubblico di Identità Digitale"
    }
  ];
  // Assign defaults while in "development"
  window.lang = "it";
  window.swaggerUrl =
    "https://raw.githubusercontent.com/gesposito/api-openapi-samples/master/external-apis/api.daf.teamdigitale.it.yaml";
  window.l10n = {
    swagger: L10N
  };
  window.projects = PROJECTS;

  const appendStyle = href => {
    const link = document.createElement("link");
    link.href = href;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
  };

  // Create a "seamless" iframe in order to ease development
  const script = document.createElement("script");

  script.onload = () => {
    const child = window.seamless.connect({});

    child.receive(function(data, event) {
      data.css.map(href => appendStyle(href));
    });
  };
  script.src = "https://unpkg.com/seamless@1.3.0/build/seamless.child.min.js";
  document.body.appendChild(script);
}

SwaggerUI({
  dom_id: "#swagger",
  url: window.swaggerUrl,
  plugins: [CustomLayoutPlugin],
  layout: "CustomLayout"
});
