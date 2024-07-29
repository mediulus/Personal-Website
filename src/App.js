import './App.css';
import Browsing from './Browsing';
import Home from './Home';
import Indexing from './Indexing';
import NavBar from './NavBar';
import Searching from './Searching';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/Indexing'>
              <Indexing/>
            </Route>
            <Route exact path='/Searching'>
              <Searching/>
            </Route>
            <Route exact path='/Browsing'>
              <Browsing/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
