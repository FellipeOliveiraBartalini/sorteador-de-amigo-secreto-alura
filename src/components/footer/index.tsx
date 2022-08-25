import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';

export default function Footer() {

    const participantes = useListaDeParticipantes();

    const navigate = useNavigate();

    const iniciar = () => {
        navigate('/sorteio');
    }

    return (
        <footer>
            <button disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira!</button>
        </footer>
    );
}
