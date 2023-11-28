import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import { CartProvider } from './context/ContextColection';
import Carrito from './components/Carrito/Carrito';
import Checkout from './Checkout/Checkout';

function App() {

  
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>

          <NavBar />

          <Routes>

            <Route exact path='/' element={<ItemListContainer />}
            />
            <Route path='/item/:id' element={<ItemDetailContainer />}
            />
            <Route path='/productos' element={<ItemListContainer />}
            />
            <Route path="/productos/:categoria" element={<ItemListContainer />}
            />
            <Route path="/nosotros" element={<Nosotros />}
            />
            <Route path="/contacto" element={<Contacto />}
            />
            <Route path='/carrito' element={<Carrito/>}
            />
            <Route path='/checkout' element={<Checkout/>}
            />

          </Routes>

        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
