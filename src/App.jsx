import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'instantsearch.css/themes/satellite.css';

import LandingPage from './pages/LandingPage';
import AlternateMedicine from './pages/AlternateMedicine';
import Recommendation from './pages/Recommendation';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/alternate-medicine" element={<AlternateMedicine />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;