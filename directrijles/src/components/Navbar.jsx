import React, {Fragment} from 'react'
import car from '../assets/car.svg'
import './Navbar.css'


const Navbar = () => {
  return (
    <Fragment>
      <div className='Navbar'>
        <div className='box1'>
            <img className='car-logo' src={car} alt="Car Logo" />
            <h1 className='logo-text'>Directrijles</h1>
        </div>
        <div className='box2'>
           <a href="/">Home</a> 
            <a href="/contact">Contact</a>
            <a href="/about">Over Ons</a>
               
        </div>
        <div className='box3'>
            <button className='reserve-button'>Reserveer Direct</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar

