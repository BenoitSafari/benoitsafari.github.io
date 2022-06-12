import { useState, useMemo, useContext, createContext } from 'react';

const LangContext = createContext();
function LangProvider ({children}) {
  const localLang = localStorage.getItem('bsaf-lang');
  const initialLang = (!localLang || localLang === 'undefined') ? 'fr' : localLang;  
  const [lang, setLang] = useState(initialLang);
  localStorage.setItem('bsaf-lang', initialLang);

  const updateLang = (lang) => {
    localStorage.setItem('bsaf-lang', lang);
    setLang(lang);
  };

  return (
    <LangContext.Provider 
      value={useMemo(() => ({lang, updateLang}), [lang])}>
      {children}
    </LangContext.Provider>
  );
};

function useLang() {
  return useContext(LangContext);
}

export { LangProvider, useLang };