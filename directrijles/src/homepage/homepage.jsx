import React, {Fragment} from 'react'
import './homepage.css'
import Navbar  from '../components/Navbar.jsx'
import Packages from  '../components/Packages.jsx'

function Homepage() {
  return (
    <Fragment>
        <div className='MainContainer'>
          <div className='NavbarContainer'>
            <Navbar />
          </div>
          <div className='ContentContainer'>
            <div className='textContainer'>
                <h1>RIJ MET </h1><h1 className='accent-text'>ZELFVERTROUWEN</h1>
                </div>

            <p>Hier begint jouw reis naar je rijbewijs!</p>
            <div className='buttonContainer'>
              <button className='reserve-button'>Reserveer Direct</button>
              <button className='call-button'>Bel Ons</button>
            </div>
          </div>
          <div className='PackagesContainer'>
            <h1 className='packagesTitle'>Onze Pakketten</h1>
            <Packages />
          </div>
          <div className='footerContainer'>
            <p>© 2023 Rijschool. Alle rechten voorbehouden.</p>
            <p>Privacybeleid | Algemene Voorwaarden</p>
            <p>Contact</p>
            
          </div>

        </div>
    </Fragment>
  )
  
}

export default Homepage