import './App.css';
import ItemListContainer from './Rutas/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import Home from './Rutas/home/Home';
import ItemDetailsContainer from './Rutas/itemDetailsContainer/ItemDetailsContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailsContainer />} />
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
