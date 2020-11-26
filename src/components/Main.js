import React, { useState } from "react"
import axios from "axios"
import Header from "./Header"
import Content from "./Content"
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData"
import Context from "../Context"
import Error from "./Error"
import DateTime from "./DateTime"
import Tagline from "./Tagline";
import Footer from "./Footer"


let Main = () => {
    let [weather, setWeather] = useState();
    let [city, setCity] = useState();
    let [error, setError] = useState()
    const api_call = async (e) => {
        e.preventDefault();
        let location = e.target.elements.location.value;
        if (!location) {
            setWeather(null);
            return setError('There is no location! Please, enter!')
        } 
        const API_KEY = "c7fb84ac499a60f91cd8514621155626";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
        let request = axios.get(url);
        let response = await request;
        setWeather(response.data.main);
        setCity(response.data.name);
        setError(null);
        // console.log(response)
    }
    return (
        <div className="main">
            <Content>
            <Header />
                <DateTime/>
            <Tagline/>
                <Context.Provider value={{ api_call, weather, city }}>
                    <WeatherSearch />
                    {weather && <WeatherData />}

                    {error && <Error error={error} />}
                </Context.Provider>
                <Footer/>
            </Content>
        </div>
    )
}


export default Main