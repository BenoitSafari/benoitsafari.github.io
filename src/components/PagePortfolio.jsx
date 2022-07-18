import { ReactComponent as SVGCinevoraces } from '@svg/logo_cinevoraces.svg';
import { motion } from 'framer-motion';
import { useLang } from '@hooks/useLang';
import '@styles/PagePortfolio.scss';

const transition = {delay: .5, duration: .5, ease: 'backOut'};
const pageAnim = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0},
  transition: {duration: 0.5}
};
const imgAnim = {
  initial: {opacity: 0},
  animate: {opacity: 1, transition: {delay: .5}},
};
const svgAnim = {
  initial:  {opacity: 0, x: '100%'},
  animate:  {opacity: 1, x: '0%', transition: {...transition}},
  exit: {opacity: 0,  x: '100%', transition: {ease: 'backIn'}},
};
const textAnim = {
  initial:  {opacity: 0, x: '100%'},
  animate:  {opacity: 1, x: '0%', transition: {...transition}},
  exit: {opacity: 0,  x: '100%', transition: {ease: 'backIn'}},
};

const data = {
  title: {fr: 'Mon Portfolio', en: 'My Book'},
  text1: {
    fr: 'C\'est un ciné-club distantiel monté par Julien GOLETTO en début de pandémie. Le principe : tous les lundis, un membre propose le visionnage du film de la semaine. On le regarde, on échange, on debrief!',
    en: 'At the beginning of the pandemic, Julien GOLETTO created a movie club on discord. Every week, one member proposes a movie for the comunity to watch, then everyone can talk and give there opinion.'
  },
  text2: {
    fr: <>Cinévoraces est une web-app réalisée en équipe à l'issue de ma formation <strong>Développeur Web & Web Mobile</strong>.</>,
    en: <>The Cinévoraces web-app is a student project realised to get the "<strong>Développeur Web & Web Mobile</strong>" title.</>
  },
  link: {
    fr: 'Visiter Cinévoraces',
    en: 'Checkout Cinévoraces'
  }
};

function Portfolio() {
  const {lang} = useLang();
  return(
    <motion.main {...pageAnim} className='book'>
      <section>
        <h2>{data.title[lang]}</h2>
        <div className='book__app'>
          <motion.div  {...textAnim} className='book__links book__links--mobile'>
            <a target='_blank' rel='noreferrer' href='https://cinevoraces-front.herokuapp.com/'>{data.link[lang]}</a>
          </motion.div>
          <motion.img {...imgAnim} src='img/mockups_cinevoraces.png' alt='Screenshots du site web'/>
          <div className='book__stacks'>
            <motion.div {...svgAnim}>
              <SVGCinevoraces/>
            </motion.div>
            <motion.p {...textAnim}>{data.text1[lang]}</motion.p>
            <motion.p {...textAnim}>{data.text2[lang]}</motion.p>
            <motion.div  {...textAnim} className='book__links'>
              <a target='_blank' rel='noreferrer' href='https://cinevoraces-front.herokuapp.com/'>{data.link[lang]}</a>
            </motion.div>
          </div>
        </div>
      </section>



    </motion.main>
  );
}

export default Portfolio;