import cloudySun from "../../assets/weatherIcons/cloud.svg";


export default function LandingCard(){
    return( 
        <div className="flex flex-col items-center text-white mt-20">
            <h2 className="text-xl font-semibold">Your Weather Forecast</h2>
            <p className="opacity-70">Search for a city above to see the weather</p>
            <img src={cloudySun} className="w-64 mb-12"/>
        </div>
    )
}