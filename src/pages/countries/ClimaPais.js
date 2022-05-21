import React, { useEffect, useState } from "react"

export const ClimaPais = ({ clima, setClima, filteredCountries }) => {
    //API REST CLIMA
    const API_URL = "http://api.weatherstack.com/current"
    const API_ACCESS_KEY = process.env.REACT_APP_WHEATER_API_KEY
    const API_QUERY = filteredCountries[0].name.common
    const [reload, setReload] = useState(false);

    useEffect(() => {

        fetch(`${API_URL}?access_key=${API_ACCESS_KEY}&query=${API_QUERY}`)
        .then(async (response) => {
            return await response.json();
        })
        .then(json => {
            setClima(json)
        })
        
    }, [])
    
    
    return (
        <React.Fragment>
        {clima.current ? 
        <React.Fragment>
            <p><b>Temperature: </b> {clima.current.temperature} Celsius</p>
            <img src={clima.current.weather_icons[0]}></img>
            <p><b>Wind: </b>{clima.current.wind_speed} mph direction {clima.current.wind_dir} </p>
        </React.Fragment>
        :
        <React.Fragment>
        "Loading..."
        </React.Fragment>
        }
        </React.Fragment>
        )

}
