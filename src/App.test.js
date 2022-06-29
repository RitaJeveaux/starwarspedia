import React from 'react';
import App from './App';
import { render, screen, useEvent } from '@testing-library/react';


describe('Componente principal', () => {  

  it('Mostrar o nome da aplicação', () => {    
    render(<App />);

    const  nome = screen.getByText('starwarspedia');
    expect(nome).toBeInTheDocument();
  })

  it('Mostrat input de texto', () => { 
    render(<App />);

    const placeholder = screen.getByPlaceholderText('Filtrar por nome');
    expect(placeholder).toBeInTheDocument();
  })

  it('Mostrar Botão de Ordenação', () => {
   render(<App />);

   const bt_ordena = screen.getByText('Ordenação');
   expect(bt_ordena).toBeInTheDocument();
  })

  it('Mostrar Botão de Filtro', () => {
    render(<App />);

    const bt_filtra = screen.getByText('Filtros');
    expect(bt_filtra).toBeInTheDocument();
  })
})