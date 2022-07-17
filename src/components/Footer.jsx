import { ReactComponent as SvgGithub } from '@svg/ico_github.svg';
import { ReactComponent as SvgLinkedin } from '@svg/ico_linkedin.svg';
import { ReactComponent as SvgMail } from '@svg/ico_mail.svg';
import '@styles/Footer.scss';

function Footer() {
  const copyright = 'Benoit Safari ©';
  const target    = {target: '_blank'};
  const rel       = {rel: 'noreferrer'};
  const data = [
    { 
      props: {
        target,
        rel,
        href: 'https://github.com/BenoitSafari'
      },
      svg: <SvgGithub/>
    },
    { 
      props: {
        target,
        rel,
        href: 'https://www.linkedin.com/in/gregory-michalak'
      },
      svg: <SvgLinkedin/>
    },
  ];
  
  return (
    <footer className='footer'>
      <div className='footer__links'>
        {data.map(({props, svg}, i) => (
          <a key={i} {...props}>{svg}</a>))}
        <a><SvgMail/></a>
      </div>
      <div className='footer__copyright'>{copyright}</div>
    </footer>
  );
}

export default Footer;