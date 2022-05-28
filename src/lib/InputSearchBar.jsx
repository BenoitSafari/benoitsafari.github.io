import './Input.scss';

/**
 * return input type text
 * @param {HTMLSvgElement | HTMLImgElement} children  use this to pass an icon
 * @param {function}  onChange    handler for onChange event
 * @param {string}    name        Input name field
 * @param {string}    value       Input value field
 * @param {string}    placeholder Input placeholder field
 * @param {string}    styles      'rounded' to get rounded borders
 */
function SearchBar({children, styles, name, placeholder, onChange, value}) {
  const styleResolver = (searchedString) => {
    if (RegExp(`\\b${searchedString}\\b`).test(styles)) {
      return searchedString;
    } else {
      return false;
    }};
    
  const className = ['lib__input-search-bar'];
  // Add new style state below
  // Add class modifier in 'Input.scss' like so '.lib__input-button--MyStyle'
  (styleResolver  ('rounded')) && className.push(`${className[0]}--rounded`);

  return (
    <div className={className.join(' ')}>
      <input 
        className={children && 'search-bar-has-icon'}
        type='text'
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      {children}
    </div>
  );
}

export { SearchBar };