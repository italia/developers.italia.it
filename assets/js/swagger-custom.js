import SwaggerUI from 'swagger-ui';

import CustomLayoutPlugin from './plugins/CustomLayoutPlugin';

import 'swagger-ui/dist/swagger-ui.css';

if (document.getElementById('swagger')) {
  SwaggerUI({
    dom_id: '#swagger',
    url: window.swaggerUrl,
    plugins: [CustomLayoutPlugin],
    layout: 'CustomLayout',
  });
}
