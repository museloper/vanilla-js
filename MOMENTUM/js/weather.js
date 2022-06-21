const API_KEY = "019d8e1786fc70ca5c7fb7291fc7103b";

function onGeoSuccess(position) {
  // coords 좌표
  console.log(position.coords);
  // latitude 위도
  console.log(position.coords.latitude);
  // longitude 경도
  console.log(position.coords.longitude);

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // fetch == promise
  // promise는 당장 일어나지 않고 시간이 좀 걸린 뒤에 일어난다.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    });
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
// openweathermap.org
