import React, { Component  } from "react";
import "../List/List.css"  




export default class List extends Component {


    state ={
       
        displayMenu: false  // this is setp is importent not sure yet why but it has to do with disable the bar when clicking
        
        
    }
    
    

    showDropdownMenu = (event) => {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu); // vanilla js here to fire event when clicking 
        });
      }
    
      hideDropdownMenu = () => {
        this.setState({ displayMenu: false }, () => {
            
          document.removeEventListener('click', this.hideDropdownMenu); // vanilla js here to fire event when clicking 
        });
    
    
      }
      

    render(){
        return (
       <div  className="dsropdown" >
             <div className="button" onClick={this.showDropdownMenu}> ☰ 
        </div>
   
             { this.state.displayMenu ? (
             <ul>
            <li> <p name =" " onClick =" "> Remove </p> </li>
            <li> <p  name =" " onClick =" "> Remove </p>  </li>
            <li> <p  name =" " onClick =" "> Remove </p>  </li>

             </ul>
           ):
           (
             null
           )
           }

          </div>
        )
    }


}
