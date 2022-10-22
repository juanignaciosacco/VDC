import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ItemListContainer from './Rutas/itemListContainer/ItemListContainer';
import Home from './Rutas/home/Home';
import ItemDetailsContainer from './Rutas/itemDetailsContainer/ItemDetailsContainer';
import Cart from './components/cart/Cart';
import NavBar from './components/navBar/NavBar'
import { ItemsProvider } from './contextos/CartContext'
import ContactForm from './components/contactForm/ContactForm';

function App() {
  return (
      <BrowserRouter>
        <ItemsProvider>
        <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/category/:categoria" element={<ItemListContainer />} />
              <Route exact path="/itemDetails/:id" element={<ItemDetailsContainer />} />
              <Route exact path='/Cart' element={<Cart />} />
              <Route exact path='/formularioContacto' element={<ContactForm />} />
            </Routes> 
        </ItemsProvider>
      </BrowserRouter>
  );
}

export default App;
