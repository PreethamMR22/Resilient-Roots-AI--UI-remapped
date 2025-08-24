import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/about/about';
import Features from './components/Features/Features';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </div>
  )
}

export default App
