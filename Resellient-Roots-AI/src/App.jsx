import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/about/about';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
