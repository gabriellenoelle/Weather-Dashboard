function initPage() {
    const inputEl = document.getElementById("city-input");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");4
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory);
    

    const APIKey = "c9a9ed03a355403f4cb9a36e931c0b4a";

// When a city is searched for
// Then the user is presented with current and future conditions for that city
// And the city is added to the search history

function getWeather(cityName) {
    //  Using saved city name, execute a current condition get request from open weather map api
            let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
            axios.get(queryURL)
            .then(function(response){
                
                console.log(response);

// When the user views current weather conditions for that city
// Then they are presented with the city name, the date, a representative icon of weather conditions,
// ... the temperature, the humidity, the wind speed, and the UV index

// When the user views the UV index
// Then they are presented with a color that indicates whether the conditions are favorable, moderate, or severe

// When the user views the future weather conditions for that city
// Then they are presented with a 5-day forecast that displays the date, a repesentative icon of weather conditions,
// ... the temperature, the wind speed, and the humidity

// When the user clicks on a city in the search history
// Then they are again presented with current and future conditions for that city


//  When search button is clicked, read the city name typed by the user

 