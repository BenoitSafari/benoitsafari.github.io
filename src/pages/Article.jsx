import PageTitle from '@components/PageTitle';
import Error from '@pages/Error';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Art1 from './Articles/Art_1';
import Art2 from './Articles/Art_2';
import './Article.scss';

// Animations Setup
const transition = { duration: .5 }; 
const variants  = {
  hidden:       { opacity: 0, transition },
  show:         { opacity: 1, transition },
};

function Article () {
  const { id }  = useParams();
  const art = Number(id) - 1;

  return(
    <>
      { articles[art] &&
        <motion.main 
          variants={variants}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='index articles-layout'>
          <PageTitle title="l'article">
            {articles[art].title}
          </PageTitle>
          <section className='articles-layout__content'>
            {articles[art].content}
          </section>
        </motion.main> }
      { id && !articles[art] && <Error/> }
    </>
  );
}

const articles = [
  {
    stack: 'react', 
    title: 'Faire une Modal re-utilisable avec useContext',
    date: '6 Juin 2022',
    link: '/article/1',
    content: <Art1/>,
    id: 1
  },
  {
    stack: 'react', 
    title: 'Créer un double Input range',
    date: '10 Juin 2022',
    link: '/article/2',
    content: <Art2/>,
    id: 2
  },
];

export { Article, articles };