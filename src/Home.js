import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Highlights from './components/Highlights';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Team from  './components/Team';
import Footer from './components/Footer';

function Home() {
  return (
    <div>
      <Hero/>
      <Header/>
      <main id="main">
        <About/>
        <Highlights/>
        <Events/>
        <Gallery/>
        <Team/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
