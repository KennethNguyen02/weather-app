import {Card, CardHeader, CardBody, CardFooter, Divider} from "@heroui/react";
import { getWeatherInfo } from "../constants/weatherCode";
import WeatherCard from "./ui/WeatherCard";

interface MainCardProps {
    location: any;
    weather: any;
}
export default function MainCard({location, weather} : MainCardProps) {

    const info = getWeatherInfo(weather.current.weatherCode);

    let icon = info?.icon; //hvis info har en icon, ellers returner undefined og ikke kræsj
    if (!weather.isDay && info?.iconNight) {
        icon = info.iconNight;
    }

    return (
        <Card className="max-w-[500px] min-w-[300px]">
            <CardHeader className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">{location.name} , {location.country}</h1>
                <p className="text-sm text-gray-500">{location.time}</p>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row items-center justify-center gap-6">
                <h2 className={`text-5xl font-bold ${weather.current.temperature > 0 ? "text-red-700" : "text-blue-700"}`}>{weather.current.temperature}°C</h2>
                <div className="flex flex-col items-center">
                    {info?.icon && <img src={info.icon} alt={info.name} className="w-16 h-16"/>} 
                    {info?.name}
                </div>
            </CardBody>
            <CardFooter className="flex flex-row gap-3 justify-around max-h-64 overflow-x-auto">
                {weather.daily.slice(1, 5).map((day: any) => (
                    <WeatherCard key={day.date} weather={day} />
                ))}
            </CardFooter>

        </Card>
    );



}