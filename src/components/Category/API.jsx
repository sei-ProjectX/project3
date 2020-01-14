import axios from 'axios'
import React, { Component } from 'react'
class City extends Component {
    state = { 
        venues:[],
        city:''
     }
     handleChange = e => {
        const value = e.target.value
        let copycity = {...this.state.city}
        copycity=value
        this.setState({
            city:copycity
        })
     }
    render() { 
        const cities = [ 'riyadh', 'jeddah','abha', 'hail', 'khobar','madinah','mekkah']
        return ( <div>
                {
                cities.map((city) => {
                    return(
                        <div>
                     <input type="radio"
                     id="city"
                     name="city"
                     value={city}
                     onClick={this.handleChange}
                 />{city} <br/>
                 </div>
                    )
                })
            }
            {this.state.venues.map((vanue) => {
                return (
                    <p>{vanue}</p>
            )
            })}
        </div> );
    }
    componentDidMount() {
       // const baseUrl=(`https://api.foursquare.com/v2/venues/explore?ll=24.774265,%2046.738586&near=riyadh,Sa&client_id=VGGSYE2LQEBOVDWZA5ZGPGUVO2ZDYZVWOSQQSIDUETSW5BVZ&client_secret=BVWBVFWBKKNQBM251FZAODKF24WAXYFURTSEI3NNDG1JED0G&v=20200101`)
        axios.get(`https://api.foursquare.com/v2/venues/explore?near=${this.state.city},Sa&client_id=VGGSYE2LQEBOVDWZA5ZGPGUVO2ZDYZVWOSQQSIDUETSW5BVZ&client_secret=BVWBVFWBKKNQBM251FZAODKF24WAXYFURTSEI3NNDG1JED0G&v=20200101`)
        .then(response => {
            const venuesCopy=[...this.state.venues]
            const res = response.data.response.groups
            res.map((group)=>{
                group.items.map((item)=>{
                    venuesCopy.push(item.venue.name)
                })
            })
            this.setState({
                venues:venuesCopy
               })  
            console.log(this.state.venues)// ({persons})
        })
    }
}
export default City;