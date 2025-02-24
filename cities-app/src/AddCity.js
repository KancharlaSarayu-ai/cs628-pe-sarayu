import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCity({ onAddCity }) {
    const [name, Name] = useState("");
    const [country, Country] = useState("");
    const [population, Population] = useState("");
    const nav = useNavigate();

  const Submit = (o) => { // an event object 'o' is defined for the constant submit function
    o.preventDefault(); // prevents from reloading the cities page when submitted 
    const newCity = { name, country, population }; // an new city object is created for the newly created values
    onAddCity(newCity); // parent component list is updated by adding new city 
    Name("");
    Country("");
    Population("");
    nav("/");
};
return (
    <div>
        <h2>Add New City</h2>
        <form onSubmit={Submit}>
        <label>Name of city :</label>
        <input
        type="text"
        value={name}
        onChange={(o) => Name(o.target.value)}
        />
        <br />

        <label>Country:</label>
        <input
        type="text"
        value={country}
        onChange={(o) => Country(o.target.value)}
        />
        <br />

        <label>Population:</label>
        <input
        type="number"
        value={population}
        onChange={(o) => Population(o.target.value)}
        />
        <br />

        <button type="submit">Add </button>
    </form>
    </div>
);
}
export default AddCity;
