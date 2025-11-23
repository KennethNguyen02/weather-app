import {Input} from "@heroui/react";
import { useState } from "react";



interface SearchBarProp {
    onSearch: (city: string) => void;
}

export default function SearchBar({onSearch} : SearchBarProp) {
    const [city, setCity] = useState("");
    return (
        <div className = "flex flex-row gap-2 w-full">
            <Input

                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearch(city); {/* kaller på onSearch propen med city som argument == handleSearch(city) i App.tsx */}
                        setCity(""); {/* tømmer søkefeltet etter søk */}
                    }
                }}
                placeholder="Search for a location or city"
                type="text"
                size="md"
            />

            <button onClick={() => {onSearch(city); setCity("");}}  
                className = "bg-blue-500 text-white font-bold py-2 px-4 size-md rounded-lg hover:bg-blue-700 scale-105 active:scale-95"
            > Search
            </button>
        </div>
           
    );
}