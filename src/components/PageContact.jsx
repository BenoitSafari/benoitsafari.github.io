import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ReactComponent as SVGUser } from '@svg/ico_user.svg';
import { ReactComponent as SVGMail } from '@svg/ico_mail.svg';
import { ReactComponent as SVGSend } from '@svg/ico_send.svg';
import { useLang } from '@hooks/useLang';
import Loader from '@components/Loader';
import '@styles/PageContact.scss';

const maxLength = 2500;
const data = {
  title: {fr: 'Me Contacter', en: 'Contact me'},
  button: {fr: 'Envoyer', en: 'Send'},
  postResponse: {
    error: {fr : 'Une erreur est survenue.', en: 'An error occured.'},
    success: {fr: 'Votre message à bien été envoyé. Merci!', en: 'Thanks, your message has been sent successfully.'}
  },
  formError: {},
  placeholder: {
    name: 'Jean-Sabin', 
    mail: 'js@gmail.com',
    textArea: {
      fr: 'Bonjour, je vous trouve super! D\'ailleurs, j\'aimerais beaucoup vous embaucher...',
      en: 'Hi! I think you\'re great and I wish to hire you right away!'
    }},
  label: {
    name: {fr: 'Nom', en: 'Name'}, 
    mail: {fr: 'Adresse email', en: 'Email Address'},
    textArea: {fr: 'Votre message', en: 'Your message'}
  },
};

function ContactForm () {
  const {lang} = useLang();
  const [loading,     setLoading]     = useState(false);
  const [response,    setResponse]    = useState(false);
  const [nameState,   setNameState]   = useState('');
  const [mailState,   setMailState]   = useState('');
  const [textState,   setTextState]   = useState('');
  const [isMailValid, setIsMailValid] = useState(true);
  const [charLimit,   setCharLimit]   = useState(`0 / ${maxLength}`);

  const handleName = (e) => {
    setNameState(e.currentTarget.value);
  };
  const handleMail = (e) => {
    setMailState(e.currentTarget.value);
  };
  const handleText = (e) => {
    const target = e.currentTarget;
    const value = target.value;
    setTextState(value);
    setCharLimit(`${value.length} / ${maxLength}`);
    target.style.height = 'auto';
    target.style.height = target.scrollHeight+'px';
    target.scrollTop = target.scrollHeight;
    window.scrollTo(window.scrollLeft, (target.scrollTop + target.scrollHeight));
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (!nameState || !mailState || !textState || !isMailValid) return;
    setLoading(true);
    emailjs.sendForm(
      'service_9vw4e8d', 
      'template_qmgdbcp', 
      e.currentTarget,
      'DJEEbKdP1XccqFQrX'
    ).then(
      (res) => {
        setResponse(data.postResponse.success[lang]);
      },
      (error) => {
        setResponse(data.postResponse.error[lang]);
      }
    ).then(
      () => {
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    const mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setIsMailValid(mailformat.test(mailState) ? true : false);
  }, [mailState]);

  return(
    <main className='contact'>
      <h2>{data.title[lang]}</h2>
      {loading && <Loader/>}
      <form onSubmit={sendEmail}>
        <div className='id-field'>
          <fieldset>
            {(nameState.length === 0) 
              ? <label htmlFor='name'>{data.label.name[lang]}</label>
              : <label style={{color: '#fda503'}} htmlFor='name'>{data.label.name[lang]}</label>}
            <div className='id-field--icon-wraper'>
              <SVGUser/>
            </div>
            <input
              type='text'
              maxLength={36}
              placeholder={data.placeholder.name}
              name='name'
              onChange={handleName}
              value={nameState}
            />
          </fieldset>
          <fieldset>
            {isMailValid 
              ? <label style={{color: '#fda503'}} htmlFor='email'>{data.label.mail[lang]}</label>
              : <label htmlFor='email'>{data.label.mail[lang]}</label>}
            <div className='id-field--icon-wraper'>
              <SVGMail/>
            </div>
            <input
              type='email'
              maxLength={64}
              placeholder={data.placeholder.mail}
              name='mail'
              onChange={handleMail}
              value={mailState}
            />
          </fieldset>
        </div>
        <div className='text-field'>
          <label htmlFor='text'>
            <span>{data.label.textArea[lang]}</span>
            {(textState.length < 50) 
              ? <span>{charLimit}</span>
              : <span style={{color: '#fda503'}} >{charLimit}</span>}
          </label>
          <textarea 
            name='text'
            placeholder={data.placeholder.textArea[lang]}
            maxLength={maxLength}
            value={textState}          
            onChange={handleText}
          />
          {((textState.length < 50) || !isMailValid || (nameState.length === 0))
            ? <button style={{opacity: '.5', cursor: 'not-allowed'}}>{data.button[lang]}<SVGSend/></button>
            : <button>{data.button[lang]}<SVGSend/></button>
          }
        </div>
      </form>
    </main>
  );
}

export default ContactForm;