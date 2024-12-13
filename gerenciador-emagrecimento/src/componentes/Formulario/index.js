import './Formulario.css'
import CampoTexto from '../CampoTexto'

const Formulario = () => {
    return (
        <form className="formulario">
            <CampoTexto label="Teste"/>
            <CampoTexto label="Teste"/>
            <CampoTexto label="Teste"/>   
            <CampoTexto label="Teste"/>
            <button type="submit">Gravar</button>
        </form>
    )
}

export default Formulario;