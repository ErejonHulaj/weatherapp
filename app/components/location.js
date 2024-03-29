// app/services/location.js
import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LocationService extends Service {
  @tracked savedLocations = [];

  @action
  saveLocation(location) {
    this.savedLocations.push(location);
  }

  @action
  deleteLocation(location) {
    this.savedLocations = this.savedLocations.filter(l => l !== location);
  }
}