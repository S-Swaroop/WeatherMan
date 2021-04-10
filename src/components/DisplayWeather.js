import React from 'react'

function DisplayWeather({data}) {
    return (
        <div>
            <h1>location: {data.name} ({data.sys.country})</h1>
            <h2>Current Temperature: {data.main.temp} </h2>
            <h2>Feels Like : {data.main.feels_like}</h2>
            <h2>
                Max Temperature : {data.main.temp_max}      ||       Min Temperature : {data.main.temp_min}
            </h2>
        </div>
    )
}

export default DisplayWeather
