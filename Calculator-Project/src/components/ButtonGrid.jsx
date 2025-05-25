import Boton from "./Boton";

function ButtonGrid({ 
  onNumber, 
  onDecimal, 
  onOperation, 
  onCalculate, 
  onClear,
  notpush 
}) {
  const handleClick = (valor, tipo) => {
    if (!isNaN(valor)) {
      onNumber(valor);
    } else if (valor === ".") {
      onDecimal();
    } else if (["+", "-", "*", "/", "%"].includes(valor)) {
      onOperation(valor);
    } else if (valor === "=") {
      onCalculate();
    } else if (valor === "Clear") {
      onClear();
    }
  };

  return (
    <>
      <Boton texto="%" operacion={() => handleClick("%")} tipo="operacion" />
      <Boton texto="/" operacion={() => handleClick("/")} tipo="operacion" />
      <Boton texto="7" operacion={() => handleClick("7")} tipo="normal" />
      <Boton texto="8" operacion={() => handleClick("8")} tipo="normal" />
      <Boton texto="9" operacion={() => handleClick("9")} tipo="normal" />
      <Boton texto="*" operacion={() => handleClick("*")} tipo="operacion" />
      <Boton texto="4" operacion={() => handleClick("4")} tipo="normal" />
      <Boton texto="5" operacion={() => handleClick("5")} tipo="normal" />
      <Boton texto="6" operacion={() => handleClick("6")} tipo="normal" />
      <Boton texto="-" operacion={() => handleClick("-")} tipo="operacion" />
      <Boton texto="1" operacion={() => handleClick("1")} tipo="normal" />
      <Boton texto="2" operacion={() => handleClick("2")} tipo="normal" />
      <Boton texto="3" operacion={() => handleClick("3")} tipo="normal" />
      <Boton texto="+" operacion={() => handleClick("+")} tipo="operacion" />
      <a href="https://www.youtube.com/shorts/vrNQJUi8J_M">
        <img src={notpush} alt="not push" />
      </a>
      <Boton texto="0" operacion={() => handleClick("0")} tipo="normal" />
      <Boton texto="." operacion={() => handleClick(".")} tipo="normal" />
      <Boton texto="=" operacion={() => handleClick("=")} tipo="operacion" />
      <Boton texto="Clear" operacion={() => handleClick("Clear")} tipo="clear" />
    </>
  );
}

export default ButtonGrid;