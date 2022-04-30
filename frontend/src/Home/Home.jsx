import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home(){

    
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand text-white " href="\Home">ItExponenit</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span>
                <i className="fas fa-bars" style={{color: 'white'}}></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav m-auto">
              <li class="nav-item active">
                  <Link className="nav-link text-white text-uppercase ml-5" to ="/Home">Home&nbsp;<i class="fas fa-home"></i> <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white text-uppercase ml-5" to ="/Reports">Reports&nbsp;<i class="fas fa-chart-bar"></i></Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link text-white text-uppercase ml-5" to ="/About_us">About US&nbsp;<i class="fas fa-address-card"></i></Link>
                </li>
                <li className="nav-item">
                  <Link class="nav-link text-white text-uppercase ml-5" to ="/Testing">Testing&nbsp;<i class="fas fa-vial"></i></Link>
                  </li> 
               
              </ul>
            </div>
            {/*<a className="navbar-brand text-warning " href="\Welcome">Login</a>*/}
            </nav>


          
          
        )


}
export default Home;

/*
                <select>
                <option value="Grapefruit">Grapefruit</option>
                <option href="/Raw"value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
        </select>*/