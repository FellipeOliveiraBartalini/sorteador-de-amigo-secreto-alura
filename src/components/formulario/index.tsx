import React, { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../state/hooks/useAdicionarParticipante';
import { useMensagemDeErro } from '../../state/hooks/useMensagemDeErro';
import style from './Formulario.module.scss';

export default function Formulario() {

    const [nome, setNome] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const mensagemDeErro = useMensagemDeErro();

    const adicionarNaLista = useAdicionarParticipante();

    const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        adicionarNaLista(nome)
        inputRef.current?.focus()
        setNome('')
    }

    return (
        <form className={style.form} onSubmit={adicionarParticipante}>
            <input
                className={style.form__input}
                ref={inputRef}
                value={nome}
                onChange={event => setNome(event.target.value)}
                type="text"
                placeholder='Insira os nomes dos participantes'
            />
            <button className={style.form__button} disabled={!nome}>Adicionar</button>
            {mensagemDeErro && <p role='alert' className={`${style.form__alerta} ${style.form__erro}`}>{mensagemDeErro}</p>}
        </form>
    );
}
