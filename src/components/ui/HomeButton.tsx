import {Button} from "@heroui/react"
import homeLogo from "../../assets/homeLogo.svg";


interface HomeButtonProps {
    onHome: () => void;
}

export default function HomeButton({onHome}: HomeButtonProps){
    return ( 
        <Button
            isIconOnly //makes button square 
            className="bg-blue-500 w-6" 
            variant="solid"
            size="md"
            startContent = 
                {<img src={homeLogo} alt="Home" className="w-5 h-5" /> }

            onPress = {onHome}
            
        />
    );

}