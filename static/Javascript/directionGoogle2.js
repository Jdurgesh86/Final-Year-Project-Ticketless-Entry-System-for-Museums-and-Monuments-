// Set standard map options
var mylatlng1 = {lat: 28.6139, lng: 77.2090 };
var mylatlng3 = { lat: 28.6139, lng: 77.2090 };

// Set map options in case of unretrievable data
var otherlatlng = { lat: 28.6139, lng: 77.2090 };

// Set map options for each map
var mapOptions1 = {
  center: mylatlng1,
  zoom: 5,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
};
var mapOptions3 = {
  center: mylatlng3,
  zoom: 5,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
};

var map1 = new google.maps.Map(
  document.getElementById("googleMap1"),
  mapOptions1
);
var map3 = new google.maps.Map(
  document.getElementById("googleMap3"),
  mapOptions3
);

// create a Directions service object to get a result for our request
var directionsService = new google.maps.DirectionsService();

function calcRoute() {
  // requests array with the origin and destination inputted in directions.html
  
  let requestsArray = [
    {
      origin: document.getElementById("from").value,
      destination: document.getElementById("to").value,
      travelMode: google.maps.TravelMode.WALKING,
      unitSystem: google.maps.UnitSystem.METRIC,
    },

    {
      origin: document.getElementById("from").value,
      destination: document.getElementById("to").value,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
    },
  ];

  // create an array to store the directions display objects for each map
  var directionsDisplays = [
    new google.maps.DirectionsRenderer({ map: map1, label: "Walking" }),
    new google.maps.DirectionsRenderer({ map: map3, label: "Car" }),
  ];

  // execute each request using the directions service
  for (let i = 0; i < requestsArray.length; i++) {
    directionsService.route(requestsArray[i], (result, status) => {
      var output;
      switch (i) {
        case 0:
          output = outputwalking;
          break;
        case 1:
          output = outputdriving;
          break;
      }
      if (status == google.maps.DirectionsStatus.OK) {
        // display the distance and duration for each request
        output.innerHTML =
          "<div class='alert-info'></br><h4><i class='fa-solid fa-people-arrows'></i> Distance: " +
          result.routes[0].legs[0].distance.text +
          "</h4><h4><i class='fa-solid fa-clock'></i> Duration: " +
          result.routes[0].legs[0].duration.text +
          "</h4></br></div>";

        // display the route for each request
        directionsDisplays[i].setDirections(result);
      } else {
        // delete route from map
        directionsDisplays[i].setDirections({ routes: [] });

              var map;
              switch (i) {
                case 0:
                  map = map1;
                  break;
                case 1:
                  map = map3;
                  break;
              }
        // center map in Milan
        map.setCenter(otherlatlng);

        // show the error
        output.innerHTML =
          "<div class='alert-danger'>There you can't go, but I suggest you to go here, seems like a nice place <i class='fa-regular fa-face-smile-wink'></i></div>";
      }
    });
  }
}

// autocomplete object the from and to inputs
var options = {
  types: ["(cities)"], //stadium   park
};

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
