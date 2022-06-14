import { ReactComponent as SvgClose } from '@svg/ico_close.svg';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import './Modal.scss';

const portalRoot = document.querySelector('#portal-root');
if (!portalRoot) throw new Error('Cannot find \'#portal-root\' element');

// Animations Setup
const transition = { duration: .5 }; 
const modalVariants = {
  hidden: { scale: 0,     transition },
  show:   { scale: 1,     transition },
};
const backVariants = {
  hidden: { opacity: 0, transition },
  show:   { opacity: 1, transition },
};

function Modal ({ modal, unSetModal }) {
  return ReactDOM.createPortal(
    <>
      <motion.div 
        variants={backVariants}
        initial='hidden'
        animate='show'
        onClick={unSetModal}
        className='modal-back'>
      </motion.div>
      <motion.div 
        variants={modalVariants}
        initial='hidden'
        animate='show'
        className='modal'>
        <div className='modal-head'>
          <button
            onClick={unSetModal}
          >
            <SvgClose/>
          </button>
        </div>
        <div>
          {modal}
        </div>
      </motion.div>
    </>
    , portalRoot);
}

export default Modal;