import React from 'react';
import { GlobalStyle } from './components/theme/globalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <GlobalStyle/>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Footer/>
    </>
  );
}

export default App;
