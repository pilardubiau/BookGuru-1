import React from 'react'
import axios from "axios";
import "../styles/Register.css";
// import {Link} from "react-router-dom"

const Register = () => {


    // const [inputRegistro, setInputRegistro] = React.useState({});

    // const handleChange = (e) => {
    //   e.preventDefault();
    //   const key = e.target.name;
    //   const value = e.target.value;
    //   setInputRegistro({ ...inputRegistro, [key]: value });
    //   console.log(inputRegistro);
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   axios
    //     .post("/api/register", inputRegistro)
    //     .then(() => alert("usuario creado " + inputRegistro.username));
    // };
  


//axios.post()


    return (
        <div className= "register">
  <div  class="container-fluid" />
      <br/>
      <h4>REGISTER</h4>
      <br/>

     <form class="formulario container-fluid" >
  
    <label for=""> Name  <br/> <input className="formulario container-fluid" type="text" placeholder="" required/></label> <br/>
    <label for=""> Last Name  <br/> <input className="formulario container-fluid" type="text" placeholder="" required/></label> <br/>
    <label for=""> Adress <br/> <input className="formulario container-fluid" type="text" placeholder="" required/></label> <br></br>
    <label for=""> Username <br/> <input className="formulario container-fluid" type="text" placeholder="" required/></label> <br/>
    <label for=""> E-mail: <br/> <input className="formulario container-fluid" type="text" placeholder="" required/></label> <br/>
    <label for=""> Password: <br/> <input className="formulario container-fluid" type="text" placeholder="" required/></label> <br/>
    <button type="submit" class="btn">SUBMIT</button>
    <br/>
    <br/>
     </form>
    </div>
      
    )
}

export default Register;

