import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';

export default function Footer() {

    const participantes = useListaDeParticipantes();

    // const navigate = useNavigate();

    return (
        <footer>
            <button disabled={useListaDeParticipantes.length < 3}>Iniciar brincadeira!</button>
        </footer>
    );
}
