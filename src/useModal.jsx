import { 
  useCallback, 
  useState, 
  useContext, 
  createContext } from 'react';
import Modal from './Modal';

const ModalContext = createContext();
const ModalProvider = (props) => {
  const [ modal, setModal ] = useState();
  const unSetModal = useCallback(() => { setModal(); }, [ setModal ]);
  return (
    <ModalContext.Provider value={{ unSetModal, setModal }} {...props} >
      {props.children}
      {modal && <Modal modal={ modal } unSetModal={ unSetModal } />}
    </ModalContext.Provider>
  );};

const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) throw new Error('missing provider');
  return context;
};

export { ModalContext, ModalProvider, useModal };