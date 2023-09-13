import './App.css';
import Header from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <ItemListContainer/>
    </div>
  );
}

export default App;
