import { Button } from '@components/InputButton';
import { motion } from 'framer-motion';
import { useLang } from '@hooks/useLang';
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
  const { lang } = useLang();
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
        {(lang === 'fr') && 'Erreur 404'}
        {(lang === 'en') && 'Error 404'}
      </motion.div>
      <motion.div 
        variants={variants}
        initial='hidden'
        animate='showContent'
        className='error__content'>
        {(lang === 'fr') && 'Vous n\'auriez jamais du venir ici...'}
        {(lang === 'en') && 'You shouldn\'t have come here'}
      </motion.div>
      <motion.div 
        variants={variants}
        initial='hidden'
        animate='showLink'>
        <Button
          href='/index'
        >
          {(lang === 'fr') && 'Retourner à l \'index'}
          {(lang === 'en') && 'Leave now'}
        </Button>
      </motion.div>
    </motion.main>
  );
}

export default Index;