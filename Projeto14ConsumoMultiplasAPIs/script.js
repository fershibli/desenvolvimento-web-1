const weather_api_key = "get yours at openweathermap.org"

function cepMask(event) {
    if (event.keyCode == 8) { //backspace
        return;
    }
    let cep_input = event.target;
    let cep_value = cep_input.value;
    cep_value = cep_value.replace(/\D/g, '');

    if (cep_value.length >= 5) {
        cep_value = cep_value.substring(0, 5) + "-" + cep_value.substring(5);
    }

    cep_input.value = cep_value;
}

function fetchAdressFromCEP(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json());
}

async function fetchWeatherFromCity(city_name) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${weather_api_key}&units=metric&lang=pt_br`)
        .then(response => response.json());
}

function getFlagURLFromCode(country_code, style = "shiny", size = "64") {
    return `https://flagsapi.com/${country_code}/${style}/${size}.png`;
}

async function searchWeather() {
    const cep_input = document.getElementById('inputCep');
    const cidade_input = document.getElementById('inputCidade');
    const weather_text = document.getElementById('weatherResponse');
    const flag_image = document.getElementById('flagResponse');

    let cidade;
    if (cep_input.value) {
        const address = await fetchAdressFromCEP(cep_input.value);
        cidade = address.localidade;
        cidade_input.value = cidade
    } else {
        cidade = cidade_input.value;
    }

    const weather = await fetchWeatherFromCity(cidade);
    const flag_url = await getFlagURLFromCode(weather.sys.country);

    weather_text.innerHTML = `Hoje está ${weather.main.temp}°C e ${weather.weather[0].description}.`;
    flag_image.src = flag_url;
}

document.getElementById('searchWeather').addEventListener("click", searchWeather);