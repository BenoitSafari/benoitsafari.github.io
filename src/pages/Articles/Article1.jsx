import { CopyBlock, dracula } from 'react-code-blocks';
import { Article, ArticleContent } from './Article';
import Sample from './Sample';

const codeBlocks =[
  `
  import ReactDOM from 'react-dom';
  import './Modal.scss';

  function Modal () {
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
    z-index: 4;
    width: fit-content;
    margin: 10rem auto;
    padding: 1rem;
    border-radius: 5px;
    background-color: #f0f;
    color: #fff;
  }

  .modal-head {
    display: flex;
    justify-content: flex-end;
    margin-bottom: .6rem;
  }
  .modal-head button {
    cursor: pointer;
  }`
]
  
;
function Article1 () {
  return(
    <Article name='Faire une Modal re-utilisable avec useContext!'>
      <ArticleContent>
        <h2>Créer son composant</h2>
        <p>Créez un composant <strong>Modal</strong>. Dans notre exemple, la modal se fermera au clique sur background ou via un bouton marqué d'un <em>"X"</em>.
          <br/><span className='note'>Note: l'utilisation de <strong>createPortal</strong> est optionnel.</span>
        </p>
        <div className='code-block'>
          <CopyBlock
            text={codeBlocks[0]}
            language='jsx'
            theme={dracula}
            showLineNumbers
            startingLineNumber={0}
            wrapLines
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
        <p>Un peu de CSS <span className='note'>(à modifier si vous n'utilisez pas de portal.. Ou si vous avez du goût!)</span>.</p>
        <div className='code-block'>
          <CopyBlock
            text={codeBlocks[2]}
            language='css'
            theme={dracula}
            showLineNumbers
            startingLineNumber={0}
            wrapLines
          />
        </div>
      </ArticleContent>
    </Article>
  );
}

export default Article1;