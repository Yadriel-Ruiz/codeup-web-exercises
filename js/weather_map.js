mapboxgl.accessToken = MB_KEY;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-95.38042, 29.73840], // starting position Houston
    zoom: 11 // starting zoom
});

// Initialize a variable to store the current marker
let currentMarker = createMarker([-95.38042, 29.73840]);

// Adds a search bar to the map
map.addControl(
    new MapboxGeocoder({
        accessToken: MB_KEY,
        mapboxgl: mapboxgl,
        marker: false
    })
        .on('result', async function (event) {
            const lngLat = event.result.geometry.coordinates; // Access coordinates property
            updateMarker(lngLat);

            try {
                console.log(lngLat);
                const forecastData = await getWeatherForecast(lngLat);
            } catch (error) {
                console.error('Error fetching weather forecast data:', error);
            }
        })
);

// Adds a navigation control to the map
map.addControl(new mapboxgl.NavigationControl());

// Function to create a marker at the specified coordinates
function createMarker(lngLat) {
    return new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(lngLat)
        .addTo(map);
    console.log(forecastData);
}

// Function to update the marker
function updateMarker(lngLat) {
    if (currentMarker) {
        currentMarker.remove();
    }

    // Add a new marker at the specified coordinates
    currentMarker = createMarker(lngLat);

    // Update the marker's position on dragend
    currentMarker.on('dragend', function () {
        let newLngLat = currentMarker.getLngLat();
        let lngLatArray = [newLngLat.lng, newLngLat.lat];
        console.log(newLngLat);
        getWeatherForecast(lngLatArray);
    });
}

// Listen for a click event on the map
map.on('click', async function (event) {
    const lngLat = [event.lngLat.lng, event.lngLat.lat];
    updateMarker(lngLat);

    try {
        console.log(lngLat);
        const forecastData = await getWeatherForecast(lngLat);
    } catch (error) {
        console.error('Error fetching weather forecast data:', error);
    }
});

// Information for weather map API
const WM_TOKEN = WM_KEY;
function getWeatherForecast(lngLat) {
    const lat = lngLat[1]; // Assuming latitude is at index 1
    const lon = lngLat[0]; // Assuming longitude is at index 0

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WM_TOKEN}&units=imperial`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Weather Map API request failed: ${response.statusText}`);
            }
            return response.json();
        })
        .then(forecastData => {
            console.log('Weather Forecast Data:', forecastData);
            return forecastData;
        })
        .catch(error => {
            console.error('Error fetching weather forecast data:', error);
        });
}
