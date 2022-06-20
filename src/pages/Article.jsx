import { PageTitle, Title, SubTitle } from '@components/PageTitle';
import Error from '@pages/Error';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useLang } from '@hooks/useLang';
import { Art1, Art1En } from './Articles/Art_1';
import { Art2, Art2EN } from './Articles/Art_2';
import { Art3, Art3EN } from './Articles/Art_3';
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
    {
      stack: 'react', 
      title: 'Consommer une api avec un hook custom: useFetch',
      date: '20 Juin 2022',
      link: '/article/3',
      content: <Art3/>,
      id: 3
    },
  ],
  en: [
    {
      stack: 'react', 
      title: 'Create a re-usable Modal with useContext',
      date: '06-06-2022',
      link: '/article/1',
      content: <Art1En/>,
      id: 1
    },
    {
      stack: 'react', 
      title: 'Create a two-thumbs Input range',
      date: '06-12-2022',
      link: '/article/2',
      content: <Art2EN/>,
      id: 2
    },
    {
      stack: 'react', 
      title: 'Fetch an api with a custom hook: useFetch',
      date: '06-20-2022',
      link: '/article/3',
      content: <Art3EN/>,
      id: 3
    },
  ]
};

export { Article, articles };