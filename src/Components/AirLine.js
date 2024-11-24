import { DatePicker, Radio } from "antd";
import React from "react";

function AirLine() {
    return (
      <div className="container">
         <div className="container-1">
            <div className="inner-container" style={{ marginTop : "10px"}}>
            <p style={{marginBottom : "2px"}}><i class="bi bi-geo-alt"></i><b>Boarding From</b></p>
            <select 
             placeholder="Select City"
             style={{width : "300px"}}>
                <option></option>
            </select>
            </div>
            <div className="inner-container" style={{ marginTop : "10px"}}>
            <p style={{marginBottom : "2px"}}><i class="bi bi-geo-alt"></i><b>Boarding To</b></p>
            <select 
             placeholder="Select City"
             style={{width : "300px"}}>
                <option></option>
            </select>
            </div>
         </div>
         <div className="container-2" style={{marginTop :"10px"}}>
            <div>
                <p style={{marginBottom : "2px"}}><b>Depature Date</b></p>
                <DatePicker/>
            </div>
            <div style={{marginLeft : "10px"}}>
                <p style={{marginBottom : "2px"}}><b>Return Date</b></p>
                <DatePicker/>
            </div>
            <div style={{marginLeft : "80px"}}>
                <p style={{marginBottom : "2px"}}><b>Travellers & Class</b></p>
                <select style={{width : "300px", height : "30px"}}>
                    <option></option>
                </select>
            </div>
         </div>
         <div className="container-3">
         <div className="cont-R" style={{marginTop : "30px", height : "80px" , width : "130px", borderRadius : "10px"}}>
            <Radio style={{marginTop : "5px", marginLeft : "5px"}}><b>Regular</b></Radio>
            <p style={{marginLeft : "10px", marginTop : "5px"}}>Regular Fair</p>
        </div>
        <div className="cont-R" style={{marginTop : "30px", height : "80px" , width : "180px", borderRadius : "10px"}}>
            <Radio style={{marginTop : "5px", marginLeft : "5px"}}><b>Senior Citizen</b></Radio>
            <p style={{marginLeft : "5px", marginTop : "5px"}}>Up to <i class="bi bi-currency-rupee"></i>600 Off</p>
        </div>
        <button type="button" class="btn btn-primary" style={{marginLeft : "300px", marginTop : "50px",height : "40px", width : "100px"}}>Search</button>
         </div>
      </div>
    )
}

export default AirLine;