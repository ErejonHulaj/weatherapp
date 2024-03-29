// app/components/saved-locations.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SavedLocationsComponent extends Component {
  @service location;

  @action
  deleteLocation(location) {
    this.location.deleteLocation(location);
  }
}