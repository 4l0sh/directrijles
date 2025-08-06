import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Homepage from './homepage/homepage.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Fragment>
  )
}
 
export default App
