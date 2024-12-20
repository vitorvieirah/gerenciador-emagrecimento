import './CampoTexto.css';

const CampoTexto = ({ label, valor, aoAlterado }) => {
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input type="number" value={valor} onChange={aoDigitado} />
    </div>
  );
};

export default CampoTexto;
