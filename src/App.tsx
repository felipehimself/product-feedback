import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './global/GlobalStyles';
import Home from './pages/Home/Home';
import Roadmap from './pages/Roadmap/Roadmap';
import Details from './pages/Details/Details';
import FormAdd from './pages/AddFeedback/FormAdd';
import FormEdit from './pages/EditFeedback/FormEdit';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-feedback' element={<FormAdd />} />
          <Route path='/feedback-details/:id' element={<Details />} />
          <Route path='/feedback-edit/:id' element={<FormEdit />} />
          <Route path='/roadmap' element={<Roadmap />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
