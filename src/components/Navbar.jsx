import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const shopRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollIntoView = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="nav-item d-flex">
            <div className="nav-link pe-3">Login</div>
            <Link to="/Cart" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          </div>
        </div>
      </nav>

      {/* Nav */}
      <div className="navbar d-flex flex-column justify-content-lg-between flex-md-row justify-content-md-center align-items-md-center"> {/* Center items on small screens */}
        <nav className="nav">
          <Link to='/' className="lead link-dark text-decoration-none">CERAMIC-STUDIO</Link>
        </nav>
        <nav className="nav">
          <div className="d-flex flex-row ">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" onClick={() => handleScrollIntoView(contactRef)} ref={contactRef}>Shop</Link>
            <Link className="nav-link" to="/About">About</Link>
            <Link className="nav-link" onClick={() => handleScrollIntoView(shopRef)} ref={shopRef}>Contact</Link>
          </div>
        </nav>
      </div>

    
      <section id="contact" ref={contactRef}>
       
      </section>
    </>
  );
};
