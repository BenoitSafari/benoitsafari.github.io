import { ReactComponent as SvgClose } from '@svg/ico_close.svg';
import ReactDOM from 'react-dom';
import './Modal.scss';

const portalRoot = document.querySelector('#portal-root');
if (!portalRoot) throw new Error('Cannot find \'#portal-root\' element');

function Modal ({ modal, unSetModal }) {
  return ReactDOM.createPortal(
    <>
      <div 
        onClick={unSetModal}
        className='modal-back'>
      </div>
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
    </>
    , portalRoot);
}

export default Modal;