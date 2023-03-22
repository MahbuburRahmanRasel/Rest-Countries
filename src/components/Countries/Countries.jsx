
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'



const Countries = () => {
    const [data,setdata]= useState([])
   useEffect(()=>{
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res=>res.json())
    .then(data => {
        // Sort the data alphabetically by name
        data.sort((a, b) => {
          if (a.name.common < b.name.common) {
            return -1;
          } else if (a.name.common > b.name.common) {
            return 1;
          } else {
            return 0;
          }
        });
    
        // Do something with the sorted data
        setdata(data);
      })
      

    // setCountries(data)

   },[])
   
   
    return (
        <div>
            <h1>Countries from Rest API : {data.length}</h1>
            {/* {
                countries.map(country => country.name.common).sort()
            } */}

          <div className='countries'>
          {

                data.map(country =><Country 

                country = {country}



/>)
}
          </div>

        </div>
    );
};

export default Countries;