import axios from 'axios'
import React, { Component } from 'react'
import './City.css';
import Bookmarks from '../Bookmarks/Bookmarks'
import Venue from '../Venue/Venue'
class City extends Component {
    state = { 
        venues:[],
        city:'',
        bookmarks:[],
        iscityClick: false
     }

     handleclick =(vanue) => {
        
        this.addToBookmark(vanue)
        this.setState(({ ...copyState }) => {
            copyState.bookmarkclicked = true
            console.log(copyState)
            return copyState
        })

     }
     

addToBookmark = (vanue) => {
let info = {
    venue:vanue,
    city:this.state.city
}
let copyBM = [...this.state.bookmarks]
copyBM.push(info)
this.setState({
    bookmarks:copyBM
})
}
deleteBookmarks = (venue) => {

    let BMCopy = [...this.state.bookmarks];
    let Copy = BMCopy.filter((bookmark) => (bookmark !== venue))
    this.setState({
     bookmarks:Copy,
     bookmarkclicked:false
    })
 
   }

   handleChange = (city) => {
    
   //const value = e.target.value
    let copycity = {...this.state.city}
    //console.log(value)
    copycity=city
    this.apifnction(copycity)
    this.setState({
        city:copycity,
        iscityClick:true
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
    axios.get(`https://api.foursquare.com/v2/venues/explore?near=${name},Sa&client_id=DZ3JEIQB3WJ5WWUZDC2SWVBAKCA2CAJ5C0VZMMPKZ2ZZNKKO&client_secret=2YGHPCI5LN1PTRNNLRQ5SZGBZIXUUC3R0QMA50LA1Y4QENYW&v=20200101`)
    .then(response => {
        let venuesCopy=[]
        console.log(response)
        const res = response.data.response.groups
        res.forEach((group)=>{
            (group.items.forEach((item)=>{
                console.log(item.venue.id)
                const id = item.venue.id
                //Venue.image = `https://api.foursquare.com/v2/venues/${id}/photos?client_id=DZ3JEIQB3WJ5WWUZDC2SWVBAKCA2CAJ5C0VZMMPKZ2ZZNKKO&client_secret=DZ3JEIQB3WJ5WWUZDC2SWVBAKCA2CAJ5C0VZMMPKZ2ZZNKKO&client_secret=2YGHPCI5LN1PTRNNLRQ5SZGBZIXUUC3R0QMA50LA1Y4QENYWG&v=20201001`
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
      
        const cities = ['Riyadh','Jeddah','Abha','Hail','Khobar','Madinah','Mekkah']
        return ( 
            <div className="col">
                <Bookmarks  clicked={this.bookmarkclicked} deleteBookmarks={this.deleteBookmarks} city={this.state.city} favs={this.state.bookmarks}></Bookmarks>
            
        <div className="city">
            <div className="rbtn">
                
                {
                cities.map((city) => {
                    return( 
                            <p onClick={() => this.handleChange(city)}>{city}</p>   
 
                    )
                })
            }
            </div>
          {  this.state.iscityClick ? 
            this.state.venues.map((venue) => { return (
                <div>
                <Venue venue={venue} ></Venue>
            <div className="info">
            <img src={require('../../Images/bookmark-white.svg')} alt="Home" width="40" height="20" onClick={()=>this.handleclick(venue.name)}/></div>
            <hr/></div> )     
            }) : ''}  
        </div> 
        </div>
        );
    }
    componentDidMount() {
       // const baseUrl=(`https://api.foursquare.com/v2/venues/explore?ll=24.774265,%2046.738586&near=riyadh,Sa&client_id=VGGSYE2LQEBOVDWZA5ZGPGUVO2ZDYZVWOSQQSIDUETSW5BVZ&client_secret=BVWBVFWBKKNQBM251FZAODKF24WAXYFURTSEI3NNDG1JED0G&v=20200101`)
        axios.get(`https://api.foursquare.com/v2/venues/explore?near=riyadh,Sa&client_id=VGGSYE2LQEBOVDWZA5ZGPGUVO2ZDYZVWOSQQSIDUETSW5BVZ&client_secret=BVWBVFWBKKNQBM251FZAODKF24WAXYFURTSEI3NNDG1JED0G&v=20200101`)
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