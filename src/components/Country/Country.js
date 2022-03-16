import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h4>Population: {props.population}</h4>
            <h4>Area: {props.area}</h4>
        </div>
    );
};

export default Country;