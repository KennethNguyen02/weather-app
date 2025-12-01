import sun from "../assets/weatherIcons/sun.svg";
import night from "../assets/weatherIcons/night.svg";
import cloud from "../assets/weatherIcons/cloud.svg";
import cloudNight from "../assets/weatherIcons/cloudNight.svg";     
import fog from "../assets/weatherIcons/fog.svg";
import drizzle from "../assets/weatherIcons/drizzle.svg";
import freezingDrizzle from "../assets/weatherIcons/freezingDrizzle.svg";
import rain from "../assets/weatherIcons/rain.svg";
import freezingRain from "../assets/weatherIcons/freezingRain.svg";
import snowfall from "../assets/weatherIcons/snowfall.svg";
import snowgGrains from "../assets/weatherIcons/snowGrains.svg";
import rainShowers from "../assets/weatherIcons/rainShowers.svg";
import snowShowers from "../assets/weatherIcons/snowShowers.svg";
import thunder from "../assets/weatherIcons/thunder.svg";



export const weatherList = [
  { codes: [0], name: "Clear sky", icon: sun , iconNight: night}, //object with 3 parameters

  { codes: [1, 2, 3], name: "Overcast", icon: cloud, iconNight: cloudNight }, //object with 3 parameters

  { codes: [45, 48], name: "Fog", icon: fog },

  { codes: [51, 53, 55], name: "Drizzle", icon: drizzle },

  { codes: [56, 57], name: "Freezing drizzle", icon: freezingDrizzle },

  { codes: [61, 63, 65], name: "Rain", icon: rain },

  { codes: [66, 67], name: "Freezing rain", icon: freezingRain },

  { codes: [71, 73, 75], name: "Snowfall", icon: snowfall },

  { codes: [77], name: "Snow grains", icon: snowgGrains },

  { codes: [80, 81, 82], name: "Rain showers", icon: rainShowers },

  { codes: [85, 86], name: "Snow showers", icon: snowShowers },

  { codes: [95], name: "Thunderstorm", icon: thunder },

  { codes: [96, 99], name: "Thunderstorm with hail", icon: thunder },
];

export function getWeatherInfo(weatherCode: number){
    return weatherList.find((entry) => entry.codes.includes(weatherCode));
}
