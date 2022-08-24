import React, { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../state/hooks/useAdicionarParticipante';

export default function Formulario() {

    const [nome, setNome] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

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
        </form>
    );
}
