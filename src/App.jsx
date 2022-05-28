import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { RouterScrollReset } from '@lib/RouterScrollReset';
import Layout from '@components/Layout';
import Home from '@pages/Home';
import Cloudinary from '@pages/ArticleCloudinary';
import '@styles/reset.scss';
import '@styles/globals.scss';

function RouteHomePage () {
  const location = useLocation();
  return(
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}/>
      </Routes>
    </AnimatePresence>
  );}
function RoutesWithLayout () {
  return(
    <Layout>
      <Routes>
        <Route path='/index'        element={<Cloudinary />}/>
        <Route path='/contact'      element={<Cloudinary />}/>
        <Route path='/articles/1'   element={<Cloudinary />}/>
        <Route path='*'             element={<Cloudinary />}/>
      </Routes>
    </Layout>
  );}
function App() {
  return(
    <>
      <Router>
        <RouterScrollReset/>
        <RouteHomePage/>
        <RoutesWithLayout/>
      </Router>
    </>
  );}

export default App;