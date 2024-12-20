import './Footer.css'

const Footer = () => {
    const resetar = () => {
        localStorage.setItem('kal-cons', 0);
        localStorage.setItem('proteina-cons', 0);
        localStorage.setItem('carboidrato-cons', 0);
        localStorage.setItem('gordura-cons', 0);
        window.location.reload();
    }


    return (
        <div className="footer">
            <button onClick={resetar} type="button">Resetar</button>
        </div>
    )
}

export default Footer;