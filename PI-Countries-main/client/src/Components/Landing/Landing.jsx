import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import landing from "../../img/fondo-landing.jpg";

export default function Landing() {
  return (
    <div className="container-landing">
      <div className="text">
        <h1>Bienvenidos a Countries</h1>
        <p>
           Aquí puedes encontrar todas las actividades
           de los diferentes países y también puedes añadirlos a tus
           respectivos países
        </p>
      </div>
      <div>
        <Link to={"/home"}>
          <button className="btn">ENTRAR</button>
        </Link>
      </div>
      <div className="wallpaper">
        <img className="stretch" src={landing} alt="" />
      </div>
    </div>
  );
}