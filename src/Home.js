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
      <a href="#hero" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </div>
  );
}

export default Home;
