import React from 'react';
import Footer from '../../components/footer';
import Formulario from '../../components/formulario';
import ListaParticipantes from '../../components/listaParticipantes';

export default function Configuracao() {
    return (
        <>
            <Formulario />
            <ListaParticipantes />
            <Footer />
        </>
    );
}
