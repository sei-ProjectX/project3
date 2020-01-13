import React, { Component } from 'react';
import Task from '../Task/Task'
class TasksDispaly extends Component {
    state = { 
 
        }

    //   TasksDisplay = (info) => {
    //     // let title = this.state.title
    //     // console.log(title)
    //     // let date = this.state.date
    //     // console.log(date)
    //     // let complete = this.state.complete
    //     // console.log(complete)
        //  let TasksCopy = [...this.state.Tasks]
        //  Task : {

        //  }
    //     // TasksCopy.map((tc) => {
    //     //     tc.title=info.title,
    //     //     tc.date=info.title,
    //     //     tc.complete=info.complete }
    //     // )
    //     // //TasksCopy.push(Task)
    //     // //TasksCopy.map((tc) => console.log(tc.title))
    //     // console.log(TasksCopy)
    //     //  this.setState({
    //     //      Tasks:Task
    //     //  })
    //  }


    //  TasksDisplay = (info) => {
    //    const TaskCopy =  this.state.Tasks.map((task) => {
    //          return (task.title= info.title, 
    //             task.date=info.date ,
    //             task.complete=info.complete) })
    //     this.setState({
    //         Tasks:TaskCopy
    //         })
         
    
    //  }
// sendData = (info) => {
//     const formData = this.state.info
//     this.setState({
//         info: formData
//     })
// }
   
    
    render() { 
         
        // console.log(this.props.info)
         const {title:name, date , isChecked } = this.props.info

        return ( 
           
            <div className="TaskDispaly">
                
                <p>{name}</p>
                <input type="checkbox" value={isChecked}/>
                <code>{date}</code>
            </div>
         );
    }
}
 
export default TasksDispaly;