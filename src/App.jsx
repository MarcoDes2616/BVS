import { useState } from 'react'
import './App.css'
import Business from './components/Business'
import Header from './components/Header'
import slider1 from "./assets/img/slider1.png"
import slider2 from "./assets/img/slider2.png"
import slider3 from "./assets/img/slider3.png"

function App() {


  return (
    <div className="App">
      <div className='presentation'>
        <Header />
        <div className='img_container'>
          <img className='slider one' src={slider1} alt="" />
          <img className='slider two' src={slider2} alt="" />
          <img className='slider three' src={slider3} alt="" />
        </div>
        <Business />
      </div>

    </div>
  )
}

export default App
