import { PageTitle, Title, SubTitle } from '@components/PageTitle';
import Error from '@pages/Error';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useLang } from '@hooks/useLang';
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
  const { lang } = useLang();
  const art = Number(id) - 1;

  return(
    <>
      {id && !articles.fr[art] && !articles.en[art] && <Error/>}
      {(lang === 'fr') && 
        articles.fr[art] &&
          <motion.main 
            variants={variants}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='index articles-layout'>
            <PageTitle>
              <Title>l'article</Title>
              <SubTitle>{articles.fr[art].title}</SubTitle>
            </PageTitle>
            <section className='articles-layout__content'>
              {articles.fr[art].content}
            </section>
          </motion.main>}
      {(lang === 'en') && 
        articles.en[art] &&
          <motion.main 
            variants={variants}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='index articles-layout'>
            <PageTitle>
              <Title>article page</Title>
              <SubTitle>{articles.en[art].title}</SubTitle>
            </PageTitle>
            <section className='articles-layout__content'>
              {articles.en[art].content}
            </section>
          </motion.main>}
    </>
  );
}

const articles = {
  fr: [
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
      date: '12 Juin 2022',
      link: '/article/2',
      content: <Art2/>,
      id: 2
    },
  ],
  en: [
    {
      stack: 'react', 
      title: 'Create a re-usable Modal with useContext',
      date: '06-06-2022',
      link: '/article/1',
      content: <Art1/>,
      id: 1
    },
    {
      stack: 'react', 
      title: 'Create a two-thumbs Input range',
      date: '06-12-2022',
      link: '/article/2',
      content: <Art2/>,
      id: 2
    },
  ]
};

export { Article, articles };