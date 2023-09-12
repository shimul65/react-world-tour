import { useState } from 'react';
import './Country.css';
const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, population, area, cca3 } = country;

    // const passWithParams = () => handleVisitedCountry()
    

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'green' : 'black' }}>Name: {name?.common}</h3>
            <img style={{ width: "250px", height: '150px' }} src={flags?.png} alt="flags" />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br />
            <button style={{ margin: '10px' }} onClick={handleVisited}>{visited ? 'Visited' : ' Going Soon'}</button> <br />
            {
                visited ? 'I have visited this country.' : 'I want to visit'
            }
        </div>
    );
};

export default Country;