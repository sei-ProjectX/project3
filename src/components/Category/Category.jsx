import React, { Component } from 'react'


export default class Category  extends Component {
    state = {
        task:" ",
        tasks: []

    }

    changeHandler = (event) => {
        const key = event.target.name  // maybe I will need it later 
        const value = event.target.value
        this.setState(({...prevState}) => {
        prevState.task = value
        return prevState;
         
     })
    }

    submitHandler = (event) => {
        event.preventDefault()
         return console.log("sdsadsad");
        
       
    }
    

    

    render() {
       
        return (
            <div className = "Task"> 
            <form  onSubmit={this.submitHandler}> 
            <input
            type = "text"
            name = "task"
            label="Multiline Placeholder"
            placeholder="Enter your Task here"
            value = {this.state.task}
            onChange = {this.changeHandler}
            />

            <hr />
            {/* <input type="submit"/> */}
            </form>
            
            <h4> {this.state.task} </h4>
            <h5> {this.state.tasks}</h5>
            
            </div>



        )
    }
}