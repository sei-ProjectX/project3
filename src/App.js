import React from 'react';
import './App.css';
import Navs from './components/Nav/Navs'
import Home from './components/Home/Home'
import {Route} from 'react-router-dom'
import About from './components/About/About'
//import Task from './components/Task/Task'
import Category from './components/Category/Category'
import City from './components/City/City'
import Bookmarks from './components/Bookmarks/Bookmarks'
class App extends React.Component {
  state = {
    
  }

  render() {

    const useStyles = makeStyles(theme => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    }));
    
    console.log(this.state.counter)
    // const display = this.state.counter==1 ? {{style:{display:none}}}
  return (
    <div className="App">
       
      <Route path="/explore" component={Navs}/>
      <Route path="/about" component={Navs}/>
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
