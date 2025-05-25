import { useState } from "react";

export const useCalculator = () => {
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

    // Verificar si es un numero negativo
    if (resultado < 0) {
      return "ERROR";
    }

    // Verificar si sobrepasa el limite permitido
    if (resultado > 999999999) {
      return "ERROR";
    }

    // Verificar el limite de caracteres permitido
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

  const manejarNumero = (numero) => {
    if (display === "ERROR") return;

    if (esperandoOperando) {
      setDisplay(numero);
      setEsperandoOperando(false);
    } else {
      if (display.length >= 9) return;

      if (display === "0") {
        setDisplay(numero);
      } else {
        setDisplay(display + numero);
      }
    }
  };

  const manejarDecimal = () => {
    if (display === "ERROR") return;

    if (esperandoOperando) {
      setDisplay("0.");
      setEsperandoOperando(false);
    } else {
      if (display.indexOf(".") === -1 && display.length < 9) {
        setDisplay(display + ".");
      }
    }
  };

  const manejarOperacion = (operacion) => {
    if (display === "ERROR") return;

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
    setOperacionActual(operacion);
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

  return {
    display,
    manejarNumero,
    manejarDecimal,
    manejarOperacion,
    calcular,
    clear
  };
};