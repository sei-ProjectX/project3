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

        return ( 
        <div className="Image">

        </div>
                
               
               
       );
    }
    apifnction = (name) => {
        console.log('api')
        console.log(name)
        this.setState({
            venues: []
        }) 
        const Venue={
            name:"",
            address:"",
            catgeroy:""
        }
        //let venuesCopy=[]
       // const baseUrl=(`https://api.foursquare.com/v2/venues/explore?ll=24.774265,%2046.738586&near=riyadh,Sa&client_id=VGGSYE2LQEBOVDWZA5ZGPGUVO2ZDYZVWOSQQSIDUETSW5BVZ&client_secret=BVWBVFWBKKNQBM251FZAODKF24WAXYFURTSEI3NNDG1JED0G&v=20200101`)
        axios.get(`https://api.foursquare.com/v2/venues/explore?near=${name},Sa&client_id=VGGSYE2LQEBOVDWZA5ZGPGUVO2ZDYZVWOSQQSIDUETSW5BVZ&client_secret=BVWBVFWBKKNQBM251FZAODKF24WAXYFURTSEI3NNDG1JED0G&v=20200101`)
        .then(response => {
            console.log(response)
            const res = response.data.response.groups
            res.forEach((group)=>{
                (group.items.forEach((item)=>{
                    console.log(item)
                    Venue.name = item.venue.name
                    Venue.address = item.venue.location.address
                    Venue.catgeroy = item.venue.categories[0].name
                    
                    this.state.venues.push({...Venue})   
                }))   
                // console.log(this.state.venues)
                })
        })
        
        // .then(()=> {
        //  //   this.setState({venues: venuesCopy})
        // }).catch(err=> err.message)
    }
}
 
export default Image;