import React from 'react';
import './App.css';
import Navs from './components/Nav/Navs'
import Home from './components/Home/Home'
import {Route} from 'react-router-dom'
import About from './components/About/About'
import City from './components/City/City'

class App extends React.Component {
  state = {
    
  }

  render() {

 
    
    console.log(this.state.counter)
   
  return (
    <div className="App">
       
      <Route path="/explore" component={Navs}/>
      <Route path="/about" component={Navs}/>
      <Route path="/citylist" component={Navs}/>
      <Route path="/about" exact component={About}/>
      <br/>
      <Route path="/" exact component={Home}/>
      <div className="col">
      {/* <Bookmarks></Bookmarks> */}
     
       <Route path='/Explore' component={City}/>
       
      </div> 
    </div>
   
  );
}
}

export default App;
