Weather Application

A simple and responsive weather application built with React. The app allows users to search for any city in the world and view current weather information in real time. The application fetches data from a public weather API and displays temperature, weather conditions, humidity, wind speed, and location details.

Features

Search weather by city name

Display current temperature and weather conditions

Show humidity, wind speed, and other relevant details

Clean and responsive UI

Error handling for invalid or empty search queries

Automatic formatting of dates based on user locale (e.g., Norway vs. Seoul)

Tech Stack

Frontend:

React (TypeScript)

Vite or Create React App (depending on your setup)

CSS modules / Tailwind / standard CSS (adjust based on your project)

APIs:

OpenWeatherMap API (or whichever API you used)

Fetch API / Axios for HTTP requests

Project Structure
src/
  components/
    SearchBar.tsx
    WeatherCard.tsx
  services/
    fetchService.ts
    locationService.ts
  utils/
    formatDate.ts
  App.tsx
  main.tsx


You can adjust this section if your structure is different.

How It Works

The user enters a city name in the search bar.

When pressing Enter or clicking the search button, the app calls the onSearch function.

The frontend sends a request to the weather API using the fetchService.

The response is processed and the UI updates with the new weather information.

The displayed date is formatted using JavaScript’s toLocaleDateString, ensuring proper formatting based on region (e.g., Norwegian vs. Korean local time).

Setup & Installation
1. Clone the repository
git clone https://github.com/your-username/weather-app.git
cd weather-app

2. Install dependencies
npm install

3. Add your API key

Create a .env file in the project root:

VITE_WEATHER_API_KEY=your_api_key_here


(Or REACT_APP_WEATHER_API_KEY depending on your setup.)

4. Run the application
npm run dev


The app will be available at:

http://localhost:5173/


(or the port used by your setup)

Environment Variables
Variable	Description
VITE_WEATHER_API_KEY	Your API key from OpenWeatherMap
Future Improvements

Add animated icons (Lottie or custom SVG)

Support for hourly and weekly forecasts

Add backend (Node/Spring Boot) to store search history

Dark mode

Geolocation-based weather lookup

License

This project is open-source and available under the MIT License.
