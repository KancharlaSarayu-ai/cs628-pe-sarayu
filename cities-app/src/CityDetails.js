import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetails({ cities }) {
    const { Index } = useParams(); 
    const i = Number(Index); 
    const city = cities[i]; 

return (
    <div>
    <h2> {city.name} Details</h2>
    <div>
        <p>
        Country: {city.country}
        <br/>
        Population: {city.population}
        </p>
    </div>
    </div>
);
}

export default CityDetails;