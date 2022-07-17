import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLang } from '@hooks/useLang';
import '@styles/Nav.scss';

const animations = {
  initial:    {opacity: 0},
  animate:    {opacity: .5},
  whileHover: {opacity: 1, transition: {duration: .3}},
};

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
    <motion.div {...animations} className='nav__input-lang'>
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
    </motion.div>
  );
}

export default Nav;