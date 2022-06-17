import React from 'react';
import { ReactComponent as SvgMail } from 'assets/ico_mail.svg';
import { Button, InputToggle, InputText, InputCheckbox, InputRadio, InputRange, InputDoubleRange } from 'lib/Inputs';
import { Container, H2, H3, Usage, State } from './GlobalStyle';
import CodeBlock from './CodeBlock';

function LibInputs () {
  const [inputToggle, setInputToggle]                 = React.useState(false);
  const [inputText, setInputText]                     = React.useState('');
  const [inputCheckbox, setInputCheckbox]             = React.useState(true);
  const [inputRadio, setInputRadio]                   = React.useState('jambon');
  const [inputRange, setInputRange]                   = React.useState(0);
  const [inputDoubleRangeMin, setInputDoubleRangeMin] = React.useState(-400);
  const [inputDoubleRangeMax, setInputDoubleRangeMax] = React.useState(400);
  return(
    <>
      {/* COMPONENT: Button */}
      <Container>
        <H3>Button</H3>
        <Button>OK</Button>
        <details>
          <Usage>Usage</Usage>
          <CodeBlock>
            {codeTest[0]}
          </CodeBlock>
        </details>
      </Container>

      {/* COMPONENT: InputToggle */}
      <Container>
        <H3>InputToggle</H3>
        <InputToggle
          state={inputToggle}
          setter={setInputToggle}
          valueTrue={'Off'}
          valueFalse={'On'}
        />
        <State>State:
          {inputToggle && <span style={{color: 'green'}}>{String(inputToggle)}</span>}
          {!inputToggle && <span style={{color: 'red'}}>{String(inputToggle)}</span>}
        </State>
        <details>
          <Usage>Usage</Usage>
          <CodeBlock>
            {codeTest[1]}
          </CodeBlock>
        </details>
      </Container>

      {/* COMPONENT: InputText */}
      <Container>
        <H3>InputText</H3>
        <InputText
          setter={setInputText}
          label={'Email'}
          name={'mail'}
          value={inputText}
          placeholder={'jambon@gmail.com'}
        >
          <SvgMail/>
        </InputText>
        <State >State:<span>{inputText}</span>
        </State>
        <details>
          <Usage>Usage</Usage>
          <CodeBlock>
            {codeTest[2]}
          </CodeBlock>
        </details>
      </Container>

      {/* COMPONENT: InputCheckbox */}
      <Container>
        <H3>InputCheckbox</H3>
        <InputCheckbox
          setter={setInputCheckbox}
          state={inputCheckbox}
          name='newsletter'
        >
          Yes! Send me a 100 newsletter mails per day
        </InputCheckbox>
        <State>State:
          {inputCheckbox && <span style={{color: 'green'}}>{String(inputCheckbox)}</span>}
          {!inputCheckbox && <span style={{color: 'red'}}>{String(inputCheckbox)}</span>}
        </State>
        <details>
          <Usage>Usage</Usage>
          <CodeBlock>
            {codeTest[3]}
          </CodeBlock>
        </details>
      </Container>

      {/* COMPONENT: InputRadio */}
      <Container>
        <H3>InputCheckbox</H3>
        <InputRadio
          field={'radio-test'}
          value='jambon'
          state={inputRadio}
          setter={setInputRadio}
        >
          Jambon
        </InputRadio>
        <InputRadio
          field={'radio-test'}
          value='pathe'
          state={inputRadio}
          setter={setInputRadio}
        >
          Pathé
        </InputRadio>
        <State>State:<span>' {inputRadio} '</span></State>
        <details>
          <Usage>Usage</Usage>
          <CodeBlock>
            {codeTest[4]}
          </CodeBlock>
        </details>
      </Container>

      {/* COMPONENT: InputRange */}
      <Container>
        <H3>InputRange</H3>
        <InputRange
          minValue={-400}
          maxValue={400}
          stateValue={inputRange}
          setter={setInputRange}
        />
        <State>State:<span>{inputRange}</span></State>
        <details>
          <Usage>Usage</Usage>
          <CodeBlock>
            {codeTest[5]}
          </CodeBlock>
        </details>
      </Container>

      {/* COMPONENT: InputDoubleRange */}
      <Container>
        <H3>InputDoubleRange</H3>
        <InputDoubleRange
          baseValueMin={-400}
          baseValueMax={400}
          stateValueMin={inputDoubleRangeMin}
          stateValueMax={inputDoubleRangeMax}
          minValueSetter={setInputDoubleRangeMin}
          maxValueSetter={setInputDoubleRangeMax}
        />
        <State>State:<span>[Min] {inputDoubleRangeMin} [Max] {inputDoubleRangeMax}</span></State>
        <details>
          <Usage>Usage</Usage>
          <CodeBlock>
            {codeTest[6]}
          </CodeBlock>
        </details>
      </Container>
      <Container>
        <H2>Download Library</H2>
        <details>
          <Usage>Inputs.tsx</Usage>
          <CodeBlock>
            {codeTest[7]}
          </CodeBlock>
        </details>
        <details>
          <Usage>Inputs.module.scss</Usage>
          <CodeBlock>
            {codeTest[8]}
          </CodeBlock>
        </details>
      </Container>
    </>
  );
}

