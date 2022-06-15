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

type InputTextProps = {
  children?: React.ReactNode,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  name: string,
  value: string,
  placeholder?: string,
  password?: boolean,
  label?: string
} 
// COMPONENT InputText
/**
 * return input type text
 * @param {HTMLSvgElement | HTMLImgElement} children  use this to pass an icon
 * @param {function}  onChange      handler for onChange event
 * @param {string}    name          Input name field
 * @param {string}    value         Input value field
 * @param {string}    placeholder   Input placeholder field
 * @param {boolean}   password      return input[type='password'] if true
 * @param {string}    label         return \<label\> tag
 */
export function InputText({
  children, onChange, name, value, 
  placeholder, password, label }: InputTextProps) {
  return (
    <>
      { label && <label className={styles.inputs__text__label}>{label}</label>
      }
      <div className={styles.inputs__text}>
        <input 
          className={children ? styles['inputs__text__input--has-icon'] : styles['inputs__text__input']}
          type={password ? 'password' : 'text'}
          placeholder={placeholder ? placeholder : ''}
          name={name}
          onChange={onChange}
          value={value}
        />
        {children}
      </div>
    </>
  );
}