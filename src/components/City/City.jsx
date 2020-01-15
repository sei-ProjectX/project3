import axios from 'axios'
import React, { Component } from 'react'
import Image from '../Image/Image'


class City extends Component {
    state = { 
        venues:[],
        //[{},{}]
        city:''
     }
     handleChange = e => {
        const value = e.target.value
        let copycity = {...this.state.city}
        // console.log(value)
        copycity=value
        this.apifnction(copycity)
        this.setState({
            city:copycity
        })
        
     }
     apifnction = (name) => {
        // console.log('api')
        // console.log(name)
        this.setState({
            venues: []
        }) 
        const Venue={
            name:"",
            address:"",
            catgeroy:"",
            image: ""
        }
        
        axios.get(`https://api.foursquare.com/v2/venues/explore?near=${name},Sa&client_id=ZWEXAQLQLSLQRUKLX0UTVLSXNZ4KLXVSWPIEHIFKBB1RIH2S&client_secret=EWRATLMQE1UHCXBJZ3ERVT3FVW3XUD32QOAL2WI4YC0TQIKY&v=20200101`)
        .then(response => {
            let venuesCopy=[]
            // console.log(response)
            const res = response.data.response.groups
            res.forEach((group)=>{
                (group.items.forEach((item)=>{
                   
                    const id = item.venue.id
                    // console.log(item.venue.id)
                    Venue.image = `https://api.foursquare.com/v2/venues/${id}/photos?client_id=ZWEXAQLQLSLQRUKLX0UTVLSXNZ4KLXVSWPIEHIFKBB1RIH2S&client_secret=EWRATLMQE1UHCXBJZ3ERVT3FVW3XUD32QOAL2WI4YC0TQIKY&v=20201001`
                    Venue.name = item.venue.name
                    Venue.address = item.venue.location.address
                    Venue.catgeroy = item.venue.categories[0].name
    
                    venuesCopy.push({...Venue})   
                }))   
                // console.log(venuesCopy)
                })
                this.setState({venues: venuesCopy})
        })
        // axios.get(this.props.img)
        // .then(response => {
        //     console.log(response)

           
        //     console.log('response')
        //     console.log(response)
        //      const res = response.data.response.photos.items
        //      res.forEach((item)=>{
        //     const { prefix, suffix } = item
            
        //     this.setState( ({...copyState}) => {
        //         copyState.Img = `${prefix}200${suffix}`
        //     })

        
        //         })
        // })
        
       
    }
    render() { 
        // console.log('kk')
        // console.log(this.state.venues)
        // const content = this.state.venues.length ? (
        //     <div>
        //         {/* {this.state.venues.map(a => (<h1>{a.name}</h1>))} */}
        //     </div>
        // ) : null;
        
        const cities = [ 'riyadh', 'jeddah','abha', 'hail', 'khobar','madinah','mekkah']
        return ( <div>
            {/* {this.state.venues.length} */}
        


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
                    <Image img={venue.image}/>
                
                    </div>
            
            )
    } )}
                 
                
                

               
        </div> );
    }
    
}
 
export default City;