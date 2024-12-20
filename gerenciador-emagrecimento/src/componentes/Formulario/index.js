import React, { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto';

const Formulario = ({ atualizarConsumo }) => {
  const [kalorias, setKalorias] = useState(0);
  const [proteinas, setProteinas] = useState(0);
  const [carboidratos, setCarboidratos] = useState(0);
  const [gorduras, setGorduras] = useState(0);

  const aoSalvar = (e) => {
    e.preventDefault();
    atualizarConsumo(parseFloat(kalorias), parseFloat(proteinas), parseFloat(carboidratos), parseFloat(gorduras));
    setKalorias(0);
    setProteinas(0);
    setCarboidratos(0);
    setGorduras(0);
  };

  return (
    <form className="formulario" onSubmit={aoSalvar}>
      <CampoTexto label="Calorias" valor={kalorias} aoAlterado={setKalorias} />
      <CampoTexto label="Proteínas" valor={proteinas} aoAlterado={setProteinas} />
      <CampoTexto label="Carboidratos" valor={carboidratos} aoAlterado={setCarboidratos} />
      <CampoTexto label="Gorduras" valor={gorduras} aoAlterado={setGorduras} />
      <button type="submit">Gravar</button>
    </form>
  );
};

export default Formulario;
