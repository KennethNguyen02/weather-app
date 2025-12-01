export async function fetchWeather(lat: number, lon: number) {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,weather_code,apparent_temperature,is_day,relative_humidity_2m,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min`); //henter responsen

    const data = await response.json(); //gjør om json responsen til et JavaScript objekt (liste)
    
    return data? data: null 
}