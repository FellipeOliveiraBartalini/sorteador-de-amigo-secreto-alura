import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from ".";

test('quando input está vazio, novos participantes não podem ser adicionados', () => {
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>
    );

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const botao = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();

});

test('adicionar um participante caso exista um nome preenchido', () => {
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>
    );

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const botao = screen.getByRole('button');

    fireEvent.change(input, {
        target: {
            value: 'Ana Catarina'
        }
    });

    fireEvent.click(botao);

    expect(input).toHaveValue('')
    expect(input).toHaveFocus()
})
