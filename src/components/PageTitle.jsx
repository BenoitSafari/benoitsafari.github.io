import { motion } from 'framer-motion';
import './PageTitle.scss';

const IndexVariants = {
  hidden:       { x: '45%', transition: { duration: .5}},
  titleShow:    { x: '0%',  transition: { duration: .5, ease: 'backOut'}},
  subTitleShow: { x: '0%',  transition: { duration: .6, ease: 'backOut'}},
};

function PageTitle ({title, children}) {
  return(
    <section className='page-title'>
      <motion.h1 
        variants={IndexVariants}
        initial='hidden'
        animate='titleShow'
        className='page-title__title'>
        Vous êtes sur <span>{title}</span>,
      </motion.h1>
      <motion.div
        variants={IndexVariants}
        initial='hidden'
        animate='subTitleShow'
        className='page-title__sub'>
        {children}
      </motion.div>
    </section>
  );
}

export default PageTitle;