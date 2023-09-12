import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Coutries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        // console.log(country);
        const newVisitedCountrie = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountrie);
    }
    return (
        <div >
            <h3>Countries : {countries.length}</h3>
            <div>
                <h4>My Visited Countries : {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}> {country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3} 
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;