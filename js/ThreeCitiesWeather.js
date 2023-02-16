class ThreeCitiesWeather {

    constructor(data) {
        this.cityName = data.name;
        this.countryAbr = data.sys.country;
        this.temperature = data.main.temp;
        this.image = data.weather[0].icon;
    }

    displayThreeCitiesWeather() {

        let defaultCities = document.querySelector(".default-cities");

        let wrapperDefaultCity = document.createElement("div");
        wrapperDefaultCity.classList.add("wrapper-default-city");
        defaultCities.append(wrapperDefaultCity);

        let defaultCity = document.createElement("div");
        defaultCity.classList.add("default-city");
        defaultCity.innerHTML = this.cityName + `, ` + this.countryAbr;
        wrapperDefaultCity.append(defaultCity);


        let imageDefaultCity = document.createElement("div");
        imageDefaultCity.classList.add("image-default-city");
        imageDefaultCity.innerHTML = `<img src="img/` + this.image + `.png">`;
        wrapperDefaultCity.append(imageDefaultCity);

        let temperatureDefaultCity = document.createElement("div");
        temperatureDefaultCity.classList.add("temperature-default-city");
        temperatureDefaultCity.innerHTML = Math.round(this.temperature) + `&deg;C`;
        wrapperDefaultCity.append(temperatureDefaultCity);
    };

}

