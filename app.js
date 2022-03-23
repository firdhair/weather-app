
        console.log("tes")
        const search = document.querySelector(".search-value")
        const submit = document.querySelector(".submit-button")
        const city = document.querySelector(".city")
        const temp = document.querySelector(".temp")
        const weather = document.querySelector(".weather")
        const pressure = document.querySelector(".pressure")
        const h4_pressure = document.querySelector(".h4-pressure")
        const h4_visibility = document.querySelector(".h4-visibility")
        const h4_humidity = document.querySelector(".h4-humidity")
        const wind = document.querySelector(".wind")
        const polution = document.querySelector(".polution")
        //moreCats.addEventListener("click", getWeather)
        submit.addEventListener("click", getSearch)


        getWeather();

        async function getWeather(e) {
            console.log("no e")
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Medan&APPID=b2fa9c15e48d96148db7b64b134876bb&units=metric', { mode: 'cors' });
            const weatherData = await response.json();
            const coord = weatherData.coord
            const getCoord = Object.keys(coord).map((key) => [Number(key), coord[key]]);
            
            const response2 = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${getCoord[1][1]}&lon=${getCoord[0][1]}&appid=b2fa9c15e48d96148db7b64b134876bb`, { mode: 'cors' });
            const airData = await response2.json();
            console.log(weatherData);

            city.innerHTML = weatherData.name;
            temp.innerHTML = weatherData.main.temp
            weather.innerHTML = weatherData.weather[0].main
            h4_pressure.innerHTML = weatherData.main.pressure
            h4_visibility.innerHTML = weatherData.visibility
            h4_humidity.innerHTML = weatherData.main.humidity
            wind.innerHTML = weatherData.wind.speed
            polution.innerHTML = airData.list[0].components.pm2_5
        }

        async function getSearch(e) {
            e.preventDefault();
            let getPlace = search.value;
            console.log(getPlace)

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getPlace}&APPID=b2fa9c15e48d96148db7b64b134876bb&units=metric`, { mode: 'cors' });
            const weatherData = await response.json();
             const coord = weatherData.coord
            const getCoord = Object.keys(coord).map((key) => [Number(key), coord[key]]);

            const response2 = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${getCoord[1][1]}&lon=${getCoord[0][1]}&appid=b2fa9c15e48d96148db7b64b134876bb`, { mode: 'cors' });
            const airData = await response2.json();
            console.log(weatherData);

            city.innerHTML = weatherData.name;
            temp.innerHTML = weatherData.main.temp
            weather.innerHTML = weatherData.weather[0].main
            h4_pressure.innerHTML = weatherData.main.pressure
            h4_visibility.innerHTML = weatherData.visibility
            h4_humidity.innerHTML = weatherData.main.humidity
            wind.innerHTML = weatherData.wind.speed
            polution.innerHTML = airData.list[0].components.pm2_5
        }
    
  