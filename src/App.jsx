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
        <Layout>
          <Routes>
            <Route path='*' element={<Home />}/>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;