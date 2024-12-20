import './Formulario.css'
import CampoTexto from '../CampoTexto'
import { useState } from 'react'

const Formulario = () => {

    const [kalCons, setKalCons] = useState(0);
    const [proteinaCons, setProteinaCons] = useState(0);
    const [carboidratoCons, setCarboidratoCons] = useState(0);
    const [gorduraCons, setGorduraCons] = useState(0);


    const aoSalvar = () => {
        const kalConsStorage = parseFloat(localStorage.getItem('kal-cons')) || 0;
        const proteinaConsStorage = parseFloat(localStorage.getItem('proteina-cons')) || 0;
        const carboidratoConsStorage = parseFloat(localStorage.getItem('carboidrato-cons')) || 0;
        const gorduraConsStorage = parseFloat(localStorage.getItem('gordura-cons')) || 0;

        if(kalConsStorage) {
            setKalCons(kalConsStorage + kalCons);
        }

        if(proteinaConsStorage) {
            setProteinaCons(proteinaConsStorage + proteinaCons);
        }

        if(carboidratoConsStorage) {
            setCarboidratoCons(carboidratoConsStorage + carboidratoCons);
        }

        if(gorduraConsStorage) {
            setGorduraCons(gorduraConsStorage + gorduraCons);
        }

        localStorage.setItem('kal-cons', kalCons);
        localStorage.setItem('proteina-cons', proteinaCons);
        localStorage.setItem('carboidrato-cons', carboidratoCons);
        localStorage.setItem('gordura-cons', gorduraCons);
   
        
        
    }

    return (
        <form className="formulario" onSubmit={aoSalvar}>
            <CampoTexto label="Calorias" valor={kalCons} aoAlterado={valor => setKalCons(valor)} />
            <CampoTexto label="Proteinas" valor={proteinaCons} aoAlterado={valor => setProteinaCons(valor)} />
            <CampoTexto label="Carboidratos" valor={carboidratoCons} aoAlterado={valor => setCarboidratoCons(valor)} />
            <CampoTexto label="Gorduras" valor={gorduraCons} aoAlterado={valor => setGorduraCons(valor)} />
            <button type="submit">Gravar</button>
        </form>
    )
}

export default Formulario;