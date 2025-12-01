import {Card, CardHeader, CardBody, CardFooter, Divider} from "@heroui/react";
import { getWeatherInfo } from "../constants/weatherCode";
import AttributeCard from "./ui/AttributeCard";
import { weatherAttributes } from "../constants/weatherAttributes";

interface MainCardProps {
    location: any;
    weather: any;
}
export default function MainCard({location, weather} : MainCardProps) {

    const info = getWeatherInfo(weather.current.weatherCode);

    let icon = info?.icon; //hvis info har en icon, ellers returner undefined og ikke kræsj
    if (!weather.current.isDay && info?.iconNight) {
        icon = info.iconNight;
    }

    return (

        <Card className="max-w-[500px] min-w-[300px]">
            <CardHeader className="flex flex-col items-center justify-center font-sans">
                <h1 className="text-2xl font-bold">{[location.name, location.country].filter(Boolean).join(", ")}</h1>
                <p className="text-sm text-gray-500">{location.time} , {weather.daily[0].formattedDate}</p>
            </CardHeader>

            

            <CardBody className="flex flex-col items-center justify-center gap-6">
                <div className="flex flex-row gap-4 items-center justify-center">

                    <h2 className={`text-5xl font-bold ${weather.current.temperature > 0 ? "text-red-700" : "text-blue-700"}`}>{weather.current.temperature}°C</h2>
                    
                    <div className="flex flex-col items-center justify-center">
                        {info?.icon && <img src={icon} alt={info.name} className="w-16 h-16 font-sans"/>}
                        {info?.name}
                    </div>
                </div>
            
             
            </CardBody>

            <Divider />

            <CardFooter className="flex flex-row gap-3 justify-around max-h-64 overflow-x-auto">
                {weatherAttributes.map((attr) => (
                    <AttributeCard 
                        key={attr.key} //used for react internal tracking. Not used as a prop
                        attributeKey={attr.key}
                        value={weather.current[attr.key]}
                    />
                ))}
            </CardFooter>

        </Card>


    
    );


}