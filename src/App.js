import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <ItemListContainer titulo='Petshop Carmela Boutique' greetings='Hola esta es mi primera pre entrega del proyecto react' />
      </main>
    </div>
  );
}

export default App;
