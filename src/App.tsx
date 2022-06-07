import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './global/GlobalStyles';
import Home from './pages/Home';
import AddFeedback from './pages/AddFeedback';
import FeedbackDetails from './pages/FeedbackDetails';
import EditFeedback from './pages/EditFeedback';
function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-feedback' element={<AddFeedback />} />
          <Route path='/feedback-details/:id' element={<FeedbackDetails />} />
          <Route path='/feedback-edit/:id' element={<EditFeedback />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
