import { useState, useEffect } from "react";
import Search from "../search";
import './style.css'

export default function Weather() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [WeatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(param) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`);

            const data = await response.json();
            if (data) {
                setWeatherData(data);
                setLoading(false);
            }
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    }

    async function handleSearch() {
        fetchWeatherData(search);
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString("en-us", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }

    useEffect(() => {
        fetchWeatherData("Lucknow");
    }, [])

    return (
        <div>
            <h1>Weather App</h1>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {
                loading ? ( <div className="loading">Loading...</div> ) :
                (
                <div>
                    <div className="city-name">
                        <h2>{WeatherData?.name}, <span>{WeatherData?.sys?.country}</span></h2>
                    </div>
                    <div className="date">
                        {/* <span>{new Date().toLocaleDateString()}</span> */}
                        <span>{getCurrentDate()}</span>
                    </div>
                    <div className="temp">{WeatherData?.main?.temp}</div>
                    <p className="description">{WeatherData?.weather[0].description}</p>
                    <div className="weather-info">
                        <div>
                            <p>Humidity</p>
                            <p>{WeatherData?.main?.humidity}%</p>
                        </div>
                        <div>
                            <p>Pressure</p>
                            <p>{WeatherData?.main?.pressure}</p>
                        </div>
                        <div>
                            <p>Wind Speed</p>
                            <p>{WeatherData?.wind?.speed}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}