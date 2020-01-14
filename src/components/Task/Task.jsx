import React, { Component } from 'react'

import TasksDisplay from '../TasksDisplay/TasksDisplay'

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';


class Task extends Component {
    state = {
        info: {
            title: "",
            date: '',
           // isChecked: false
        },
        tasks:[]
    }


    deleteTask = (title) => {

        let taskCopy = [...this.state.tasks];
        let tasksCopy = taskCopy.filter((task) => (task.title !== title))
        this.setState({
         tasks:tasksCopy
        })
       }

    handleChange = e => {
        const key = e.target.name
        const value = e.target.value
        this.setState(({ ...copyState }) => {
            // if (key === "isChecked") {
            //     copyState.info.isChecked = !copyState.info.isChecked
            // }
            // else {
            //     copyState.info[key] = value
            // }
            copyState.info[key] = value
            return copyState
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.sendData()
        this.setState( ({...copyState}) => {
            copyState.tasks.push(copyState.info)
            copyState.info = {
                title: "",
                date: '',
                //isChecked: false
            }
            return copyState
        })
    }
    sendData = () => {
        this.props.sendTasks(this.state.tasks);
   }

    

   
    render() {
        let arr = this.state.tasks
        let sorted = arr.sort((a, b) =>
        a.date.split('-').reverse().join().localeCompare(b.date.split('-').reverse().join()));
        
        const useStyles = makeStyles(theme => ({
            root: {
              '& > *': {
                margin: theme.spacing(1),
              },
            },
          }));

        return (
            <div className="Task">
                <div>
    <form 
    onSubmit={this.handleSubmit}
    className={useStyles.root} 
    noValidate autoComplete="off" 
    >
                    
        <div className="form-example">
  
                            <Input type="text" name="title"
                                id="title" required
                                value={this.state.info.title}
                                onChange={this.handleChange} 
                                placeholder="Enter Your Task" 
                                inputProps={{ 'aria-label': 'description' }}
                                />

                            <Input type="title" name="date"
                                value={this.state.info.date}
                                id="date" required
                                onChange={this.handleChange}
                                placeholder="When"
                                inputProps={{ 'aria-label': 'description' }}
                                 />
                        </div>
                        <input type="submit" style={{
                            display: "none"
                        }} />
                      
                    </form>
                   
                    {this.state.tasks.map( (task, index) => {
                    
                        return (
                            <div>
                            <TasksDisplay deleteTask={this.deleteTask}info={task} key={index}/>
                          
                            </div>
                        )
                    })} 
                   
                </div> 
            </div>
        );
    }
}

export default Task;




