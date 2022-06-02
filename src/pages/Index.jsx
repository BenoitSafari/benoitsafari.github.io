import { ReactComponent as SvgSearch } from '@svg/ico_input-searchbar.svg';
import { InputText } from '@components/Input';
import PageTitle from '@components/PageTitle';
import { motion } from 'framer-motion';


import './Index.scss';

const pageTransition = { duration: .5 }; 
const IndexVariants  = {
  hidden:       { opacity: 0, pageTransition },
  show:         { opacity: 1, pageTransition },
};

function Index() {
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
      <section className='articles'>
        <div className='articles__search'>
          <InputText
            styles='rounded'
            placeholder='Rechercher un article...'
          ><SvgSearch/>
          </InputText>
        </div>
        <div className='articles__list'>

        </div>
      </section>
    </motion.main>
  );
}

export default Index;