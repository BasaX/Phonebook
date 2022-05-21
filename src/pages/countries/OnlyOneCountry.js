import React,{ useState, useEffect } from "react"
import { ClimaPais } from "./ClimaPais";


export const OnlyOneCountry = ({filteredCountries}) => {
    
    const [clima, setClima] = useState([]);
    
    let idiomas = [];
    

    const listOfLanguages = () => {

        idiomas.splice(0,idiomas.length)

        for (let idioma in filteredCountries[0].languages) { 
            idiomas.push(filteredCountries[0].languages[idioma])        
        }
    }

    
    return(
        <li>
                <h2>{filteredCountries[0].name.common}</h2>
                <p>Capital: {filteredCountries[0].capital}</p>
                <p>Population: {filteredCountries[0].population}</p>
                <h3>Languages</h3>
                    {listOfLanguages()}
                    <ul>
                        {idiomas.map((lang)=>{
                            return (
                                <li key={Math.random()}>
                                    {lang}
                                </li>
                            )})}
                    </ul>
                    <p></p>
                    <img src={filteredCountries[0].flags.png}></img>
                    <p></p>
                    <ClimaPais 
                        clima={clima}
                        setClima={setClima}
                        filteredCountries={filteredCountries}
                    />
            </li>
        )
        
}