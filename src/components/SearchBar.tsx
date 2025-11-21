import {Input} from "@heroui/react";
import { useState } from "react";

interface SearchBarProp {
    onSearch: (city: string) => void;
}

export default function SearchBar({onSearch} : SearchBarProp) {
    const [city, setCity] = useState("");
    return (
            <Input

                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearch(city); {/* kaller på onSearch propen med city som argument == handleSearch(city) i App.tsx */}
                    }
                }}
                placeholder="Search for a location or city"
                type="text"
                size="md"
            />
    );
}