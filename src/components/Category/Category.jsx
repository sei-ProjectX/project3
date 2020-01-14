import React, { Component } from 'react'
import Task from '../Task/Task'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';


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
        const useStyles = makeStyles(theme => ({
            root: {
              '& > *': {
                margin: theme.spacing(1),
                width: 200,
              },
            },
          }));

       
       
return (
            
    <div className = "Task"> 
    <form  onSubmit={this.submitHandler} 
    className={useStyles.root} 
    noValidate autoComplete="off" > 
  
            <Input
            id="standard-basic" 
            label="Standard"
            type = "text"
            name = "task"
            placeholder="Placeholder" 
            fullWidth
            inputProps={{ 'aria-label': 'description' }} 
            placeholder="Category"
            value = {this.state.task}
            onChange = {this.changeHandler}
            />
             {/* <button onClick={()=> this.props.delete(this.props.id)}>D</button> 
             <button onClick={()=> this.props.add(this.props.id)}>add</button>  */}
            {/* <input type="submit"/> */}
    </form>  
            <Task sendTasks={this.sendTasks}></Task>
            {/* <p> {this.state.tasks} </p> */}
            </div>



    )
}
}
