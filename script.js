function initMap() {
    // Define the coordinates for the flight path
    const flightPlanCoordinates = [
        { lat: 47.4483688, lng: -122.3111622 }, //Seattle,
        { lat: 47.5634276, lng: -122.6236087}, //Bremerton,
        { lat: 47.5214745, lng: -122.7224791}, //Gorst,
        { lat: 47.0071037, lng: -123.4918403}, //Elma,
        { lat: 46.7241119,lng: -122.972087}, //Centralia
        { lat: 46.2737382, lng: -122.9154672}, //CastleRock
        { lat: 46.1422939, lng: -122.9655535}, //longview
        { lat: 46.2005357, lng:-123.3859206}, //Cathlamet,
        { lat: 46.1327178, lng:-123.3771287},//Westport
        { lat: 46.1875234, lng:-123.8399228},//Astoria
        { lat: 45.8915384, lng:-123.9626711},//Cannon Beach
        { lat: 45.2006927, lng:-123.9693232},//Pacifc City
        { lat: 44.6368871,lng:-124.0573565},//Newport
        { lat: 43.9838266, lng:-124.1024063},//Florence
        { lat: 43.3319494, lng:-124.3727432},//Coos Bay
        { lat: 42.7460128, lng:-124.4982434},//Port Orford
        { lat: 42.4067396, lng:-124.423755},//Gold Beach
        { lat: 42.053794, lng:-124.285754,},//Brookings
        { lat: 41.3587664, lng:-124.0321365},//Elk Prairie
        { lat: 40.7956776, lng:-124.1713741},//Eureka
        { lat: 40.3093584, lng:-123.9111004},//Burlington
        { lat: 39.878902, lng:-123.7423573},//Legget
        { lat: 39.2741923, lng:-123.7913404},//Little River
        { lat: 38.5481242, lng:-123.2948153},//Stillwater Cove Campground
        { lat: 38.0246498, lng:-122.7239673},//Samuel P Taylor
        { lat: 37.781122, lng: -122.4729165 }, //San Franciso
        { lat: 37.4637923, lng: -122.4378723 }, //Half Moon
        { lat: 36.9775311, lng: -121.9456407 }, //New Brigton
        { lat: 36.2132404, lng: -121.129526 }, //King City
        { lat: 35.6335549, lng: -120.618246 }, //Paso Robles
        { lat: 35.2815335, lng: -120.6631689 }, //San Luis Obispo
        { lat: 34.4886711, lng: -120.2322721 }, //Gaviota
        { lat: 34.3989752, lng: -119.5192956 }, //Carpinteria
        { lat: 34.0336359, lng: -118.7398326 }, //Malibu
        { lat: 33.7716182, lng: -118.2030138 }, //Long Beach
        { lat: 33.1961264, lng: -117.3804237 }, //Oceanside
        { lat: 32.7556306,lng: -117.1991635 }, //San Diego
        { lat: 32.5348551,lng: -117.1227964 }, //Imperial Beach
    ];




    // Define the markers with their details
    const markers = [
        {
            locationName: 'Day 0: Seattle, WA',
            lat: 47.4483688,
            lng: -122.3111622,
            url: 'day0.html'
        },
        {
            locationName: 'Day 1: Seattle to Gorst',
            lat: 47.5214745, 
            lng: -122.7224791,
            url: 'day1.html'
        },
        {
            locationName: 'Day 2: Gorst to Elma',
            lat: 47.0071037, 
            lng: -123.4918403,
            url: 'day2.html'
        },
        {
            locationName: 'Day 3: Elma to Castle Rock',
            lat: 46.2737382, 
            lng: -122.9154672,
            url: 'day3.html'
        },
        {
            locationName: 'Day 4: Castle Rock to Longview',
            lat: 46.1422939, 
            lng: -122.9655535,
            url: 'day4.html'
        },
        {
            locationName: 'Day 5: Longview to Astoria',
            lat: 46.1875234, 
            lng:-123.8399228,
            url: 'day5.html'
        },
        {
            locationName: 'Day 6: Astoria to Cannon Beach',
            lat: 45.8915384, 
            lng:-123.9626711,
            url: 'day6.html'
        },
        {
            locationName: 'Day 7: Cannon Beach to Pacific City',
            lat: 45.2006927, 
            lng:-123.9693232,
            url: 'day7.html'
        },
        {
            locationName: 'Day 8: Pacific City to Newport',
            lat: 44.6,
            lng:-124.0573565,
            url: 'day8.html'
        },
        {
            locationName: 'Day 9: Newport',
            lat: 44.6368871,
            lng:-124.0573565,
            url: 'day9.html'
        },
        
        {
            locationName: 'Day 10: Newport to Florence',
            lat: 43.9838266, 
            lng:-124.1024063,
            url: 'day10.html'
        },
        {
            locationName: 'Day 11: Florence to Coos Bay',
            lat: 43.3319494, 
            lng:-124.3727432,
            url: 'day11.html'
        },
        
        
        {
            locationName: 'Day 12: Coos Bay to Port Orford',
            lat: 42.7460128, 
            lng:-124.4982434,
            url: 'day12.html'
        },
        {
            locationName: 'Day 13: Port Orford to Brookings',
            lat: 42.053794, 
            lng:-124.285754,
            url: 'day13.html'
        },

        {
            locationName: 'Day 14: Brookings to Orick',
            lat: 41.3587664, 
            lng:-124.0321365,
            url: 'day14.html'
        },
        {
            locationName: 'Day 15: Orick to Eureka',
            lat: 40.7956776, 
            lng:-124.1713741,
            url: 'day15.html'
        },
        {
            locationName: 'Day 16: Eureka to Burlington',
            lat: 40.3093584, 
            lng:-123.9111004,
            url: 'day16.html'
        },
        {
            locationName: 'Day 17: Burlington to Legget',
            lat: 39.878902, 
            lng:-123.7423573,
            url: 'day17.html'
        },
        {
            locationName: 'Day 18: Legget to Little River',
            lat: 39.2741923, 
            lng:-123.7913404,
            url: 'day18.html'
        },
        {
            locationName: 'Day 19: Little River to Walsh Landing',
            lat: 38.5481242, 
            lng:-123.2948153,
            url: 'day19.html'
        },
        {
            locationName: 'Day 20: Walsh Landing to Lagunitas',
            lat: 38.0246498, 
            lng:-122.7239673,
            url: 'day20.html'
        },
        {
            locationName: 'Day 21: Lagunitas to San Franciso',
            lat: 37.781122, 
            lng: -122.4729165,
            url: 'day21.html'
        },
        {
            locationName: 'Day 22: San Franciso',
            lat: 37.73, 
            lng: -122.4729165,
            url: 'day22.html'
        },
        {
            locationName: 'Day 23: San Franciso to Half Moon',
            lat: 37.4637923, 
            lng: -122.4378723,
            url: 'day23.html'
        },
        {
            locationName: 'Day 24: Half Moon to Capitola',
            lat: 36.9775311, 
            lng: -121.9456407,
            url: 'day24.html'
        },
        {
            locationName: 'Day 25: Capitola to King City',
            lat: 36.2132404, 
            lng: -121.129526,
            url: 'day25.html'
        },
        {
            locationName: 'Day 26: King City to Paso Robles',
            lat: 35.6335549, 
            lng: -120.618246,
            url: 'day26.html'
        },
        {
            locationName: 'Day 27: Paso Robles to San Luis Obispo',
            lat: 35.2815335, lng: -120.6631689,
            url: 'day27.html'
        },
        {
            locationName: 'Day 28: San Luis Obispo to Gaviota',
            lat: 34.4886711, lng: -120.2322721,
            url: 'day28.html'
        },
        {
            locationName: 'Day 29: Gaviota to Carpinteria',
            lat: 34.3989752, lng: -119.5192956,
            url: 'day29.html'
        },
        {
            locationName: 'Day 30: Carpinteria to Malibu',
            lat: 34.0336359, lng: -118.7398326,
            url: 'day30.html'
        },
        {
            locationName: 'Day 31: Malibu to Los Angeles',
            lat: 33.7716182, lng: -118.2030138,
            url: 'day31.html'
        },
        {
            locationName: 'Day 32: Los Angeles to Oceanside',
            lat: 33.1961264, lng: -117.3804237,
            url: 'day32.html'
        },
        
        {
            locationName: 'Day 33: Oceanside to San Diego',
            lat: 32.7542817,
            lng: -117.2380931,
            url: 'day33.html'
        },
        {
            locationName: 'Day 34: San Diego to Imperial Beach',
            lat: 32.5348551,
            lng: -117.1227964,
            url: 'day34.html'
        }
    ];

    // Define the center of the map
    const centerMap = { lat: 40.8767634, lng: -120.2760672 };

    const bounds = new google.maps.LatLngBounds();

    // Map options
    const mapOptions = {
        center: centerMap,
        zoom: 5,
        disableDefaultUI: true,
        styles: 
            [
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdc2"
            }
        ]
    }
]
    };

    // Create the map
    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    
    const infoWindow = new google.maps.InfoWindow({
        minWidth: 200,
        maxWidth: 200
    });
    // Add markers to the map
