
import { useState } from "react";

export default function Weather() {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState('');

  async function fetchWeatherDetails(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e&units=metric`
      );
      const data = await response.json();
      setLoading(false);
      setWeatherData(data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  function searchWeather() {
    if (search) {
      fetchWeatherDetails(search);
    }
  }

  return (
    <div  className="text-center mx-auto mt-12 w-100% max-w-3xl rounded-2xl h-[470px] p-5 bg-green-300">
      <div className="w-full flex justify-around items-center">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Enter City Name"
          name="search"
          className="w-7/10 h-11 border border-gray-300 rounded-lg px-4 py-0.5 text-base outline-none bg-white text-gray-600" 

        />
        <button onClick={searchWeather} className="border-none rounded-lg bg-black text-white text-xl outline-none cursor-pointer py-3 px-4">
          Search
        </button>
      </div>
      {loading ? (
        <div className="text-5xl font-extrabold text-black">Loading...</div>
      ) : (
        weatherData && (
          <div>
            <div className="mb-2.5 text-gray-700">
              <h2>
                {weatherData.name}, <span>{weatherData.sys.country}</span>
              </h2>
            </div>
            <div className="text-lg font-medium italic text-gray-700">
              <span>{getCurrentDate()}</span>
            </div>
            <div className="text-6xl text-black font-bold text-center">{weatherData.main.temp} °C</div>
            <p className="text-black text-xl font-medium mt-0 mb-5">
              {weatherData.weather && weatherData.weather[0]
                ? weatherData.weather[0].description
                : ""}
            </p>
            <div className="flex justify-evenly items-center mt-5 px-5 text-xl font-bold text-center text-gray-700">
              <div className="flex items-center leading-tight">
                <div>
                  <p className="wind">{weatherData.wind.speed} m/s</p>
                  <p>Wind Speed</p>
                </div>
              </div>
              <div className="flex items-center leading-tight text-gray-700 ">
                <div>
                  <p className="humidity">{weatherData.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
