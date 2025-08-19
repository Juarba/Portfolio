import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Technologies from './components/technologies/Technologies';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Technologies/>
      <Contact />
    </>
  );
}

export default App;
