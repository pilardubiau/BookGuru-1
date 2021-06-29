import React from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";

//Componentes
import NavBar from "./NavBar";
import Register from "./Register";
import FooterContainer from "./FooterContainer";
import Carrousel from "./Carrousel";
import SignIn from "./SignIn";

const App = () => {
  return (
    <div>
      
      <div>NavBar</div>
      <div>SubNavBar</div>
      <br/>
      <img
        src="/logoBookGuru.svg"
        alt=""
      />
      <h4>Holis! bienvenidx a bookguru / Welcome to BookGuru(:</h4>
      <NavBar />
      {/* <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={SignIn} />
          <Route
            exact
            path="/books"
            render={() => <books  />}
          />
          <Route
            path="/books/:id"
            render={({ match }) => <SingleBook id={match.params.id} />}
          />
        </Switch>
 */}
      <Carrousel />
     
      <br />
      <br />
    <button type="button" class="btn btn-secondary">Register</button>
      <Register />
      <FooterContainer />
    </div>
  );
};

export default App;
