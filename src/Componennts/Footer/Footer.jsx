import React, { useState } from 'react';
import './Footer.css'
import axios from 'axios'
import taost from 'react-hot-toast'
const Footer = () => {

  const handlelogout = ()=>{
    localStorage.removeItem("user-token")
    window.location.replace("/")
  }

  const [subscribe, setsubscribe] = useState("")
  const [loading, setloading] = useState(false)

  const handlesubmission = async ()=>{
 
    try {
      setloading(true)
      await axios.post("https://pefscombackendprivate.onrender.com/subscribe",
       { email: subscribe}
      )
      taost.success("thanks for subscribing")
    } catch (error) {
      taost.error(error)
    }finally{
      setloading(false)
    }
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <i className="fas fa-brain"></i>
              <span>PEFSCOM </span>
            </div>
            <p>Empowering businesses with intelligent Technological solutions </p>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
            
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>

          <div className="footer-links">
     
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="https://pefscomsystem.com/about/">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#"> <button onClick={handlelogout} className="btn-primary">logout</button></a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Subscribe to our newsletter</h4>
            <p>Get the latest news and updates On Our Latest Products</p>
            <form className="newsletter-form" onSubmit={handlesubmission}>
              <input type="email" value={subscribe} onChange={(e)=> setsubscribe(e.target.value)} name="email" placeholder="Your email address" required />
              <button type="submit" className="btn-primary" disabled={loading}>{loading? "loading..." :"Subscribe"}</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} PEFSCOM SYSTEM. All rights reserved.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
