import React, { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../state/hooks/useAdicionarParticipante';
import { useMensagemDeErro } from '../../state/hooks/useMensagemDeErro';

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
        <form onSubmit={adicionarParticipante}>
            <input
                ref={inputRef}
                value={nome}
                onChange={event => setNome(event.target.value)}
                type="text"
                placeholder='Insira os nomes dos participantes'
            />
            <button disabled={!nome}>Adicionar</button>
            {mensagemDeErro && <p role='alert'>{mensagemDeErro}</p>}
        </form>
    );
}
