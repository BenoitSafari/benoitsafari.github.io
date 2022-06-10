import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '@components/CodeBlock';
import styles from './Art_2.module.scss';

function Art2 () {
  return(
    <>
      <p style={{margin: '2rem 0 -1.5rem'}}>Dans cette article nous allons créer un <em>input range</em> à deux entrées.</p>
      <h2>Résultat final</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum mollitia nostrum nam, iure officia nihil voluptate impedit iste quas cupiditate laudantium facere reprehenderit enim eveniet, magni facilis eligendi doloremque nulla.</p>
      <DoubleInputRange
        baseValueMin={1900}
        baseValueMax={2077}
      />
      <CodeBlock>
        {codeBlocks[0]}
      </CodeBlock>
      <section className='articles-layout__content__links'>
        <a target='_blank' rel='noreferrer' href='https://github.com/BenoitSafari/benoitsafari.github.io/tree/lib-useModal'>Voir le repo git</a>
        <Link to='/index'>Retourner à l'index</Link>
      </section>
    </>
  );
}

const codeBlocks =[
  `~~~jsx
import ReactDOM from 'react-dom';
import './Modal.css';
const portalRoot = document.querySelector('#portal-root');
function Modal () {
  // Créé une autre "instance" de notre application.
  return ReactDOM.createPortal(
    <>
      <div className='modal-back'></div>
      <div className='modal'>
        <div className='modal-head'>
          <button>X</button>
        </div>
        <div className='modal-content'>
        </div>
      </div>
    </>
  , portalRoot);
}

export default Modal;
~~~`,
];

function DoubleInputRange({baseValueMin, baseValueMax}) {
  const [stateValueMin, setStateValueMin] = useState(baseValueMin);
  const [stateValueMax, setStateValueMax] = useState(baseValueMax);
  const minValRef = useRef(baseValueMin);
  const maxValRef = useRef(baseValueMax);
  const handleMinThumb = (event) => {
    const value = Math.min(Number(event.target.value), stateValueMax - 1);
    setStateValueMin(value);
    minValRef.current = value;
  };
  const handleMaxThumb = (event) => {
    const value = Math.max(Number(event.target.value), stateValueMin + 1);
    setStateValueMax(value);
    maxValRef.current = value;
  };

  return (
    <div className={styles['double-input-range']}>
      <label htmlFor='time'>Période</label>
      <div className={styles['input-container']}>
        <div className={`${styles['value']}`}>{stateValueMin}</div>
        <div className={styles['slider']}>
          <input
            id='time'
            type='range'
            min={baseValueMin}
            max={baseValueMax}
            value={stateValueMin}
            onChange={handleMinThumb}
          />
          <input
            id='time'
            type='range'
            min={baseValueMin}
            max={baseValueMax}
            value={stateValueMax}
            onChange={handleMaxThumb}
          />
        </div>
        <div className={`${styles['value']}`}>{stateValueMax}</div>
      </div>
    </div>
  );
};

export default Art2;