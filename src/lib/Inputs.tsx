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
  isChecked: boolean,
  name: string
}
/**
 * return input type checkbox
 * @param {function}  setter      setter for onChange event
 * @param {boolean}   isChecked   define default state
 * @param {string}    name        Input name field
 */
export function InputCheckbox ({name, children, isChecked, setter}: InputCheckboxProps) {
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
        checked={isChecked}
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
 * @param {function}  setter        setter for onChange event
 * @param {string}    field               radio fieldset name
 * @param {string}    value               radio value
 * @param {string}    state               state value container
 */
export function InputRadio ({children, state, value, setter, field}: InputRadioProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };
  return(
    <>
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
    </>
  );
}