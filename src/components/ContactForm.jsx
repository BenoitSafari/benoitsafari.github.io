import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.scss';

function ContactForm () {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SVRC_ID, 
      process.env.REACT_APP_EMAILJS_TEMP_ID, 
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(
        (res) => {console.log(res.text);},
        (error) => {console.log(error.text);}
      );};

  return(
    <form ref={form} onSubmit={sendEmail}>
      <label>Nom</label>
      <input 
        type='text' 
        name='user_name'/>
      <label>Email</label>
      <input 
        type='email'
        name='user_email' />
      <label>Message</label>
      <textarea 
        name='message' />
      {/* <input 
        type='submit' 
        value='Send' /> */}
    </form>
  );
}

export default ContactForm;