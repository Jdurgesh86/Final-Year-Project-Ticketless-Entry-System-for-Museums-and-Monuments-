function initMap() {
  // Map options
  var options = {
    center: { lat: 27.1751, lng: 78.0421 },
    zoom: 5,
  };

  // New map
  map = new google.maps.Map(document.getElementById("map"), { options });

  // Function to add Marker
  function addMarker(property) {
    // Create a marker
    const marker = new google.maps.Marker({
      position: property.location,
      map: map,
    });

    // Conditional property to check if a custom icon is inputted
    if (property.imageIcon) {
      // set image icon
      marker.setIcon(property.imageIcon);
    }

    // Conditional property to check if a marker is inputted
    if (property.content) {
      // Add a detail window
      const detailWindow = new google.maps.InfoWindow({
        content: property.content,
      });
      marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);
      });
    }
  }

  // Add Marker Arrays
  let MarkerArray = [
    {
      location: { lat: 27.1751, lng: 78.0421 },
      content: "<h4>Taj Mahal</h4><p>The iconic symbol of love in Agra, Uttar Pradesh</p>",
    },
    {
      location: { lat: 28.6139, lng: 77.209 },
      content: "<h4>Red Fort</h4><p>A UNESCO World Heritage Site in New Delhi</p>",
    },
    {
      location: { lat: 26.9124, lng: 75.7873 },
      content: "<h4>Amer Fort</h4><p>Historical fort located in Jaipur, Rajasthan</p>",
    },
    {
      location: { lat: 25.2799, lng: 82.9562 },
      content: "<h4>Varanasi Ghats</h4><p>Spiritual city on the banks of the Ganges</p>",
    },
    {
      location: { lat: 28.6119, lng: 77.2195 },
      content: "<h4>India Gate</h4><p>A war memorial in New Delhi</p>",
    },
    {
      location: { lat: 18.9217, lng: 72.8342 },
      content: "<h4>Gateway of India</h4><p>Iconic arch monument in Mumbai</p>",
    },
    {
      location: { lat: 15.2993, lng: 74.124 },
      content: "<h4>Gol Gumbaz</h4><p>Maqbara (mausoleum) in Bijapur, Karnataka</p>",
    },
    {
      location: { lat: 22.5726, lng: 88.3639 },
      content: "<h4>Victoria Memorial</h4><p>Large marble building in Kolkata, West Bengal</p>",
    },
    {
      location: { lat: 24.8799, lng: 74.6299 },
      content: "<h4>Chittorgarh Fort</h4><p>Largest fort in India, located in Rajasthan</p>",
    },
    {
      location: { lat: 12.9141, lng: 74.8554 },
      content: "<h4>Tipu Sultan's Summer Palace</h4><p>Historical palace in Bangalore, Karnataka</p>",
    },
  ];
  

  // Loop through the MarkerArray to create markers
  for (let i = 0; i < MarkerArray.length; i++) {
    addMarker(MarkerArray[i]);
  }
}