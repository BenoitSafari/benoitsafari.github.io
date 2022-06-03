import { ReactComponent as SvgSearch } from '@svg/ico_input-searchbar.svg';
import { InputText } from '@components/Input';
import { articles } from '@pages/Index.articleData';
import PageTitle from '@components/PageTitle';
import Portfolio from '@pages/Index.Portfolio';
import Article from '@pages/Index.Article';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Index.scss';

// Animations Setup
const pageTransition = { duration: .5 }; 
const IndexVariants  = {
  hidden:       { opacity: 0, pageTransition },
  show:         { opacity: 1, pageTransition },
};
function Index() {
  const [ inputValue, setInputValue ] = useState('');
  const [ filter,     setFilter     ] = useState(articles);
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    const filteredData = articles.filter(article => {
      return article.title.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilter(filteredData);
  }, [inputValue, setFilter]);

  return(
    <motion.main 
      variants={IndexVariants}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='index'>
      <PageTitle title="l'index">
        Des articles sur mes explorations, essais et projets.
      </PageTitle>
      <Portfolio/>
      <section className='articles'>
        <div className='articles__search'>
          <InputText
            value={inputValue}
            onChange={handleOnChange}
            styles='rounded'
            placeholder='Rechercher un article...'
          ><SvgSearch/>
          </InputText>
        </div>
        <div className='articles__list'>
          { filter.map(({ stack, title, date, link, id }) => (
            <Article key={id} stack={stack} title={title} date={date} link={link}/> ))}
          { (filter.length <= 0) &&
            <div className='articles__list__empty'>J'ai pas ça en stock, déso...</div>
          }
        </div>
      </section>
    </motion.main>
  );
}

export default Index;