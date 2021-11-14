import React from 'react';

export default function Hero(){
    return (
    <section id="hero">
        <div className="hero-container">
          <h1><img src="assets/img/favicon.png" height="64" alt="" style={{marginRight:'10px'}}/>NSS MACE</h1>
          <h2><i>We mould a generation of efficient and hard working Social Engineers</i></h2>
          <a href="#about" className="btn-get-started scrollto">About Us</a>
        </div>
    </section>
    );
}
