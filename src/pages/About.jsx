import { motion } from 'framer-motion';
import PageTitle from '@components/PageTitle';
import './About.scss';

// Animations Setup
const pageTransition = { duration: .5 }; 
const IndexVariants  = {
  hidden:       { opacity: 0, pageTransition },
  show:         { opacity: 1, pageTransition },
};

function About () {
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
        variants={IndexVariants}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='about-title-wrapper'>
        <PageTitle title="mon CV">
          Le résumé d'une vie.
        </PageTitle>
      </motion.div>
      <motion.div 
        variants={IndexVariants}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='about'>
        <div className='about__profile'>
          <img className='about__pic' src='https://avatars.githubusercontent.com/u/88612813?v=4' alt='portrait de benoit safari'/>
          <div className='about__me'>
            <span>À propos de moi</span>
          </div>
          <div className='about__desc'>
            <span className='em'>“Je suis Gregory MICHALAK</span>,
          j’ai 30 ans et je suis <span className='em'>développeur</span>.
            <br/>
            <br/>
          Après 7 ans dans le commerce de jeux-vidéo et 5 ans de logistique, 
          j'ai décidé de faire de ma passion un métier en suivant le cursus fullstack
          JavaScript de l'école <a target='_blank' href='https://oclock.io/' rel="noreferrer">O'Clock</a>, débouchant sur le titre professionnel
            <span className='em'> développeur Web et Web mobile.”</span>
          </div>
        </div>
        <pre className='about__json' dangerouslySetInnerHTML={{__html: json}}/>
      </motion.div>
    </>
  );
}

export default About;