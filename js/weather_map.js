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
    const lat = lngLat[1];
    const lon = lngLat[0];
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WM_TOKEN}&units=imperial`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Weather Map API request failed: ${response.statusText}`);
            }
            return response.json();
        })
        .then(forecastData => {
            // Extract relevant information
            const dailyData = {}; // Object to store daily information

            forecastData.list.forEach(item => {
                const date = item.dt_txt.split(' ')[0]; // Extract date without time
                if (!dailyData[date]) {
                    dailyData[date] = {
                        minTemp: item.main.temp,
                        maxTemp: item.main.temp,
                        pressure: item.main.pressure,
                        humidity: item.main.humidity,
                        overcast: item.weather[0].description
                    };
                } else {
                    // Update min/max temperature if necessary
                    dailyData[date].minTemp = Math.min(dailyData[date].minTemp, item.main.temp);
                    dailyData[date].maxTemp = Math.max(dailyData[date].maxTemp, item.main.temp);
                }
            });

            console.log('Daily Weather Information:', dailyData);
            generateWeatherCards(dailyData);
            return dailyData;
        })
        .catch(error => {
            console.error('Error fetching weather forecast data:', error);
        });
}

function generateWeatherCards(dailyData) {
    const container = document.getElementById('weather-cards-container');

    // Clear previous cards
    container.innerHTML = '';

    // Iterate through each day in dailyData
    for (const date in dailyData) {
        if (dailyData.hasOwnProperty(date)) {
            const dayInfo = dailyData[date];

            // Create a card element
            const card = document.createElement('div');
            card.classList.add('weather-card');
            card.classList.add('col-2');

            // Update card content
            card.innerHTML = `
                        <h3>${date}</h3>
                        <p>Min Temperature: ${dayInfo.minTemp} °F</p>
                        <p>Max Temperature: ${dayInfo.maxTemp} °F</p>
                        <p>Pressure: ${dayInfo.pressure} hPa</p>
                        <p>Humidity: ${dayInfo.humidity}%</p>
                        <p>Overcast: ${dayInfo.overcast}</p>
                    `;

            // Append the card to the container
            container.appendChild(card);
        }
    }
}

