import React, { useState } from 'react';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';
import { useResultadoSorteio } from '../../state/hooks/useResultadoSorteio';

export default function Sorteio() {
    const participantes = useListaDeParticipantes();

    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');

    const resultado = useResultadoSorteio();

    const sortear =(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        }
    } 

    return (
        <section>
            <form onSubmit={sortear}>
                <select
                    required
                    name="participateDaVez"
                    id="participateDaVez"
                    placeholder='Selecione o seu nome'
                    value={participanteDaVez}
                    onChange={event => setParticipanteDaVez(event.target.value)}
                >
                    {
                        participantes.map(participante => (
                            <option key={participante}>
                                {participante}
                            </option>
                        ))
                    }
                </select>

                <button>Sortear</button>
            </form>
            {amigoSecreto && <p role='alert'>{amigoSecreto}</p>}
        </section>
    );
}
