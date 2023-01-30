import { useState } from 'react'
import './App.css'
import Business from './components/Business'
import Navbar from './components/Navbar'
import slider1 from "./assets/img/slider1.png"
import slider2 from "./assets/img/slider2.png"
import slider3 from "./assets/img/slider3.png"
import logo from "./assets/img/logo_big.png"


function App() {


    return (
        <div className="App">
            <div className='presentation'>
                <Navbar />
                <div className='img_container'>
                    <img className='slider one' src={slider1} alt="" />
                    <img className='slider two' src={slider2} alt="" />
                    <img className='slider three' src={slider3} alt="" />
                    <img className='logo' src={logo} alt="" />
                </div>
                <Business />
            </div>

        </div>
    )
}

export default App
