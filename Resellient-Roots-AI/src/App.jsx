import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/about/about';
import Features from './components/Features/Features';
import Review from './components/Review/Review';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Review/>
      <Team />
      <Footer />
    </div>
  )
}

export default App
