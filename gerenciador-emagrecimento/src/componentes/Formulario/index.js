import './Formulario.css'
import CampoTexto from '../CampoTexto'
import { useState } from 'react'

const Formulario = () => {

    const [kalCons, setKalCons] = useState('');
    const [proteinaCons, setProteinaCons] = useState('');
    const [carboidratoCons, setCarboidratoCons] = useState('');
    const [gorduraCons, setGorduraCons] = useState('');


    const aoSalvar = () => {
        const kalConsStorage = localStorage.getItem('kal-cons');
        const proteinaConsStorage = localStorage.getItem('proteina-cons');
        const carboidratoConsStorage = localStorage.getItem('carboidrato-cons');
        const gorduraConsStorage = localStorage.getItem('gordura-cons');

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