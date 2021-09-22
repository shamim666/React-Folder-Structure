import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name , capital , flag } = props.country ;
    return (
        <div className = "country"> 
            <h2>Country Name: {name}</h2>
            <h2>Capital Name: {capital}</h2>
            <img style = {{width:'300px'}}src={flag} alt="" />

        </div>
    );
};

export default Country;