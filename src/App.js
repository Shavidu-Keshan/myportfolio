import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './About';
import Skills from './Skills';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
