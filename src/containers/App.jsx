import React from 'react'
import NavBar from './NavBar';
import Register from "./Register"

import { Redirect, Route, Switch, Link } from "react-router-dom";
// import axios from "axios";


const App = () => {
  return (
   <div>
      <NavBar/>
      {/* <Switch>
          <Route exact path="/register" render={Register} />
          </Switch> */}     
      <div>Holis! bienvenidx a bookguru (:</div>
    </div>
  )
}

export default App;
