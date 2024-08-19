const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '784760bbebmshc4c5c526350051fp1391bdjsn2ecefc9a279e',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
};
const getElement = (sourceElementString, destElement) => {
    document.getElementById(sourceElementString).innerText = destElement;
}

const getWeather = async (city) => {
    document.getElementById("cityName").innerText = city;

    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;

 

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        // document.getElementById("temp").innerText = result.main.temp;

        getElement("temp", result.main.temp);

        getElement("temp2", result.main.temp);
        getElement("min_temp", result.main.temp_min);
        getElement("max_temp", result.main.temp_max);

        getElement("feels_like", result.main.feels_like);
        getElement("humidity", result.main.humidity);
        getElement("humidity2", result.main.humidity);

        getElement("wind_speed", result.wind.speed);
        getElement("wind_speed2", result.wind.speed);
        getElement("wind_degrees", result.wind.deg);

        getElement("sunrise", new Date(result.sys.sunrise * 1000).toLocaleTimeString());
        getElement("sunset", new Date(result.sys.sunset * 1000).toLocaleTimeString());
    } catch (error) {
        console.error(error);
    }
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;
    getWeather(city);
});

// Initial call to display weather for London on page load
getWeather("Manchester");
