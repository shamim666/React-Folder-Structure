import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries , setCountries] = useState([]);

    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h2>This is the countries container:</h2>
            <div className = "grid">
            {countries.map(country => <Country country = {country}></Country>)}
          </div>
        </div>
    );
};

export default Countries;