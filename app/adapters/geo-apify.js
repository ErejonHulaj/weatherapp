// app/adapters/geo-apify.js
import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class GeoApifyAdapter extends JSONAPIAdapter {
  host = 'https://api.geoapify.com';
  namespace = 'v1';

  buildURL(modelName, id, snapshot, requestType) {
    let url = super.buildURL(...arguments);
    // Append any additional URL segments or parameters here if needed
    return url;
  }
}