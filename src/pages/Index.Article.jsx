import { ReactComponent as SvgReact } from '@svg/ico_tech-react.svg';
import { ReactComponent as SvgJs } from '@svg/ico_tech-javascript.svg';
import { ReactComponent as SvgDot } from '@svg/ico_dot.svg';
import './Index.Article.scss';
import { Link } from 'react-router-dom';

function Article ({stack, title, date, link}) {
  return(
    <Link to={link}>
      <div className='article-card'>
        <div className='article-card__stack'>
          { (stack === 'react') && <><SvgJs/><SvgReact/>  <span>React</span></>      }
          { (stack === 'js')    && <><SvgJs/><span>Vanilla Js</span></> }
        </div>
        <SvgDot/>
        <div className='article-card__title'>
          {title}
        </div>
        <SvgDot/>
        <div className='article-card__date'>{date}</div>
      </div>
    </Link>
  );
}

export default Article;