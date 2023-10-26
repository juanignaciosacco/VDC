import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import ItemListContainer from './routes/itemListContainer/ItemListContainer';
import Home from './routes/home/Home';
import ItemDetailsContainer from './routes/itemDetailsContainer/ItemDetailsContainer';
import Cart from './components/cart/Cart';
import Example from './components/navBar/NavBar'
import { ItemsProvider } from './contextos/CartContext'
import ContactForm from './components/contactForm/ContactForm';
import Footer from './components/footer/Footer';
import Contacto from './components/contacto/Contacto';
import Politicas from "./components/Politicas/Politicas";

function App() {
    return (
        <HashRouter>
            <ItemsProvider>
                <Example />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/:productos" element={<ItemListContainer />} />
                    <Route exact path="/itemDetails/item/:id" element={<ItemDetailsContainer />} />
                    <Route exact path='/cart' element={<Cart />} />
                    <Route exact path='/formularioContacto' element={<ContactForm />} />
                    <Route exact path='/contacto' element={<Contacto />} />
                    <Route exact path='/politicasDePrivacidad' element={<Politicas />} />
                </Routes>
            </ItemsProvider>
            <Footer />
        </HashRouter>
    );
}

export default App;
