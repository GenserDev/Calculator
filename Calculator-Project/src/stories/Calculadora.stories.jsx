import App from '../App';
import '../App.css';
import '../styles/boton.css';

export default {
  title: 'Calculadora/CalculadoraCompleta',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

// Historia 1: Calculadora por defecto
export const CalculadoraPorDefecto = {
  args: {},
};

// Historia 2: Calculadora en diferentes containers
export const CalculadoraEnDiferentesContenedores = () => (
  <div style={{ padding: '20px' }}>
    <h2>Calculadora en Diferentes Contenedores</h2>
    
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div>
        <h3>Tamaño Normal</h3>
        <div style={{ transform: 'scale(1)' }}>
          <App />
        </div>
      </div>
      
      <div>
        <h3>Tamaño Pequeño</h3>
        <div style={{ transform: 'scale(0.8)' }}>
          <App />
        </div>
      </div>
      
      <div>
        <h3>Tamaño Grande</h3>
        <div style={{ transform: 'scale(1.2)' }}>
          <App />
        </div>
      </div>
    </div>
  </div>
);