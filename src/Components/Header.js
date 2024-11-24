import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <div className="header">
          <h1 style={{marginTop : "20px"}}>Global Travels</h1>
           <div className="header-containt">
           <Link to="/"><p>Home</p></Link>
           <Link to="/bookingTray"><p>Booking Tray</p></Link>
           <Link to="/profile"><p>Profile</p></Link>
           <p>Log Out</p>
           </div>
        </div>
        </>
    )
}

export default Header;