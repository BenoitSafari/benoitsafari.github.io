import { useState } from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '@components/CodeBlock';
import styles from './Art_2.module.scss';

function Art2 () {
  return(
    <>
      <p style={{margin: '2rem 0'}}>Dans cette article nous allons créer un <em>input range</em> à deux entrées.</p>
      <div style={{
        marginBottom: '2rem',
        padding: '1rem',
        borderRadius: '5px',
        width: '500px',
        backgroundColor: '#292a33',
        boxShadow: '2px 2px 4px rgba(0,0,0,0.35)'
      }}>
        <DoubleInputRange
          label="<DoubleInputRange/>"
          baseValueMin={-400}
          baseValueMax={2077}
        />
      </div>
      <h2>Le Composant</h2>
      <CodeBlock>
        {codeBlocks[0]}
      </CodeBlock>
      <h2>Le Style</h2>
      <p>On commence par effacer le style par défaut.</p>
      <CodeBlock>
        {codeBlocks[1]}
      </CodeBlock>
      <p>Et ensuite on attaque la partie qui pique.</p>
      <CodeBlock>
        {codeBlocks[2]}
      </CodeBlock>

      <section className='articles-layout__content__links'>
        <Link to='/index'>Retourner à l'index</Link>
      </section>
    </>
  );
}

const codeBlocks =[
  `~~~jsx
  import { useState } from 'react';
  import './DoubleInputRange.scss';

  function DoubleInputRange({
    baseValueMin,   // Définit la valeur minimale sélectionnable (number)
    baseValueMax,   // Définit la valeur maximale sélectionnable (number)
    label           // Donne une étiquette au composant (string)
  }) {
    // On stock nos valeurs dans un useState 
    const [stateValueMin, setStateValueMin] = useState(baseValueMin);
    const [stateValueMax, setStateValueMax] = useState(baseValueMax);
    // Fonctions prenant en charge le onChange des input
    const handleMinThumb = (event) => {
      // On récupère la valeur de la cible seulement si elle est plus 
      // faible que celle de l'input max. Cela empêche la valeur minimale d'être
      // plus élevée que la valeur maximale
      const value = Math.min(Number(event.target.value), stateValueMax - 1);
      setStateValueMin(value);
    };
    // On fait pareil sur le second input
    const handleMaxThumb = (event) => {
      const value = Math.max(Number(event.target.value), stateValueMin + 1);
      setStateValueMax(value);
    };
  
    return (
      <div className='double-input-range'>
        <label htmlFor='time'>{label}</label>
        <div className='input-container'>
          {/* Affichage de la valeur minimale */}
          <div className='value'>{stateValueMin}</div>
          <div className={styles['slider']}>
            {/* On passe nos valeurs et handlers aux inputs */}
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
          {/* Affichage de la valeur maximale */}
          <div className='value'>{stateValueMax}</div>
        </div>
      </div>
    );
  };
  
  export default DoubleInputRange;
~~~`,
  `~~~scss
/* Reset */
input {
  all: unset;
  outline: 0;
}
input[type='range'] {
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    border: none;
  }
  &::-webkit-slider-runnable-track {
    border: none;
  }
  &::-moz-range-track {
    border: none;
  }
  &::-moz-range-thumb {
    box-shadow: none;
    border: none;
    background: none;
  }
  &::-ms-track {
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    box-shadow: none;
    border: none;
  }
  &::-ms-fill-upper {
    box-shadow: none;
    border: none;
  }
  &::-ms-thumb {
    box-shadow: none;
    border: none;
  }
  &:focus {
    outline: none;
  }}
~~~`,
  `~~~scss
  /*  Pour être compatible avec les principaux navigateurs on va beaucoup se répeter.
      On va donc écrire les propriétés principales dans des variables */
  $range-slide-width: 100%;
  $range-slide-thickness: 8px;
  $range-slide-margin: 3.5rem;
  $range-slide-radius: 50px;
  $range-slide-color: #459660;
  $range-value-width: 2.5rem;
  $range-value-font-size: inherit;
  $range-value-font-weight: inherit;
  $range-thumb-size: 1em;
  $range-thumb-radius: 100%;
  $range-thumb-color: #07ce49;

  .double-input-range {
    & label {
      font-weight: 600;
      display: block;
      margin-bottom: 1rem;
    }
    & .input-container {    
      /* Contient les valeurs et les inputs */ 
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .slider {
        position: absolute;
        /* Définit l'espacement entre les valeurs et les input */
        right: $range-slide-margin;
        left: $range-slide-margin;
      }
      & .value {
        width: $range-value-width; // Force une taille pour éviter le redimensionnement sur les valeurs extrêmes
        font-size: $range-value-font-size;
        font-weight: $range-value-font-weight;
        text-align: center;
      }
      & input[type='range'] {
        position: absolute;
        width: $range-slide-width;
        cursor: pointer;
        // FIREFOX
        &::-moz-range-thumb {
          background-color: $range-thumb-color;
          pointer-events: all;
          cursor: pointer;
        }
        &::-moz-range-track {
          height: $range-slide-thickness;
          border-radius: $range-slide-radius;
          cursor: pointer;
        }
        // WEBKIT
        &::-webkit-slider-thumb {
          background-color: $range-thumb-color;
          border-radius: $range-thumb-radius;
          height: $range-thumb-size;
          width: $range-thumb-size;
          pointer-events: all;
          cursor: pointer;
          position: relative;
          z-index: 5;
          margin-left: calc($range-thumb-size / 2);
          margin-top: - calc($range-slide-thickness / 2);
        }
        &::-webkit-slider-runnable-track {
          height: $range-slide-thickness;
          background: $range-slide-color;
          border-radius: $range-slide-radius;
          cursor: pointer;
        }}
        & input[type='range']:nth-child(1) {
          // FIREFOX 
          &::-moz-range-track {
            /*  Définit la couleur de fond sur le premier élément input seulement,
                afin de toujours avoir les thumbs en premier plan */
            background: $range-slide-color;
          }
          &::-webkit-slider-thumb {
            /*  WEBKIT Empêche les thumbs de se superposer 
                (Si quelqu'un sait comment obtenir ce résultat sur FIREFOX je suis preneur!) */ 
            margin-left: - calc($range-thumb-size / 3);
          }}}}
~~~`,
];

function DoubleInputRange({baseValueMin, baseValueMax, label}) {
  const [stateValueMin, setStateValueMin] = useState(baseValueMin);
  const [stateValueMax, setStateValueMax] = useState(baseValueMax);
  const handleMinThumb = (event) => {
    const value = Math.min(Number(event.target.value), stateValueMax - 1);
    setStateValueMin(value);
  };
  const handleMaxThumb = (event) => {
    const value = Math.max(Number(event.target.value), stateValueMin + 1);
    setStateValueMax(value);
  };

  return (
    <div className={styles['double-input-range']}>
      <label htmlFor='time'>{label}</label>
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