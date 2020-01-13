import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/api">api</Link>
      </div>
    );
  }
  
  export default Nav;