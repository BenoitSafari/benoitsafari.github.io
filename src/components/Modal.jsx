import { ReactComponent as SvgClose } from '@svg/ico_close.svg';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const portalRoot = document.querySelector('#portal-root');
if (!portalRoot) throw new Error('Cannot find \'#portal-root\' element');

function Modal ({ modal, unSetModal }) {
  useEffect(() => {
    const bind = e => {
      if (e.keyCode !== 27) return;
      if (document.activeElement && ['INPUT', 'SELECT'].includes(document.activeElement.tagName)) return;
      unSetModal();
    };
    document.addEventListener('keyup', bind);
    return () => document.removeEventListener('keyup', bind);
  }, [modal, unSetModal]);
  
  return ReactDOM.createPortal(
    <div 
      onClick={unSetModal}
      className='modal-back'>
      <div className='modal'>
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
      </div>
    </div>
    , portalRoot);
}

export default Modal;