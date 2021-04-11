import React from 'react'
import WeatherApp from './WeatherApp'

function DisplayWeather({data}) {
    console.log({data})
    return (
        <div className="weather-card">
            <h1>location: {data.name} ({data.sys.country})</h1>
            <h2>Coordinates : {data.coord.lat}° {data.coord.lon}°</h2>
            <table className="weather-data">
                <thead>
                    <tr className="headings">
                        <td>Current Temperature</td>
                        <td>Feels Like</td>
                        <td>Min. Temperature</td>
                        <td>Max. Temperature</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="temperatures">
                        <td>{data.main.temp}°C</td>
                        <td>{data.main.feels_like}°C</td>
                        <td>{data.main.temp_min}°C</td>
                        <td>{data.main.temp_max}°C</td>
                    </tr>
                </tbody>
            </table>
            <h2>Conditions: {data.weather[0].main}</h2>   <img className="icon" hight="120px" width="120px" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img>
        </div>
    )
}

export default DisplayWeather
