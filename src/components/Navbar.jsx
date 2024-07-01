// import React, { Component } from 'react'
import React from "react";
import {Link} from 'react-router-dom'
//class based changed to function based
// export default class Navbar extends Component
const Navbar=()=>{
   // render() {
    return (
     <>
     <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">NewsGorilla</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/business">Business</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" aria-current="page"to="/entertainment">Entertainment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/general">General</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/health">Health</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "aria-current="page" to="/science">Science</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  aria-current="page" to="/sports">Sports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/technology">Technology</Link>
        </li> 
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
     </>
    )
  }
  export default Navbar;
//changing class based to function based->remove render,convert the class wla line to a function and write the export statement in last