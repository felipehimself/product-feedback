import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './global/GlobalStyles';
import Home from './pages/Home';
import AddFeedback from './pages/AddFeedback';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-feedback' element={<AddFeedback />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
