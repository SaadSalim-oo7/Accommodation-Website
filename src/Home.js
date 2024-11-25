import React from "react";
import { Link } from "react-router-dom";



function Home() {

    return (
   <div className="btn-container" >
    <Link to='/hotel'><button class="btn btn-primary" type="submit" style={{marginLeft : "12px", filter : 'none'}}>Hotels</button></Link>
    <Link to='/tourism'><button class="btn btn-primary" type="submit" style={{marginLeft : "20px"}}>Tourism</button></Link>
    <Link to='/transfer'><button class="btn btn-primary" type="submit" style={{marginLeft : "20px"}}>Transfer</button></Link>
    <Link to='/airline'><button class="btn btn-primary" type="submit" style={{marginLeft : "20px"}}>Airline</button></Link>
   </div>
    )
}
        

export default Home;