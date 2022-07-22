import React from "react";

import './Contact.css';

function Contact() {
    const submitForm = () => {
        console.log('Form submitted');
    };
    
    return (
        <div className='contact white' >    
            <h2>Contact</h2>
            <div className='form-wrapper' >
                <form className='contact-form' action='https://formsubmit.co/jm.lindemann@web.de' method='POST'>
                    <input type='hidden' name='_captcha' value='false' ></input>
                    <input type='hidden' name='_subject' value='New Contact Mail via Homepage' ></input>
                    <input type='hidden' name='_next' value='http://localhost:3000/contact' ></input>

                    <input className='input-name' type='text' name='name' placeholder='Name' required></input>
                    <input className='input-email' type='email' name='email' placeholder='Enter Email' required></input>
                    <textarea className='input-message' type='text' name='Message' placeholder='Your Message' required ></textarea>
                    <button className='btn-submit' type='submit' >Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;