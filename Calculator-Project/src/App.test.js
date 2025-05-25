import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Calculadora Tests', () => {
  
  // Test 1: Verificar que la calculadora se renderiza correctamente
  test('1. La calculadora se renderiza con display inicial en 0', () => {
    render(<App />);
    const display = screen.getByRole('textbox');
    expect(display.value).toBe('0');
  });

  // Test 2: Verificar concatenación de números
  test('2. Los números se concatenan correctamente hasta 9 dígitos', () => {
    render(<App />);
    const display = screen.getByRole('textbox');
    
    // Presionar números 1, 2, 3
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    
    expect(display.value).toBe('123');
    
    // Intentar agregar más números hasta el límite
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('9'));
    
    expect(display.value).toBe('123456789');
    
    // Intentar agregar un décimo dígito (debe ser ignorado)
    fireEvent.click(screen.getByText('0'));
    expect(display.value).toBe('123456789');
  });

  // Test 3: Verificar operaciones básicas y resultado inmediato
  test('3. Las operaciones muestran resultado inmediatamente', () => {
    render(<App />);
    const display = screen.getByRole('textbox');
    
    // 5 + 3 + 2 = 10
    fireEvent.click(screen.getByText('5'));
    expect(display.value).toBe('5');
    
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    expect(display.value).toBe('3');
    
    // Al presionar otra operación, debe mostrar el resultado (8)
    fireEvent.click(screen.getByText('+'));
    expect(display.value).toBe('8');
    
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(display.value).toBe('10');
  });

  // Test 4: Verificar manejo de números negativos (mostrar ERROR)
  test('4. Los números negativos muestran ERROR', () => {
    render(<App />);
    const display = screen.getByRole('textbox');
    
    // 3 - 5 = ERROR (porque -2 es negativo)
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    
    expect(display.value).toBe('ERROR');
  });

  // Test 5: Verificar límite de números grandes y función Clear
  test('5. Números mayores a 999999999 muestran ERROR y Clear funciona', () => {
    render(<App />);
    const display = screen.getByRole('textbox');
    
    // Crear un número grande: 999999999 + 1
    // Primero ingresamos 999999999
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('9'));
    
    expect(display.value).toBe('999999999');
    
    // Sumar 1 para exceder el límite
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('='));
    
    expect(display.value).toBe('ERROR');
    
    // Verificar que Clear funciona
    fireEvent.click(screen.getByText('Clear'));
    expect(display.value).toBe('0');
  });

  // Test Bonus: Verificar operaciones con decimales
  test('Bonus: Las operaciones con decimales funcionan correctamente', () => {
    render(<App />);
    const display = screen.getByRole('textbox');
    
    // 5.5 + 2.3 = 7.8
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    expect(display.value).toBe('5.5');
    
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    
    expect(display.value).toBe('7.8');
  });
});