import React, {useEffect} from 'react';

export default function Header(){
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  const scrollto = (el) => {
    let header = select('#header');
    let offset = header.offsetHeight;
    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  useEffect(()=>{
    let selectHeader = select('#header');
    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop;
      let nextElement = selectHeader.nextElementSibling;
      const headerFixed = () => {
        if ((headerOffset - window.scrollY) <= 0) {
          selectHeader.classList.add('fixed-top')
          nextElement.classList.add('scrolled-offset')
        } else {
          selectHeader.classList.remove('fixed-top')
          nextElement.classList.remove('scrolled-offset')
        }
      }
      window.addEventListener('load', headerFixed)
      onscroll(document, headerFixed)
    }

    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar');
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  });

  return (
    <header id="header" className="d-flex align-items-center" style={{background:'rgba(21, 5, 23, 0.8)'}}>
      <div className="container-fluid d-flex align-items-center justify-content-lg-between">
  
        <a href="/" className="logo me-auto me-lg-0"><img src="assets/img/favicon.png" alt="" className="img-fluid"/>NSS MACE Unit</a>
  
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto" href="/nss-web/#">Home</a></li>
            <li><a className="nav-link scrollto" href="/nss-web/#/#about">About</a></li>
            <li><a className="nav-link scrollto active" href="/nss-web/#/#events">Events</a></li>
            <li><a className="nav-link scrollto " href="/nss-web/#/#gallery">Gallery</a></li>
            <li><a className="nav-link scrollto" href="/nss-web/#/#team">Team</a></li>
            <li><a className="nav-link scrollto" href="/nss-web/#/#footer">Connect</a></li>
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
