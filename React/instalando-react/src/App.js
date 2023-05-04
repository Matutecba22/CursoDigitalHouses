import logo from './logo.svg';
// import './App.css';
// import Pelicula from './components/Peliculas';
import TiraPeliculas from './components/TiraPeliculas';
import Contador from './components/Contador'
// import MiComponente from './components/MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <main>
        <TiraPeliculas />
        {/* <MiComponente /> */}
        <Contador inicial = {0} />
        {/* <Pelicula /> */}
      </main>
    </div>
  );
}

export default App;
