import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SearchBar from './components/ui/SearchBar'
import { fetchLocation } from "./api/fetchLocation";
import { getLocationData } from './services/locationService';
import { getWeatherData } from './services/weatherService';
import MainCard from './components/MainCardModel';

import {fetchWeather} from "./api/fetchWeather";

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

    <>
      <div className = "flex row items-center p-4 gap-2 w-3/4 mx-auto mt-2">
        <SearchBar onSearch ={handleSearch}/> {/* onSearch propen er det samme som handleSearch */}
      </div>

      <div className = "flex items-center justify-center mt_10">
      {location && weather ? (
        <MainCard location={location} weather={weather} />
      ) : ( <p> No results yet</p>
      
        )
      }
      </div>

    </>
  
  )
}
export default App
