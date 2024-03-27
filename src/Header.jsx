import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">Shop</div>
            <ul className="menu">
                <li className="menu-item"><Link to="/" className="menu-link">Home</Link></li>
                <li className="menu-item"><Link to="/categories/menu" className="menu-link">Categories</Link></li>
            </ul>
        </div>
    );
};

export default Header;