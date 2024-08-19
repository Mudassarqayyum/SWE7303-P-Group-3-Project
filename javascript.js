const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '1388d6dd91msh02d22f3927d9cbbp13996djsn88833f224680',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
};

const getWeather = async (city) => {
    document.getElementById("cityName").innerText = city;

    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        document.getElementById("temp").innerText = result.main.temp;
        document.getElementById("temp2").innerText = result.main.temp;
        document.getElementById("min_temp").innerText = result.main.temp_min;
        document.getElementById("max_temp").innerText = result.main.temp_max;

        document.getElementById("feels_like").innerText = result.main.feels_like;
        document.getElementById("humidity").innerText = result.main.humidity;
        document.getElementById("humidity2").innerText = result.main.humidity;

        document.getElementById("wind_speed").innerText = result.wind.speed;
        document.getElementById("wind_speed2").innerText = result.wind.speed;
        document.getElementById("wind_degrees").innerText = result.wind.deg;

        document.getElementById("sunrise").innerText = new Date(result.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById("sunset").innerText = new Date(result.sys.sunset * 1000).toLocaleTimeString();
    } catch (error) {
        console.error(error);
    }
}

