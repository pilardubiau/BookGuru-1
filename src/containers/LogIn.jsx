import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import "../styles/LogIn.css";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import IsButtonDisable from "../hooks/IsButtonDisable";

export default function LogIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputSignIn, setInputSignIn] = React.useState({});
  const [validCredentials, setValidCredentials] = React.useState(true);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputSignIn({ ...inputSignIn, [key]: value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", inputSignIn)
      .then((res) => {
        dispatch(setUser(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setValidCredentials(true);
        history.push("/");
      })
      .catch((err) => setValidCredentials(false));
  };

  // const IsButtonDisable = (input) => {
  //   return !!Object.values(input).filter((item) => item.length < 2).length;
  // };

  return (
    <div className="login">
      <div className="container-fluid" />
      <br />
      <h3>Log In</h3>
      <form className="formulario container-fluid" onSubmit={handleSignIn}>
        <br></br>
        <label>
          
          Username <br />
          <input
            className="formulario container-fluid"
            type="text"
            name="username"
            placeholder=""
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password <br />
          <input
            className="formulario container-fluid"
            type="password"
            name="password"
            placeholder=""
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <div>
          {validCredentials
            ? null
            : ["danger"].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                  "You have entered an invalid username or password"
                </Alert>
              ))}
        </div>
        <br />
        <button className="botonLogin" disabled={IsButtonDisable(inputSignIn)}>
          Submit
        </button>
        <br />
        <br /> 
        <br />
        <br />
      </form>
    </div>
  );
}
