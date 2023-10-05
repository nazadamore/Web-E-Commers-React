import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <NavBar/>

      <Routes>

      <Route exact path='/' element={<ItemListContainer/>}
      />
      <Route path='/item/:id' element={<ItemDetailContainer/>}
      />
      <Route path='/productos' element={<ItemListContainer/>}
      />
      <Route path="/productos/:categoria" element={<ItemListContainer />} 
      />

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
