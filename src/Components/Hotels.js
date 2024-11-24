import React from "react";
import {DatePicker} from 'antd';


const {RangePicker} = DatePicker

function Hotel() {
    return(
        <div className='container'>
      <div className='container-1' style={{marginTop : "15px"}}>
      <div className='inner-container'>
       <p style={{marginBottom: "2px"}}><i class="bi bi-geo-alt"></i><b>Location</b></p>
       <input className='input' style={{width : "300px", marginLeft : "1px" }} />
      </div>
      <div className='inner-container'>
        <p style={{marginBottom : "1px"}}><b>Check in & Check out</b></p>
        <RangePicker style={{width : "200px"}}
         placeholder={['Check-In', 'Check-Out']}
        />
      </div>
      <div className='inner-container'>
        <p style={{marginBottom: "1px"}}><b>Rooms & Guest</b></p>
        <select className='option' style={{width : "200px"}}>
        <option></option>
      </select>
      </div>
      </div>
      <div className='container-2' style={{marginTop : "20px"}}>
      <div >
      <p style={{marginBottom: "1px"}}><b>Nationality</b></p>
        <select className='option' style={{width : "250px"}}>
        <option ></option>
      </select>
      </div>
      <div>
      <p style={{marginBottom: "1px"}}><b>Currency</b></p>
        <select className='option'>
        <option></option>
      </select>
      </div>
      </div>
      <div className='container-3' style={{marginTop : "20px"}}>
        <div>
          <p style={{marginBottom: "1px"}}><b>Rating</b></p>
          <select className='option'>
        <option ></option>
      </select>
        </div>
        <div>
          <p style={{marginBottom: "1px"}}><b>Hotel Name</b></p>
          <input  style={{width : "250px", borderRadius : "5px"}}/>
        </div >
        <button type="button" class="btn btn-primary" style={{marginLeft : "200px", height : "40px", width : "100px"}}>Search</button>
      </div>
    </div>
    )
}

export default Hotel;