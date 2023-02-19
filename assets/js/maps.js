// Initialize and add the map
function initMap() {
    // The location of Uluru
    const swords = {
        lat: 53.4575403284985,
        lng: -6.223121882644417
    };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: swords,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: swords,
        map: map,
    });
}

window.initMap = initMap;
