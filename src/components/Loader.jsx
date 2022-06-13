import { useLang } from '@hooks/useLang';
import './Loader.scss';

function Loader () {
  const { lang } = useLang();
  return(
    <>
      <div className='loader-idle'></div>
      <div className='loader'>
        <div className='loader__before'>
          {(lang === 'fr') && 'Un instant...'}
          {(lang === 'en') && 'One moment...'}
        </div>
        <div className='loader__after'></div>
      </div>
    </>
  );
}

export default Loader;