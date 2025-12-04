import {fetchLocation} from "../api/fetchLocation";
import {getLocalTime} from "../utils/hourlyHelpers"

export async function getLocationData(city: string) {
    const locationData = await fetchLocation(city);
    if (!locationData) { return null;}

    

    return {
        name: locationData.name, //lag objekt med navn name, og hent ut verdien fra listen
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        country: locationData.country,
        timezone: locationData.timezone,
        time: getLocalTime(locationData.timezone),
        hour: Number(getLocalTime(locationData.timezone).slice(0,2))
    }
}







