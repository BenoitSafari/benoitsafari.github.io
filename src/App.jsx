import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Nav    from '@components/Nav';
import Home   from '@components/PageHome';
import About  from '@components/PageAbout';
import '@styles/_reset.scss';
import '@styles/_globals.scss';

function App() {
  const location = useLocation();
  return(
    <AnimatePresence exitBeforeEnter>
      <Nav/>
      <Routes location={location} key={location.pathname}>
        <Route path='/'       element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    </AnimatePresence>
  );}

export default App;