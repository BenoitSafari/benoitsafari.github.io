import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Nav      from '@components/Nav';
import Home     from '@components/PageHome';
import About    from '@components/PageAbout';
import Portfolio from './components/PagePortfolio';
import Error    from '@components/PageError';
// import Contact  from '@components/PageContact';
import '@styles/_reset.scss';
import '@styles/_globals.scss';

function App() {
  const location = useLocation();
  return(
    <>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/'         element={<Home/>}/>
          <Route path='/about'    element={<About/>}/>
          {/* <Route path='/contact'  element={<Contact/>}/> */}
          <Route path='/portfolio'  element={<Portfolio/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </AnimatePresence>
    </>
  );}

export default App;