import React from 'react';
import { Card } from '../../components/card';
import Footer from '../../components/footer';
import Formulario from '../../components/formulario';
import ListaParticipantes from '../../components/listaParticipantes';

export default function Configuracao() {
    return (
        <section>
            <h2>Vamos começar!</h2>
            <Formulario />
            <ListaParticipantes />
            <Footer />
        </section>
    );
}
