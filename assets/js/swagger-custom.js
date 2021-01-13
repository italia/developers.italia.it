import React from "react";
import SwaggerUI from "swagger-ui";

import CustomLayoutPlugin from "./plugins/CustomLayoutPlugin";

import "swagger-ui/dist/swagger-ui.css";

SwaggerUI({
  dom_id: "#swagger",
  url: window.swaggerUrl,
  plugins: [CustomLayoutPlugin],
  layout: "CustomLayout"
});
