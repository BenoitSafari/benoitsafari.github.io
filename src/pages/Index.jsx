import { motion } from 'framer-motion';
import './Index.scss';

const transition = { duration: .5 }; 
const variants = {
  hidden: { opacity: 0, transition },
  show:   { opacity: 1, transition },
};

function Index() {
  return(
    <motion.section 
      variants={variants}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='index'>
      <div className='Ouhlala'>
        Ouh là là!
        <br/>Mais il n'y a rien du tout ici!
        <br/><span>(Repassez plus tard, quand j'aurais trouvé des trucs a dire.)</span>
      </div>
    </motion.section>
  );
}

export default Index;