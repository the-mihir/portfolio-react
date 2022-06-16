import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs'


const Footer = () =>{
  return(
    <footer>
      <a href="#" className='footer-logo'>Mihir</a>

      <ul className='weblink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-social">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://facebook.com"><BsFacebook/></a>
      </div>

      <div className="footer-copyright">
        <small>&copy;Mihir Das All right reserved.</small>
      </div>
    </footer>

  )
}


export default Footer