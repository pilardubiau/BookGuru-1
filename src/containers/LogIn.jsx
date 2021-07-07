import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
import "../styles/LogIn.css";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import IsButtonDisable from "../hooks/IsButtonDisable";
import SuccessToast from "../hooks/toastNotifications/SuccessToast";

export default function LogIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputSignIn, setInputSignIn] = React.useState({});
  const [validCredentials, setValidCredentials] = React.useState(true);

  const handleChange = (e) => {
    e.preventDefault();
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
        SuccessToast(`👋Welcome ${res.data.user.username}👋`)
        history.push("/");
      })
      .catch(() => setValidCredentials(false));
  };

    const loginFB = async () => {
        let user;
        const { authResponse } = await new Promise(() => {
            window.FB.login(function() {
                window.FB.api("/me?fields=email,id,name&transport=cors", async function(response) {
                    user = {
                    //id: response.id,
                    username: response.name,
                    password: "Hola123123"
                    }
                    if (!user.username) {
                        return;
                    }
                    return axios.post("/api/users/login", user)
                            .then(res => {
                                dispatch(setUser(res.data.user));
                                localStorage.setItem("token", JSON.stringify(res.data.token));
                                localStorage.setItem("user", JSON.stringify(res.data.user));
                                setValidCredentials(true);
                                history.push("/");
                            })  
            }) 
        }, {scope:'public_profile,email'})})
        if (!authResponse) return;
    }

  return (
    <div className="login">
      {/* className="container-fluid"  */}
      <div />
      <br />
      <div>
        <h3>Log In</h3>
        {/* className="formulario container-fluid"  */}
        <form onSubmit={handleSignIn}>
          <br></br>
          <label>
            Username <br />
            <input
              className="loginInputStyle"
              // className="formulario container-fluid"
              type="text"
              name="username"
              // placeholder=""
              required
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password <br />
            <input
              className="loginInputStyle"
              // className="formulario container-fluid"
              type="password"
              name="password"
              // placeholder=""
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
          {/* <br /> */}
          <div className="loginButtonDiv">
            <button
              className="botonLogin"
              disabled={IsButtonDisable(inputSignIn)}
            >
              Submit
            </button>
    <button className="fb-login-button"
      onClick={loginFB}>
            <i className="fa fa-facebook mr-1"></i>
                Login with Facebook
        </button>
          </div>
          {/* <br />
          <br />
          <br />
          <br /> */}
        </form>
      </div>
    </div>
  );
}
