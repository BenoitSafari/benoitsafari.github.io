import { Button } from '@components/InputButton';
import { motion } from 'framer-motion';
import './Error.scss';

const transition = { duration: .5 }; 
const variants = {
  hidden:      { opacity: 0, transition },
  show:        { opacity: 1, transition },
  showTitle:   { opacity: 1, transition },
  showContent: { opacity: 1, transition: { duration: 1, delay: 1}},
  showLink:    { opacity: 1, transition: { duration: 2, delay: 2.5}},
};

function Index() {
  return(
    <motion.main 
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
      <motion.div 
        variants={variants}
        initial='hidden'
        animate='showLink'>
        <Button
          href='/index'
        >Retourner à l'index
        </Button>
      </motion.div>
    </motion.main>
  );
}

export default Index;