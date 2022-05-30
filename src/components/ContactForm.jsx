import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ReactComponent as SvgUser } from '@svg/ico_input-user.svg';
import { ReactComponent as SvgMail } from '@svg/ico_input-mail.svg';
import { ReactComponent as SvgSend } from '@svg/ico_send.svg';
import { InputText, Button } from './Input';
import './ContactForm.scss';
// TODO: Add toast error management

function ContactForm () {
  const form = useRef();
  const maxLength = 2500;
  const [ nameField, setNameField] = useState();
  const [ mailField, setMailField] = useState();
  const [ textField, setTextField] = useState();
  const [ charLimit, setCharLimit] = useState(`0 / ${maxLength}`);
  const nameFieldHandler = (e) => {setNameField(e.target.value);};
  const mailFieldHandler = (e) => {setMailField(e.target.value);};
  const textFieldHandler = (e) => {
    const value = e.target.value;
    setTextField(value);
    setCharLimit(`${value.length} / ${maxLength}`);
  };
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
    <form 
      ref={form} 
      onSubmit={sendEmail}
      className='contact-form'>
      <div className='contact-form__inputs'>
        <InputText 
          name='user_name'
          type='text' 
          placeholder='Nom'
          onChange={nameFieldHandler}
          value={nameField}
        ><SvgUser/>
        </InputText>
        <InputText 
          name='user_email'
          type='email' 
          placeholder='adresse email'
          onChange={mailFieldHandler}
          value={mailField}
        ><SvgMail/>
        </InputText>
      </div>
      <div className='contact-form__text-area'>
        <label className='contact-form__text-area__label'>
          <span>Votre message</span>
          <span>{charLimit}</span>
        </label>
        <textarea
          name='message'
          placeholder="Bonjour, j'adore c'que vous faites! D'ailleurs, j'aimerais beaucoup vous embaucher..."
          maxLength={maxLength}
          value={textField}          
          onChange={textFieldHandler}
        />
      </div>
      <Button onClick={sendEmail}><SvgSend/>Envoyer</Button>
    </form>
  );
}

export default ContactForm;