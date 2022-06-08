import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio-container">
        
        <article className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={IMG1} alt="projects1 " />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
            <a href="https://githubb.com" className='btn'>Github Link</a>
            <a href="https://githubb.com" className='btn btn-primary' target='_bank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={IMG2} alt="projects1 " />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
            <a href="https://githubb.com" className='btn'>Github Link</a>
            <a href="https://githubb.com" className='btn btn-primary' target='_bank'>Live Demo</a>
          </div>
          
        </article>

        <article className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={IMG3} alt="projects1 " />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
            <a href="https://githubb.com" className='btn'>Github Link</a>
            <a href="https://githubb.com" className='btn btn-primary' target='_bank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={IMG4} alt="projects1 " />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
            <a href="https://githubb.com" className='btn'>Github Link</a>
            <a href="https://githubb.com" className='btn btn-primary' target='_bank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={IMG5} alt="projects1 " />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
            <a href="https://githubb.com" className='btn'>Github Link</a>
            <a href="https://githubb.com" className='btn btn-primary' target='_bank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={IMG6} alt="projects1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
            <a href="https://githubb.com" className='btn'>Github Link</a>
            <a href="https://githubb.com" className='btn btn-primary' target='_bank'>Live Demo</a>
          </div>
        </article>
      </div>
    
    </section>
  )
}

export default Portfolio