import Boton from '../components/Boton';
import '../styles/boton.css';

export default {
  title: 'Calculadora/Boton',
  component: Boton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    tipo: {
      control: { type: 'select' },
      options: ['normal', 'operacion', 'clear'],
    },
    texto: { control: 'text' },
  },
};

const Template = (args) => <Boton {...args} />;

export const BotonNormal = Template.bind({});
BotonNormal.args = {
  texto: '5',
  tipo: 'normal',
  operacion: () => console.log('Botón normal presionado'),
};

export const BotonOperacion = Template.bind({});
BotonOperacion.args = {
  texto: '+',
  tipo: 'operacion',
  operacion: () => console.log('Operación presionada'),
};

export const BotonClear = Template.bind({});
BotonClear.args = {
  texto: 'Clear',
  tipo: 'clear',
  operacion: () => console.log('Clear presionado'),
};

const NumerosContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, width: 200 }}>
    {[...Array(10).keys()].map((num) => (
      <Boton
        key={num}
        texto={num.toString()}
        tipo="normal"
        operacion={() => console.log(`Número ${num} presionado`)}
      />
    ))}
  </div>
);
export const TodosLosNumeros = () => <NumerosContainer />;

const OperacionesContainer = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    {['+', '-', '*', '/', '%', '='].map((op) => (
      <Boton
        key={op}
        texto={op}
        tipo="operacion"
        operacion={() => console.log(`Operación ${op} presionada`)}
      />
    ))}
  </div>
);
export const TodasLasOperaciones = () => <OperacionesContainer />;
