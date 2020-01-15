import axios from 'axios'
import React, { Component } from 'react'

class City extends Component {
    state = { 
        venues:[],
        //[{},{}]
        city:''
     }
     handleChange = e => {
        const value = e.target.value
        let copycity = {...this.state.city}
        console.log(value)
        copycity=value
        this.setState({
            city:copycity
        })
        this.apifnction(copycity)
     }
    
    render() { 

        const cities = [ 'riyadh', 'jeddah','abha', 'hail', 'khobar','madinah','mekkah']
        return ( <div>
                <form onSubmit={this.handleSubmit}>
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
                 <div>
                {/* <button type="submit">Search</button> */}
                </div>
                 </form>
                 {this.state.venues.map((vanue) => {
                return (
                    <p>{vanue}</p>
            )
            })}

               
        </div> );
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
        //let venuesCopy=[]
       // const baseUrl=(`https://api.foursquare.com/v2/venues/explore?ll=24.774265,%2046.738586&near=riyadh,Sa&client_id=VGGSYE2LQEBOVDWZA5ZGPGUVO2ZDYZVWOSQQSIDUETSW5BVZ&client_secret=BVWBVFWBKKNQBM251FZAODKF24WAXYFURTSEI3NNDG1JED0G&v=20200101`)
        axios.get(`https://api.foursquare.com/v2/venues/explore?near=${name},Sa&client_id=VGGSYE2LQEBOVDWZA5ZGPGUVO2ZDYZVWOSQQSIDUETSW5BVZ&client_secret=BVWBVFWBKKNQBM251FZAODKF24WAXYFURTSEI3NNDG1JED0G&v=20200101`)
        .then(response => {
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
    
                    this.state.venues.push({...Venue})   
                }))   
                console.log(this.state.venues)
                })
        })
        
        // .then(()=> {
        //  //   this.setState({venues: venuesCopy})
        // }).catch(err=> err.message)
    }
}
 
export default City;