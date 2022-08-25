import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from ".";

describe('onde não existem participantes suficientes', () => {
    test('a brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');

        expect(botao).toBeDisabled();
    });
});
