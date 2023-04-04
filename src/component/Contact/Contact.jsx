import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
  <div className="contact-form" id='Contact'>
    <div className="w-left">
      <div className="contact">
        <span>Get in touch</span>
        <span>Contact me</span>
      </div>
      <div className="blur s-blur1" style={{background:"#ABF1FF94"}}>
      </div>
    </div>
    <div className="c-right">
      <form action="">
        <input type="text" name='userName' className='user' placeholder='Enter Your name' />
        <input type="email" name='userEmail' className='user' placeholder='Enter Your Email' />
        <textarea name="userMsg" className='user' placeholder='Enter Your message'></textarea>
        <input type="submit" className='button contact-button' value="Send"/>
        <div className="blur c-blur" style={{background:"var(--purple)"}}></div>
      </form>
    </div>
  </div>
    )
}

export default Contact
