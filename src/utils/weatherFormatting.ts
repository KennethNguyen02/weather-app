import { getWeatherInfo } from "../constants/weatherCode";


export function getWeatherIcon(weatherCode: number, isDay: boolean): string | null
{
    const info = getWeatherInfo(weatherCode);
    if (!info)
        return null;
    if (!isDay && info.iconNight){
        return info.iconNight;
    }
    return info.icon?? null;
}


export function getTempColor(temp: number){
    return temp > 0 ? "text-red-700" : "text-blue-700";
}
