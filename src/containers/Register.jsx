import React from "react";
import axios from "axios";
import "../styles/Register.css";
// import {Link} from "react-router-dom"

const Register = () => {

  // USERS
  // router.post("/register", (req, res) => CREA UN USUARIO SI ESTÁ BIEN, DEVOLVEMOS OBJETO USUARIO Y TOKEN(LO ALMACENAN EN UN STATE. EJ: validatedUser: {user: {}, token: ""})
  // router.post("/login", (req, res, next) => LOGUEA AL USUARIO (SI ES QUE EXISTE EN EL REGISTRO) DEVOLVEMOS LO MISMO QUE ARRIBA!

  const [inputRegistro, setInputRegistro] = React.useState({});
  const handleChange = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    setInputRegistro({ ...inputRegistro, [key]: value });
    console.log(inputRegistro);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post("/api/register", inputRegistro)
    //   .then(() => alert("usuario creado " + inputRegistro.username));
  };

  return (
    <div className="register">
      <div class="container-fluid" />
      <br />
      <h3>Welcome BookGuru !</h3> <br />
      <p>Please fill in this form to create an account</p>
      <form class="formulario container-fluid" onSubmit={handleSignUp}>
        <label for="">
          {" "}
          Name <br />{" "}
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
          Last Name <br />{" "}
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
          Adress <br />{" "}
          <input
            className="formulario container-fluid"
            type="text"
            placeholder=""
            required
            onChange={handleChange}
          />
        </label>{" "}
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
        <input type="checkbox" />{" "}
        <h8> By creating an account you agree to our Terms & Privacy</h8> <br />{" "}
        <br />
        <button className="botonRegister">Submit</button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default Register;
