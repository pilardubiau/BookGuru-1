import React from "react";
import { Link } from "react-router-dom";
const imagen = require("../assets/Logo.png");

const NavBar = () => {
  return (
    <div>
      {/* Barra de busqueda */}
      {/* <Link to={`/`}> */}
      {/* Ver como ordenarlo a la izquierda */}
      <img src={imagen.default} alt="BookGuru logo" />
      {/* </Link> */}
      <div>
        <input
          placeholder="Search books..."
          inputProps={{ "aria-label": "search" }}
          //   onChange={handleChange}
        />
      </div>
      <div>{/* agregar el icono de carrito aca */}</div>
      <div>{/* agregar el icono de usuario aca */}</div>
    </div>
  );
};

export default NavBar;

// <br />
// <div className="row column">
//     <div className="primary col-sm-3"><Link id="namePage" className="colorFuente" to="/home">BookGuru</Link></div>
//     <div className="primary col-sm-6">
//         <form className="input" >
//             <input
//             value=""
//             type="text"
//             placeholder="Buscar"/>
//         </form>
//     </div>
//     <div className="primary col-sm-3">
//         {/* {user.id ? <div className="colorFuente"><button >Cerrar sesion</button></div>: */}
//         <div className="primary column2 col-sm-12">
//             <div><Link className="colorFuente" to="/register">Crear Cuenta</Link></div>
//             <div><Link className="colorFuente" to="/login">Iniciar sesion</Link></div>
//         </div>
//         {/* } */}
//     </div>
// </div>
// <hr />
