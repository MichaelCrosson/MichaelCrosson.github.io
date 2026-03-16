import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Services from './components/Services';
import Companies from './components/Companies';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Companies />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
