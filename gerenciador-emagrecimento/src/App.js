import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import './App.css'
import Footer from './componentes/Footer';
import Macros from './componentes/Macros';

function App() {

  


  return (
    <div className="app">
      <Header/>
      <Macros/>
      <Formulario/>
      <Footer/>
    </div>
  );
}

export default App;
