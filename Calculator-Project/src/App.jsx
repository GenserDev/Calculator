// App.jsx refactorizada
import Display from "./components/Display";
import LogoLinks from "./components/LogoLinks";
import ButtonGrid from "./components/ButtonGrid";
import { useCalculator } from "./hooks/useCalculator";
import genserLogo from "./assets/genser-logo.png";
import githublogo from "./assets/github.png";
import notpush from "./assets/push.png";
import "./App.css";
import "./styles/boton.css";

function App() {
  const {
    display,
    manejarNumero,
    manejarDecimal,
    manejarOperacion,
    calcular,
    clear
  } = useCalculator();

  return (
    <div className="contenedor">
      <div className="dashboard">
        <Display value={display} />
        <LogoLinks 
          genserLogo={genserLogo}
          githublogo={githublogo}
          notpush={notpush}
        />
        <ButtonGrid
          onNumber={manejarNumero}
          onDecimal={manejarDecimal}
          onOperation={manejarOperacion}
          onCalculate={calcular}
          onClear={clear}
          notpush={notpush}
        />
      </div>
    </div>
  );
}

export default App;