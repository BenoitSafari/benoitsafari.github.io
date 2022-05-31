import { motion } from 'framer-motion';
import './Error.scss';

const transition = { duration: .5 }; 
const variants = {
  hidden:      { opacity: 0, transition },
  show:        { opacity: 1, transition },
  showTitle:   { opacity: 1, transition },
  showContent: { opacity: 1, transition: { duration: .5, delay: 1}},
};

function Index() {
  return(
    <motion.section 
      variants={variants}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='error'>
      <motion.div 
        variants={variants}
        initial='hidden'
        animate='showTitle'
        className='error__title'>
        Erreur 404
      </motion.div>
      <motion.div 
        variants={variants}
        initial='hidden'
        animate='showContent'
        className='error__content'>
        Vous n'auriez jamais du venir ici...
      </motion.div>
    </motion.section>
  );
}

export default Index;