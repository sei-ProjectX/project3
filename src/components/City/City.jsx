import axios from 'axios'
import React, { Component } from 'react'
import './City.css';
import Bookmarks from '../Bookmarks/Bookmarks'
import Venue from '../Venue/Venue'
import { Table } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Intro from '../Intro/Intro'

class City extends Component {
    state = {
        venues: [],
        city: '',
        bookmarks: [],
        iscityClick: false,
        isfav: false,
        table: true,
        nav: false
    }

    handleclick = (vanue) => {

        this.addToBookmark(vanue)
        this.setState(({ ...copyState }) => {
            copyState.isfav = true
            console.log(copyState)
            return copyState
        })

    }


    addToBookmark = (vanue) => {
        let info = {
            venue: vanue,
            city: this.state.city
        }
        let copyBM = [...this.state.bookmarks]
        copyBM.push(info)
        this.setState({
            bookmarks: copyBM
        })
    }
    
    deleteBookmarks = (venue) => {

        let BMCopy = [...this.state.bookmarks];
        let Copy = BMCopy.filter((bookmark) => (bookmark !== venue))
        this.setState({
            bookmarks: Copy,
            bookmarkclicked: false
        })

    }

    handleChange = (city) => {

        //const value = e.target.value
        let copycity = { ...this.state.city }
        //console.log(value)
        copycity = city
        this.apifnction(copycity)
        this.setState({
            city: copycity,
            iscityClick: true,
            table: false,
            nav: true,
        })
    }
    apifnction = (name) => {

        console.log('api')
        console.log(name)
        this.setState({
            venues: []
        })
        const Venue = {
            name: "",
            address: "",
            catgeroy: "",
            image: ""
        }


        axios.get(`https://api.foursquare.com/v2/venues/explore?near=${name},Sa&client_id=DZ3JEIQB3WJ5WWUZDC2SWVBAKCA2CAJ5C0VZMMPKZ2ZZNKKO&client_secret=2YGHPCI5LN1PTRNNLRQ5SZGBZIXUUC3R0QMA50LA1Y4QENYW&v=20200101`)
            .then(response => {
                let venuesCopy = []
                console.log(response)
                const res = response.data.response.groups
                res.forEach((group) => {
                    (group.items.forEach((item) => {
                        console.log(item.venue.id)
                        const id = item.venue.id
                        //Venue.image = `https://api.foursquare.com/v2/venues/${id}/photos?client_id=DZ3JEIQB3WJ5WWUZDC2SWVBAKCA2CAJ5C0VZMMPKZ2ZZNKKO&client_secret=DZ3JEIQB3WJ5WWUZDC2SWVBAKCA2CAJ5C0VZMMPKZ2ZZNKKO&client_secret=2YGHPCI5LN1PTRNNLRQ5SZGBZIXUUC3R0QMA50LA1Y4QENYWG&v=20201001`
                        Venue.name = item.venue.name
                        Venue.address = item.venue.location.address
                        Venue.catgeroy = item.venue.categories[0].name

                        venuesCopy.push({ ...Venue })
                    }))
                    console.log(venuesCopy)
                })
                this.setState({ venues: venuesCopy })
            })


    }
    render() {
        // const isbookmarked = this.state.is ? {display:"none"} : {}
        const cities = ['Riyadh', 'Jeddah', 'Abha', 'Hail', 'Khobar', 'Madinah', 'Mekkah', 'Unaizah']

        return (

            <div className="col">
                <Bookmarks clicked={this.bookmarkclicked} deleteBookmarks={this.deleteBookmarks} city={this.state.city} favs={this.state.bookmarks}></Bookmarks>

                <div className="city">
                    <div className="rbtn">




                        {this.state.table ?
                            // <Intro ></Intro>
                            <div className="cards">
                                <Card style={{ width: '18rem', height: '22rem', margin: '10px' }}>
                                    <Card.Img style={{ objectFit: 'cover', width: '285px', height: '240px' }} variant="top" src={require('../../Images/hala-alghanim-f5ZB0LHwi0s-unsplash.jpg')} />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Riyadh</Card.Title>
                                        <Button onClick={() => this.handleChange('Riyadh')} variant="btn btn-outline-secondary">Explore</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', height: '22rem', margin: '10px' }}>
                                    <Card.Img style={{ objectFit: 'cover', width: '285px', height: '240px' }} variant="top" src={require('../../Images/shaker-kashgari-XaMuCGQtOpU-unsplash.jpg')} />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Jeddah</Card.Title>
                                        <Button onClick={() => this.handleChange('Jeddah')} variant="btn btn-outline-secondary">Explore</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', height: '22rem', margin: '10px' }}>
                                    <Card.Img style={{ objectFit: 'cover', width: '285px', height: '240px' }} variant="top" src={require('../../Images/shoaib-sr-AhB2Yh8dgB0-unsplash.jpg')} />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Al-Khobar</Card.Title>
                                        <Button onClick={() => this.handleChange('Khobar')} variant="btn btn-outline-secondary">Explore</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', height: '22rem', margin: '10px' }}>
                                    <Card.Img style={{ objectFit: 'cover', width: '285px', height: '240px' }} variant="top" src={require('../../Images/alswedi07-8aX03fIhv9Y-unsplash.jpg')} />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Makkah</Card.Title>
                                        <Button onClick={() => this.handleChange('Makkah')} variant="btn btn-outline-secondary">Explore</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', height: '22rem', margin: '10px' }}>
                                    <Card.Img style={{ objectFit: 'cover', width: '285px', height: '240px' }} variant="top" src={require('../../Images/yasmine-arfaoui-qbvAboqHkBg-unsplash.jpg')} />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Madinah</Card.Title>
                                        <Button onClick={() => this.handleChange('Madinah')} variant="btn btn-outline-secondary">Explore</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', height: '22rem', margin: '10px' }}>
                                    <Card.Img style={{ objectFit: 'cover', width: '285px', height: '240px' }} variant="top" src={require('../../Images/yunus-klifa-_Fmibx42BVU-unsplash.jpg')} />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Qassim</Card.Title>
                                        <Button onClick={() => this.handleChange('Unaizah')} variant="btn btn-outline-secondary">Explore</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', height: '22rem', margin: '10px' }}>
                                    <Card.Img style={{ objectFit: 'cover', width: '285px', height: '240px' }} variant="top" src={require('../../Images/muthanna-asiri-ORTRkPbykRc-unsplash.jpg')} />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Abha</Card.Title>
                                        <Button onClick={() => this.handleChange('Abha')} variant="btn btn-outline-secondary">Explore</Button>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem', height: '22rem', margin: '10px' }}>
                                    <Card.Img style={{ objectFit: 'cover', width: '285px', height: '240px' }} variant="top" src={require('../../Images/abdulla-dhahri-lnpopksgaXs-unsplash.jpg')} />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Hail</Card.Title>
                                        <Button onClick={() => this.handleChange('Hail')} variant="btn btn-outline-secondary">Explore</Button>
                                    </Card.Body>
                                </Card>

                            </div>

                            :

                            cities.map((city) => {
                                return (
                                    <div className="buttonbg">
                                        <p onClick={() => this.handleChange(city)}>{city}</p>   </div>
                                )
                            })
                        }
                    </div>
                    <div className="venuedisplay">
                        {/* {  this.state.iscityClick ?  */}
                        {this.state.table ? '' : <h3 id="color"><strong>Places in {this.state.city}<hr /></strong></h3>}
                        {this.state.venues.map((venue) => {
                            return (
                                <div>
                                    <div className="info">
                                        <img src={require('../../Images/bookmark-white.svg')} alt="Home" width="60" height="30" id="image" onClick={() => this.handleclick(venue.name)} /></div>
                                    <Venue venue={venue}></Venue>
                                    <hr /></div>)
                        })}
                        {/* : ''}   */}
                    </div>
                </div>
            </div>
        );
    }
    // componentDidMount() {

    //     axios.get(`https://api.foursquare.com/v2/venues/explore?near=riyadh,Sa&client_id=VGGSYE2LQEBOVDWZA5ZGPGUVO2ZDYZVWOSQQSIDUETSW5BVZ&client_secret=BVWBVFWBKKNQBM251FZAODKF24WAXYFURTSEI3NNDG1JED0G&v=20200101`)
    //     .then(response => {
    //         let venuesCopy=[]
    //         console.log(response)
    //         const res = response.data.response.groups
    //         res.forEach((group)=>{
    //             (group.items.forEach((item)=>{
    //                 console.log(item.venue.id)
    //                 const id = item.venue.id
    //                 Venue.name = item.venue.name
    //                 Venue.address = item.venue.location.address
    //                 Venue.catgeroy = item.venue.categories[0].name

    //                 venuesCopy.push({...Venue})   
    //             }))   
    //             console.log(venuesCopy)
    //             })
    //             this.setState({venues: venuesCopy})
    //     })

    // }
}
export default City;