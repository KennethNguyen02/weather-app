
import DailyCard from "./ui/DailyCard"

interface DailyForecastProps{
    dailyWeather: any[];
}
export default function DailyCards({dailyWeather} : DailyForecastProps){
    return (
         <div className="w-2/3 bg-blue-300 rounded-xl p-4">
            
            <div className="flex gap-3 overflow-x-auto">
                {dailyWeather.slice(1, 5).map((day: any) => (
                    <DailyCard key={day.date} weather={day} />
                ))}
            </div>
        </div>
    )
}