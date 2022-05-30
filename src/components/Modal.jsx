import { ReactComponent as SvgClose } from '@svg/ico_close.svg';
import ReactDOM from 'react-dom';
import './Modal.scss';

const portalRoot = document.querySelector('#portal-root');
if (!portalRoot) throw new Error('Cannot find \'#portal-root\' element');

function Modal ({children, closingHandler}) {
  return ReactDOM.createPortal(
    <div 
      onClick={closingHandler}
      className='modal-back'>
      <div className='modal'>
        <div className='modal-head'>
          <button
            onClick={closingHandler}
          >
            <SvgClose/>
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
    , portalRoot);
}

export default Modal;