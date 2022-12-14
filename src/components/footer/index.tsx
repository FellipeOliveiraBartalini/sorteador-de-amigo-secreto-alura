import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';
import { useSorteador } from '../../state/hooks/useSorteador';
import style from './Footer.module.scss';

export default function Footer() {

    const participantes = useListaDeParticipantes();

    const navigate = useNavigate();

    const sortear = useSorteador();

    const iniciar = () => {
        sortear();
        navigate('/sorteio');
    }

    return (
        <footer className={style.footer}>
            <button className={style.footer__button} disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira!</button>
        </footer>
    );
}
