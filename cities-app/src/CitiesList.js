import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function CitiesList({ cities }) {
    return (
        <div>
            <h2>List of Cities</h2>
        <ul>
                {cities.map((city, index) => (
                    <li>
                        <Link to={`/city/${index}`}>{city.name}</Link>
                    </li>
                ))}
        </ul>

            {/* Nested route */}
            <Outlet />
        </div>
    );
}

export default CitiesList;
