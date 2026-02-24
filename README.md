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

OpenWeatherMap API 




How It Works

The user enters a city name in the search bar.

When pressing Enter or clicking the search button, the app calls the onSearch function.

The frontend sends a request to the weather API using the fetchService.

The response is processed and the UI updates with the new weather information.

The displayed date is formatted using JavaScript’s toLocaleDateString, ensuring proper formatting based on region (e.g., Norwegian vs. Korean local time).

Setup & Installation
1. Clone the repository
git clone https://github.com/Kennethng02/weather-app.git
cd weather-app

2. Install dependencies
npm install


3. Run the application
npm run dev


The app will be available at:

http://localhost:5173/


