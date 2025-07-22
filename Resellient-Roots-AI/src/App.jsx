import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        {/* Add more sections here */}
      </main>
    </div>
  )
}

export default App
