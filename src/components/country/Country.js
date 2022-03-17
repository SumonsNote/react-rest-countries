import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, area, region, flags} = props.country
    return (
        <div className='country bg-dark'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.svg} alt=""/>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <small>Area: {area}</small>
        </div>
    );
};

export default Country;