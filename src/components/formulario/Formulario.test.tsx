import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from ".";

test('quando input está vazio, novos participantes não podem ser adicionados', () => {

    render(<Formulario />);

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const botao = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();

})