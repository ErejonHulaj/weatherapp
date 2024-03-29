// app/models/weather-forecast.js
import Model, { attr } from '@ember-data/model';

export default class WeatherForecastModel extends Model {
  @attr('string') date;
  @attr('number') temperature;
  @attr('number') minTemperature;
  @attr('number') maxTemperature;
  @attr('string') weatherDescription;
  @attr('number') windSpeed;
  @attr('number') windDirection;
  @attr('number') pressure;
  @attr('number') humidity;
  @attr('string') clouds;
}