import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


  test('1. Los números se concatenan correctamente hasta 9 dígitos', () => {
    render(<App />);
    const display = screen.getByRole('textbox');

    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    expect(display.value).toBe('123');

    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('9'));
    expect(display.value).toBe('123456789');

    fireEvent.click(screen.getByText('0'));
    expect(display.value).toBe('123456789');
  });

  test('2. Las operaciones muestran resultado inmediatamente', () => {
    render(<App />);
    const display = screen.getByRole('textbox');

    fireEvent.click(screen.getByText('5'));
    expect(display.value).toBe('5');

    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    expect(display.value).toBe('3');

    fireEvent.click(screen.getByText('+'));
    expect(display.value).toBe('8');

    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(display.value).toBe('10');
  });

  test('3. Los números negativos muestran ERROR', () => {
    render(<App />);
    const display = screen.getByRole('textbox');

    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(display.value).toBe('ERROR');
  });

  test('4. Números mayores a 999999999 muestran ERROR y Clear funciona', () => {
    render(<App />);
    const display = screen.getByRole('textbox');

    '999999999'.split('').forEach(d => fireEvent.click(screen.getByText(d)));
    expect(display.value).toBe('999999999');

    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('='));
    expect(display.value).toBe('ERROR');

    fireEvent.click(screen.getByText('Clear'));
    expect(display.value).toBe('0');
  });
