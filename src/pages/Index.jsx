import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactComponent as SvgSearch } from '@svg/ico_input-searchbar.svg';
import { ReactComponent as SvgReact } from '@svg/ico_tech-react.svg';
import { ReactComponent as SvgJs } from '@svg/ico_tech-javascript.svg';
import { ReactComponent as SvgDot } from '@svg/ico_dot.svg';
import { articles } from '@pages/Article';
import { InputText } from '@components/Input';
import { PageTitle, Title, SubTitle } from '@components/PageTitle';
import { useLang } from '@hooks/useLang';
import './Index.scss';


// Data
const links = {
  cinevoraces: 'https://cinevoraces-front.herokuapp.com/'
};
// Animations Setup
const transition = { duration: .5 }; 
const variants  = {
  hidden: { opacity: 0, transition },
  show:   { opacity: 1, transition },
};

function Index() {
  const { lang } = useLang();
  // Filter logic
  const [ inputValue, setInputValue ] = useState('');
  const [ filter,     setFilter     ] = useState((lang === 'fr') ? articles.fr : articles.en);
  const handleOnChange = (e) => { setInputValue(e.target.value); };
  
  useEffect(() => {
    if (lang === 'fr') {
      const filteredData = articles.fr.filter(article => {
        return article.title.toLowerCase().includes(inputValue.toLowerCase());
      });
      setFilter(filteredData);
    }
    if (lang === 'en') {
      const filteredData = articles.en.filter(article => {
        return article.title.toLowerCase().includes(inputValue.toLowerCase());
      });
      setFilter(filteredData);
    }
  }, [inputValue, setFilter, lang]);

  return(
    <motion.main 
      variants={variants} initial='hidden' animate='show' exit='hidden' className='index'>
      <PageTitle>
        <Title>
          {(lang === 'fr') && 'l\'Index'}
          {(lang === 'en') && 'Index page'}
        </Title>
        <SubTitle>
          {(lang === 'fr') && 'Des articles sur mes explorations, essais et projets.'}
          {(lang === 'en') && 'My projects & explorations.'}
        </SubTitle>
      </PageTitle>

      <section className='index__portfolio'>
        <div className='index__portfolio__list'>
          <div className='cinevoraces'>
            <a href={links.cinevoraces} target='_blank' rel='noreferrer'>
              <img src='img/portfolio/logo_cinevoraces.svg' alt='' />
            </a>
          </div>
          <div className='webfrontend'>
            <div className='webfrontend__before'>
              {(lang === 'fr') && 'Bientôt en ligne!'}
              {(lang === 'en') && 'Coming soon!'}
            </div>
            <img className='is-white unavailable' src='img/portfolio/logo_webfe.svg' alt='' />
          </div>
        </div>
      </section>

      <section className='index__articles'>
        <div className='index__articles__search'>
          {(lang === 'fr') && 
            <InputText 
              value={inputValue} 
              onChange={handleOnChange} 
              styles='rounded' 
              placeholder='Rechercher un article...'
            >
              <SvgSearch/>
            </InputText>
          }
          {(lang === 'en') && 
            <InputText 
              value={inputValue} 
              onChange={handleOnChange} 
              styles='rounded' 
              placeholder='Search an article...'
            >
              <SvgSearch/>
            </InputText>
          }
        </div>
        <div className='index__articles__list'>
          { filter.map(({ stack, title, date, link, id }) => (
            <Article key={id} stack={stack} title={title} date={date} link={link}/> ))}
          { (filter.length <= 0) &&
            <div className='index__articles__list__empty'>J'ai pas ça en stock, déso...</div>}
        </div>
      </section>

    </motion.main>
  );
}

// Article component
function Article ({stack, title, date, link}) {
  return(
    <Link to={link}>
      <div className='index__article-card'>
        <div className='index__article-card__stack'>
          { (stack === 'react') && <><SvgJs/><SvgReact/>  <span>React</span></>      }
          { (stack === 'js')    && <><SvgJs/><span>Vanilla Js</span></> }
        </div>
        <SvgDot/>
        <div className='index__article-card__title'>
          {title}
        </div>
        <SvgDot/>
        <div className='index__article-card__date'>{date}</div>
      </div>
    </Link>
  );
}

export default Index;