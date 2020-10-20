import React from 'react';
// import logo from './logo.svg';
import './assets/style.scss';
import Login from "./pages/login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainpage from './pages/mainpage';
import Timezone from './pages/timezone';
import Closestcountry from './pages/closestcountry';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/mainpage" component={Mainpage} />
          <Route exact path="/timezone" component={Timezone} />
          <Route exact path="/closestcountry" component={Closestcountry} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
