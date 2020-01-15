import React, { Component } from 'react'
//import Card from 'react-bootstrap/card'
import TasksDisplay from '../TasksDisplay/TasksDisplay'
//import AllTasks from '../AllTasks/AllTasks'

class Task extends Component {
    state = {
        info: {
            title: "",
            date: '',
           // isChecked: false
        },
        tasks:[],
        show:false
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
    picktime = () => {
   
    this.setState({
      show: !this.state.show
    }) 
  }
    render() {
        let arr = this.state.tasks
        let sorted = arr.sort((a, b) =>
        a.date.split('-').reverse().join().localeCompare(b.date.split('-').reverse().join()));
        
        return (
            <div className="Task">
       
                {/* <Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card> */}
                <div>

                    <form onSubmit={this.handleSubmit}  >
                    
                        <div className="form-example">
                            {/* <input type="checkbox"
                                id="isChecked"
                                name="isChecked"
                                value={this.state.info.isChecked}
                                onChange={this.handleChange}
                            /> */}

                            <input type="text" name="title"
                                id="title" required
                                value={this.state.info.title}
                                onChange={this.handleChange} />
                            {this.state.show? 
                            <input type="date" name="date"
                                value={this.state.info.date}
                                id="date" required
                                onChange={this.handleChange}/>
                                : 
                                null}
                                <img src={require('../../Images/time-and-date.svg')} alt="date" width="30" height="15" onClick={this.picktime}/>
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