import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";
import { getWeatherInfo } from "../constants/weatherCode";
import AttributeCard from "./ui/AttributeCard";
import { weatherAttributes } from "../constants/weatherAttributes";
import {getTempColor} from "../utils/weatherFormatting";

interface MainCardProps {
    location: any;
    weather: any;
}
export default function MainCard({location, weather} : MainCardProps) {

    const weatherCode = weather.current.weatherCode;
    const info = getWeatherInfo(weatherCode);

    let icon = info?.icon; //hvis info har en icon, ellers returner undefined og ikke kræsj
    if (!weather.current.isDay && info?.iconNight) {
        icon = info.iconNight;
    }

    return (

        <Card className="max-w-[500px] min-w-[300px] 
        bg-gradient-to-t from-white/90 to-white/30
        shadow-xl
        rounded-2xl">
            <CardHeader className="flex flex-col items-center justify-center font-sans p-2">
                <h1 className="text-2xl font-bold">{[location.name, location.country].filter(Boolean).join(", ")}</h1>
                <p className="text-sm text-gray-500">{location.time} , {weather.daily[0].formattedDate}</p>
            </CardHeader>

            

            <CardBody className="flex flex-row items-center justify-center gap-4 p-2">
        
                    <div>
                        <h2 className={`text-5xl font-bold ${getTempColor(weather.current.temperature)}`}>
                            {weather.current.temperature}°C
                         </h2>

                         <p className="text-sm font-sans opacity-70">
                            Feels like <span className={` ${getTempColor(weather.current.apparentTemperature)}`}>
                                {weather.current.apparentTemperature}°C
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        {info?.icon && <img src={icon} alt={info.name} className="w-24 font-sans"/>}
                    </div>
            </CardBody>



            <CardFooter className="flex flex-row gap-5 justify-around max-h-46 overflow-x-auto p-2">
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