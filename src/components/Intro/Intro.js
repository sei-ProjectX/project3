import React, { Component } from 'react';
import '../City/City.css';
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

class Intro extends Component {
    state = {  }
    handleChange = (city) => {
    
        //const value = e.target.value
         let copycity = {...this.state.city}
         //console.log(value)
         copycity=city
         this.apifnction(copycity)
         this.setState({
             city:copycity,
             iscityClick:true,
             table:false,
             nav:true,
         })
      }
    render() { 
        return ( 
            <div className="cards">
                    <Card style={{ width: '18rem',  height: '22rem' , margin:'10px' }}>
                    <Card.Img style={{objectFit:'cover',  width: '285px' , height: '240px'}} variant="top" src={require('../../Images/hala-alghanim-f5ZB0LHwi0s-unsplash.jpg')} />
                    <Card.Body>
                      <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Riyadh</Card.Title>
                      <Button onClick={this.handleChange('Riyadh')} variant="primary">Explore</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' , height: '22rem' , margin:'10px' }}>
                    <Card.Img style={{objectFit:'cover'  ,width: '285px' , height: '240px'}} variant="top" src={require('../../Images/shaker-kashgari-XaMuCGQtOpU-unsplash.jpg')} />
                    <Card.Body>
                      <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Jeddah</Card.Title>
                      <Button onClick={this.handleChange('Jeddah')} variant="primary">Explore</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' , height: '22rem' , margin:'10px'}}>
                    <Card.Img style={{objectFit:'cover', width: '285px' , height: '240px'}} variant="top" src={require('../../Images/shoaib-sr-AhB2Yh8dgB0-unsplash.jpg')} />
                    <Card.Body>
                      <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Al-Khobar</Card.Title>
                      <Button onClick={this.handleChange('Khobar')} variant="primary">Explore</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' , height: '22rem' , margin:'10px'}}>
                    <Card.Img style={{objectFit:'cover', width: '285px' , height: '240px'}} variant="top" src={require('../../Images/alswedi07-8aX03fIhv9Y-unsplash.jpg')} />
                    <Card.Body>
                      <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Makkah</Card.Title>
                      <Button onClick={this.handleChange('Makkah')} variant="primary">Explore</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' , height: '22rem' , margin:'10px'}}>
                    <Card.Img style={{objectFit:'cover', width: '285px' , height: '240px'}} variant="top" src={require('../../Images/yasmine-arfaoui-qbvAboqHkBg-unsplash.jpg')} />
                    <Card.Body>
                      <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Madinah</Card.Title>
                      <Button onClick={this.handleChange('Madinah')} variant="primary">Explore</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' , height: '22rem' , margin:'10px'}}>
                    <Card.Img style={{objectFit:'cover', width: '285px' , height: '240px'}} variant="top" src={require('../../Images/yunus-klifa-_Fmibx42BVU-unsplash.jpg')} />
                    <Card.Body>
                      <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Qassim</Card.Title>
                      <Button onClick={this.handleChange('Unaizah')} variant="primary">Explore</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' , height: '22rem' , margin:'10px'}}>
                    <Card.Img style={{objectFit:'cover', width: '285px' , height: '240px'}} variant="top" src={require('../../Images/muthanna-asiri-ORTRkPbykRc-unsplash.jpg')} />
                    <Card.Body>
                      <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Abha</Card.Title>
                      <Button onClick={this.handleChange('Abha')} variant="primary">Explore</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' , height: '22rem' , margin:'10px'}}>
                    <Card.Img style={{objectFit:'cover', width: '285px' , height: '240px'}} variant="top" src={require('../../Images/abdulla-dhahri-lnpopksgaXs-unsplash.jpg')} />
                    <Card.Body>
                      <Card.Title style={{ fontFamily: 'Ibarra Real Nova' }}>Hail</Card.Title>
                      <Button onClick={this.handleChange('Hail')} variant="primary">Explore</Button>
                    </Card.Body>
                  </Card>
                  
</div>
         );
    }
}
 
export default Intro;