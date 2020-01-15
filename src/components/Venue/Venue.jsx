import React, { Component } from 'react';
import './Venue.css'
class Venue extends Component {
    state = {  }
   
   
    render() { 
          
        return ( 
            <div className="venues">
           
       
            <div>
                   <h3>{this.props.venue.name}</h3>
                   <p>Address: {this.props.venue.address}</p>
                    <p>Category: {this.props.venue.catgeroy}</p>
                    
            
          
            </div>
      </div>
         );
    }
}
 
export default Venue;