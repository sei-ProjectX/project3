import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

function Navs() {
    return (
     <div>
      <div className="header">
        <h1>Explore</h1>
        </div>
      <div className="nav" fixed="top">
     
        <li><Link to="/"><img src={require('../../Images/home.svg')} alt="Home" width="70" height="35"/></Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Explore">Explore</Link></li>
       
     
      </div>
      </div>
    );
  }
  
  export default Navs;