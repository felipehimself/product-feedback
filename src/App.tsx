import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './global/GlobalStyles';
import Home from './pages/Home';
import CreateSuggestion from './pages/CreateSuggestion';
function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-suggestion' element={<CreateSuggestion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
