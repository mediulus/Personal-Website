import './App.css';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
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
            <Route path="/" element={<AboutMe />} />
            <Route path="/CurrentInterest" element={<CurrentInterest />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
