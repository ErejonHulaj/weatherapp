/* weather-forecast.js: This component is responsible for handling weather-related
functionalities, such as fetching weather forecast data and updating the UI based on
that data. It likely deals with user interactions related to weather data, such as
selecting units or displaying different weather metrics. Combining it with application.js
could make the component too complex and less focused on its specific task.
*/
// app/adapters/weather-forecast.js
import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import ENV from '../config/environment';

export default class WeatherForecastAdapter extends JSONAPIAdapter {
  @service session;

  host = ENV.API_HOST;
  namespace = 'api';

  @computed('session.isAuthenticated')
  get headers() {
    if (this.session.isAuthenticated) {
      return {
        Authorization: `Bearer ${this.session.data.authenticated.access_token}`
      };
    }
    return {};
  }

  urlForFindRecord(id, modelName, snapshot) {
    // We assume id is the location for which weather forecast is requested
    return `${this.host}/WeatherForecast/${id}`;
  }
}