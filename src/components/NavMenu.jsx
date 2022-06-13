import { Button } from '@components/Input';
import { useLang } from '@hooks/useLang';
import './NavMenu.scss';

function NavMenu ({ handler, contactHandler }) {
  const { lang } = useLang();
  const handleToContact = () => {
    contactHandler();
    handler();
  };
  return (
    <>
      <div 
        onClick={handler}
        id='mobile-drop-down-back'
        className='mobile-drop-down-back mobile-drop-down-back--is-closed'>
      </div>
      <div 
        id='mobile-nav-menu'
        className='mobile-nav-menu'>
        <Button
          onClick={handler}
          styles='rounded-fill'
          href='/index'
        >Index
        </Button>
        <Button
          onClick={handleToContact}
          styles='rounded-fill'
        >Contact
        </Button>
        <Button
          onClick={handler}
          styles='rounded-fill'
          href='/about'
        >
          {(lang === 'fr') && 'À propos'}
          {(lang === 'en') && 'About'}
        </Button>
      </div>
    </>
  );
}

export default NavMenu;