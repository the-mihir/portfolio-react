import React from 'react'
import './Contact.css'
import { MdEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact-container">
              <div className="contact-options">
                <article className='contact-option'>
                  <MdEmail/>
                  <h4>Email</h4>
                  <h5>mihirkantho@gmail.com</h5>
                  <a href="mailto:mihirkantho@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
                </article>

                <article className='contact-option'>
                  <BsWhatsapp/>
                  <h4>WhatsApp</h4>
                  <h5>+8801740623262</h5>
                  <a href="https://wa.me/+8801740623262" target='_blank' rel="noreferrer">Ping me on Whats app</a>
                </article>

              </div>
              {/* End of the Contact OPtion  */}

              <from action="">
                <input type="text" name='name' placeholder='Your Full Name' />
                <input type="email" name='email' placeholder='Your valid Email' />
                <textarea name="message" id="" rows="7" placeholder='Type your Message'></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
              </from>
      </div>
    </section>
  )
}

export default Contact