import './Input.scss';

/**
 * return input type text
 * @param {HTMLSvgElement | HTMLImgElement} children  use this to pass an icon
 * @param {function}  onChange      handler for onChange event
 * @param {string}    name          Input name field
 * @param {string}    value         Input value field
 * @param {string}    placeholder   Input placeholder field
 * @param {string}    type          Input type field
 * @param {string}    label         return \<label\> tag
 * @param {string}    styles        'rounded' to get rounded borders
 */
function InputText({
  children, 
  styles, 
  name, 
  placeholder, 
  onChange, 
  value, 
  type,
  label }) {
  const stringResolver = (searchedString) => {
    if (RegExp(`\\b${searchedString}\\b`).test(styles)) {
      return searchedString;
    } else {
      return false;
    }};
    
  // Define style
  const className = ['lib__input-text'];
  // Add new style state below
  // Add class modifier in 'Input.scss' like so '.lib__input-button--MyStyle'
  (stringResolver  ('rounded')) && className.push(`${className[0]}--rounded`);

  return (
    <>
      { label &&
        <label className='lib__input-text__label'>Votre nom</label>
      }
      <div className={className.join(' ')}>
        <input 
          className={children && 'lib__input-text--has-icon'}
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        />
        {children}
      </div>
    </>
  );
}

export {InputText};