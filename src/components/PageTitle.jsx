import { motion } from 'framer-motion';
import { useLang } from '@hooks/useLang';
import './PageTitle.scss';


const variants = {
  hidden:       { x: '45%', transition: { duration: .5}},
  titleShow:    { x: '0%',  transition: { duration: .5, ease: 'backOut'}},
  subTitleShow: { x: '0%',  transition: { duration: .6, ease: 'backOut'}},
};

function PageTitle ({children}) {
  return(
    <section className='page-title'>
      {children}
    </section>
  );}

function Title ({children}) {
  const { lang } = useLang();
  return(
    <motion.h1 
      variants={variants}
      initial='hidden'
      animate='titleShow'
      className='page-title__title'>
      {(lang === 'fr') && 
        <>Vous êtes sur <span>{children}</span></>}
      {(lang === 'en') && 
        <>You're on the <span>{children}</span></>}
    </motion.h1>
  );}

function SubTitle ({children}) {
  return(
    <motion.div
      variants={variants}
      initial='hidden'
      animate='subTitleShow'
      className='page-title__sub'>
      {children}
    </motion.div>
  );}

export {PageTitle, Title, SubTitle};