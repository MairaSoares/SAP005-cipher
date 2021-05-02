//import cipher from './cipher.js';

//console.log(cipher);


var platform = new H.service.Platform({
    'apikey': 'ebbQD_elut2LJu2XmHvWGO19XmSoK8IJaSLb9YrTjnI'
  });
  
  // Obtain the default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();
  
  // Instantiate (and display) a map object:
  var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 14,
      center: { lat: 52.5, lng: 13.4 },
      pixelRatio: window.devicePixelRatio || 1
    });

    console.log(geocoder);
  
  // Get the default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();
  
  var geocodingParams;
  
  // Define a callback function to process the geocoding response:
  var onResult = function (result) {
    var locations = result.Response.View[0].Result;
    // Add a marker for each location found
    for (i = 0; i < locations.length; i++) {
        setNewCenter(
            locations[i].Location.DisplayPosition.Latitude,
            locations[i].Location.DisplayPosition.Longitude
        )
    }
  };

  function setNewCenter(lat, long){
    position = {
        lat: lat,
        lng: long
    };
    map.setCenter(position)
    marker = new H.map.Marker(position);
    map.addObject(marker);
    return position;
  }
  
  // Get an instance of the geocoding service:
  var geocoder = platform.getGeocodingService();

  function callback(position){
    setNewCenter(position.coords.latitude, position.coords.longitude)
  }

  document.getElementById('user-location').addEventListener('click', function(){
    navigator.geolocation.getCurrentPosition(callback);
  });

  function useImperialMeasurements(map, defaultLayers){
    // Create the default UI components
    var ui = H.ui.UI.createDefault(map, defaultLayers);
  
    // Set the UI unit system to imperial measurement
    ui.setUnitSystem(H.ui.UnitSystem.IMPERIAL);
  }

  // add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Now use the map as required...
useImperialMeasurements(map, defaultLayers);
  