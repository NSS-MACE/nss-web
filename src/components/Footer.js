import React from 'react';

export default function Footer(){
    return (
   <footer id="footer">

      <div className="footer-top">  
        <div className="container">
  
          <div className="row  justify-content-center">
            <div className="col-lg-6">
              <h3>Connect Us</h3>
            </div>
          </div>
  
          <div className="social-links">
            <a href="https://www.facebook.com/nssmace/" target="_blank" rel="noreferrer" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/nss.mace/" target="_blank" rel="noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCRgzAAJX1iojuu8OtnC69Cg/featured" target="_blank" rel="noreferrer" className="youtube"><i className="bi bi-youtube"></i></a>
          </div>
  
        </div>
      </div>

   </footer>
    );
}
