import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reset window scroll with React-router-dom navigation.
 * Must be first child of \<BrowserRouter>.
 */
function RouterScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export { RouterScrollReset };