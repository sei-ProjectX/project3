import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


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

         const useStyles = makeStyles(theme => ({
            button: {
              margin: theme.spacing(1),
            },
          }));
         

        return ( 
           
            <div className="TaskDispaly">
                
                <p><input type="checkbox" 
                id="isChecked"
                name="isChecked"
                value={this.state.isChecked}
                onChange={this.handleChange}
                /> {title}
                
                {date} </p>
                <Button 
                 onClick={()=> this.props.deleteTask(title)} 
                 variant="contained"
                 color="secondary"
                 className={useStyles.button}
                 > 
                 Delete
                 </Button>
            </div>
         );
    }
}
 
export default TasksDispaly;
