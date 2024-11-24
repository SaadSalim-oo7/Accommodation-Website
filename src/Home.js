import React, {useState} from "react";
import { Link } from "react-router-dom";



function Home() {

    return (
//         <div className="btn-container">
//             <ul class="nav nav-pills mb-3 ms-3" id="pills-tab" role="tablist">
//   <li class="nav-item" role="presentation">
//     <Link to='/hotel'><button class="nav-link" id="pills-hotel-tab" data-bs-toggle="pill" data-bs-target="#pills-hotel" type="button" role="tab" aria-controls="pills-hotel" aria-selected="false">Hotels</button></Link>
//   </li>
//   <li class="nav-item ms-4" role="presentation">
//     <button class="nav-link" id="pills-tourism-tab" data-bs-toggle="pill" data-bs-target="#pills-tourism" type="button" role="tab" aria-controls="pills-tourism" aria-selected="false">Tourism</button>
//   </li>
//   <li class="nav-item ms-4" role="presentation">
//     <button class="nav-link" id="pills-transfer-tab" data-bs-toggle="pill" data-bs-target="#pills-transfer" type="button" role="tab" aria-controls="pills-transfer" aria-selected="false">Transfer</button>
//   </li>
//   <li class="nav-item ms-4" role="presentation">
//     <Link to='/airline'><button class="nav-link" id="pills-airline-tab" data-bs-toggle="pill" data-bs-target="#pills-airline" type="button" role="tab" aria-controls="pills-airline" aria-selected="false">Airline</button></Link>
//   </li>
// </ul>
// </div>
   <div className="btn-container" >
    <Link to='/hotel'><button class="btn btn-primary" type="submit" style={{marginLeft : "12px", filter : 'none'}}>Hotels</button></Link>
    <Link to='/tourism'><button class="btn btn-primary" type="submit" style={{marginLeft : "20px"}}>Tourism</button></Link>
    <Link to='/transfer'><button class="btn btn-primary" type="submit" style={{marginLeft : "20px"}}>Transfer</button></Link>
    <Link to='/airline'><button class="btn btn-primary" type="submit" style={{marginLeft : "20px"}}>Airline</button></Link>
   </div>
    )
}
        

export default Home;