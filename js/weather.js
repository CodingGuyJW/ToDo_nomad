const API_KEY = "554d326393c90b72a51903b92af13fc2";
const KAKAO_MAP_API_KEY = "ed69e9b73d46767af2f1d9981c5347ea";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const urlKakaoMap = ``;
    console.log(lat,lon);

    fetch(url)
    .then( response => response.json() )
    .then( data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp.toFixed(1)}℃ / `;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
