import React from 'react'
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

const WeatherApp = () => {
    const [weatherInfo,setWeatherInfo] =useState({
            city: "Delhi",
            feelslike: 24,
            temp: 25,
            tempMin: 25,
            tempMax: 26,
            humidity: 48,
            weather: "haze",
    });

    let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo);
    }
  return (
    <div style={{textAlign: "center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo} />
    </div>
  )
}

export default WeatherApp;