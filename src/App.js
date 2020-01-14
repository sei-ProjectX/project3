import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import {Route} from 'react-router-dom'
import AllTasks from './components/AllTasks/AllTasks';
//import Task from './components/Task/Task'
import Category from './components/Category/Category'

class App extends React.Component {
  state = {
    counter:1,
    show1:true,
    show2:false,
    show3:false,
    show4:false,
    show5:false,
  }

  // handleAddInput = () => {
   
  //   this.setState({
  //     counter: this.state.counter + 1
  //   }) 
  // }
  // increment = () => {
  //   if (this.state.counter < 6) {
  //   this.setState({
  //     counter: this.state.counter + 1
      
  //   }) }
    
  //}
  
  delcom = (id) => {
    console.log(id)
    if (id ==='2') {            
      this.setState({
        show2:false,
        
      })
    }
    else if (id ==='3') {            
      this.setState({
        show3:false,
        
      })
    }
    else if (id ==='4') {            
      this.setState({
        show4:false,
      })
    }
   else if (id ==='5') {            
      this.setState({
        show5:false,
      })
    }
    }
    showcom = (id) => {
      console.log(id)
      if (id ==='1') {            
        this.setState({
          show2:true,   
        })
      }
      else if (id ==='2') {            
        this.setState({
          show3:true,
          
        })
      }
      else if (id ==='3') {            
        this.setState({
          show4:true,
        })
      }
      else if (id ==='4') {            
        this.setState({
          show5:true,
        })
      }
      }
  
  render() {
    console.log(this.state.counter)
    // const display = this.state.counter==1 ? {{style:{display:none}}}
  return (
    <div className="App">
       <div className="col">
      <Route path="/" component={Nav}/>
      {/* <AllTasks></AllTasks> */}
      {this.state.show1?
        <div>
        <Category ></Category>  
        <button id="2" onClick={() => this.showcom('1')}>add</button> 
        </div>
            : ''}
      {this.state.show2?
        <div>
        <Category ></Category> 
        <button onClick={() =>this.delcom('2')}>D</button> 
        <button onClick={()=>this.showcom('2')}>add</button> 
        </div>
            : ''}
            {this.state.show3?
        <div>
        <Category ></Category> 
        <button  onClick={() =>this.delcom('3')}>D</button> 
        <button  onClick={()=>this.showcom('3')}>add</button> 
        </div>
            : ''}
        {this.state.show4?
        <div>
        <Category ></Category> 
        <button onClick={() =>this.delcom('4')}>D</button> 
        <button onClick={()=>this.showcom('4')}>add</button> 
        </div>
            : ''}
        {this.state.show5?
        <div>
        <Category ></Category> 
        <button onClick={() =>this.delcom('5')}>D</button> 
        </div>
            : ''}
      {/* {this.state.show3?<Category id="3" add={this.showcom} delete={this.deletecom}></Category> : null}
      {this.state.show4?<Category id="4" add={this.showcom} delete={this.deletecom}></Category> : null}
      {this.state.show5?<Category id="5" add={this.showcom} delete={this.deletecom}></Category> : null}
      */}
      </div> 
    </div>
  );
}
}

export default App;
