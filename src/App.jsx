import { useModal } from './useModal';
import './assets/reset.css';
import './assets/style.css';

function App() {
  const { setModal } = useModal();
  const openModal = () => {
    setModal(<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum nulla iusto doloribus, tempore aliquam maxime voluptatum harum optio suscipit ad asperiores, earum, quis perspiciatis at? Quae mollitia minus fugiat!</div>);
  };
  return(
    <>
      <button className='open-modal' onClick={openModal}>
        OPEN MODAL
      </button>
    </>
  );
}

export default App;