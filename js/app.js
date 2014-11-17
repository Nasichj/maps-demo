/* app.js -- our application code */

"use strict";

// UW coordinates:
// lat: 47.655
// lng: -122.3080

$(document).ready(function() {
    function createMap(center, zoom) {
        var mapElem = document.getElementById('map');

        var map = new google.maps.Map(mapElem, {
            center: center,
            zoom: zoom

        });

        var marker = new google.maps.Marker ({
            position: center,
            map: map,
            animation: google.maps.Animation.DROP
        });
    }

    var uwCoords = {
        lat: 20.8,
        lng: -156.333
    };
    createMap(uwCoords, 10);
});//on doc ready