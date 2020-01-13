import React, { Component } from 'react'
import Card from 'react-bootstrap/card'
import TasksDisplay from '../TasksDisplay/TasksDisplay'
class Task extends Component {
    state = {
        info: {
            title: "",
            date: '',
            isChecked: false
        },
        tasks: []
    }



    handleChange = e => {
        const key = e.target.name
        const value = e.target.value
        this.setState(({ ...copyState }) => {
            if (key === "isChecked") {
                copyState.info.isChecked = !copyState.info.isChecked
            }
            else {
                copyState.info[key] = value
            }
            return copyState
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.setState( ({...copyState}) => {
            copyState.tasks.push(copyState.info)
            copyState.info = {
                title: "",
                date: '',
                isChecked: false
            }
            return copyState
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

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-example">
                            <input type="checkbox"
                                id="isChecked"
                                name="isChecked"
                                value={this.state.info.isChecked}
                                onChange={this.handleChange}
                            />

                            <input type="text" name="title"
                                id="title" required
                                value={this.state.info.title}
                                onChange={this.handleChange} />

                            <input type="date" name="date"
                                value={this.state.info.date}
                                id="date" required
                                onChange={this.handleChange} />
                        </div>
                        <input type="submit" style={{
                            display: "none"
                        }} />
                    </form>
                   
                    {this.state.tasks.map( (task, index) => {
                    
                        return (
                            <div>
                            <TasksDisplay  info={task} key={index}/>
                            </div>
                        )
                    })} 
                </div> 
            </div>
        );
    }
}

export default Task;