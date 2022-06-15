type LayoutProps = {
  children?: React.ReactNode,  
}

function Layout ({children}: LayoutProps) {
  return(
    <>
      {children}
    </>
  );
}

const links = {
  linkedin: 'https://www.linkedin.com/in/gregory-michalak-b1613b22a/',
  github: 'https://github.com/BenoitSafari',
};

export default Layout;