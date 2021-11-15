import React from 'react';

export default function Events(){
    return (
   <section id="events">
      <div className="container">
          <div className="section-title">
            <h2>Recent Events</h2>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="card-text-centre">
                  <img src="assets/img/events/1.jpg" className="card-img-top" alt=""/>
                  <div className="card-body">
                      <h5 className="card-title">Nilavu</h5>
                      <p className="card-text">Talks on stress management</p>
                      <a href="/event1">Learn More</a>
                  </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card-text-centre">
                  <img src="assets/img/events/2.jpg" className="card-img-top" alt=""/>
                  <div className="card-body">
                      <h5 className="card-title">Dealing with homophobia</h5>
                      <p className="card-text"> #MACEmbraces</p>
                      <a href="/event2">Learn More</a>
                  </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card-text-centre">
                  <img src="assets/img/events/3.jpg" className="card-img-top" alt=""/>
                  <div className="card-body">
                      <h5 className="card-title">Mm...</h5>
                      <p className="card-text"> Food Vlogging Competition</p>
                      <a href="/event3">Learn More</a>
                  </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card-text-centre">
                  <img src="assets/img/events/4.jpg" className="card-img-top" alt=""/>
                  <div className="card-body">
                      <h5 className="card-title">Reading Day</h5>
                      <p className="card-text">Session with Jayakumar IAS</p>
                      <a href="/event4">Learn More</a>
                  </div>
              </div>
            </div>
          </div>
      </div>
   </section>
    );
}
