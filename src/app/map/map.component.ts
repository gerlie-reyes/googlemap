import { Component, OnInit } from '@angular/core';
import { GoogleAPI } from './googleapiloader';

var autocomplete;
declare var google;

@Component({
  selector: 'app-map',
  providers: [GoogleAPI],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  constructor(googleapi: GoogleAPI) {
    googleapi.googleAPILoaded().then(() => {
      console.log('ta da');
      this.initAutocomplete();
    });
  }

  ngOnInit() {
    console.log('loaded map');
  }

  initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      { types: ['geocode'] });


    /**
     * When the user selects an address from the dropdown, 
     * populate the address fields in the form.
     * 
     * Note: Removing this for now, I'm just showing the map on the page
     * */
    // autocomplete.addListener('place_changed', this.checkAvailableServices);

    autocomplete.addListener('place_changed', this.initMap);
  }

  // Not used method
  // checkAvailableServices() {
  //   var place = autocomplete.getPlace();
  //   console.log(place);

  //   document.getElementById('response').innerHTML = '<div class="ui info ignored message">' +
  //     'Call API to check for available services for lng-lat <br><strong>' +
  //     place.geometry.location.lng() +
  //     '</strong> - <strong>' + place.geometry.location.lat() + '</strong></div>';
  // }

  initMap() {
    var place = autocomplete.getPlace();

    new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      },
      zoom: 10
    });
  }
}
