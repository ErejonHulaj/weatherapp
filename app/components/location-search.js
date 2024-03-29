
// The LocationSearchComponent is responsible for handling the search input and fetching the search results from the backend. When a location is selected from the search results, it calls the onSelect action passed to it from its parent component.
// app/components/location-search.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ENV from 'weather-app/config/environment';

export default class LocationSearchComponent extends Component {
  @tracked searchInput = '';
  @tracked searchResults = [];

  @action
  updateSearchInput(event) {
    this.searchInput = event.target.value;

    fetch(`https://api.example.com/locations?search=${this.searchInput}`)
      .then(response => response.json())
      .then(data => {
        this.searchResults = data.locations;
      })
      .catch(error => {
        // Handle the error
      });
  }

  @action
  selectLocation(location) {
    // Call the method that fetches the data for the selected location
    this.args.onSelect(location);
  }
}