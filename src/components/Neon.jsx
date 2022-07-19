import { useState, useEffect, useRef } from 'react';
import Tetris from './Tetris';
import '@styles/Neon.scss';

function Neon() {
  const [neonString, setNeonString] = useState('<benoitsafari>');
  const elementArray                = useRef([]);
  const [isTetris, setIsTetris]     = useState(false);
  const [string, setString]         = useState('');

  const handleClick = (e) => {
    const index = Number(e.currentTarget.id);
    const letter = e.currentTarget.textContent;
    elementArray.current[index].classList.toggle('lights-on');
    setString(string + letter);
    isTetris && setIsTetris(false);
  };
  const handleRef = (el) => {
    elementArray.current.push(el);
  };

  useEffect(() => {
    console.log(string);
    if (string.includes('tetris')) {
      setIsTetris(true);
      setString('');
      // setNeonString('<tetris>');
      elementArray && elementArray.current.forEach(el => {
        el && el.classList.add('lights-on');
      });
    }
    if (string.length > 10) {
      setString('');
      elementArray && elementArray.current.forEach(el => {
        el && el.classList.add('lights-on');
      });
    }
  }, [string]);
  useEffect(() => {
    elementArray && elementArray.current.forEach(el => {
      el && el.classList.toggle('lights-on');
    });
  }, [elementArray]);

  return(
    <>
      {isTetris && <Tetris/>}
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
    </>
  );
}

export default Neon; 