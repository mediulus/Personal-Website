import './App.css';
import NavBar from './NavBar';
import AboutMe from './AboutMe'; // AboutMe is set as the home page
import CurrentInterest from './CurrentInterest';
import Resume from './Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            {/* Set AboutMe as the home page */}
            <Route path="/" element={<AboutMe />} />
            <Route path="/CurrentInterest" element={<CurrentInterest />} />
            <Route path="/resume" element={<Resume />} />
            {/* Add a fallback route to redirect to AboutMe */}
            <Route path="*" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;