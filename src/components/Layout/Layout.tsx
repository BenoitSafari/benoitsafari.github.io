import classNames  from 'classnames';
import LogoNeon from 'components/Logo/LogoNeon';
import './Layout.scss';

function Header() {
  return(
    <header 
      className={classNames('container', 'header')}>
      <LogoNeon/>
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