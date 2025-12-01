import {Input, Form, Button} from "@heroui/react";
import { useState } from "react";
import magnifyingGlass from "../../assets/magnifyingGlass.svg";


interface SearchBarProp {
    onSearch: (city: string) => void;
}


export default function SearchForm({onSearch} : SearchBarProp) {
    const [city, setCity] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        setIsLoading(true);
        await onSearch(city);
        setCity("");
        setIsLoading(false);
    }

    return (
        <Form className = "flex flex-row gap-2 w-full"
            onSubmit={handleSubmit}>
            <Input
                isDisabled={isLoading}
                labelPlacement="outside"
                name="location"
                placeholder="Enter a city or location"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            

            <Button
             
                isDisabled={isLoading}
                isLoading={isLoading} //knappen loader effekt når isLoading true
                type="submit"
                color= "primary"
                startContent = {
                    !isLoading &&<img src={magnifyingGlass} alt="search icon" 
                    className="w-6 h-6"/>}
            >
                
            </Button>
        </Form>
           
    );
}