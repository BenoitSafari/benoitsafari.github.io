import { ReactComponent as SvgGithub } from '@svg/ico_github.svg';
import { ReactComponent as SvgLinkedin } from '@svg/ico_linkedin.svg';
import { ReactComponent as SvgMail } from '@svg/ico_mail.svg';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import '@styles/Footer.scss';

const animations = {
  whileHover: {scale: 1.2, transition: {duration: .1}},
  whileTap:   {scale: .8, transition: {duration: .1}},
};

function Footer() {
  const copyright = 'Benoit Safari ©';
  const target    = {target: '_blank'};
  const rel       = {rel: 'noreferrer'};
  // const contactData = {...animations, to: '/contact'};
  const data = [
    { 
      props: {
        ...animations,
        target,
        rel,
        href: 'https://github.com/BenoitSafari'
      },
      svg: <SvgGithub/>
    },
    { 
      props: {
        ...animations,
        target,
        rel,
        href: 'https://www.linkedin.com/in/gregory-michalak'
      },
      svg: <SvgLinkedin/>
    },
    { 
      props: {
        ...animations,
        target,
        rel,
        href: 'mailto:benoit.safari.officiel@gmail.com'
      },
      svg: <SvgMail/>
    },
  ];
  
  return (
    <footer className='footer'>
      <div className='footer__links'>
        {data.map(({props, svg}, i) => (
          <motion.a key={i} {...props}>{svg}</motion.a>))}
        {/* <Link {...contactData}>
          <motion.div {...animations}><SvgMail/></motion.div>
        </Link> */}
      </div>
      <div className='footer__copyright'>{copyright}</div>
    </footer>
  );
}

export default Footer;