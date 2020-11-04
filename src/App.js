import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Distance from "./Components/Distance";
import ClosestCountry from "./Components/ClosestCountry";
import TimezoneRange from "./Components/TimezoneRange";
import Characters from "./Components/Characters";
import Login from "./Components/Login";
import { UserContext } from "./UserContext";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  const [login, setlogin] = useState(false);

  // const[login, setlogin] = useState(false)
  //   const[uname, setUname] = useState("")
  // const[password, setPassword] = useState("")
  // const[loginattempts, setloginAttempts] = useState(3)

  return (
    <div className='App'>
      <Router>
        <Switch>
          {/* <UserContext.Provider value={{login, setlogin}, {uname, setUname}, {password, setPassword}, {loginattempts, setloginAttempts}}> */}
          <UserContext.Provider value={{ login, setlogin }}>
            <Route exact path='/' component={Login} />
            <ProtectedRoute exact path='/distance' component={Distance} />
            <ProtectedRoute exact path='/closest' component={ClosestCountry} />
            <ProtectedRoute exact path='/timezone' component={TimezoneRange} />
            <ProtectedRoute exact path='/character' component={Characters} />
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
