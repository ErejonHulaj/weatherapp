// app/components/application.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import ENV from 'weather-app/config/environment';

export default class ApplicationComponent extends Component {
  @service location;
  @tracked selectedLocationData = null;
  apiKey = ENV.GEOAPIFY_API_KEY;

  @action
  fetchData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.selectedLocationData = data;
        this.location.setCurrentLocation(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        // Handle the error, e.g., display an error message to the user
      });
  }

  get currentDate() {
    let date = new Date();

    // Use Intl.DateTimeFormat to format the date according to the specified timezone
    let formatter = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: this.location.currentLocation.timezone
    });

    let formattedDate = formatter.format(date);

    return formattedDate;
  }
}