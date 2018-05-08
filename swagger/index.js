import React from "react";
import SwaggerUI from "swagger-ui";

import CustomLayoutPlugin from "./plugins/CustomLayoutPlugin";

import "swagger-ui/dist/swagger-ui.css";

// window.swaggerUrl is populated by Jekyll
let swaggerUrl = window.swaggerUrl;
if (process.env.NODE_ENV === "development") {
  // Assigns a default while in "development"
  swaggerUrl =
    "https://raw.githubusercontent.com/teamdigitale/api-openapi-samples/master/openapi-v3/core-vocabularies-ref.yaml";
}

SwaggerUI({
  dom_id: "#index",
  url: swaggerUrl,
  plugins: [CustomLayoutPlugin],
  layout: "CustomLayout"
});
