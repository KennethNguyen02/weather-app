import windIcon from "../assets/weatherAttributes/wind.svg";
import humidityIcon from "../assets/weatherAttributes/humidity.svg";
import precipitationIcon from "../assets/weatherAttributes/precipitation.svg";

export const weatherAttributes = [
    {
        key: "windSpeed",
        label: "Wind Speed",
        unit: "km/h",
        icon: windIcon
    },
    { 
        key: "humidity",
        label: "Humidity",
        unit: "%",
        icon: humidityIcon

    },
    {
        key: "precipitation",
        label: "Precipitation",
        unit: "mm",
        icon: precipitationIcon
    }
]

export function getAttributeInfo(key: string) {
    return weatherAttributes.find(attr => attr.key === key);
}   