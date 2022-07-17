import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLang } from '@hooks/useLang';
import Neon from './Neon';
import Footer from './Footer';
import '@styles/PageHome.scss';

const transition = { duration: 0.5, staggerChildren: 2 }; 
const variants = {
  hidden: { opacity: 0, transition },
  show:   { opacity: 1, transition },
};
const data = {
  navMenu: [
    {fr: 'À propos', en: 'About', to: '/about'},
    {fr: 'Portfolio',en: 'Book', to: '/'}
  ]};

function Home() {
  const {lang} = useLang();

  return(
    <motion.main 
      variants={variants}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='home'>
      <Neon/>
      <nav>
        {data.navMenu.map((link, i) => (
          <Link key={i} to={link.to}>{link[lang]}</Link>))}
      </nav>
      <Footer/>
    </motion.main>
  );
}



export default Home;