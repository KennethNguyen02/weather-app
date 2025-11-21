import {Card, CardHeader, CardBody, CardFooter, Divider} from "@heroui/react";

interface MainCardProps {
    location: any;
    weather: any;
}
export default function MainCard({location, weather} : MainCardProps) {

    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">{location.name}, {location.country}</h1>
                <p className="text-sm text-gray-500">{location.timezone}</p>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold">{weather.temperature}°C</h2>
            </CardBody>
        </Card>
    );



}