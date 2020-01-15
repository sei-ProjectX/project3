import axios from 'axios'
import React, { Component } from 'react'

class City extends Component {
    state = { 
        venues:[],
        //[{},{}]
        city:'',
        selected_venue: []
     }
     handleChange = e => {
        const value = e.target.value
        let copycity = {...this.state.city}
        console.log(value)
        copycity=value
        this.apifnction(copycity)
        this.setState({
            city:copycity
        })
        
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
            catgeroy:"",
            image: ""
        }
        
       // const baseUrl=(`https://api.foursquare.com/v2/venues/explore?ll=24.774265,%2046.738586&near=riyadh,Sa&client_id=VGGSYE2LQEBOVDWZA5ZGPGUVO2ZDYZVWOSQQSIDUETSW5BVZ&client_secret=BVWBVFWBKKNQBM251FZAODKF24WAXYFURTSEI3NNDG1JED0G&v=20200101`)
        axios.get(`https://api.foursquare.com/v2/venues/explore?near=${name},Sa&client_id=VGGSYE2LQEBOVDWZA5ZGPGUVO2ZDYZVWOSQQSIDUETSW5BVZ&client_secret=BVWBVFWBKKNQBM251FZAODKF24WAXYFURTSEI3NNDG1JED0G&v=20200101`)
        .then(response => {
            let venuesCopy=[]
            console.log(response)
            const res = response.data.response.groups
            res.forEach((group)=>{
                (group.items.forEach((item)=>{
                    console.log(item.venue.id)
                    const id = item.venue.id
                    Venue.image = `https://api.foursquare.com/v2/venues/${id}/photos?client_id=VGGSYE2LQEBOVDWZA5ZGPGUVO2ZDYZVWOSQQSIDUETSW5BVZ&client_secret=BVWBVFWBKKNQBM251FZAODKF24WAXYFURTSEI3NNDG1JED0G&v=20201001`
                    Venue.name = item.venue.name
                    Venue.address = item.venue.location.address
                    Venue.catgeroy = item.venue.categories[0].name
    
                    venuesCopy.push({...Venue})   
                }))   
                console.log(venuesCopy)
                })
                this.setState({venues: venuesCopy})
        })
        
       
    }
    render() { 
        console.log('kk')
        console.log(this.state.venues)
        const content = this.state.venues.length ? (
            <div>
                {/* {this.state.venues.map(a => (<h1>{a.name}</h1>))} */}
            </div>
        ) : null;
        
        const cities = [ 'riyadh', 'jeddah','abha', 'hail', 'khobar','madinah','mekkah']
        return ( <div>
            {this.state.venues.length}
        {<div>
        {console.log('mmkk')}
    
        </div>
    }


                {
                cities.map((city) => {
                    return(
                        <div>
                     <input type="radio"
                     id="city"
                     name="city"
                     value={city}
                     onChange={this.handleChange}
                    />{city} <br/>
                         </div>
                    ) })
                 }

{this.state.venues.map((venue) => {
        return (
            <div>
                    <li>{venue.name}</li>
                    <p>Address:{venue.address}</p>
                    <p>Category:{venue.catgeroy}</p>
                
                    </div>
            
            )
    } )}
                 
                
                

               
        </div> );
    }
    
}
 
export default City;