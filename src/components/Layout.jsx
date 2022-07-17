import { ReactComponent as SvgMenu } from '@svg/ico_menu.svg';
import { Link, useLocation } from 'react-router-dom';
import './Layout.scss';

const transition = { duration: .5 }; 
const headerVariants = {
  hidden: { y: -90,     transition },
  show:   { y:   0,     transition },
};
const footerVariants = {
  hidden: { opacity: 0, transition },
  show:   { opacity: 1, transition },
};

function Header({ isDisplayed }) {
  const handleNavMenu = () => {
    const backNavMenu = document.querySelector('#mobile-drop-down-back');
    const navMenu     = document.querySelector('#mobile-nav-menu');
    backNavMenu.classList.toggle('mobile-drop-down-back--is-closed');
    navMenu.classList.toggle('mobile-nav-menu--is-open');
  };
  

  return(
    <>
      <header 
        className='header'>
        <div className='header__container'>
          <Link to='/index' className='header__title'>
            <img src='/img/logo.svg' alt='' />
            <span>Benoit Safari</span>
          </Link>
          <nav className='header__nav'>
            <button 
              onClick={handleNavMenu}
              className='nav-menu'>
              <SvgMenu />
            </button>  
            <Link to='/index' className='header__link'>Index</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;