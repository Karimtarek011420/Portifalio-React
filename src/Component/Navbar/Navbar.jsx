import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Navbar extends Component {
    
  render() {
    return <>
    <nav className="navbar navbar-expand-lg bg-secondary bg-gradient">
  <div className="container">
    <Link className="navbar-brand text-white fs-2" to="/STARTFRAMEWORK">START FRAMEWORK</Link>
    <button className="navbar-toggler border border-dark border-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link text-white" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="Portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="#">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  }
}
