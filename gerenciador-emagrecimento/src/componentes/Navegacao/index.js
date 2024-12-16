const Navegacao = (props) => {
    return (
        <div>
            <ul>
                <li>
                    
                    <label>Proteinas: {props.proteina}</label>
                </li>
                <li>
                    <label>Carboidrato: {props.proteina}</label>
                </li>
                <li>
                    <label>Gordura: {props.proteina}</label>
                </li>
            </ul>
        </div>
    )
}

export default Navegacao;