import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    } , []);

    return (
        <div>
            <h1>All Country List</h1>
            <h2>Available Countries: {countries.length}</h2>
            <div className='contries-container'>
                {
                    countries.map(country => <Country country={country}></Country> )
                }
            </div>
        </div>
    );
};

export default Countries;