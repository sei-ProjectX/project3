import React, { Component } from 'react';
class TasksDispaly extends Component {
    state = {
        isChecked:false
    }

    handleChange = e => {
        // const key = e.target.name
        // const value = e.target.value
        this.setState(({ ...copyState }) => {
            copyState.isChecked = !copyState.isChecked
            console.log(copyState)
            return copyState
        })
    }
  

    render() { 
         
        // console.log(this.props.info)
         const {title, date} = this.props.info

        return ( 
           
            <div className="TaskDispaly">
                
                <p><input type="checkbox" 
                id="isChecked"
                name="isChecked"
                value={this.state.isChecked}
                onChange={this.handleChange}
                />{title}
                
                {date}</p>
                <button onClick={()=> this.props.deleteTask(title)}>delete</button>
            </div>
         );
    }
}
 
export default TasksDispaly;