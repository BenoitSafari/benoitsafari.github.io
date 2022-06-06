import { CopyBlock, dracula } from 'react-code-blocks';
import { Link } from 'react-router-dom';
import { Article, ArticleContent } from './Article';

function Article1 () {
  return(
    <Article name='Faire une Modal re-utilisable avec useContext'>
      <ArticleContent>
        <h2>Créer son composant</h2>
        <p>Créez un composant <strong>Modal</strong>. Dans notre exemple, la modal se fermera au clique sur background ou via un bouton marqué d'un <em>"X"</em>.
          <br/><span className='note'>Note: un <em>portal</em> permet de séparer du contenu de l'app principale. Bien qu'approprié dans le cas d'une modal, l'utilisation de <strong>createPortal</strong> est optionnel.</span>
        </p>
        <div className='code-block'>
          <CopyBlock
            text={codeBlocks[0]}
            language='jsx'
            theme={dracula}
          />
        </div>
        <p>Dans le cas d'utilisation d'un <strong>portal</strong>, ajoutez une <em>&lt;div&gt;</em> dans le <strong>body</strong> de votre <strong>index.html</strong>.</p>
        <div className='code-line'>
          <CopyBlock
            text={codeBlocks[1]}
            language='jsx'
            theme={dracula}
          />
        </div>
        <p>Un peu de CSS, le plus important est de bien placer son background et sa modal, de sorte à pouvoir fermer la modal au clique sur background.
          <br/><span className='note'>Note: à modifier si vous n'utilisez pas de portal.. Ou si vous avez du goût!</span>.</p>
        <div className='code-block'>
          <CopyBlock
            text={codeBlocks[2]}
            language='css'
            theme={dracula}
          />
        </div>
        <h2>Créer un contexte</h2>
        <p>Nous voulons pouvoir appeler notre <em>modal</em> un peu partout dans notre application via un hook. Pour ça nous allons avoir besoin de lui donner un <em>contexte</em>.</p>
        <div className='code-block'>
          <CopyBlock
            text={codeBlocks[3]}
            language='jsx'
            theme={dracula}
          />
        </div>
        <p>Retournez ensuite sur votre <strong>Modal</strong> pour apporter quelques modifications. Ajoutez en props <em>modal</em> et <em>unSetModal</em> puis passez les respectivement sur les balises déstinées a fermer la modal et celle destinée à accueillir le contenu.
        </p>
        <div className='code-block'>
          <CopyBlock
            text={codeBlocks[4]}
            language='jsx'
            theme={dracula}
            highlight='2, 5, 8, 11'
          />
        </div>
        <p>On peut maintenant créer notre hook <strong>useModal</strong>.</p>
        <div className='code-block'>
          <CopyBlock
            text={codeBlocks[5]}
            language='jsx'
            theme={dracula}
          />
        </div>
        <p>Il reste encore à rendre disponible notre <em>contexte</em> dans notre application. Ouvrez votre <strong>app.jsx</strong> ou <strong>index.jsx</strong> et importez-y le provider.</p>
        <div className='code-block'>
          <CopyBlock
            text={codeBlocks[6]}
            language='jsx'
            theme={dracula}
            highlight='4, 11-13'
          />
        </div>
        <h2>Utilisation</h2>
        <p>Importez <strong>useModal</strong> à l'endroit ou vous souhaitez l'appeler, récuperez la methode <em>setModal</em> et passez lui en paramètre le contenu souhaité.</p>
        <div className='code-block'>
          <CopyBlock
            text={codeBlocks[7]}
            language='jsx'
            theme={dracula}
          />
        </div>
      </ArticleContent>
      <section className='articles-layout__content__links'>
        <a target='_blank' rel='noreferrer' href='https://github.com/BenoitSafari/benoitsafari.github.io/tree/lib-useModal'>Voir le repo git</a>
        <Link to='/index'>Retourner à l'index</Link>
      </section>
    </Article>
  );
}

const codeBlocks =[
  `
  import ReactDOM from 'react-dom';
  import './Modal.css';

  const portalRoot = document.querySelector('#portal-root');

  function Modal () {
      // Créé une autre "instance" de notre application.
      return ReactDOM.createPortal(
        <>
          <div className='modal-back'></div>
          <div className='modal'>
            <div className='modal-head'>
              <button>X</button>
            </div>
            <div className='modal-content'>
            </div>
          </div>
        </>
        , portalRoot);
    }
  
    export default Modal;`,
  `
  <div id="portal-root"></div>`,
  `
  .modal-back {
    position: fixed;
    top: 0;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    background-color: #00000075;
  }
  
  .modal {
    position: fixed;
    left: 0; right: 0;
    width: fit-content;
    max-width: 50%;
    margin: 10rem auto;
    z-index: 4;
    box-shadow: 2px 2px 5px black;
    background-color: #313030;
    border-radius: 5px;
    padding: 1rem;
  }
  
  .modal-head {
    display: flex;
    justify-content: flex-end;
    margin-bottom: .6rem;
  }

  .modal-head button {
    cursor: pointer;
  }`,
  `
  import {useCallback, useState, createContext} from 'react';
  import Modal from '../components/Modal';
  
  // Créé le context puis le provider de la modal
  const ModalContext = createContext();
  const ModalProvider = ({children}) => {
    // Créé l'état initial du contenu de la modal
    const [modal, setModal] = useState();
    // "Vide" le contenu de la modal
    const unSetModal = useCallback(() => {
      setModal();
    }, [setModal]);
    return (
      <ModalContext.Provider 
        value={{unSetModal, setModal}}
      >
        {children}
        {/* Affiche la modal uniquement si elle contient quelque chose */}
        {modal && <Modal modal={ modal } unSetModal={ unSetModal } />}
      </ModalContext.Provider>
    );
  };
  
  export {ModalContext, ModalProvider};`,
  `
  function Modal ({ modal, unSetModal }) {
      return ReactDOM.createPortal(
        <>
          <div onClick={unSetModal} className='modal-back'></div>
          <div className='modal'>
            <div className='modal-head'>
              <button onClick={unSetModal}>X</button>
            </div>
            <div className='modal-content'>
              {modal}
            </div>
          </div>
        </>
        , portalRoot);
    }
  
    export default Modal;`,
  `
  import {useContext} from 'react';
  import {ModalContext} from '../context/ModalContext';

  const useModal = () => {
    const context = useContext(ModalContext);
    return context;
  };

  export {useModal};`,
  `
  import React from 'react';
  import { createRoot } from 'react-dom/client';
  import { ModalProvider } from './context/ModalContext';
  import App from './App';

  const appRootElement = document.querySelector('#app-root');
  const root = createRoot(appRootElement);

  root.render(
    <ModalProvider>
      <App/>
    </ModalProvider>
  );`,
  `
  import { useModal } from './hooks/useModal';
  import './style.css';

  function App() {
    const { setModal } = useModal();
    const openModal = () => {
      setModal(<div>Hello, je suis une Modal! Dingue non?</div>);
    };
    return(
      <button className='open-modal' onClick={openModal}>
        Vas-y clic! Allez!
      </button>
    );
  }

  export default App;`
];

export default Article1;