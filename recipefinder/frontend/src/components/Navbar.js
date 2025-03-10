import React from "react";
import { Link } from "react-router-dom";
import '../App.css';  

function Navbar() {
return (
<nav className="navbar">
    <h1 className="navbar-title">Recipe Finder</h1> 
    <ul className="navbar-links">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/create">Add Recipe</Link></li>
    </ul>
    </nav>
);
}

export default Navbar;
