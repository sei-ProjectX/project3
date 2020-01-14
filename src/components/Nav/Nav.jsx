import React from 'react';
import {Link} from 'react-router-dom'
import './Nav.css';

function Nav() {
    return (
      <div className="nav">
     
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
         <li><Link to="/Events">Events</Link></li>
     
      </div>
    );
  }
  
  export default Nav;