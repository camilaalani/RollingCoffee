import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  //agrega la logica que quiero que ocurra para considerar si soy administrador o no
  const admin = JSON.parse(sessionStorage.getItem("inicioRollingCoffe")) || null;
  //quiero saber si no es el administrador
  if(!admin){
    //si no es el administrador lo redirecciono al login
    return <Navigate to="/login"></Navigate>
  }else{
    //si soy administrador
    return children
  }
};

export default RutasProtegidas;
