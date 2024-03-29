// app/services/weather-service.js
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import ENV from '../config/environment';

export default class WeatherService extends Service {
  @service ajax;

  async getWeatherForecast(lat, lon) {
    const url = `${ENV.WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${ENV.WEATHER_API_KEY}&units=metric`;
    try {
      const response = await this.ajax.request(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
}