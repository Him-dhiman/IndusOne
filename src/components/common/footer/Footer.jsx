import React from "react"
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    

      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>IndusOne - Stay tune and get the latest update</h1>
            <span>Solving complex, strategic business challenges with cuttingedge technological innovations & fostering breakthrough in AI
</span>
          </div>
          <div >
         <input type='text' placeholder='Enter email address'/><button className="btn btn-outline-dark" type="submit"><i class="fa fa-paper-plane"></i></button>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>TECH INDUS ONE</h1>
            <span>IT SERVICES & IT CONSULTING</span>
            <p>Our vision is to showcase the world-class IT expertise of India at the global level and nurture India’s IT talent.</p>

            <i className='fa fa-facebook-f icon'></i>
            <i className='fa fa-twitter icon'></i>
            <i className='fa fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li><i className='fa fa-map'></i>  Chandigarh, Punjab 140308, IN</li>
              <li><i className='fa fa-phone'></i> 123456</li>
              <li><i className='fa fa-paper-plane'></i><Link to='/website'>Website</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
