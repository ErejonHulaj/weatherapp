// app/components/save-as-favourite.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SaveAsFavouriteComponent extends Component {
  @service location;

  @action
  saveLocation() {
    // Assume that this.location is the current location object
    // with properties like name and picture
    this.location.saveLocation(this.location);
  }
}