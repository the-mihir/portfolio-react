import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Product Landing page Or App Landing page',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/14803491-Product-Landing-page-Or-App-Landing-page',
  },

  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15860710-SAS-E-GUARD-LANDING-PAGE',
  },

  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15796682-Deck-Staining-Service-Page',
  },

  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15901513-Hotel-RX',
  },

  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15904083-SajawBasa',
  },

  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15803727-LUANA-W-ACTIVEWEAR-Shop-Website',
  }
  

]
    

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio-container">
        
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio-item'>
                <div className="portfolio-item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={github} className='btn'>Github Link</a>
                  <a href={demo} className='btn btn-primary' target='_bank'>Live Demo</a>
                </div>
              </article>

            )
          })
        }
        
      </div>
    
    </section>
  )
}

export default Portfolio