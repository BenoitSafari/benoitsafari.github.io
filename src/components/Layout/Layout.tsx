import './Layout.sass';

function Header() {
  return null;
}

function Footer() {
  return null;
}

function Layout({children}: Layout) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;