import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Results = ({results, handleShow}) => {
    const [countryData, setCountryData] = useState(null)
    const [weatherData, setWeatherData] = useState(null)
    const weatherApiKey = import.meta.env.VITE_WEATHER_API
    
    useEffect(() => {
        if (results.length === 1) {
            axios
                .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${results[0]}`)
                .then(response => {
                    const capital = response.data.capital
                    axios
                        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${weatherApiKey}`)
                        .then(response => {
                            setWeatherData(response.data)
                        })   
                    setCountryData(response.data) 
                })
        } else {
            setCountryData(null)
        }
    },[results])

    if (results.length > 10) {
        return <div key="tooMuch">Too many matches, specify another filter</div>
    }
    
    if (results.length === 1 && countryData && weatherData) {
             return (
                <div>
                    <h1>{countryData.name.common}</h1>
                    <div>Capital: {countryData.capital}</div>
                    <div>Area: {countryData.area} km<sup>2</sup></div>
                    <h2>Languages</h2>
                    <ul>
                        {
                        Object.values(countryData.languages).map((language) => (
                            <li key={language}>{language}</li>
                        ))
                        }
                    </ul>
                    <div style={{fontSize: '10rem'}}>{countryData.flag}</div>
                    <h2>Weather in {countryData.capital}</h2>
                    <div>Temperature {weatherData.main.temp}° Celsius</div>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                    <div>Wind {weatherData.wind.speed} m/s</div>
                </div>
            )
    }

    return (
        results.map(country => {
            return <div key={country}>
                {country}{' '}
                 <button onClick={() => handleShow(country)}>show</button>
                </div>
        })
    )
}
export default Results