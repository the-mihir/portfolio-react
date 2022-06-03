import React from 'react'
import './Header.css'
import Cta from './Cta'
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
        <div className="container header-container">
          <h5>Hello I'm</h5>
          <h1>Mihir Das</h1>
          <h5 className='text-light'>Fullstack Developer</h5>
          <Cta/>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
          <HeaderSocial />
          <div className='me'>
            <img src={me} alt="me" />
          </div>
          
          
        </div>
    </header>
  )
}

export default Header