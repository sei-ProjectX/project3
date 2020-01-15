import axios from 'axios'
import React, { Component } from 'react'

class Image extends Component {
    state = { 
        Img:''
     }
    //  handleChange = e => {
    //     const value = e.target.value
    //     let copycity = {...this.state.city}
    //     console.log(value)
    //     copycity=value
    //     this.setState({
    //         city:copycity
    //     })
    //     this.apifnction(copycity)
    //  }
    
    render() { 
        console.log(this.state.Img)
        return ( 
        <div className="Image">
{/* <img src={require('../../Images/bookmark-white.svg')} 
alt="Home" width="40" height="20" 
onClick={() => this.handleclick(vanue)}/> */}
        {this.state.Img ? <img src={this.state.Img} /> : null}
        <img src={this.state.Img} />
        <img src="https://images.pexels.com/photos/3467150/pexels-photo-3467150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <hr />
        </div>
                
               
               
       );
    }
componentDidMount = (e)=>{
        axios.get(this.props.img)
        .then(response => {
            console.log(response)

           
            console.log('response')
            console.log(response)
             const res = response.data.response.photos.items
             res.forEach((item)=>{
            const { prefix, suffix } = item
            
            this.setState( ({...copyState}) => {
                copyState.Img = `${prefix}200${suffix}`
            })

        
                })
        })
        .catch(
            err => console.error(err)
        )
        
        // })
        
     
    }
}
 
export default Image;