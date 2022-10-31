import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ItemListContainer from './routes/ItemListContainer/ItemListContainer';
import Home from './routes/Home/Home';
import ItemDetailsContainer from './routes/ItemDetailsContainer/ItemDetailsContainer';
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar'
import { ItemsProvider } from './contextos/CartContext'
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <BrowserRouter>
        <ItemsProvider>
        <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/category/:categoria" element={<ItemListContainer />} />
              <Route exact path="/itemDetails/item/:id" element={<ItemDetailsContainer />} />
              <Route exact path='/Cart' element={<Cart />} />
              <Route exact path='/formularioContacto' element={<ContactForm />} />
            </Routes> 
        </ItemsProvider>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
