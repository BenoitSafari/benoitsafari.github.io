import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RouterScrollReset } from 'lib/RouterScrollReset/RouterScrollReset';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home';

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