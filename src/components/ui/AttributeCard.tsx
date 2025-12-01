
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@heroui/react";
import { getAttributeInfo } from "../../constants/weatherAttributes";


interface AttributeCardProps {
    attributeKey: string;
    value: number; //value of the property
}

export default function AttributeCard({ attributeKey, value}: AttributeCardProps) {
    const attributes = getAttributeInfo(attributeKey);
    if (!attributes) return null;

    return (
        <Card className="flex flex-col max-w-[150px] min-w-[100px]">
            <CardHeader className="flex flex-col items-center justify-center">
                {<img src={attributes.icon} alt={attributes.label} className="w-8 h-8" />}
            </CardHeader>
            <CardBody className="flex flex-col items-center justify-center gap-2">
                <p className="text-sm font-sans"> {attributes.label} </p>
            </CardBody>
            <CardFooter className="flex flex-row items-center justify-around">
                <p className="text-sm font-sans"> {value}{attributes.unit} </p>
            </CardFooter>
        </Card>
    )
}