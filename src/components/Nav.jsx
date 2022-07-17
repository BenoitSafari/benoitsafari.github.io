import { ReactComponent as SVGBack } from '@svg/ico_back.svg';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '@hooks/useLang';
import '@styles/Nav.scss';

const transition = {transition: {duration: .1}};
const inputAnim = {
  initial:    {opacity: 0},
  animate:    {opacity: .5},
  whileHover: {opacity: 1, transition: {duration: .3}},
};
const backAnim = {
  initial:    {scale: 0},
  animate:    {scale: 1, ...transition},
  exit:       {scale: 0, ...transition},
  whileHover: {scale: 1.2, ...transition},
  whileTap:   {scale: .8, ...transition},
};

function Nav() {
  const {pathname} = useLocation();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    (pathname !== '/') && setTimeout(() => {
      setIsHome(false);
    }, 500);
    (pathname === '/') && setIsHome(true);
  }, [pathname]);

  return(
    <nav className='nav'>
      {!isHome &&
        <motion.div className='nav__buttons' {...backAnim}>
          <Link to='/'>
            <SVGBack/>
          </Link>
        </motion.div>}
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
    <motion.div {...inputAnim} className='nav__input-lang'>
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