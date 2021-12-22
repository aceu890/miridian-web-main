function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat:  -33.590725, lng: -71.605936};
   
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 8,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}