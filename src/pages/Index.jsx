import { ReactComponent as SvgSearch } from '@svg/ico_input-searchbar.svg';
import { InputText } from '@components/Input';
import { motion } from 'framer-motion';

import './Index.scss';

const pageTransition = { duration: .5 }; 
const IndexVariants = {
  hidden:       { opacity: 0, pageTransition },
  show:         { opacity: 1, pageTransition },
  titleHidden:  { x: '45%', transition: { duration: .5}},
  titleShow:    { x: '0%',  transition: { duration: .5, ease: 'backOut'}},
  subTitleShow: { x: '0%',  transition: { duration: .6, ease: 'backOut'}},
};

function Index() {
  return(
    <motion.main 
      variants={IndexVariants}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='index'>
      <section className='index__head'>
        <motion.h1 
          variants={IndexVariants}
          initial='titleHidden'
          animate='titleShow'
          className='index__head__title'>
          Vous êtes sur <span>l'index</span>,
        </motion.h1>
        <motion.div
          variants={IndexVariants}
          initial='titleHidden'
          animate='subTitleShow'
          className='index__head__sub'>
          Des articles sur mes explorations, essais et projets.
        </motion.div>
      </section>
      <section className='index__articles'>
        <div className='index__articles__search'>
          <InputText
            styles='rounded'
            placeholder='Rechercher un article...'
          ><SvgSearch/>
          </InputText>
        </div>

      </section>
    </motion.main>
  );
}

export default Index;