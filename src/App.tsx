import { useState } from 'react'

import { getLocationData } from './services/locationService';
import { getWeatherData } from './services/weatherService';

import SearchForm from './components/ui/SearchForm';
import MainCard from './components/MainCardModel'
import HourlyPreview from './components/ui/HourlyPreview'
import DailyForecast from './components/DailyForecast'
import LandingCard from './components/ui/LandingCard'







function App() {

  const [location, setLocation] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);

  async function handleSearch(city: string) {
      const location =  await getLocationData(city);
      if (!location) 
        return;

      const weather = await getWeatherData(location.latitude, location.longitude);

      setLocation(location);
      setWeather(weather);
  }

  return (

    <div  className="
        min-h-screen 
        w-full 
        bg-gradient-to-br 
        from-sky-700 
        to-blue-300 
        flex 
        flex-col 
        items-center 
        p-6
      ">
        <div className = "flex row items-center  gap-2 w-2/3 mx-auto mt-2 ">
          <SearchForm onSearch ={handleSearch}/> {/* onSearch propen er det samme som handleSearch */}
        </div>


        <div className = "flex flex-col items-center justify-center mt-5 gap-4 w-full max-w-xl">
          {location && weather ? ( 
            <>
              <MainCard key={location.name} location={location} weather={weather} /> 
              <HourlyPreview hourly = {weather.hourly} currentHour = {location.hour}/>
              <DailyForecast dailyWeather={weather.daily} />
              
              
            </>
            ) //we have a key so that react will unmount the old card and mount a fresh one. since the key is changing
            : 
            ( <LandingCard />)
            }
        </div>
      
    </div>
  
  );
}
export default App
