import React from "react";
import axios from "axios";

export default function LogIn() {
  // USERS
  // router.post("/register", (req, res) => CREA UN USUARIO SI ESTÁ BIEN, DEVOLVEMOS OBJETO USUARIO Y TOKEN(LO ALMACENAN EN UN STATE. EJ: validatedUser: {user: {}, token: ""})
  // router.post("/login", (req, res, next) => LOGUEA AL USUARIO (SI ES QUE EXISTE EN EL REGISTRO) DEVOLVEMOS LO MISMO QUE ARRIBA!

  const [inputSignIn, setInputSignIn] = React.useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputSignIn({ ...inputSignIn, [key]: value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(inputSignIn);
    axios
      .post("/api/login", inputSignIn)
      // .then(() => alert("login" + inputSignIn.email));
  };

  return (
    <div className="login">
      <div class="container-fluid" />
      <br />
      <h3>Log In</h3>

      <form class="formulario container-fluid" onSubmit={handleSignIn}>
        <br></br>
        <label for="">
          {" "}
          Username <br />{" "}
          <input
            className="formulario container-fluid"
            type="text"
            placeholder=""
            required
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label for="">
          {" "}
          E-mail <br />{" "}
          <input
            className="formulario container-fluid"
            type="text"
            placeholder=""
            required
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label for="">
          {" "}
          Password <br />{" "}
          <input
            className="formulario container-fluid"
            type="text"
            placeholder=""
            required
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <br />
        <button className="botonLogin">Submit</button>
        <br />
        <br />
      </form>
    </div>
  );
}
