import React from 'react';
import './Country.css'

const Country = (props) => {
   
   const {name , population , area , flags}= props.country
   
    return (
        <div className='country-container'>
            <h2> {name.common}</h2>
            <img src= {flags.png} alt="" />
            <p>Area : {area}</p>
        </div>
    );
};

export default Country;