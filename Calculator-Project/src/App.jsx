import Boton from "./components/Boton";
import genserLogo from "./assets/genser-logo.png";
import githublogo from "./assets/github.png";
import notpush from "./assets/push.png";
import "./App.css";
import "./styles/boton.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [numeroAnterior, setNumeroAnterior] = useState(null);
  const [operacionActual, setOperacionActual] = useState(null);
  const [esperandoOperando, setEsperandoOperando] = useState(false);

  const realizarCalculo = (numeroActual, numeroAnterior, operacion) => {
    const anterior = parseFloat(numeroAnterior);
    const actual = parseFloat(numeroActual);

    if (isNaN(anterior) || isNaN(actual)) return actual;

    let resultado;

    switch (operacion) {
      case "+":
        resultado = anterior + actual;
        break;
      case "-":
        resultado = anterior - actual;
        break;
      case "*":
        resultado = anterior * actual;
        break;
      case "/":
        if (actual === 0) {
          return "ERROR";
        }
        resultado = anterior / actual;
        break;
      case "%":
        resultado = anterior % actual;
        break;
      default:
        return actual;
    }

    //Verificar si es un numero negativo
    if (resultado < 0) {
      return "ERROR";
    }

    //Verificar si sobrepasa el limine permitido
    if (resultado > 999999999) {
      return "ERROR";
    }

    //Verificar el limite de caracteres permitido
    const resultadoStr = resultado.toString();
    if (resultadoStr.length > 9) {
      if (resultadoStr.includes(".")) {
        const parteEntera = Math.floor(resultado).toString();
        if (parteEntera.length > 9) {
          return "ERROR";
        }
        const decimalesPermitidos = 9 - parteEntera.length - 1;
        if (decimalesPermitidos <= 0) {
          resultado = Math.floor(resultado);
        } else {
          resultado = parseFloat(resultado.toFixed(decimalesPermitidos));
        }
      } else {
        return "ERROR";
      }
    }

    return resultado;
  };

  const manejarClick = (e) => {
    const texto = e.target.textContent;
    //Manejo de error
    if (display === "ERROR" && texto !== "Clear") {
      return;
    }

    if (!isNaN(texto)) {
      if (esperandoOperando) {
        setDisplay(texto);
        setEsperandoOperando(false);
      } else {
        if (display.length >= 9) {
          return;
        }

        if (display === "0") {
          setDisplay(texto);
        } else {
          setDisplay(display + texto);
        }
      }
    }
    //Manejo de puntos decimales
    else if (texto === ".") {
      if (esperandoOperando) {
        setDisplay("0.");
        setEsperandoOperando(false);
      } else {
        if (display.indexOf(".") === -1 && display.length < 9) {
          setDisplay(display + ".");
        }
      }
    }
    //Logica operadores comunes
    else if (["+", "-", "*", "/", "%"].includes(texto)) {
      const valorActual = display;

      if (numeroAnterior === null) {
        setNumeroAnterior(valorActual);
      } else if (operacionActual && !esperandoOperando) {
        const resultado = realizarCalculo(
          valorActual,
          numeroAnterior,
          operacionActual
        );

        if (resultado === "ERROR") {
          setDisplay("ERROR");
          setNumeroAnterior(null);
          setOperacionActual(null);
          setEsperandoOperando(true);
          return;
        }

        setDisplay(resultado.toString());
        setNumeroAnterior(resultado.toString());
      }

      setEsperandoOperando(true);
      setOperacionActual(texto);
    }
  };

  const calcular = () => {
    if (operacionActual && numeroAnterior !== null && !esperandoOperando) {
      const resultado = realizarCalculo(
        display,
        numeroAnterior,
        operacionActual
      );

      if (resultado === "ERROR") {
        setDisplay("ERROR");
      } else {
        setDisplay(resultado.toString());
      }

      setNumeroAnterior(null);
      setOperacionActual(null);
      setEsperandoOperando(true);
    }
  };

  const clear = () => {
    setDisplay("0");
    setNumeroAnterior(null);
    setOperacionActual(null);
    setEsperandoOperando(false);
  };

  return (
    <div className="contenedor">
      <div className="dashboard">
        <input className="display" type="text" value={display} readOnly />
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
        <a href="https://www.youtube.com/shorts/vrNQJUi8J_M">
          <img src={notpush} alt="not push" />
        </a>
        <Boton texto="0" operacion={manejarClick} tipo="normal" />
        <Boton texto="." operacion={manejarClick} tipo="normal" />
        <Boton texto="=" operacion={calcular} tipo="operacion" />
        <Boton texto="Clear" operacion={clear} tipo="clear" />
      </div>
    </div>
  );
}

export default App;
