import React from 'react';

export default function Highlights(){
    return (
    <section id="highlights" className="highlights">
        <div className="container">
  
          <div className="row">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="card" style={{backgroundImage:'url("assets/img/award1.jpg")'}}>
                <div className="card-body">
                  <h5 className="card-title">Dr. Soosan George T receiving Indira Gandhi NSS National award for Best NSS Unit</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="card" style={{backgroundImage:'url("assets/img/award2.jpg")'}}>
                <div className="card-body">
                  <h5 className="card-title">Dr. Jai M Paul receiving Indira Gandhi NSS National award for Best Programme Officer</h5>
                </div>
              </div>
  
            </div>
            <div className="col-md-6 d-flex align-items-stretch mt-4">
              <div className="card" style={{backgroundImage:'url("assets/img/award3.jpg")'}}>
                <div className="card-body">
                  <h5 className="card-title">Miss Sariga P Anand receiving Indira Gandhi NSS National award for Best NSS Volunteer</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch mt-4">
              <div className="card" style={{backgroundImage:'url("assets/img/award4.jpg")'}}>
                <div className="card-body">
                  <h5 className="card-title">Miss Athira R representing KTU NSS Cell at Republic Day Parade at New Delhi</h5>
                </div>
              </div>
            </div>
          </div>
  
        </div>
    </section>
    );
}