for (let i = 0; i < markers.length; i++) {
    const marker = new google.maps.Marker({
        position: { lat: markers[i]['lat'], lng: markers[i]['lng'] }, // Correctly set the position
        map: map,
        title: markers[i]['locationName'], // Optional: add title for marker tooltip
        icon: {
            url: 'dancingBear.png',
            scaledSize: new google.maps.Size(40, 40), // Scales the icon size
        }
    });

    function createInfoWindow(){
        const infoWindowContent = `
            <div class="feh-content">
                <h3 style="margin-top: 0; color: black;">${markers[i]['locationName']}</h3>
                <p style="font-size: 14px; color: blue; text-decoration: underline;">
                    <a href="${markers[i]['url']}" target="_blank" style="color: #1a73e8; text-decoration: none;">View journal entry</a>
                </p>
            </div>
        `;

        google.maps.event.addListener(marker,'click',function(){
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(map,marker);
        })

        map.fitBounds(bounds);
    }

    createInfoWindow()

    infoWindow.addListener('closeclick', function(){
        map.fitBounds(bounds)
    })

    bounds.extend(new google.maps.LatLng(markers[i]['lat'],markers[i]['lng']));

}


    // Create and display the flight path
    const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#ff00f7",
        strokeOpacity: 2.0,
        strokeWeight: 3,
        map: map  // Added map property to show the polyline on the map
    });
}
