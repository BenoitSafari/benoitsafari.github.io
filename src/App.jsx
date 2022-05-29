import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { RouterScrollReset } from '@lib/RouterScrollReset';
import Layout from '@components/Layout';
import Home from '@pages/Home';
import Index from '@pages/Index';
import '@styles/reset.scss';
import '@styles/globals.scss';
import ContactForm from './components/ContactForm';

function App() {
  const location = useLocation();
  return(
    <>
      <RouterScrollReset/>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />}/>
            <Route path='/index'        element={<Index />}/>
            <Route path='/contact'      element={<ContactForm />}/>
            {/* <Route path='*'             element={<Error />}/> */}
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );}

export default App;