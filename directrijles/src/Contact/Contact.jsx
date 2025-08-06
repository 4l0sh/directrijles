import React from 'react'
import Navbar from '../components/Navbar.jsx'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='NavbarContainer'><Navbar /></div>
      
      <div className='contact-content'>
        <div className='hero-section'>
          <h1>Contact DirectRijles</h1>
          <p className='hero-subtitle'>Ready to start your driving journey? Get in touch with us today!</p>
        </div>

        <div className='contact-sections'>
          <section className='contact-section'>
            <h2>Send Us a Message</h2>
            <p>Have questions about our packages or want to schedule a lesson? Fill out the form below and we'll get back to you within 24 hours.</p>
            
            <form className='contact-form'>
              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Enter your full name" required />
                </div>
                <div className='form-group'>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email address" required />
                </div>
              </div>
              
              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Enter your phone number" />
                </div>
                <div className='form-group'>
                  <label htmlFor="package">Interested Package</label>
                  <select id="package">
                    <option value="">Select a package</option>
                    <option value="starter">Starter Package</option>
                    <option value="standard">Standard Package</option>
                    <option value="intensive">Intensive Package</option>
                    <option value="refresher">Refresher Package</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>
              </div>
              
              <div className='form-group full-width'>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell us about your driving experience and what you'd like to achieve" rows="5" required></textarea>
              </div>
              
              <button type="submit" className='submit-button'>Send Message</button>
            </form>
          </section>

          <section className='contact-section'>
            <h2>Get in Touch</h2>
            <div className='contact-info-grid'>
              <div className='contact-info-card'>
                <div className='contact-icon'>📞</div>
                <h3>Phone</h3>
                <p>+31 6 1234 5678</p>
                <p>Available Mon-Fri: 9AM-6PM</p>
              </div>
              
              <div className='contact-info-card'>
                <div className='contact-icon'>✉️</div>
                <h3>Email</h3>
                <p>info@directrijles.nl</p>
                <p>We reply within 24 hours</p>
              </div>
              
              <div className='contact-info-card'>
                <div className='contact-icon'>📍</div>
                <h3>Location</h3>
                <p>Amsterdam, Netherlands</p>
                <p>We offer pickup service</p>
              </div>
              
              <div className='contact-info-card'>
                <div className='contact-icon'>🕒</div>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9AM - 6PM</p>
                <p>Saturday: 10AM - 4PM</p>
              </div>
            </div>
          </section>

          <section className='contact-section'>
            <h2>Frequently Asked Questions</h2>
            <div className='faq-grid'>
              <div className='faq-item'>
                <h4>How do I book my first lesson?</h4>
                <p>Simply fill out the contact form above or call us directly. We'll discuss your needs and schedule your first lesson at a convenient time.</p>
              </div>
              
              <div className='faq-item'>
                <h4>Do you offer pickup service?</h4>
                <p>Yes! We can pick you up from your home, work, or any convenient location within our service area.</p>
              </div>
              
              <div className='faq-item'>
                <h4>What should I bring to my first lesson?</h4>
                <p>Just bring your provisional driving license and a positive attitude! We'll provide everything else you need.</p>
              </div>
              
              <div className='faq-item'>
                <h4>Can I change or cancel my lesson?</h4>
                <p>Yes, we offer flexible rescheduling. Please give us at least 24 hours notice to avoid any cancellation fees.</p>
              </div>
            </div>
          </section>

          
        </div>
      </div>
    </div>
  )
}

export default Contact
