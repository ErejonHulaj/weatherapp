import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from 'weather-app/config/environment';


export default class LocationDisplayComponent extends Component {
  @tracked city = '';
  @tracked country = '';

  constructor() {
    super(...arguments);
    this.fetchLocationData();
  }

  @action
  fetchLocationData() {
    fetch('https://api.example.com/location')
      .then(response => response.json())
      .then(data => {
        this.city = data.city;
        this.country = data.country;
      })
      .catch(error => {
        // Handle the error
      });
  }
}