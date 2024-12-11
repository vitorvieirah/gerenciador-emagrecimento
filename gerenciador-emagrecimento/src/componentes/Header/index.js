import './Header.css';

const Header = (props) => {
    return (
        <header className="header">
            <label>Calorias totais: {props.caloriasTotais}</label>
            <label>Calorias que faltam: {props.caloriasFaltantes}</label>
            <label>Calorias consumidas: {props.caloriasConsumidas}</label>
        </header>
    )
}


export default Header;