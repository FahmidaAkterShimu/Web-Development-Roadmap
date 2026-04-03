import React from 'react';
import './Header.css'
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <nav>
                <NavLink to="./">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to=""></NavLink>
            </nav>
        </div>
    );
};

export default Header;