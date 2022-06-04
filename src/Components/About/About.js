import React from 'react'
import './About.css'
import me from '../../assets/me-about.jpg'
import{TbAward} from 'react-icons/tb'
import{FiUser} from 'react-icons/fi'
import{BiLibrary} from 'react-icons/bi'


function about() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">

        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
            <TbAward className='about-icon' />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className='about-card'>
            <FiUser className='about-icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about-card'>
            <BiLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>100+ Projects Done</small>          
            </article>
          </div>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam suscipit ab, magnam aliquam laudantium ut delectus ipsum quae minus velit? Id adipisci autem dolores, quibusdam repellat quod cupiditate quam harum! Nesciunt harum id dolore distinctio rem corporis.</p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default about