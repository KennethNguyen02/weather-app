import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/SearchBar'
import { fetchLocation } from "./api/fetchLocation";
import { getLocationData } from './services/locationService';
import { getWeatherData } from './services/weatherService';
import MainCard from './components/MainCard';


import {fetchWeather} from "./api/fetchWeather";
import SearchButton from './components/SearchButton'

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
        <SearchButton />
      </div>

      <div>
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
