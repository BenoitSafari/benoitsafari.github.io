import { ReactComponent as SvgLinkedin } from '@svg/ico_linkedin.svg';
import { ReactComponent as SvgGithub } from '@svg/ico_github.svg';
import { ReactComponent as SvgMail } from '@svg/ico_mail.svg';
// import { ReactComponent as SvgSearch } from '@svg/ico_searchbar.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState  } from 'react';
import { useModal } from '@hooks/useModal';
import ContactForm from '@components/ContactForm';
// import { SearchBar } from '@components/Input';
import './Layout.scss';

// TODO: Implement searchbar.
// TODO: Create functionnal drop down menu for mobile.

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
  const { setModal } = useModal();
  const handleModal = () => {
    setModal(<ContactForm/>);
  };

  return(
    <AnimatePresence exitBeforeEnter>
      { isDisplayed &&
        <motion.header 
          variants={headerVariants}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='header'>
          <div className='header__container'>
            <Link to='/' className='header__title'>
              <img src='/img/logo.svg' alt='' />
              <span>Benoit Safari</span>
            </Link>
            {/* <div className='header__search'>
              <SearchBar
                styles='rounded'
                placeholder='Rechercher un article...'
              ><SvgSearch/>
              </SearchBar>
            </div> */}
            <nav className='header__nav'>
              <button className='nav-menu'>
                <img src='/img/ico/ico_menu.svg' alt='' />
              </button>  
              <Link to='/index' className='header__link'>Index</Link>
              <button 
                onClick={handleModal} 
                className='header__link'>
                Me contacter
              </button>
            </nav>
          </div>
        </motion.header>
      }
    </AnimatePresence>
  );
}

function Footer({ isDisplayed }) {
  return(
    <AnimatePresence exitBeforeEnter>
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
            <a target="_blank" rel='noreferrer'
              className='footer__link'
              href={links.mail}>
              <SvgMail/>
            </a>
          </nav>
          <div className='footer__copyright'>Benoit Safari ©</div>
        </motion.footer>
      }
    </AnimatePresence>
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