import React, { useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import Macros from './componentes/Macros';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  const calorias = 1564;
  const proteina = 128;
  const carboidrato = 364;
  const gordura = 64;

  const [kalCons, setKalCons] = useState(0);
  const [proteinaCons, setProteinaCons] = useState(0);
  const [carboidratoCons, setCarboidratoCons] = useState(0);
  const [gorduraCons, setGorduraCons] = useState(0);

  const [kalFalta, setKalFalta] = useState(calorias);
  const [proteinaFalta, setProteinaFalta] = useState(proteina);
  const [carboidratoFalta, setCarboidratoFalta] = useState(carboidrato);
  const [gorduraFalta, setGorduraFalta] = useState(gordura);

  useEffect(() => {
    const initialKalCons = parseFloat(localStorage.getItem('kal-cons')) || 0;
    const initialProteinaCons = parseFloat(localStorage.getItem('proteina-cons')) || 0;
    const initialCarboidratoCons = parseFloat(localStorage.getItem('carboidrato-cons')) || 0;
    const initialGorduraCons = parseFloat(localStorage.getItem('gordura-cons')) || 0;

    setKalCons(initialKalCons);
    setProteinaCons(initialProteinaCons);
    setCarboidratoCons(initialCarboidratoCons);
    setGorduraCons(initialGorduraCons);
  }, []);

  useEffect(() => {
    setKalFalta(calorias - kalCons);
    setProteinaFalta(proteina - proteinaCons);
    setCarboidratoFalta(carboidrato - carboidratoCons);
    setGorduraFalta(gordura - gorduraCons);
  }, [kalCons, proteinaCons, carboidratoCons, gorduraCons]);

  const atualizarConsumo = (kalorias, proteinas, carboidratos, gorduras) => {
    const newKalCons = kalCons + kalorias;
    const newProteinaCons = proteinaCons + proteinas;
    const newCarboidratoCons = carboidratoCons + carboidratos;
    const newGorduraCons = gorduraCons + gorduras;

    setKalCons(newKalCons);
    setProteinaCons(newProteinaCons);
    setCarboidratoCons(newCarboidratoCons);
    setGorduraCons(newGorduraCons);

    localStorage.setItem('kal-cons', newKalCons);
    localStorage.setItem('proteina-cons', newProteinaCons);
    localStorage.setItem('carboidrato-cons', newCarboidratoCons);
    localStorage.setItem('gordura-cons', newGorduraCons);
  };

  return (
    <div className="app">
      <Header calorias={calorias} caloriasFaltantes={kalFalta} caloriasConsumidas={kalCons} />
      <Macros
        proteina={proteina}
        proteinaFaltante={proteinaFalta}
        proteinaCons={proteinaCons}
        carboidrato={carboidrato}
        carboidratoFaltante={carboidratoFalta}
        carboidratoCons={carboidratoCons}
        gordura={gordura}
        gorduraFaltante={gorduraFalta}
        gorduraCons={gorduraCons}
      />
      <Formulario atualizarConsumo={atualizarConsumo} />
      <Footer />
    </div>
  );
}

export default App;
