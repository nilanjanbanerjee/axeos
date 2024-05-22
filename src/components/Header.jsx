import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-md btco-hover-menu navbar-1">
  <div className="container">
    
    <NavLink className="navbar-brand" to="/">
      <img src="src/assets/images/logo-1.png" className="img-fluid" alt="logo" />
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item"><NavLink className="nav-link" to="/"> Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/About"> About</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/Services"> Services</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/Portfolio"> Portfolio</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/Blog"> Blog</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/Contact"> Contact</NavLink></li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><a className="nav-link btn btn-primary" href="#">Buy Now</a></li>
        <li className="nav-item"><a className="nav-link" id="addClass" href="#"><i className="icofont icofont-search-alt-1" /></a></li>
      </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}

export default Header