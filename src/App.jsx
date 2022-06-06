import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { RouterScrollReset } from '@components/RouterScrollReset';
import Article1 from '@pages/Articles/Article1';
import Layout from '@components/Layout';
import Home from '@pages/Home';
import Index from '@pages/Index';
import About from '@pages/About';
import Error from '@pages/Error';
import '@styles/reset.scss';
import '@styles/globals.scss';

function App() {
  const location = useLocation();
  return(
    <>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <RouterScrollReset/>
          <Routes location={location} key={location.pathname}>
            <Route path='/'             element={<Home />}/>
            <Route path='/index'        element={<Index />}/>
            <Route path='/about'        element={<About />}/>
            <Route path='/article/1'    element={<Article1/>}/>
            <Route path='*'             element={<Error />}/>
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );}

export default App;