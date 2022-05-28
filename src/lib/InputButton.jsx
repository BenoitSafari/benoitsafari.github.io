import './Input.scss';

/**
 * return either \<button\> or \<a\>
 * @param {string}    href      return \<a\> if used
 * @param {function}  onClick   onClick handler
 * @param {string}    styles    'fill' | 'rounded' (joinded with '-')
 */
function Button({ children, styles, onClick, href })  {
  const styleResolver = (searchedString) => {
    if (RegExp(`\\b${searchedString}\\b`).test(styles)) {
      return searchedString;
    } else {
      return false;
    }};
    
  const className = ['lib__input-button'];
  // Add new style state below
  // Add class modifier in 'Input.scss' like so '.lib__input-button--MyStyle'
  (styleResolver  ('fill'))    && className.push(`${className[0]}--fill`);
  (!styleResolver ('fill'))    && className.push(`${className[0]}--empty`);
  (styleResolver  ('rounded')) && className.push(`${className[0]}--rounded`);
  return(
    <>
      { href &&
        <a 
          className={className.join(' ')}
          href={href}
          onClick={onClick}         
        >
          {children}
        </a>
      }
      { (!href) &&
        <button
          className={className.join(' ')}
          onClick={onClick}
        >
          {children}
        </button>
      }
    </>
  );};

export { Button };