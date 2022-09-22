import React from 'react';
import style from './Header.module.scss';

export default function Header() {
    return (
        <header className={style.header}> 
            <div className={style.header__logo} aria-label='Logo do sorteador de amigo secreto'></div>
            <img src='/imagens/participante.png' className={style.header__participante} alt='participante segurando presente' />
        </header>
    );
}
