import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RouterScrollReset } from '@lib/RouterScrollReset';
import Layout from '@components/Layout/Layout';
import Home from '@pages/Home';
import '@styles/reset.scss';
import '@styles/globals.scss';

function App() {
  return(
    <>
      <Router>
        <RouterScrollReset/>
        <Routes>
          <Route path='/'       element={ <Home />  }/>
          <Route path='/index'  element={ <Layout><Home /></Layout> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;