const key = "786a8488eb62eba11ecc454cd1ade2f0";
const backdrop = document.querySelector('body');
const search = document.querySelector('.search-bar');
const city = document.querySelector('.location');
const date = document.querySelector('.date');
const temperature = document.querySelector('.temp');
const conditions = document.querySelector('.conditions');


search.addEventListener('keypress', function(e) {
    if(e.key == "Enter") {
        e.preventDefault();
        getApi(search.value);
    }
})

function getApi(cityVal) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${key}&units=imperial`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            city.innerHTML = data.name + ', ' + data.sys.country;
            date.innerHTML = data.timezone;
            temperature.innerHTML = Math.round(data.main.temp) + '&deg;F';
            conditions.innerHTML = data.weather[0].main;

            changeBackground(data.weather[0].main);
        })
}

function changeBackground(climate) {
    if(climate == "Clouds" || climate == "Fog") {
        backdrop.style.backgroundImage = "url('Background Pictures/Clouds.jpg')";
        backdrop.style.backgroundRepeat = "no-repeat";
        backdrop.style.backgroundSize = "cover";
    } else if(climate == "Rain" || climate == "Drizzle" || climate == "Mist") {
        backdrop.style.backgroundImage = "url('Background Pictures/Rain.jpg')";
        backdrop.style.backgroundRepeat = "no-repeat";
        backdrop.style.backgroundSize = "cover";
    } else if(climate == "Thunderstorm") {
        backdrop.style.backgroundImage = "url('Background Pictures/Thunderstorm.jpg')";
        backdrop.style.backgroundRepeat = "no-repeat";
        backdrop.style.backgroundSize = "cover";
    } else if(climate == "Snow") {
        backdrop.style.backgroundImage = "url('Background Pictures/Snow.jpg')";
        backdrop.style.backgroundRepeat = "no-repeat";
        backdrop.style.backgroundSize = "cover";
    } else if(climate == "Clear") {
        backdrop.style.backgroundImage = "url('Background Pictures/Sunny.jpg')";
        backdrop.style.backgroundRepeat = "no-repeat";
        backdrop.style.backgroundSize = "cover";
    } else {
        backdrop.style.backgroundImage = "url('Background Pictures/Open Weather Logo.jpg')";
        backdrop.style.backgroundRepeat = "no-repeat";
        backdrop.style.backgroundSize = "cover";
    }
}







