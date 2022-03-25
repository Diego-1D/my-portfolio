import React from 'react';
import { GlobalStyle } from './components/theme/globalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <>
     <GlobalStyle/>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
    </>
  );
}

export default App;
