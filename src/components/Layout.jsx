import { ReactComponent as SvgLinkedin } from '@svg/ico_linkedin.svg';
import { ReactComponent as SvgGithub } from '@svg/ico_github.svg';
import { ReactComponent as SvgMail } from '@svg/ico_mail.svg';
import { ReactComponent as SvgSearch } from '@svg/ico_searchbar.svg';

import { Link } from 'react-router-dom';
import { SearchBar } from '@lib/Input';
import './Layout.scss';

const links = {
  linkedin: 'https://www.linkedin.com/in/gregory-michalak-b1613b22a/',
  github: 'https://github.com/BenoitSafari',
  mail: 'mailto:benoit.safari.officiel@gmail.com'
};

function Header() {
  return(
    <header className='header'>
      <div className='header__container'>
        <Link to='/' className='header__title'>
          <img src='/img/logo.svg' alt='' />
          <span>Benoit Safari</span>
        </Link>
        <div className='header__search'>
          <SearchBar
            styles='rounded'
            placeholder='Rechercher un article...'
          ><SvgSearch/>
          </SearchBar>
        </div>
        <nav className='header__nav'>
          <button className='nav-menu'>
            {/* TODO: Create functionnal drop down menu */}
            <img src='/img/ico/ico_menu.svg' alt='' />
          </button>  
          <Link to='/index' className='header__link'>Index</Link>
          <Link to='/contact' className='header__link'>Me contacter</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return(
    <footer className='footer'>
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
    </footer>
  );
}

function Layout({ children }) {
  return (
    <>
      <Header/>
      <main className='content'>
        {children}
        <Footer/>
	    </main>	
    </>
  );
}

export default Layout;