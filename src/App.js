
import React from 'react';
import './assets/css/App.css';

// Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
// import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';

function App() {
  var buttonString = "Ver más";

  return (
    <div className="App">
      <Header />
      <Slider
        title="Bienvenido al Blog con React"
        btn={buttonString}
      />

      <div className="center">

        <Peliculas />
        <Sidebar />
        <div className="clearfix"></div>

      </div> {/* end div center */}

      <Footer />
    </div>
  );
}

export default App;
