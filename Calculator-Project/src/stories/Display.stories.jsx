import React from 'react';
import '../App.css';

const Display = ({ valor, hasError }) => (
  <input
    className="display"
    type="text"
    value={valor}
    readOnly
    style={{ color: hasError ? '#ff4444' : 'white' }}
  />
);

export default {
  title: 'Calculadora/Display',
  component: Display,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    valor: { control: 'text' },
    hasError: { control: 'boolean' },
  },
};

const Template = (args) => <Display {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  valor: '123456',
  hasError: false,
};

export const Maximo = Template.bind({});
Maximo.args = {
  valor: '999999999',
  hasError: false,
};

export const Error = Template.bind({});
Error.args = {
  valor: 'ERROR',
  hasError: true,
};
