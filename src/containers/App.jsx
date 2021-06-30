import React from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";


//Componentes
import NavBar from "./NavBar";
import Register from "./Register";
import FooterContainer from "./FooterContainer";
import Carousel1 from "./Carousel";
import Carousel2 from "./Carousel2";
import SignIn from "./SignIn";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={SignIn} />
          <Route
            exact
            path="/books"
            render={() => <books />}
          />
          {/* <Route
            path="/books/:id"
            render={({ match }) => <SingleBook id={match.params.id} />}
          /> */}
        </Switch>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Carousel1 />
      <Carousel2 /> 
      <FooterContainer />
    </div>
  );
};

export default App;
