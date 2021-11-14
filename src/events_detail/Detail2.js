import React from 'react';

export default function Detail2(){
    return (
        <main id="main">

        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
    
            <ol>
              <li><a href="/">Home</a></li>
              <li>Event Details</li>
            </ol>
            <h2>Dealing with homophobia</h2>
    
          </div>
        </section>

        <section id="gallery-details" class="gallery-details">
          <div class="container">
    
            <div class="row gy-4">
    
              <div class="col-lg-8">
                <div class="swiper-container">
                  <div class="swiper-wrapper align-items-center">
    
                    <div class="swiper-slide">
                      <img src="assets/img/events/22.jpg" alt="" width="100%"/>
                    </div>
    
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4">
                <div class="gallery-info">
                  <h3>Event information</h3>
                  <ul>
                    <li><strong>Event</strong>: How To Deal With Homophobia</li>
                    <li><strong>Date</strong>: 27 June 2021</li>
                    <li><strong>Time</strong>: 6 PM</li>
                    <li><strong>Visit</strong>: <a href="https://www.instagram.com/p/CQliE4_nTh3/" target="_blank" rel="noreferrer">MACEmbraces</a></li>
                  </ul>
                </div>
                <div class="gallery-description">
                  <h2>Event description</h2>
                  <p> Why is it that, as a culture, we are more comfortable seeing two men holding guns than holding hands👬? Why, isn't all kinds of love beautiful? Just as beautiful as love can be?! 💕</p>
                  <p>"Openness may not completely disarm prejudice, but it's a good place to start." ~Jason Collins</p>
                  <p>NSS MACE organises a talk session on " How to deal with Homophobia " 🌈, in collaboration with Sex Education Kerala.</p>
                  <p>Speakers - Dr.Jithin T Joseph, Psychiatrist & Co- founder of Infoclinic and Mr. Ashish Jose, a queer activist.</p>
                </div>
              </div>
    
            </div>
    
          </div>
        </section>
    
      </main>
    );
}
