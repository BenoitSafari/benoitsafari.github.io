import { motion } from 'framer-motion';
import { useLang } from '@hooks/useLang';
import '@styles/PageAbout.scss';

// Animations Setup
const transition = { duration: .5 }; 
const variants  = {
  hidden:       { opacity: 0, transition },
  show:         { opacity: 1, transition },
};

function About () {
  const { lang } = useLang();
  const json = `
  <span class='counter'> 1</span>  <span class='curl'>&#123;</span>
  <span class='counter'> 2</span>  <span class='ind'> </span>  <span class='key'>"identity"</span><span class='sym'>: &#123;</span>
  <span class='counter'> 3</span>  <span class='ind'> </span>  <span class='ind'> </span> <span class='key'>"name"</span><span class='sym'>:</span> <span class='value'>"Gregory MICHALAK"</span><span class='sym'>,</span>
  <span class='counter'> 4</span>  <span class='ind'> </span>  <span class='ind'> </span> <span class='key'>"business name"</span><span class='sym'>:</span> <span class='value'>"Benoit Safari"</span><span class='sym'>,</span>
  <span class='counter'> 5</span>  <span class='ind'> </span>  <span class='ind'> </span> <span class='key'>"age"</span><span class='sym'>:</span> <span class='value'>30</span><span class='sym'>,</span>
  <span class='counter'> 6</span>  <span class='ind'> </span>  <span class='ind'> </span> <span class='key'>"job"</span><span class='sym'>:</span> <span class='value'>"Dev web full-stack"</span>
  <span class='counter'> 7</span>  <span class='ind ind--closing'> </span>  <span class='sym'>&#125;,</span>
  <span class='counter'> 8</span>  <span class='ind'> </span>  <span class='key'>"stack"</span><span class='sym'>: &#123;</span>
  <span class='counter'> 9</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='key'>"languages"</span><span class='sym'>: </span><span class='arr'>[</span>
  <span class='counter'>10</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='value'>"JavaScript"</span><span class='sym'>,</span> 
  <span class='counter'>11</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='value'>"TypeScript"</span><span class='sym'>,</span> 
  <span class='counter'>12</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='value'>"HTML"</span><span class='sym'>,</span> 
  <span class='counter'>13</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='value'>"CSS"</span><span class='sym'>,</span> 
  <span class='counter'>14</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='value'>"Sass"</span> 
  <span class='counter'>15</span>  <span class='ind ind--closing'> </span>  <span class='ind ind--closing'> </span>  <span class='arr'>]</span><span class='sym'>,</span>
  <span class='counter'>16</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='key'>"lib"</span><span class='sym'>: </span><span class='arr'>[</span>
  <span class='counter'>17</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='value'>"React"</span><span class='sym'>,</span> 
  <span class='counter'>18</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='value'>"NextJs"</span><span class='sym'>,</span> 
  <span class='counter'>19</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='value'>"ExpressJs"</span> 
  <span class='counter'>20</span>  <span class='ind ind--closing'> </span>  <span class='ind ind--closing'> </span>  <span class='arr'>]</span><span class='sym'>,</span>
  <span class='counter'>21</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='key'>"design"</span><span class='sym'>: </span><span class='arr'>[</span>
  <span class='counter'>22</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='value'>"Figma"</span><span class='sym'>,</span> 
  <span class='counter'>23</span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='ind'> </span>  <span class='value'>"Photoshop"</span> 
  <span class='counter'>24</span>  <span class='ind ind--closing'> </span>  <span class='ind ind--closing'> </span>  <span class='arr'>]</span>
  <span class='counter'>25</span>  <span class='ind ind--closing'> </span>  <span class='sym'>&#125;</span>
  <span class='counter'>26</span>  <span class='curl ind--closing'>&#125;</span>
  `;
  
  return(
    <>
      <motion.div 
        variants={variants}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='about'>
        <div className='about__profile'>
          <img className='about__pic' src='https://avatars.githubusercontent.com/u/88612813?v=4' alt='portrait de benoit safari'/>
          <div className='about__me'>
            <span>
              {(lang === 'fr') && 'À propos de moi'}
              {(lang === 'en') && 'About me'}
            </span>
          </div>
          <div className='about__desc'>
            <span className='em'>“
              {(lang === 'fr') && 'Je suis Gregory MICHALAK'}
              {(lang === 'en') && 'My name is Gregory MICHALAK'}
            </span>,&nbsp;
            {(lang === 'fr') && 'j’ai 30 ans et je suis'}
            {(lang === 'en') && 'I\'m 30 and I\'m a'}
            &nbsp;
            <span className='em'>
              {(lang === 'fr') && 'développeur'}
              {(lang === 'en') && 'developer'}
            </span>.
            <br/>
            <br/>
            {(lang === 'fr') && 
              <>Après 7 ans dans le commerce de jeux-vidéo et 5 ans de logistique,
              j'ai décidé de faire de ma passion un métier en suivant le cursus fullstack
              JavaScript de l'école</> }
            {(lang === 'en') && 
              <>After 7 year in the gaming business as a salesperson and 5 years as a logistician,
              I've decided to get a job that I actually like. I've studied JavaScript web development online with 
              </>}
              &nbsp;<a target='_blank' href='https://oclock.io/' rel="noreferrer">O'Clock</a>
            {(lang === 'fr') && 
              <>,&nbsp;débouchant sur le titre professionnel
                <span className='em'> développeur Web et Web mobile.”</span>
              </> }
            {(lang === 'en') && <> to achieve that goal.</>}  
          </div>
        </div>
        <pre className='about__json' dangerouslySetInnerHTML={{__html: json}}/>
      </motion.div>
    </>
  );
}

export default About;