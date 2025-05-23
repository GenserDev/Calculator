import Boton from "./components/Boton";
import genserLogo from "./assets/genser-logo.png";
import githublogo from "./assets/github.png";
import "./App.css";
import "./styles/boton.css";

function App() {
  const manejarClick = (e) => {
    const boton = e.target;
    console.log(boton.textContent);
    let display = document.getElementById("display");
    display.value = display.value + boton.textContent;
  };

  const calcular = () => {
    let display = document.getElementById("display");
    display.value = eval(display.value);
  };

  const clear = () => {
    let display = document.getElementById("display");
    display.value = "";
  };
  return (
    <div className="contenedor">
      <div className="dashboard">
        <input className="display" type="text" id="display" />
        <a href="https://genserdev.space/">
          <img src={genserLogo} alt="genserdev" />
        </a>
        <a href="https://github.com/GenserDev/Calculator">
          <img src={githublogo} alt="genserdev" />
        </a>
        <Boton texto="%" operacion={manejarClick} tipo="operacion" />
        <Boton texto="/" operacion={manejarClick} tipo="operacion" />
        <Boton texto="7" operacion={manejarClick} tipo="normal" />
        <Boton texto="8" operacion={manejarClick} tipo="normal" />
        <Boton texto="9" operacion={manejarClick} tipo="normal" />
        <Boton texto="*" operacion={manejarClick} tipo="operacion" />
        <Boton texto="4" operacion={manejarClick} tipo="normal" />
        <Boton texto="5" operacion={manejarClick} tipo="normal" />
        <Boton texto="6" operacion={manejarClick} tipo="normal" />
        <Boton texto="-" operacion={manejarClick} tipo="operacion" />
        <Boton texto="1" operacion={manejarClick} tipo="normal" />
        <Boton texto="2" operacion={manejarClick} tipo="normal" />
        <Boton texto="3" operacion={manejarClick} tipo="normal" />
        <Boton texto="+" operacion={manejarClick} tipo="operacion" />
        <Boton texto="7" operacion={manejarClick} tipo="normal" />
        <Boton texto="0" operacion={manejarClick} tipo="normal" />
        <Boton texto="." operacion={manejarClick} tipo="normal" />
        <Boton texto="=" operacion={calcular} tipo="operacion" />
        <Boton texto="Clear" operacion={clear} tipo="clear" />
      </div>
    </div>
  );
}
export default App;
