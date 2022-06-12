import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ReactComponent as SvgUser } from '@svg/ico_input-user.svg';
import { ReactComponent as SvgMail } from '@svg/ico_input-mail.svg';
import { ReactComponent as SvgSend } from '@svg/ico_send.svg';
import { InputText, Button } from './Input';
import { useLang } from '@hooks/useLang';
import Loader from '@components/Loader';
import './ContactForm.scss';

const portalRoot = document.querySelector('#portal-root');
if (!portalRoot) throw new Error('Cannot find \'#portal-root\' element');

function ContactForm () {
  const { lang } = useLang();
  const [ text, setText ] = useState((lang === 'fr') ? textContent.fr : textContent.en);
  const form = useRef();
  const maxLength = 2500;
  const [ loading,     setLoading     ] = useState(false);
  const [ response,    setResponse    ] = useState(false);
  const [ nameField,   setNameField   ] = useState('');
  const [ mailField,   setMailField   ] = useState('');
  const [ isMailValid, setIsMailValid ] = useState(true);
  const [ textField,   setTextField   ] = useState('');
  const [ charLimit,   setCharLimit   ] = useState(`0 / ${maxLength}`);
  const nameFieldHandler = (e) => {setNameField(e.target.value);};
  const mailFieldHandler = (e) => {setMailField(e.target.value);};
  const textFieldHandler = (e) => {
    const value = e.target.value;
    setTextField(value);
    setCharLimit(`${value.length} / ${maxLength}`);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (!nameField || !mailField || !textField || !isMailValid) return;
    setLoading(true);
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SVRC_ID, 
      process.env.REACT_APP_EMAILJS_TEMP_ID, 
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      (res) => {setResponse(text.fetchRes.success);},
      (error) => {setResponse(text.fetchRes.error);}
    );
  };
  useEffect(() => {
    const mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setIsMailValid(mailformat.test(mailField) ? true : false);
  }, [mailField]);
  return(
    <>
      { loading && !response &&
        <div className='form-is-loading'>
          <Loader/>
        </div>
      }
      { loading && response &&
        <div className='form-is-loading'>
          <div>{response}</div>
        </div>
      }
      { !loading && !response &&
        <form 
          ref={form} 
          onSubmit={sendEmail}
          className='contact-form'>
          <div 
            className={
              `contact-form__inputs 
              ${(!isMailValid && mailField) && 'contact-form__inputs--invalid-mail'}`
            }>
            <InputText 
              name='user_name'
              type='text' 
              placeholder={text.placeholder.name}
              onChange={nameFieldHandler}
              value={nameField}
            ><SvgUser/>
            </InputText>
            <InputText 
              name='user_email'
              type='email' 
              placeholder={text.placeholder.mail}
              onChange={mailFieldHandler}
              value={mailField}
            ><SvgMail/>
            </InputText>
          </div>
          <div className='contact-form__text-area'>
            <label className='contact-form__text-area__label'>
              <span>{text.label}</span>
              <span>{charLimit}</span>
            </label>
            <textarea
              name='message'
              placeholder={text.placeholder.textArea}
              maxLength={maxLength}
              value={textField}          
              onChange={textFieldHandler}
            />
          </div>
          <div 
            className={`button-field ${(!nameField || !mailField || !textField || !isMailValid) && 'button-field__forbidden'}`}>
            { (!nameField || !mailField || !textField || !isMailValid) &&
              <div className='button-field__warn'>
                <span>{text.span.notice}</span>
              </div>
            }
            <Button 
              onClick={sendEmail}>
              <SvgSend/>{text.button}</Button>
          </div>
        </form>
      }
    </>
  );
}

const textContent = {
  fr: {
    fetchRes: { 
      error: 'Une erreur est survenue.', 
      success: 'Votre message à bien été envoyé. Merci!'
    },
    placeholder: {
      name: 'Nom',
      mail: 'Adresse email',
      textArea: 'Bonjour, je vous trouve super! D\'ailleurs, j\'aimerais beaucoup vous embaucher...'
    },
    label: 'Votre message',
    button: 'Envoyer',
    span: {
      notice: 'Vous devez remplir tout les champs.'
    }
  },
  en: {
    fetchRes: { 
      error: 'An error occured.', 
      success: 'Thanks, your message has been sent successfully.'
    },
    placeholder: {
      name: 'Name',
      mail: 'Email Address',
      textArea: 'Hi! I think you\'re great and I wish to hire you right away!'
    },
    label: 'Your message',
    button: 'Send',
    span: {
      notice: 'You must fill out all the fields'
    }
  }
};

export default ContactForm;