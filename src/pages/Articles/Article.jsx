import PageTitle from '@components/PageTitle';
import { motion } from 'framer-motion';
import './Article.scss';

// Animations Setup
const transition = { duration: .5 }; 
const variants  = {
  hidden:       { opacity: 0, transition },
  show:         { opacity: 1, transition },
};

function Article ({children, name}) {
  return(
    <motion.main 
      variants={variants}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='index articles-layout'>
      <PageTitle title="l'article">
        {name}
      </PageTitle>
      {children}
    </motion.main>
  );
}

function ArticleContent ({children}) {

  return(
    <section className='articles-layout__content'>
      {children}
    </section>
  );
}

export { Article, ArticleContent };