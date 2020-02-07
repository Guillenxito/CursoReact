// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDom from "react-dom";

//Estilos
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

// Componentes
import App from "./components/App";

// const element = <h1> Hello, React!!!</h1>;
// const element = React.createElement(_Etiqueta_, {_Propiedades de la etiqueta_}, _Texto_);
// const element = React.createElement("h1", {}, "Hola! Soy los children.");

// Tener la posibilidad de poner bloques directamente con React
// const jsx = (
//   <div>
//     <h1>Hola, soy {name}.</h1>
//     <p>Soy Tecnico Superior en Desarrolo de Aplicaciones Web</p>
//   </div>
// );

const container = document.getElementById("app");

// ReactDom.render(_Que_,_Donde lo queremos_);
// Equivalente a appendChild();

// ReactDom.render(<BadgeNew />, container);
ReactDom.render(<App />, container);
