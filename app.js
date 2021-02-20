const cityWeather = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa6b4ae854d100716c2f49612e83cb38`
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
        .catch(err => alert('Enter valid keyword'))
}

const searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click', function () {
    const inputCity = document.getElementById('input-city').value;
    cityWeather(inputCity);
})

const displayWeather = weather => {
    document.getElementById('location-name').innerText = weather.name;
    document.getElementById('temperature').innerText = (weather.main.temp - 273).toFixed(2);
    document.getElementById('status').innerText = weather.weather[0].main;
    document.getElementById('image').setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    document.getElementById('input-city').value = '';
}