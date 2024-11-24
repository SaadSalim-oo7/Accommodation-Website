import React from "react";
import { DatePicker } from "antd";

const {RangePicker} = DatePicker

function Tourism() {
    return(
        <div className="container" style={{width : "500px"}}>
          <div className="container-1" style={{marginTop : "15px",marginLeft : '60px'}}>
            <div className="inner-container">
            <p style={{marginBottom : '2px'}}><i class="bi bi-houses"></i> <b>Search Places</b></p>
            <select className="option" style={{width : '400px'}}>
                <option></option>
            </select>
            </div>
           </div>
           <div className="container-2" style={{marginLeft : "130px", marginTop : "10px"}}>
           <div className='inner-container'>
        <p style={{marginBottom : "1px"}}><b>Check in & Check out</b></p>
        <RangePicker style={{width : "200px"}}
         placeholder={['Check-In', 'Check-Out']}
        />
      </div>
           </div>
           <button type="button" class="btn btn-primary" style={{marginLeft : "180px", marginTop: "15px", height : "40px", width : "100px"}}>Search</button>
           </div>
    )
}

export default Tourism;