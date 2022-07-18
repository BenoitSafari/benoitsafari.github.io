import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLang } from '@hooks/useLang';
import Neon from './Neon';
import Footer from './Footer';
import '@styles/PageHome.scss';

const exit = {exit: {opacity: 0, x: '-100%', transition: {duration: .3}}};
const transition = {delay: .5, duration: .5, ease: 'backOut'};
const pageAnim = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0, transition: {delay: .5}},
  transition: {duration: 0.5}
};
const navAnim = {
  initial:  {opacity: 0, x: '100%'},
  animate:  {opacity: 1, x: '0%', transition: {...transition}}, ...exit,
  whileTap: {scale: .8, transition: {duration: .1}},
};
const footerAnim = {
  initial: {opacity: 0, x: '100%'},
  animate: {opacity: 1, x: '0%', transition: {...transition, delay: .9}}, ...exit
};

const data = {
  navMenu: [
    {fr: 'À propos', en: 'About', to: '/about'},
    {fr: 'Portfolio',en: 'Book', to: '/'}
  ]};

function Home() {
  const {lang} = useLang();

  return(
    <motion.main {...pageAnim} className='home'>
      <Neon/>
      <nav>
        {data.navMenu.map((link, i) => (
          <Link to={link.to}>
            <motion.div key={i} {...navAnim}>
              {link[lang]}
            </motion.div>
          </Link>))}
      </nav>
      <motion.div {...footerAnim}>
        <Footer/>
      </motion.div>
    </motion.main>
  );
}



export default Home;