import { getWeatherInfo } from "../../constants/weatherCode.ts";
import { Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import {getWeatherIcon} from "../../utils/weatherFormatting.ts"


interface DailyCardProps {
    weather: any;
}

export default function DailyCard({ weather }: DailyCardProps){

    const info = getWeatherInfo(weather.weatherCode);
    if (!info) return null;


    return (
        <Card className="min-w-[125px] bg-blue-400">
            <CardHeader className="flex flex-col items-center justify-center p-1">
                <h1 className="text-l font-bold">{weather.formattedDate}</h1>
            </CardHeader>
            <CardBody className="flex flex-col items-center justify-center gap-2 p-1">
                <h1 className="text-blue-700 text-m"> Min : {weather.minTemp}°C </h1>
                <h1 className= "text-red-700 text-m">Max: {weather.maxTemp}°C </h1>
            </CardBody>
            <CardFooter className="flex flex-row items-center justify-around p-0">
                {info.icon && ( 
                    <img src={info.icon} alt={info.name}/>
                )}
            </CardFooter>
        </Card>
    );


}




