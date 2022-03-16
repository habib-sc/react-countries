import React from 'react';
import './Country.css';

const Country = (props) => {
    const {population, area, name, capital, flags} = props.country
    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" width="150"/>
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <h4>Capital: {capital}</h4>
        </div>
    );
};

export default Country;