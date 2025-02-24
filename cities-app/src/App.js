import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AddCity from './AddCity'; //child component 
import CityDetails from './CityDetails';// child component
import CitiesList from './CitiesList';// child component

function App() {
const [cities, setCities] = useState([]); // cities as an empty array defined and stored in setcities function 
const handleCity = (newCity) => {
    let updatedCities = []; //empty array is created
    for (let i = 0; i < cities.length; i++) { 
      updatedCities[i] = cities[i]; // for each loop cities items are defined to the updatedcities.
    }
    updatedCities[cities.length] = newCity; //newcity is added to the updatedcities array
    setCities(updatedCities); 
};
return (
    <Router>
    <nav>
        <Link to="/"><h1>City Application</h1></Link>
        <div className="container">
        <Link to="/">Cities List</Link>
        <Link to="/add">Add City</Link>
        </div>
    </nav>
    <Routes>
                <Route path="/" element={<CitiesList cities={cities} />}>
                    {/* Nested Route */}
                    <Route path="city/:Index" element={<CityDetails cities={cities} />} />
                </Route>
                <Route path="/add" element={<AddCity onAddCity={handleCity} />} />
            </Routes>
        </Router>
    );
}

export default App;