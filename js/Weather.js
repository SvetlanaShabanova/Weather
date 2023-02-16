class Weather {

    constructor(data) {
        this.cityName = data.name;
        this.countryAbr = data.sys.country;
        this.temperature = data.main.temp;
        this.image = data.weather[0].icon;
        this.discription = data.weather[0].main;
        this.wind = data.wind.speed;
        this.humidity = data.main.humidity;
    }

    displayWeather() {
        document.querySelector(".location").innerHTML = this.cityName + `, ` + this.countryAbr;
        document.querySelector(".temperature").innerHTML = Math.round(this.temperature) + `&deg;C`;
        // document.querySelector(".image").innerHTML = `<img src="http://openweathermap.org/img/wn/` + this.image + `@2x.png">`;
        document.querySelector(".image").innerHTML = `<img src="img/` + this.image + `.png">`;
        document.querySelector(".description").innerHTML = this.discription;
        document.querySelector(".wind").innerHTML = Math.round(this.wind) + ` m/s`;
        document.querySelector(".humidity").innerHTML = this.humidity + ` %`;
    };
}