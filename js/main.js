const apiKey = "d7dc4d402c5ed576fb0b23d06163b105";
let city = "Kharkov";
let link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
let cityInput = document.querySelector("#search-input");
let searchBtn = document.querySelector("#search-btn");

//Получение ответа на запрос о погоде в Харькове и вызов объекта Weather
getCurrentWeatherResponse(link);

//Обработка з-х городов справа
let threeCities = ["Kiev", "London", "New York"];
for (let defaultCity of threeCities) {
    let link_city = handlerInputThreeCities(defaultCity);
    console.log(defaultCity);
}
//Обработка поисковой строки
cityInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        city = cityInput.value;
        if (!city) {
            return;
        }
        handlerInputCity(city);
    }
});
searchBtn.addEventListener("click", function (e) {
    city = cityInput.value;
    if (!city) {
        return;
    }
    handlerInputCity(city);
});

//Обработка ссылки
function handlerInputCity(city) {
    let link_city = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    document.querySelector("#search-input").value = "";
    getCurrentWeatherResponse(link_city);
}

//Обработка ссылки на 3 города
function handlerInputThreeCities(city) {
    let link_city = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    getCurrentWeatherThreeCitiesResponse(link_city);
}

//Получение ответа на запрос о погоде и вызов объекта Weather
function getCurrentWeatherResponse(link) {
    fetch(link)
        .then(function (resp) {
            return resp.json()
        })// convert data to json
        .then(function (data) {
            console.log(data);
            if (data.cod == "200") {
                let weatherObj = new Weather(data);
                weatherObj.displayWeather();
                console.log(weatherObj);
            }
        })
        .catch(error => console.log(error.message));
}

//Получение ответа на запрос о погоде в 3 городах и вызов объекта ThreeCitiesWeather
function getCurrentWeatherThreeCitiesResponse(link) {
    fetch(link)
        .then(function (resp) {
            return resp.json()
        })// convert data to json
        .then(function (data) {
            console.log(data);
            if (data.cod == "200") {
                let weatherThreeCitiesObj = new ThreeCitiesWeather(data);
                weatherThreeCitiesObj.displayThreeCitiesWeather();
                console.log(weatherThreeCitiesObj);
            }
        })
        .catch(error => console.log(error.message));
}
