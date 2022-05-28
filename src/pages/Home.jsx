import AnimatedNeon from '@lib/AnimatedNeon';
import { ReactComponent as SvgGithub } from '@svg/ico_github.svg';
import { ReactComponent as SvgLinkedin } from '@svg/ico_linkedin.svg';
import { ReactComponent as SvgMail } from '@svg/ico_mail.svg';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  return(
    <section className='home'>
      <div className='home__neon-container'>
        <Link
          to={'/index'}>
          <AnimatedNeon/>
        </Link>
      </div>
      <nav className='home__nav'>
        <div className='home__nav__links'>
          <a
            href='https://github.com/BenoitSafari' 
            target='_blank'
            rel='noreferrer'>
            <SvgGithub/>
          </a>
          <a 
            href='https://www.linkedin.com/in/gregory-michalak-b1613b22a/' 
            target='_blank'
            rel='noreferrer'>
            <SvgLinkedin/>
          </a>
          <a 
            href='mailto:benoit.safari.officiel@gmail.com' 
            target='_blank'
            rel='noreferrer'>
            <SvgMail/>
          </a>
        </div>
        <div className='home__copyright'>Benoit Safari ©</div>
      </nav>
    </section>
  );
}

export default Home;