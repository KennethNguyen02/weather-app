import {fetchWeather} from "../api/fetchWeather";

export async function getWeatherData(lat: number, lon: number) {
    const weatherData = await fetchWeather(lat, lon);
    if (!weatherData) { return null;}



    return {
        temperature: weatherData.temperature_2m,
        windSpeed: weatherData.wind_speed_10m
    }
}
