import React from 'react';

export default function Header(){

  return (
    <header id="header" className="d-flex align-items-center" style={{background:'rgba(21, 5, 23, 0.8)'}}>
      <div className="container-fluid d-flex align-items-center justify-content-lg-between">
  
        <a href="/" className="logo me-auto me-lg-0"><img src="assets/img/favicon.png" alt="" className="img-fluid"/>NSS MACE Unit</a>
  
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto" href="/">Home</a></li>
            <li><a className="nav-link scrollto" href="/#about">About</a></li>
            <li><a className="nav-link scrollto active" href="/#events">Events</a></li>
            <li><a className="nav-link scrollto " href="/#gallery">Gallery</a></li>
            <li><a className="nav-link scrollto" href="/#team">Team</a></li>
            <li><a className="nav-link scrollto" href="#footer">Connect</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
  
        <div className="header-social-links d-flex align-items-center">
          <a href="https://www.facebook.com/nssmace/" target="_blank" rel="noreferrer" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/nss.mace/" target="_blank" rel="noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UCRgzAAJX1iojuu8OtnC69Cg/featured" target="_blank" rel="noreferrer" className="youtube"><i className="bi bi-youtube"></i></a>
        </div>
  
      </div>
    </header>
    );
  }
