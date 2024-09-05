import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Nav />
      <About />
    </div>
  );
}

export default App;
