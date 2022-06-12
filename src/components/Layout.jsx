import { ReactComponent as SvgLinkedin } from '@svg/ico_linkedin.svg';
import { ReactComponent as SvgGithub } from '@svg/ico_github.svg';
import { ReactComponent as SvgMail } from '@svg/ico_mail.svg';
import { ReactComponent as SvgMenu } from '@svg/ico_menu.svg';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState  } from 'react';
import { useModal } from '@hooks/useModal';
import { useLang } from '@hooks/useLang';
import { InputToggle } from '@components/Input';
import ContactForm from '@components/ContactForm';
import NavMenu from '@components/NavMenu';
import './Layout.scss';

// Data
const links = {
  linkedin: 'https://www.linkedin.com/in/gregory-michalak-b1613b22a/',
  github: 'https://github.com/BenoitSafari',
  mail: 'mailto:benoit.safari.officiel@gmail.com'
};
// Animations Setup
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
  const { lang } = useLang();
  const { setModal } = useModal();
  const handleModal = () => {
    setModal(<ContactForm/>);
  };
  const handleNavMenu = () => {
    const backNavMenu = document.querySelector('#mobile-drop-down-back');
    const navMenu     = document.querySelector('#mobile-nav-menu');
    backNavMenu.classList.toggle('mobile-drop-down-back--is-closed');
    navMenu.classList.toggle('mobile-nav-menu--is-open');
  };

  return(
    <>
      { isDisplayed &&
        <motion.header 
          variants={headerVariants}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='header'>
          <div className='header__container'>
            <Link to='/index' className='header__title'>
              <img src='/img/logo.svg' alt='' />
              <span>Benoit Safari</span>
            </Link>
            <NavMenu
              handler={handleNavMenu}
              contactHandler={handleModal}
            />
            <nav className='header__nav'>
              <button 
                onClick={handleNavMenu}
                className='nav-menu'>
                <SvgMenu />
              </button>  
              <Link to='/index' className='header__link'>Index</Link>
              <Link to='/about' className='header__link'>
                {(lang === 'fr') && 'À propos'}
                {(lang === 'en') && 'About'}
              </Link>
              <button onClick={handleModal} className='header__link'>
                {(lang === 'fr') && 'Me contacter'}
                {(lang === 'en') && 'Contact me'}
              </button>
              <InputToggle/>
            </nav>
          </div>
        </motion.header>
      }
    </>
  );
}

function Footer({ isDisplayed }) {
  const { setModal } = useModal();
  const handleModal = () => {
    setModal(<ContactForm/>);
  };
  return(
    <>
      { isDisplayed &&
        <motion.footer 
          variants={footerVariants}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='footer'>
          <nav className='footer__nav'>
            <a target="_blank" rel='noreferrer'
              className='footer__link'
              href={links.linkedin}>
              <SvgLinkedin/>
            </a>
            <a target="_blank" rel='noreferrer'
              className='footer__link'
              href={links.github}>
              <SvgGithub/>
            </a>
            <button
              className='footer__link'
              onClick={handleModal}>
              <SvgMail/>
            </button>
          </nav>
          <div className='footer__copyright'>Benoit Safari ©</div>
        </motion.footer>
      }
    </>
  );
}

function Layout({ children }) {
  // Prevent Layout from showing on Home Page
  const { pathname } = useLocation();
  const [ layoutIsDisplayed, setLayoutIsDisplayed ] = useState(false);
  useEffect(() => {
    (pathname !== '/') && setLayoutIsDisplayed(true);
    (pathname === '/') && setLayoutIsDisplayed(false);
  }, [pathname]);

  return (
    <>
      <Header isDisplayed={layoutIsDisplayed}/>
      {children}
      <Footer isDisplayed={layoutIsDisplayed}/>
    </>
  );
}

export default Layout;