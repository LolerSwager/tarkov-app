import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { About } from './components/pages/about';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
