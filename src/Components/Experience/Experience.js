import React from 'react'
import './Experience.css'
import{ BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
      <section id='experience'>
        <h5>What Skill I Have</h5>
        <h2>MY Experience</h2>

        <div className="container experience-container">
          <div className="experience-frontend">
            <h3>Frontend Development</h3>
              <article className="experience-content">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className="experience-content">
              <BsPatchCheckFill />
              <h4>CSS 3</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className="experience-content">
              <BsPatchCheckFill />
              <h4>Java Script (Js) </h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className="experience-content">
              <BsPatchCheckFill />
              <h4>React Js</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className="experience-content">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className="experience-content">
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
              </article>
          </div>

          {/* ============== Backend Development =============  */}

          <div className="experience-backend">
            <h3>Backend Development</h3>
              <article className="experience-content">
              <BsPatchCheckFill />
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className="experience-content">
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className="experience-content">
              <BsPatchCheckFill />
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className="experience-content">
              <BsPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </article>

              <article className="experience-content">
              <BsPatchCheckFill />
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </article>
          </div>


          
        </div>
      </section>
  )
}

export default Experience