import { fetchWeather } from "../api/fetchWeather";



export async function getWeatherData(lat: number, lon: number) {
    const data = await fetchWeather(lat, lon);
    if (!data) return null;

    const localNow = new Date(Date.now() + data.utc_offset_seconds * 1000) //adding timezone data to the UTC to find local time in our search
    const currentLocalHour = localNow.getHours(); //type is a number

    return { //returns 1 object that contains 4 properties

        currentLocalHour,

        current: { 
            temperature: data.current.temperature_2m,
            windSpeed: data.current.wind_speed_10m,
            weatherCode: data.current.weather_code,
            apparentTemperature: data.current.apparent_temperature, //feels like temperature
            isDay: data.current.is_day,
            humidity: data.current.relative_humidity_2m,
            precipitation: data.current.precipitation
        },

        hourly: data.hourly.time.map((time: string, i: number) => ({ //looping over hourly which is an object containing 2 arrays
            time,
            hour: time.slice(11,13), //gets the hour from the timestamp string
            temperature: data.hourly.temperature_2m[i],
            weatherCode: data.hourly.weather_code[i],
            windSpeed: data.hourly.wind_speed_10m[i],
            precipitation: data.hourly.precipitation[i],
            isDay: data.hourly.is_day
        })),

        
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


