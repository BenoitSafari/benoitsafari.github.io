import { motion } from 'framer-motion';
import '@styles/PageError.scss';

const imgAnim = {
  initial: {opacity: 0},
  animate: {opacity: .3},
  exit: {opacity: 0},
  transition: {duration: 1}
};
const textAnim = {
  initial: {y: '-50%', opacity: 0},
  animate: {y: '0%', opacity: 1, transition: {duration: .5, delay: .7, ease: 'backOut'}},
  exit: {opacity: 0},
};

function PageError() {
  return(
    <main className='error'>
      <motion.img {...imgAnim} src='img/logo.svg' alt=''/>
      <motion.div {...textAnim} className='error-label'>404</motion.div>
    </main>
  );
}

export default PageError;