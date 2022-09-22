import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import ListaParticipantes from '.';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
});

describe('uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
    })
    test('deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        );

        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(0);
    });
});

describe('uma lista preenchida de participantes', () => {
    const participantes = ['Ana', 'Catarina'];

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    })
    test('deve ser renderizada com participantes', () => {

        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        );

        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(participantes.length);
    });
});
