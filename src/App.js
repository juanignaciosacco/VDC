import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navBar/NavBar';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
        <h1>Petshop Carmela</h1>
      <main>
        <ItemListContainer greetings='Hola esta es mi primera pre entrega del proyecto react' />
      </main>
    </div>
  );
}

export default App;