const codeTest = [`~~~jsx
import { Button } from '...path-to-Inputs';

function MyComponent () {
  return(
    <>
      <Button onClick={handleClick}>
        Do stuff
      </Button>
      <Button href='https://go-somewhere.com'>
        Go somewhere
      </Button>
    </>
  )}`,
`~~~jsx
import { InputToggle } from '...path-to-Inputs';

function MyComponent () {
  const [inputToggle, setInputToggle] = React.useState(false);
  return(
    <>
      <InputToggle
        state={inputToggle}
        setter={setInputToggle}
        valueTrue={'Off'}
        valueFalse={'On'}
      />
    </>
  )}`,
`~~~jsx
import { InputText } from '...path-to-Inputs';
import { ReactComponent as SvgMail } from '...path-to-svg-file.svg';

function MyComponent () {
  const [inputText, setInputText] = React.useState('');
  return(
    <>
      <InputText
        setter={setInputText}
        label={'Email'}
        name={'mail'}
        value={inputText}
        placeholder={'jambon@gmail.com'}
      >
        <SvgMail/>
      </InputText>
    </>
  )}`,
`~~~jsx
import { InputCheckbox } from '...path-to-Inputs';

function MyComponent () {
  const [inputCheckbox, setInputCheckbox] = React.useState(true);
  return(
    <>
      <InputCheckbox
        setter={setInputCheckbox}
        state={inputCheckbox}
        name='newsletter'
      >
        Yes! Send me a 100 newsletter mails per day
      </InputCheckbox>
    </>
  )}`,
`~~~jsx
import { InputRadio } from '...path-to-Inputs';

function MyComponent () {
  const [inputRadio, setInputRadio] = React.useState('jambon');

  return(
    <>
      <InputRadio
        field={'radio-test'}
        value='jambon'
        state={inputRadio}
        setter={setInputRadio}
      >
        Jambon
      </InputRadio>
      <InputRadio
        field={'radio-test'}
        value='pathe'
        state={inputRadio}
        setter={setInputRadio}
      >
        Pathé
      </InputRadio>
    </>
  )}`,
`~~~jsx
import { InputRange } from '...path-to-Inputs';

function MyComponent () {
  const [inputRadio, setInputRadio] = React.useState('jambon');
  const [inputRange, setInputRange] = React.useState(0);

  return(
    <>
      <InputRange
        minValue={-400}
        maxValue={400}
        stateValue={inputRange}
        setter={setInputRange}
      />
    </>
  )}`,
`~~~jsx
import { InputDoubleRange } from '...path-to-Inputs';

function MyComponent () {
  const [inputDoubleRangeMin, setInputDoubleRangeMin] = React.useState(-400);
  const [inputDoubleRangeMax, setInputDoubleRangeMax] = React.useState(400);

  return(
    <>
      <InputDoubleRange
        baseValueMin={-400}
        baseValueMax={400}
        stateValueMin={inputDoubleRangeMin}
        stateValueMax={inputDoubleRangeMax}
        minValueSetter={setInputDoubleRangeMin}
        maxValueSetter={setInputDoubleRangeMax}
      />
    </>
  )}`,
`~~~tsx
import styles from './Inputs.module.scss';

// COMPONENT Button
type ButtonProps = {
  children: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  href?: string
}
/**
 * return either \<button\> or \<a\>
 * @param {string}    href      return \<a\> if used
 * @param {function}  onClick   onClick handler return \<button\> if used
 */
export function Button({ children, onClick, href }: ButtonProps)  {
  return(
    <>
      { href && <a className={styles.inputs__button} href={href}>{children}</a> }
      { (!href) && <button className={styles.inputs__button} onClick={onClick}> {children} </button> }
    </>
  );};


// COMPONENT InputToggle
type InputToggleProps = {
  state: boolean,
  setter: (arg: boolean) => void,
  valueTrue: string,
  valueFalse: string
}
export function InputToggle ({valueTrue, valueFalse, setter, state}: InputToggleProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.checked);
  };
  return(
    <div className={styles.inputs__toggle}>
      <span className={styles.false}>{valueFalse}</span>
      <input 
        type='checkbox' 
        onChange={handleOnChange} 
        value={valueFalse}
        checked={state}/>
      <label>
        <span className={styles.true}>{valueTrue}</span>
      </label>
    </div>
  );
}  


// COMPONENT InputText
type InputTextProps = {
  children?: React.ReactNode,
  setter: (arg: string) => void,
  name: string,
  value: string,
  placeholder?: string,
  password?: boolean,
  label?: string
} 
/**
 * return input type text | password
 * @param {HTMLSvgElement | HTMLImgElement} children  use this to pass an icon
 * @param {function}  setter        setter for onChange event
 * @param {string}    name          Input name field
 * @param {string}    value         Input value field
 * @param {string}    placeholder   Input placeholder field
 * @param {boolean}   password      return input[type='password'] if true
 * @param {string}    label         return \<label\> tag
 */
export function InputText({
  children, setter, name, value, 
  placeholder, password, label }: InputTextProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };
  return (
    <>
      { label && <label className={styles.inputs__text__label}>{label}</label>
      }
      <div className={styles.inputs__text}>
        <input 
          className={styles.inputs__text__input}
          type={password ? 'password' : 'text'}
          placeholder={placeholder ? placeholder : ''}
          name={name}
          onChange={handleOnChange}
          value={value}
        />
        {children}
      </div>
    </>
  );}


// COMPONENT InputCheckbox
type InputCheckboxProps = {
  children: React.ReactNode,
  setter: (arg: boolean) => void,
  state: boolean,
  name: string
}
/**
 * return input type checkbox
 * @param {function}  setter      setter for onChange event
 * @param {boolean}   isChecked   define default state
 * @param {string}    name        Input name field
 */
export function InputCheckbox ({name, children, state, setter}: InputCheckboxProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.checked);
  };
  return(
    <div className={styles.inputs__checkbox}>
      <label htmlFor={name} className={styles.inputs__checkbox__label}>
        {children}
      </label>
      <input 
        type='checkbox'
        value={name}
        id={name}
        onChange={handleOnChange}
        checked={state}
        className={styles.inputs__checkbox__input}
      />
    </div>
  );}


// COMPONENT InputRadio
type InputRadioProps = {
  children: React.ReactNode,
  setter: (arg: string) => void,
  value: string,
  field: string,
  state: any
}
/**
 * return input type radio
 * @param {function}  setter    setter for onChange event
 * @param {string}    field     radio fieldset name
 * @param {string}    value     radio value
 * @param {string}    state     state value container
 */
export function InputRadio ({children, state, value, setter, field}: InputRadioProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };
  return(
    <label className={styles.inputs__radio}>
      {children}
      <input
        type='radio'
        name={field}
        value={value}
        onChange={handleOnChange}
        checked={state === value}
        className={styles.inputs__radio__input}
      />
    </label>
  );
}


// COMPONENT InputRange
type InputRangeProps = {
  minValue: number,
  maxValue: number,
  stateValue: number,
  setter(value: number): void,
}
/**
 *@param {number}     minValue    minimal range value
 *@param {number}     maxValue    maximal range value
 *@param {number}     stateValue  state value container
 *@param {function}   setter      setter for onChange event
 */
export function InputRange({minValue, maxValue, stateValue, setter }: InputRangeProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(Number(event.target.value));
  };

  return (
    <div className={styles.inputs__range__container}>
      <div className={styles['inputs__range__container__slider--simple']}>
        <input
          type='range'
          min={minValue}
          max={maxValue}
          value={stateValue}
          onChange={handleOnChange}
          className={styles.inputs__range__container__input}
        />
      </div>
      <div>
        {stateValue}
      </div>
    </div>
  );
};


// COMPONENT InputDoubleRange
type InputDoubleRangeProps = {
  baseValueMin: number,
  baseValueMax: number ,
  stateValueMin: number,
  stateValueMax: number ,
  maxValueSetter(value: number): void,
  minValueSetter(value: number): void,
}
/**
 *@param {number}     baseValueMin    minimal range value
 *@param {number}     baseValueMax    maximal range value
 *@param {number}     stateValueMin   state minimal value container
 *@param {number}     stateValueMax   state maximal value container
 *@param {function}   maxValueSetter  setter for onChange event
 *@param {function}   minValueSetter  setter for onChange event
 */
export function InputDoubleRange({
  baseValueMin, baseValueMax, 
  stateValueMin, stateValueMax, 
  maxValueSetter, minValueSetter }: InputDoubleRangeProps) {
  const handleMinThumb = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), stateValueMax - 1);
    minValueSetter(value);
  };
  const handleMaxThumb = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), stateValueMin + 1);
    maxValueSetter(value);
  };

  return (
    <div className={styles.inputs__range__container}>
      <div>{stateValueMin}</div>
      <div className={styles.inputs__range__container__slider}>
        <input
          type='range'
          min={baseValueMin}
          max={baseValueMax}
          value={stateValueMin}
          onChange={handleMinThumb}
        />
        <input
          type='range'
          min={baseValueMin}
          max={baseValueMax}
          value={stateValueMax}
          onChange={handleMaxThumb}
        />
      </div>
      <div>{stateValueMax}</div>
    </div>
  );
};
`,
`~~~scss
.inputs {
  // COMPONENT Button
  $button-color: white;
  $button-width: fit-content;
  $button-padding: 0.5em 1.0em;
  $button-border: 1px $button-color solid;
  $button-radius: 3px;
  &__button{
    width: $button-width;
    padding: $button-padding;
    border: $button-border;
    border-radius: $button-radius;
    cursor: pointer;
    user-select: none;
  }

// COMPONENT InputToggle
$toggle-color: white;
$toggle-back-color: rgba(white, .25);
$toggle-button-color: grey;
$toggle-font-size: .7rem;
$toggle-font-weight: 600;
$toggle-letter-spacing: .05rem;
$toggle-radius: 50px;
$toggle-width: 90px;
$toggle-padding: .4rem 0;
$toggle-transition: transform 200ms;
&__toggle {
  position: relative;
  background: $toggle-back-color;
  border-radius: $toggle-radius;
  font-size: $toggle-font-size;
  font-weight: $toggle-font-weight;
  letter-spacing: $toggle-letter-spacing;
  text-transform: uppercase;
  text-align: center;
  width: $toggle-width;
  padding-right: calc($toggle-width / 2);
  & span.false {
    position: absolute;
    top: 0; bottom: 0; right: 0;
    width: calc($toggle-width / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    pointer-events: none;
  }
  & input[type='checkbox'] {
    cursor: pointer;
    position: absolute;
    top: 0; left: 0; bottom: 0;
    width: 100%; height: 100%;
    opacity: 0;
    z-index: 2;
    &:checked + label:before {
      transform: translateX(calc($toggle-width / 2));
      transition: $toggle-transition;
    }
    & + label {
      position: relative;
      padding: $toggle-padding;
      display: block;
      user-select: none;
      pointer-events: none;
      &:before {
        content: '';
        background: $toggle-button-color;
        height: 100%; width: 100%;
        position: absolute;
        left: 0; top: 0;
        border-radius: $toggle-radius;
        transform: translateX(0);
        transition: $toggle-transition;
      }
      span.true {
        position: relative;
      }}}}

  // COMPONENT InputText
  $text-width: fit-content;
  $text-gap: 1rem;
  $text-color: white;
  $text-ft-family: inherit;
  $text-ft-size: inherit;
  $text-ft-weight: inherit;
  $text-ft-style: inherit;
  $text-padding: 0.5em 1.0em;
  $text-border: 1px solid white;
  $text-border-radius: 3px;
  $text-placeholder-color: rgba($text-color, .25);
  $text-placeholder-ft-family: $text-ft-family;
  $text-placeholder-ft-size: $text-ft-size;
  $text-placeholder-ft-weight: $text-ft-weight;
  $text-placeholder-ft-style: $text-ft-style;
  $text-label-margin: 0 0 .3rem .3rem;
  $text-label-ft-family: inherit;
  $text-label-ft-size: .8rem;
  $text-label-ft-weight: inherit;
  $text-label-ft-style: inherit;
  &__text {
    padding: $text-padding;
    border: $text-border;
    border-radius: $text-border-radius;
    width: $text-width;
    position: relative;
    box-sizing: border-box;
    display: flex;
    gap: $text-gap;
    flex-direction: row-reverse;
    align-items: center;
    & svg, img {
      fill: rgba($color: $text-placeholder-color, $alpha: .45);
    }
    &__input {
      color: $text-color;
      font-family: $text-ft-family;
      font-size: $text-ft-size;
      font-weight: $text-ft-weight;
      font-style: $text-ft-style;
      position: relative;
      box-sizing: border-box;
      &::placeholder {
        color: $text-placeholder-color;
        font-family: $text-placeholder-ft-family;
        font-size: $text-placeholder-ft-size;
        font-weight: $text-placeholder-ft-weight;
        font-style: $text-placeholder-ft-style;
      }
      &::-webkit-input-placeholder {
        color: $text-placeholder-color;
        font-family: $text-placeholder-ft-family;
        font-size: $text-placeholder-ft-size;
        font-weight: $text-placeholder-ft-weight;
        font-style: $text-placeholder-ft-style;
      }
      &::-moz-placeholder {
        color: $text-placeholder-color;
        font-family: $text-placeholder-ft-family;
        font-size: $text-placeholder-ft-size;
        font-weight: $text-placeholder-ft-weight;
        font-style: $text-placeholder-ft-style;
      }
      &:-moz-placeholder {
        color: $text-placeholder-color;
        font-family: $text-placeholder-ft-family;
        font-size: $text-placeholder-ft-size;
        font-weight: $text-placeholder-ft-weight;
        font-style: $text-placeholder-ft-style;
      }
      &:-ms-input-placeholder {
        color: $text-placeholder-color;
        font-family: $text-placeholder-ft-family;
        font-size: $text-placeholder-ft-size;
        font-weight: $text-placeholder-ft-weight;
        font-style: $text-placeholder-ft-style;
      }}
    &__label {
      display: block;
      margin: $text-label-margin;
      font-family: $text-label-ft-family;
      font-size: $text-label-ft-size;
      font-weight: $text-label-ft-weight;
      font-style: $text-label-ft-style;
    }
  }

  // COMPONENT InputCheckbox
  $checkbox-size: 12px;
  $checkbox-borders: 1px solid white;
  $checkbox-radius: 2px;
  $checkbox-gap: 1.5rem;
  $checkbox-background-color: none;
  $checkbox-color: white;
  $checkbox-clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  $checkbox-clip-path-padding: 3px;
  $checkbox-transition: 120ms transform ease-in-out;
  &__checkbox {
    width: fit-content;
    display: flex;
    gap: $checkbox-gap;
    &__input {
      -webkit-appearance: none;
      appearance: none;
      place-content: center;
      margin: 0;
      background-color: $checkbox-background-color;
      border: $checkbox-borders;
      border-radius: $checkbox-radius;
      padding: $checkbox-clip-path-padding;
      display: grid;
      width: $checkbox-size;
      height: $checkbox-size;
      font: inherit;
      cursor: pointer;
      &::before {
        content: '';
        width: $checkbox-size;
        height: $checkbox-size;
        transform: scale(0);
        transition: $checkbox-transition;
        box-shadow: inset $checkbox-size $checkbox-size $checkbox-color;
        -webkit-clip-path: $checkbox-clip-path;
        clip-path: $checkbox-clip-path;
      }
      &:checked::before {
        transform: scale(1);
      }}
    &__label {
      width: 100%;
      user-select: none;
      cursor: pointer;
    }
  }

  // COMPONENT InputRadio
  $radio-size: 1.5em;
  $radio-input-color: white;
  $radio-input-clip-path: polygon(37% 63%, 12% 32%, 1% 61%, 38% 100%, 100% 24%, 88% 0);
  &__radio {
    display: flex;
    width: fit-content;
    align-items: center;
    cursor: pointer;
    &__input {
      -webkit-appearance: none;
      appearance: none;
      place-content: center;
      display: grid;
      width: $radio-size;
      height: $radio-size;
      &::before {
        content: '';
        width: calc($radio-size * 0.65);
        height: calc($radio-size * 0.65);
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        margin-left: 2.5rem;
        box-shadow: inset $radio-size $radio-size $radio-input-color;
        -webkit-clip-path: $radio-input-clip-path;
        clip-path: $radio-input-clip-path;
      }
      &:checked::before {
        transform: scale(1);
      }
    }
  }

  // COMPONENT InputRange
  $range-gap: 1rem;
  $range-slide-width: 100%;
  $range-slide-thickness: 8px;
  $range-slide-radius: 50px;
  $range-slide-color: rgba(green, 0.3);
  $range-slide-padding: 3rem;
  $range-thumb-size: 1em;
  $range-thumb-radius: 100%;
  $range-thumb-color: green;
  &__range {
    &__container {
      position: relative;
      display: flex;
      gap: $range-gap;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__slider {
        position: absolute;
        right: $range-slide-padding;
        left: $range-slide-padding;
        &--simple {
          position: absolute;
          left: $range-slide-padding;
          right: 0;
        }}
        // Reset
        & input[type='range'] {
          &::-webkit-slider-thumb {-webkit-appearance: none; -webkit-tap-highlight-color: transparent; border: none; cursor: pointer;}
          &::-webkit-slider-runnable-track {border: none; cursor: pointer;}
          &::-moz-range-track {border: none; cursor: pointer;}
          &::-moz-range-thumb {box-shadow: none; border: none; background: none; cursor: pointer;}
          &::-ms-track {background: transparent; border-color: transparent; color: transparent; cursor: pointer;}
          &::-ms-fill-lower {box-shadow: none; border: none;}
          &::-ms-fill-upper {box-shadow: none; border: none;}
          &::-ms-thumb {box-shadow: none; border: none;}
          &:focus {outline: none;}}
        & input[type='range'] {
          position: absolute;
          height: 0;
          width: $range-slide-width;
          outline: none;
          pointer-events: none;
          &::-webkit-slider-thumb {
            background-color: $range-thumb-color;
            border-radius: $range-thumb-radius;
            height: $range-thumb-size;
            width: $range-thumb-size;
            pointer-events: all;
            position: relative;
            z-index: 5;
            margin-left: calc($range-thumb-size / 2);
          }
          // FIREFOX
          &::-moz-range-thumb {
            background-color: $range-thumb-color;
            pointer-events: all;
          }
          &::-moz-range-track {
            height: $range-slide-thickness;
            border-radius: $range-slide-radius;
          }
          // WEBKIT
          &::-webkit-slider-thumb {
            margin-top: - calc($range-slide-thickness / 2);
            pointer-events: all;
          }
          &::-webkit-slider-runnable-track {
            height: $range-slide-thickness;
            background: $range-slide-color;
            border-radius: $range-slide-radius;
          }}
          & input[type='range']:nth-child(1) {
            /* FIREFOX Put slider color on bottom */ 
            &::-moz-range-track {
              background: $range-slide-color;
            }
            &::-webkit-slider-thumb {
            /* CHROME Prevent thumbs to merge  */ 
              margin-left: - calc($range-thumb-size / 3);
            }}
    }}}
`];

export default LibInputs;