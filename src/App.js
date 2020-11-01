import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Distance from './Components/Distance';
import ClosestCountry from './Components/ClosestCountry';
import TimezoneRange from './Components/TimezoneRange';
import Characters from './Components/Characters';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
          <Route exact path="/distance" component={Distance} />
          <Route exact path="/closest" component={ClosestCountry} />
          <Route exact path="/timezone" component={TimezoneRange} />
          <Route exact path="/" component={Characters} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;