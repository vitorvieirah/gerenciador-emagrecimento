import './Formulario.css'
import CampoTexto from '../CampoTexto'
import { useState } from 'react'

const Formulario = () => {
    const [kalCons, setKalCons] = useState('');
    const [kalFalta, setKalFalta] = useState('');
    const [proteinaCons, setProteinaCons] = useState('');
    const [proteinaFalta, setProteinaFalta] = useState('');
    const [carboidratoCons, setCarboidratoCons] = useState('');
    const [carboidratoFalta, setCarboidratoFalta] = useState('');
    const [gorduraCons, setGorduraCons] = useState('');
    const [gorduraFalta, setGorduraFalta] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log(kalCons, proteinaCons, gorduraCons, carboidratoCons);
    }

    return (
        <form className="formulario" onSubmit={aoSalvar}>
            <CampoTexto label="Calorias" valor={kalCons} aoAlterado={valor => setKalCons(valor)}/>
            <CampoTexto label="Proteinas" valor={proteinaCons} aoAlterado={valor => setProteinaCons(valor)}/>
            <CampoTexto label="Carboidratos" valor={carboidratoCons} aoAlterado={valor => setCarboidratoCons(valor)}/>
            <CampoTexto label="Gorduras" valor={gorduraCons} aoAlterado={valor => setGorduraCons(valor)}/>
            <button type="submit">Gravar</button>
        </form>
    )
}

export default Formulario;