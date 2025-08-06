import React from 'react'
import Navbar from '../components/Navbar.jsx'
import './about.css'

const About = () => {
  return (
    <div className='about-page'>
        <div className='NavbarContainer'><Navbar /></div>
      
        <div className='about-content'>
          <div className='hero-section'>
            <h1>About DirectRijles</h1>
            <p className='hero-subtitle'>Your trusted partner in learning to drive safely and confidently</p>
          </div>

          <div className='about-sections'>
            <section className='about-section'>
              <h2>Our Story</h2>
              <p>
                Founded in 2018, DirectRijles has been dedicated to providing high-quality driving instruction 
                to students across the Netherlands. With over 5 years of experience, we've helped hundreds of 
                students pass their driving tests and become confident, safe drivers.
              </p>
            </section>

            <section className='about-section'>
              <h2>Our Mission</h2>
              <p>
                We believe that learning to drive should be an enjoyable and stress-free experience. Our mission 
                is to provide personalized, professional driving instruction that builds confidence and promotes 
                safe driving habits for life.
              </p>
            </section>

            <section className='about-section'>
              <h2>Why Choose Us?</h2>
              <div className='features-grid'>
                <div className='feature-card'>
                  <h3>Experienced Instructors</h3>
                  <p>All our instructors are certified professionals with years of teaching experience.</p>
                </div>
                <div className='feature-card'>
                  <h3>Modern Vehicles</h3>
                  <p>Learn in safe, well-maintained vehicles equipped with dual controls for your safety.</p>
                </div>
                <div className='feature-card'>
                  <h3>Flexible Scheduling</h3>
                  <p>We work around your schedule with flexible lesson times and pickup locations.</p>
                </div>
                <div className='feature-card'>
                  <h3>High Pass Rate</h3>
                  <p>95% of our students pass their driving test on the first attempt.</p>
                </div>
                <div className='feature-card'>
                  <h3>Theory Support</h3>
                  <p>Comprehensive theory test preparation included with all our packages.</p>
                </div>
                <div className='feature-card'>
                  <h3>Affordable Prices</h3>
                  <p>Competitive pricing with transparent costs and no hidden fees.</p>
                </div>
              </div>
            </section>

            <section className='about-section'>
              <h2>Our Approach</h2>
              <p>
                We understand that every student learns differently. That's why we tailor our teaching methods 
                to suit your individual learning style and pace. Whether you're a complete beginner or need 
                refresher lessons, we'll create a personalized learning plan just for you.
              </p>
              <div className='approach-points'>
                <div className='approach-point'>
                  <span className='point-number'>1</span>
                  <div>
                    <h4>Assessment</h4>
                    <p>We start with an assessment to understand your current skill level and learning needs.</p>
                  </div>
                </div>
                <div className='approach-point'>
                  <span className='point-number'>2</span>
                  <div>
                    <h4>Personalized Plan</h4>
                    <p>Create a customized learning plan that focuses on your specific areas for improvement.</p>
                  </div>
                </div>
                <div className='approach-point'>
                  <span className='point-number'>3</span>
                  <div>
                    <h4>Progressive Learning</h4>
                    <p>Build skills progressively from basic controls to advanced driving techniques.</p>
                  </div>
                </div>
                <div className='approach-point'>
                  <span className='point-number'>4</span>
                  <div>
                    <h4>Test Preparation</h4>
                    <p>Thorough preparation for both theory and practical driving tests.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className='about-section contact-section'>
              <h2>Ready to Start Your Journey?</h2>
              <p>Contact us today to book your first lesson or learn more about our packages.</p>
              <div className='contact-buttons'>
                <button className='cta-button primary'>Book a Lesson</button>
                <button className='cta-button secondary'>Contact Us</button>
              </div>
            </section>
          </div>
        </div>
    </div>
  )
}

export default About

