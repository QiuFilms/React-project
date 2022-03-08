import React from 'react'
import logo from "./images/block.png"
import '../App.css';
import IsLoged from './IsLoged';

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img src={logo} className="img-width-max" />
  <a href="/" className="navbar-brand">MC-Ideas</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/"><span className="sr-only">asd</span></a>
      </li>
      <li className="nav-item ml-2">
        <a className="nav-link" href="vanilla-features">Vanilla features</a>
      </li>
      <li className="nav-item ml-2">
        <a className="nav-link" href="resource-packs">Resource packs</a>
      </li>
      <li className="nav-item dropdown ml-2">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Mods
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Fabric</a>
          <a className="dropdown-item" href="#">Forge</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Version...</a>
        </div>
      </li>
      <li className="nav-item dropdown ml-2">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Datapacks
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">1.18</a>
          <a className="dropdown-item" href="#">1.17</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Version...</a>
        </div>
      </li>
    </ul>
    <form className=" d-flex my-2 my-lg-0 ml-5">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <IsLoged />
  </div>
</nav>
  )
}

export default Header
