export async function fetchWeather(lat: number, lon: number) {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`); //henter responsen

    const data = await response.json(); //gjør om json responsen til et JavaScript objekt (liste)
    
    return data.current ? data.current : null //returnerer første søket element eller null hvis ingen resultater
}