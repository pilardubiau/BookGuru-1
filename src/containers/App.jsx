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
      <NavBar />
      <Switch>
<<<<<<< HEAD
        <Route exact path="/">
=======
      <Route exact path="/">
>>>>>>> 3a437d9b2c6748543b5338d674bc8cce33bdaeec
          <Carousel1 />
          <Carousel2 />
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/books" render={() => <books />} />
        {/* <Route
            path="/books/:id"
            render={({ match }) => <SingleBook id={match.params.id} />}
          /> */}
<<<<<<< HEAD
      </Switch>
      <br />
      <br />
      <br />
      <br />
      <br />
=======
      
      </Switch>

>>>>>>> 3a437d9b2c6748543b5338d674bc8cce33bdaeec
      <br />
      <FooterContainer />
    </div>
  );
};

export default App;
