import { getWeatherInfo } from "../../constants/weatherCode";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@heroui/react";
import {getWeatherIcon} from "../../utils/weatherFormatting.ts"


interface WeatherCardProps {
    weather: any;
}

export default function WeatherCard({ weather }: WeatherCardProps){

    const info = getWeatherInfo(weather.weatherCode);
    if (!info) return null;

    const icon= getWeatherIcon(weather.weatherCode, weather.isDay);

    return (
        <Card className="max-w-[400px] min-w-[150px] bg-blue/80">
            <CardHeader className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">{weather.daily.formattedDate}</h1>
            </CardHeader>
            <CardBody className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-blue-700"> Min : {weather.daily.minTemp}°C </h1>
                <h1 className= "text-red-700">Max: {weather.daily.maxTemp}°C </h1>
            </CardBody>
            <CardFooter className="flex flex-row items-center justify-around">

            </CardFooter>
        </Card>
    );


}






//dato
//max / min
//icon
