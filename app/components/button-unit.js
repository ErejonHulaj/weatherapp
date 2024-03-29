import Component from '@glimmer/component';
import { action } from '@ember/object';
import ENV from 'weather-app/config/environment';

export default class WeatherDataComponent extends Component {
  @action
  fetchData(unit) {
    fetch(`https://api.example.com/data?units=${unit}`)
      .then(response => response.json())
      .then(data => {
        // Do something with the data
        // For example, update the temperature property
        this.temperature = data.temperature;
      })
      .catch(error => {
        // Handle the error
      });
  }
}