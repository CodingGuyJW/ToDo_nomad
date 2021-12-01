const API_KEY = "554d326393c90b72a51903b92af13fc2";
const GOOGLE_API_KEY = "AIzaSyC5OxEAdq13B3waRMudYBvuySYjtQ_7DSc";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GOOGLE_API_KEY}`;

    fetch(url)
    .then( response => response.json() )
    .then( data => {
        const weather = document.querySelector("#weather span:first-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp.toFixed(1)}℃ / `;
    });

    fetch(googleUrl)
    .then( googleRes => googleRes.json() )
    .then( googleData => {
        const city = document.querySelector("#weather span:last-child");
        const addressArr = googleData.results[0].formatted_address.split(" ");
        // console.log(addressArr);
        city.innerText = `${addressArr[2]}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
