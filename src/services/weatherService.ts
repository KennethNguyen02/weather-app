import { fetchWeather } from "../api/fetchWeather";



export async function getWeatherData(lat: number, lon: number) {
    const data = await fetchWeather(lat, lon);
    if (!data) return null;

    return {

        current: { 
            temperature: data.current.temperature_2m,
            windSpeed: data.current.wind_speed_10m,
            weatherCode: data.current.weather_code,
            apparentTemperature: data.current.apparent_temperature, //feels like temperature
            isDay: data.current.is_day,
            humidity: data.current.relative_humidity_2m
        },

        
        daily: data.daily.time.map((date: string, i: number) => ({
            date,
            formattedDate: formatDate(date),
            maxTemp: data.daily.temperature_2m_max[i],
            minTemp: data.daily.temperature_2m_min[i],
            weatherCode: data.daily.weather_code[i],
        }))
    };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short"
  });
}


