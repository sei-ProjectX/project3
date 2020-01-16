import React, { Component } from 'react';
import './Venue.css'
class Venue extends Component {
    state = {  }
   
   
    render() { 
          
        return ( 
            <div className="venues">
                   <h3>{this.props.venue.name}</h3>
                   <p>{this.props.venue.catgeroy}</p>
                   <p>Address: {this.props.venue.address}</p>
                    
      </div>
         );
    }
}
 
export default Venue;