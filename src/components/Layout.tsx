import styled from 'styled-components';

type LayoutProps = {
  children?: React.ReactNode,  
}

const Container = styled.div`
    width: fit-content;
    margin: 2rem auto;
    display: flex; 
    flex-direction: column;
    `;

function Layout ({children}: LayoutProps) {
  return(
    <Container>
      {children}
    </Container>
  );
}

// const links = {
//   linkedin: 'https://www.linkedin.com/in/gregory-michalak-b1613b22a/',
//   github: 'https://github.com/BenoitSafari',
// };

export default Layout;