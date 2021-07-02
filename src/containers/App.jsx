import React from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import userPersisterHook from "../hooks/userPersisterHook";

//Componentes
import NavBar from "./NavBar";
import Register from "./Register";
import FooterContainer from "./FooterContainer";
import Carousel1 from "./Carousel";
import Carousel2 from "./Carousel2";
import LogIn from "./LogIn";
import BookContainer from "./BookContainer";
import Cart from "./Cart";
import SingleBookContainer from "./SingleBookContainer";
import Previous from "./Previous";
import Category from "./Category";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(userPersisterHook()))
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Carousel1 />
          <Carousel2 />
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LogIn} />

        <Route exact path="/books" render={() => <BookContainer />} />
        <Route exact path="/cart" component={Cart} />

        <Route
          exact
          path="/books/:id"
          render={({ match }) => (
            <SingleBookContainer bookId={match.params.id} />
          )}
        />
        <Route exact path="/previous" component={Previous} />
        <Route exact path="/category" component={Category} />
      </Switch>
      <br />
      <FooterContainer />
    </div>
  );
};

export default App;
