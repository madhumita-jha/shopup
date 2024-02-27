import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';
export default function Navbar(){
    return (
    <div className='navbar'>
        <h3 className="h3"><Link to="/" className="no-underline">ShopUp</Link></h3>
        <div className="nav-menu">
            <p className="home"><Link to="/" className="no-underline">Home</Link></p>
            <p className="home"><Link to="/category" className="no-underline">Category</Link></p>
            <p className="home"><Link to="/login" className="no-underline">Profile</Link></p>
            <p className="home"><Link to="/cart" className="no-underline">Cart <span role="img" aria-label="Shopping Cart">🛒</span></Link></p>
            
        </div>
    </div>
    );
}
