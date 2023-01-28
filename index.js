const key = "786a8488eb62eba11ecc454cd1ade2f0";
const searchBar = document.querySelector('.search-bar');
const locationName = document.querySelector('.location');
const currentDate = document.querySelector('.date');
const temperature = document.querySelector('.temp');


searchBar.addEventListener('keypress', function(e) {
    if(e.key == "Enter") {
        e.preventDefault();
        getApi(searchBar.value);
    }
})

function getApi(cityVal) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${key}&units=imperial`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            locationName.innerHTML = data.name + ', ' + data.sys.country;
            currentDate.innerHTML = data.timezone;
            temperature.innerHTML = Math.round(data.main.temp);
        })
}



/*fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${key}`)
    .then(res => res.json())
    .then(json => console.log(json))*/


