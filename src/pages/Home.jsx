/**
 * File:    Home.jsx
 * Author:  Scott Mitting
 * Date:    12/3/2024
 * Project: TucsonLovesMusic
 * Abstract:
 *  Home page that displays a lf
 */

import React, { useContext } from 'react';
import { CityContext } from '../CityContext';
import { availableMarkets } from "../dummyData";

import '../css/page/home.css'

function Home() {
    const { selectedCity, handleCityChange } = useContext(CityContext);

    return (
        <div className="home">
            <div className="city-dropdown">
                <label>Selected City</label>
                <select value={selectedCity} onChange={(event) => handleCityChange(event.target.value)}>
                {availableMarkets.map((market) => (
                        <option key={market} value={market}>
                            {market}
                        </option>
                    ))}
                </select>
            </div>
            <img src={process.env.PUBLIC_URL + '/logo-ai.jpeg'} alt="Logo" className="logo"/>
        </div>
    );
}

export default Home;