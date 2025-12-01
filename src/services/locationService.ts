import {fetchLocation} from "../api/fetchLocation";

export async function getLocationData(city: string) {
    const locationData = await fetchLocation(city);
    if (!locationData) { return null;}



    return {
        name: locationData.name, //lag objekt med navn name, og hent ut verdien fra listen
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        country: locationData.country,
        timezone: locationData.timezone,
        time: getLocalTime(locationData.timezone)
    }
}

function getLocalTime(timezone: string) {
    return new Date().toLocaleString("en-GB", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit"
    });

}



