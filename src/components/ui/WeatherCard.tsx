import { getWeatherInfo } from "../../constants/weatherCode";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@heroui/react";




interface WeatherCardProps {
    weather: any;
}

export default function WeatherCard({ weather }: WeatherCardProps){

    const info = getWeatherInfo(weather.weatherCode);

    return (
        <Card className="max-w-[400px] min-w-[150px]">
            <CardHeader className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">{weather.formattedDate}</h1>
            </CardHeader>
        <CardBody className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-blue-700"> Min : {weather.minTemp}°C </h1>
            <h1 className= "text-red-700">Max: {weather.maxTemp}°C </h1>
            
        </CardBody>
        <CardFooter className="flex flex-row items-center justify-around">
            {info?.icon && <img src={info.icon} alt={info.name} className="w-16 h-16" />}
        </CardFooter>
    </Card>
    );


}






//dato
//max / min
//icon
