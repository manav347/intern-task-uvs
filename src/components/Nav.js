import React from 'react';
import {Link} from "react-router-dom";
import "../components/Nav.css"

const Nav=()=>{
    return(

        <div id="navid">
            <nav className="navbar fixed-top navbar-expand-lg"> 
                <Link className="navbar-brand" to="/">MHood</Link>
                <Link className="nav-link-cart" to="/Cart"><i className="fas fa-shopping-cart"></i></Link>
            </nav>
        </div>
        
    );
    
}

export default Nav;
