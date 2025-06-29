async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '838a0ff8c592f71ae288a9b6f14c9dbf';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temp').innerText = data.main.temp;
    document.getElementById('humidity').innerText = data.main.humidity;
    document.getElementById('wind').innerText = data.wind.speed;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById('weatherResult').classList.remove('hidden');
  } catch (error) {
    alert('City not found!');
    document.getElementById('weatherResult').classList.add('hidden');
  }
}
