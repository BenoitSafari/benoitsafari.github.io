import { useState, useEffect } from 'react';
import { useLang } from '@hooks/useLang';
import '@styles/Nav.scss';

function Nav() {
  return(
    <nav className='nav'>
      <LangInput/>
    </nav>
  );
}

function LangInput() {
  const {lang, updateLang: setLang} = useLang();
  const [checkbox, setCheckbox] = useState((lang === 'fr') ? false : true);
  useEffect(() => {
    setLang(checkbox ? 'en' : 'fr');
  }, [checkbox, setLang, lang]);
  
  const handleOnChange = () => {
    setCheckbox(!checkbox);
  };
  
  return(
    <div className='nav__input-lang'>
      <span className={`right${(lang === 'fr') ? '' : ' nav__input-lang--selected'}`}>
        en
      </span>
      <input 
        type='checkbox' 
        onChange={handleOnChange} 
        value={lang}
        defaultChecked={checkbox}/>
      <label>
        <span className={`left${(lang === 'en') ? '' : ' nav__input-lang--selected'}`}>fr</span>
      </label>
    </div>
  );
}

export default Nav;