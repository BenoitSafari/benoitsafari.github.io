import { useState, useEffect, useRef } from 'react';
import '@styles/Neon.scss';

function Neon() {
  const neonString          = '<benoitsafari>';
  const elementArray        = useRef([]);
  const [string, setString] = useState('');

  const handleClick = (e) => {
    const index = Number(e.currentTarget.id);
    const letter = e.currentTarget.textContent;
    elementArray.current[index].classList.toggle('lights-on');
    setString(string + letter);
  };
  const handleRef = (el) => {
    elementArray.current.push(el);
  };

  useEffect(() => {
    console.log(string);
  }, [string]);
  useEffect(() => {
    elementArray && elementArray.current.forEach(el => {
      el && el.classList.toggle('lights-on');
    });
  }, [elementArray]);

  return(
    <div className='neon'>
      <div className='neon__back'>
        {neonString}
      </div>
      <div className='neon__outer'>
        {[...neonString].map((letter, i) => (
          <span 
            key={`outer-${i}`}
            ref={handleRef}>
            {letter}
          </span>))}
      </div>
      <div className='neon__inner'>
        {[...neonString].map((letter, i) => (
          <span 
            key={`inner-${i}`}
            id={`${i}`}
            onClick={handleClick}
            ref={handleRef}>
            {letter}
          </span>))}
      </div>
    </div>
  );
}

export default Neon; 