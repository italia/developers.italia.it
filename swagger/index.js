import React from "react";
import SwaggerUI from "swagger-ui";

import CustomLayoutPlugin from "./plugins/CustomLayoutPlugin";

import "swagger-ui/dist/swagger-ui.css";

// window.swaggerUrl/window.i10n are populated by Jekyll
if (process.env.NODE_ENV === "development") {
  // Assign defaults while in "development"
  window.swaggerUrl =
    "https://raw.githubusercontent.com/teamdigitale/api-openapi-samples/master/openapi-v3/geodati.gov.it.yaml";

  window.i10n = {
    swagger: {
      download: "Scarica OpenAPI",
      url: "Server",
      intro: "Intro",
      developer: "Erogatore",
      license: "Licenza",
      authorize: "Autorizza",
      tos: "Termini di utilizzo"
    }
  };

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
  dom_id: "#index",
  url: window.swaggerUrl,
  plugins: [CustomLayoutPlugin],
  layout: "CustomLayout"
});
