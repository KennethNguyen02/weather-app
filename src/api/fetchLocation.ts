export async function fetchLocation(city: string) {
    const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`); //henter responsen
    
    const data = await response.json(); //gjør om json responsen til et JavaScript objekt (liste)
    return data.results ? data.results[0] : null //returnerer første søket element eller null hvis ingen resultater   
}