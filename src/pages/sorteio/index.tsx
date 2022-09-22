import React, { useState } from 'react';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';
import { useResultadoSorteio } from '../../state/hooks/useResultadoSorteio';
import style from './Sorteio.module.scss';

export default function Sorteio() {
    const participantes = useListaDeParticipantes();

    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');

    const resultado = useResultadoSorteio();

    const sortear =(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!);
            setTimeout(() => setAmigoSecreto(''), 5000)
        }
    }

    return (
        <section>
            <h2>Quem vai tirar o papelzinho?</h2>
            <form className={style.form} onSubmit={sortear}>
                <select
                    className={style.form__select}
                    required
                    name="participateDaVez"
                    id="participateDaVez"
                    placeholder='Selecione o seu nome'
                    value={participanteDaVez}
                    onChange={event => setParticipanteDaVez(event.target.value)}
                >
                    <option className={style.form__option}>
                        Selecione seu nome
                    </option>
                    {
                        participantes.map(participante => (
                            <option key={participante} className={style.form__option}>
                                {participante}
                            </option>
                        ))
                    }
                </select>
                
                <p>Clique em em sortear para ver quem é seu amigo secreto!</p>

                <button className={style.form__button}>Sortear</button>
            </form>
            {amigoSecreto &&<p role='alert' className={style.form__resultado}>{amigoSecreto}</p>}
            <footer className="sorteio">
                <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
            </footer>
        </section>
    );
}
