import './Macros.css';

const Macros = (props) => {
    return (
        <div className="macros">
            <ul>
                <li>
                    <label>Proteina: {props.proteina}</label>
                    <label>Proteina consumida: {props.proteinaCons}g</label>
                    <label>Proteina faltante: {props.proteinaFaltante}g</label>
                </li>
                <li>
                    <label>Carboidrato: {props.carboirdrato}</label>
                    <label>Carboidrato consumido: {props.carboidratoCons}g</label>
                    <label>Carboidrato faltante: {props.carboidratoFaltante}g</label>
                </li>
                <li>
                    <label>Gordura: {props.gordura}</label>
                    <label>Gordura consumida: {props.gorduraCons}g</label>
                    <label>Gordura faltante: {props.gorduraFaltante}g</label>
                </li>
            </ul>
        </div>
    )
}

export default Macros;