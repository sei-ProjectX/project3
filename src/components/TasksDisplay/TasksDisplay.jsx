import React, { Component } from 'react';

class TasksDispaly extends Component {

    state = { 
        Tasks : [
         {
                title:"",
                date:"",
                complete:false,
              
                // category:""
            }
        ]
     }
    //  TasksDispaly = (info) => {
    //     // let title = this.state.title
    //     // console.log(title)
    //     // let date = this.state.date
    //     // console.log(date)
    //     // let complete = this.state.complete
    //     // console.log(complete)
    //     // let TasksCopy = [...this.state.Tasks]
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
 

    render() { 
        
        return ( 
            <div className="TaskDispaly">
            <h3>Tasks:</h3>
           
           {/* {this.state.Tasks.map((task,index) => 
            { */}
               {/* //return ( */}
                    <div>
                   {this.props.title}
                {/* <h1 key={index}>{task.title}</h1>
                <h1>{task.date}</h1>
                <h1>{task.complete}</h1> */}
                </div>
                {/* ) */}
           {/* })} */}
            </div>
         );
    }
}
 
export default TasksDispaly;