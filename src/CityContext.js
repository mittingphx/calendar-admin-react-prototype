import { createContext, useState, useEffect } from 'react';

const CityContext = createContext();

const CityProvider = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState(() => {
        const storedCity = localStorage.getItem('selectedCity');
        return storedCity ? storedCity : 'Tucson';
    });

    useEffect(() => {
        localStorage.setItem('selectedCity', selectedCity);
    }, [selectedCity]);

    const handleCityChange = (newCity) => {
        setSelectedCity(newCity);
    };

    return (
        <CityContext.Provider value={{ selectedCity, handleCityChange }}>
            {children}
        </CityContext.Provider>
    );
};

export { CityProvider, CityContext };