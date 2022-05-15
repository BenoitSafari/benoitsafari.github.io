import { Link } from 'react-router-dom';
import './Layout.scss';

function Header() {
  return(
    <header className='header'>
      <div className='header__container'>
        <Link 
          to='/' 
          className='header__title'>
          <img src='/img/logo.svg' alt='' />
          <span>Benoit Safari</span>
        </Link>
        <nav className='header__nav'>  
          <Link 
            to='/'
            className='link'>
            Accueil
          </Link>
          <Link 
            to='/'
            className='link'>
            Blog
          </Link>
          <Link 
            to='/'
            className='link'>
            Me contacter
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return null;
}

function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;