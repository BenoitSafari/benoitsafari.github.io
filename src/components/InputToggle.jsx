import { useState, useEffect } from 'react';
import { useLang } from '@hooks/useLang';
import './Input.scss';

function InputToggle () {
  const { lang, updateLang: setLang } = useLang();
  const [checkbox, setCheckbox] = useState((lang === 'fr') ? false : true);
  useEffect(() => {
    setLang(checkbox ? 'en' : 'fr');
    console.log(lang);
  }, [checkbox, setLang, lang]);

  const handleOnChange = () => {
    setCheckbox(!checkbox);
  };

  return(
    <div className='lib__input-toggle'>
      <span className='right'>en</span>
      <input 
        type='checkbox' 
        onChange={handleOnChange} 
        value={lang}
        defaultChecked={checkbox}/>
      <label htmlFor=''>
        <span className='left'>fr</span>
      </label>
    </div>

  );
}

export {InputToggle};