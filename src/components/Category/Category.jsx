import React, { Component } from 'react'
import Task from '../Task/Task'

export default class Category  extends Component {
    state = {
        task:" ",  
        tasks:[]
    }

    changeHandler = (event) => {
        //const key = event.target.name  // maybe I will need it later 
        const value = event.target.value
        this.setState(({...prevState}) => {
        prevState.task = value
        return prevState;
         
     })
    }


    submitHandler = (event) => {
        event.preventDefault()
    }
   
    sendTasks = (tasks) => {
        console.log(tasks)
        this.setState({tasks: tasks})
    }
    render() {
       
        return (
            <div className = "Task"> 
            <form  onSubmit={this.submitHandler}> 
            <input
            type = "text"
            name = "task"
            // label="Multiline Placeholder"
            placeholder="Task here"
            value = {this.state.task}
            onChange = {this.changeHandler}
            />
             {/* <button onClick={()=> this.props.delete(this.props.id)}>D</button> 
             <button onClick={()=> this.props.add(this.props.id)}>add</button>  */}
            <hr />
            {/* <input type="submit"/> */}
            </form>  
            <Task sendTasks={this.sendTasks}></Task>
            {/* <p> {this.state.tasks} </p> */}
            </div>



        )
    }
}