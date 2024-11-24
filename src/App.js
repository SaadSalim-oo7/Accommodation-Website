import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookingTray from './Components/BookingTray';
import Profile from './Components/Profile';
import Hotel from './Components/Hotels';
import AirLine from './Components/AirLine';
import Tourism from './Components/Tourism';


function App() {
  return (
    <>
    <div className='main'>
    <BrowserRouter>
      <Header/> 
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/bookingTray' element = {<BookingTray/>}/>
      <Route path='/profile' element = {<Profile/>}/>
      <Route path='/hotel' element = {<Hotel/>}/>
      <Route path='/airline' element = {<AirLine/>}/>
      <Route path='/tourism' element = {<Tourism/>}/>
    </Routes>
    </BrowserRouter>
        </div>
      </>
  )
}

export default App;
