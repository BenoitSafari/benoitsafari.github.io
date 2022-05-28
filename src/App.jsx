import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import '@styles/reset.scss';
import '@styles/globals.scss';

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path='*' element={<Home />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;