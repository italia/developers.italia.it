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

  const PROJECTS = require("./projects");
  const OPENAPIS = require("./openapis");
  // Assign defaults while in "development"
  window.lang = "it";
  window.swaggerUrl = OPENAPIS[0];
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

if (document.getElementById('swagger')) {
  SwaggerUI({
    dom_id: "#swagger",
    url: window.swaggerUrl,
    plugins: [CustomLayoutPlugin],
    layout: "CustomLayout"
  });
}
