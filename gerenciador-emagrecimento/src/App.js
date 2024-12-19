import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import './App.css'
import Footer from './componentes/Footer';
import Macros from './componentes/Macros';
import { useState, useEffect } from 'react'

function App() {


  const calorias = 1.564;
  const proteina = 128;
  const carboidrato = 364;
  const gordura = 64;
  let kalCons;
  let proteinaCons;
  let carboidratoCons;
  let gorduraCons;

  const [kalFalta, setKalFalta] = useState('');
  const [proteinaFalta, setProteinaFalta] = useState('');
  const [carboidratoFalta, setCarboidratoFalta] = useState('');
  const [gorduraFalta, setGorduraFalta] = useState('');
  

  useEffect(() => {
    kalCons = localStorage.getItem('kal-cons');
    proteinaCons = localStorage.getItem('proteina-cons');
    carboidratoCons = localStorage.getItem('carboidrato-cons');
    gorduraCons = localStorage.getItem('gordura-cons');

    setKalFalta(calorias - kalCons);
    setProteinaFalta(proteina - proteinaCons);
    setCarboidratoFalta(carboidrato - carboidratoCons);
    setGorduraFalta(gordura - gorduraCons);
  })


  return (
    <div className="app">
      <Header 
        calorias={calorias}
        caloriasFaltantes={kalFalta}
        caloriasConsumidas={kalCons}
      />
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
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
