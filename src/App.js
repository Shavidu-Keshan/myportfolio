import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './About';
import Skills from './Skills';
import Work from './components/Work';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
