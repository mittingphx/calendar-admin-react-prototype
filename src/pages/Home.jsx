import React, { useContext } from 'react';
import { CityContext } from '../CityContext';

import '../css/page/home.css'


const availableMarkets = [
    'Tucson',
    'Phoenix',
    'Austin',
    'Nashville',
    'New Orleans',
    'Seattle',
    'Portland',
    'Denver',
    'Minneapolis',
    'Boston',
    'Chicago',
    'Los Angeles',
];

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