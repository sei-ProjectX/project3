import React, { Component } from 'react'
//import TaskDisplay from '../TasksDisplay/TasksDisplay'


class AllTasks extends Component {
    state = { 
        tasks:[]
     }
    render() { 
        const tasks = this.props.tasks
        return ( 
            <div>
                {tasks}
            </div>
            
         );
    }
}
 
export default AllTasks;