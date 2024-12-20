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

  const [kalFalta, setKalFalta] = useState(0);
  const [proteinaFalta, setProteinaFalta] = useState(0);
  const [carboidratoFalta, setCarboidratoFalta] = useState(0);
  const [gorduraFalta, setGorduraFalta] = useState(0);


  useEffect(() => {
    kalCons = parseFloat(localStorage.getItem('kal-cons')) || 0;
    proteinaCons = parseFloat(localStorage.getItem('proteina-cons')) || 0;
    carboidratoCons = parseFloat(localStorage.getItem('carboidrato-cons')) || 0;
    gorduraCons = parseFloat(localStorage.getItem('gordura-cons')) || 0;

    console.log('Proteina cons antes: ' + proteinaCons);
    console.log('Proteina faltante: ' + proteina - proteinaCons);

    setKalFalta(calorias - kalCons);
    setProteinaFalta(proteina - proteinaCons);
    setCarboidratoFalta(carboidrato - carboidratoCons);
    setGorduraFalta(gordura - gorduraCons);

    console.log('Calorias cons: ' + kalCons);
    console.log('Calorias faltas: ' + kalFalta);
    console.log('Proteina cons: ' + proteinaCons);
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
