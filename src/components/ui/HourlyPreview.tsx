import { getNextHours } from "../../utils/hourlyHelpers";
import { getWeatherInfo } from "../../constants/weatherCode";
import {getWeatherIcon} from "../../utils/weatherFormatting.ts";
import {getTempColor} from "../../utils/weatherFormatting.ts";

interface HourlyPreviewProps {
    hourly: any[];
    currentHour: number;
}

export default function Hourly({ hourly, currentHour }: HourlyPreviewProps) {

    const nextHours = getNextHours(hourly, currentHour, 4);

    return (
        <div className="bg-blue-300 rounded-xl">

            <div className="flex flex-row gap-6">
                {nextHours.map((h, i) => {
         
                    const info = getWeatherInfo(h.weatherCode);
                    if (!info) return null;

                    const icon = getWeatherIcon(h.weatherCode, h.isDay);

                    return (
                        <div key={i} className="backdrop-blur-lg text-center p-3 rounded-xl min-w-[70px]">
                  
                            <p className="font-semibold">{h.hour}:00</p>

                            {icon && (
                                <img src={icon} alt={info.name} className ="w-12 h-12 mx-auto my-2" />
                            )}

                             <p className={`text-lg font-bold ${getTempColor(h.temperature)}`}>{h.temperature}°C</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
