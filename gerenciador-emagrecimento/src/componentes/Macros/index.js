import './Macros.css';

const Macros = (props) => {
    return (
        <div className="macros">
            <ul>
                <li>
                    <label>Proteina: 128g</label>
                    <label>Proteina consumida: {props.proteina}g</label>
                    <label>Proteina faltante: {props.proteinaFaltante}g</label>
                </li>
                <li>
                    <label>Carboidrato: 364g</label>
                    <label>Carboidrato consumido: {props.carboidrato}g</label>
                    <label>Carboidrato faltante: {props.carboidratoFaltante}g</label>
                </li>
                <li>
                    <label>Gordura: 64g</label>
                    <label>Gordura consumida: {props.gordura}g</label>
                    <label>Gordura faltante: {props.gorduraFaltante}g</label>
                </li>
            </ul>
        </div>
    )
}

export default Macros;